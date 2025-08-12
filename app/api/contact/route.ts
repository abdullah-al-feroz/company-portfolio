import { type NextRequest, NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { firstName, lastName, email, phone, company, projectType, message } = body

        // Basic validation
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
        }

        const msg = {
            to: "hello@zenbyte.com", // Your business email
            from: "noreply@zenbyte.com", // Must be verified in SendGrid
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #10b981; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="background: white; padding: 15px; border-left: 4px solid #10b981; margin: 10px 0;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
        }

        await sgMail.send(msg)

        return NextResponse.json(
            {
                success: true,
                message: "Thank you for your message! We'll get back to you within 24 hours.",
            },
            { status: 200 },
        )
    } catch (error) {
        console.error("Contact form error:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}