import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form data" },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = result.data;

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const to = process.env.CONTACT_TO ?? user;

    if (!user || !pass) {
      console.error("Email is not configured. Missing GMAIL_USER / GMAIL_APP_PASSWORD.");
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured yet.",
        },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to,
      replyTo: email,
      subject: `New message: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0f172a">
          <h2 style="margin:0 0 12px">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="margin-top:16px"><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 },
    );
  }
}
