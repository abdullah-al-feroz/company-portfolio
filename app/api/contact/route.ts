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

    const emailMessage = {
      to: BUSINESS_EMAIL,
      from: FROM_EMAIL,
      replyTo: email,
      subject: `New message from ${firstName} ${lastName}`,
      text: message,
      // cc: "cc@example.com",
      // bcc: "bcc@example.com",
    };

    const [sgResponse] = await sgMail.send(emailMessage);

    return NextResponse.json(
      {
        success: true,
        message: "Email queued",
        sendGridStatus: sgResponse.statusCode,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("SendGrid error:", error.response?.body || error);
    return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
  }
}