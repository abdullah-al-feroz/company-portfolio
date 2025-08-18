import { type NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY?.trim();
const FROM_EMAIL = process.env.FROM_EMAIL?.trim();
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL?.trim();

sgMail.setApiKey(SENDGRID_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    if (!SENDGRID_API_KEY || !FROM_EMAIL || !BUSINESS_EMAIL) {
      console.error("Environment variables missing");
      return NextResponse.json(
        { error: "Email environment variables are not set" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const businessEmail = {
      to: BUSINESS_EMAIL,
      from: FROM_EMAIL,
      replyTo: email,
      subject: `New message from ${firstName} ${lastName}`,
      text: message,
      // cc: "cc@example.com",
      // bcc: "bcc@example.com",
    };

    // 2. Thank-you email to client
    const thankYouEmail = {
      to: email,
      from: FROM_EMAIL,
      subject: `Thank you for contacting us, ${firstName + " "+ lastName}!`,
      text: `Hi ${firstName},\n\nThank you for your message. We'll get back to you soon.\n\nBest regards,\nThe Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Hi ${firstName + " "+ lastName},</h2>
          <p>Thank you for contacting us! We've received your message and will get back to you within 24-48 hours.</p>
          <p>Here's what you sent us:</p>
          <blockquote style="border-left: 4px solid #ddd; padding-left: 1rem; margin-left: 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <p>Best regards,<br>The Team</p>
        </div>
      `
    };

    const [sgResponse] = await sgMail.send([businessEmail, thankYouEmail]);

    return NextResponse.json(
      {
        success: true,
        message: "Emails sent successfully!",
        sendGridStatus: sgResponse.statusCode,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("SendGrid error:", error.response?.body || error);
    return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
  }
}