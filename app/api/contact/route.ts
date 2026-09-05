import { getContactEmailConfig } from "@/lib/contact-email-config";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+()\-\s]{7,20}$/;

function text(value: unknown, maximum: number) {
  return typeof value === "string" ? value.trim().slice(0, maximum) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = text(body.fullName, 100);
    const phoneNumber = text(body.phoneNumber, 20);
    const email = text(body.email, 254);
    const state = text(body.state, 100);
    const district = text(body.district, 100);
    const message = text(body.message, 3_000);
    const honeypot = text(body._honeypot ?? body.website, 200);

    if (honeypot) return Response.json({ ok: true });
    if (!fullName || !phoneNumber || !email || !state || !district || !message) {
      return Response.json({ message: "Please complete all required fields." }, { status: 400 });
    }
    if (!EMAIL_PATTERN.test(email)) {
      return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
    }
    if (!PHONE_PATTERN.test(phoneNumber)) {
      return Response.json({ message: "Please enter a valid phone number." }, { status: 400 });
    }

    const config = getContactEmailConfig();
    if (!config.ok) {
      console.error("Contact form email configuration is incomplete:", config.reason);
      return Response.json(
        { message: "The contact form is temporarily unavailable. Please call or email us directly." },
        { status: 503 },
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${config.apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: config.sender,
        to: [config.recipient],
        reply_to: email,
        subject: `New website message from ${fullName}`,
        text: [
          `Name: ${fullName}`,
          `Phone: ${phoneNumber}`,
          `Email: ${email}`,
          `State: ${state}`,
          `District: ${district}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!emailResponse.ok) {
      const errorBody = await emailResponse.text();
      console.error("Contact email delivery failed:", emailResponse.status, errorBody);
      return Response.json(
        { message: "We could not send your message right now. Please try again shortly." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form request failed:", error);
    return Response.json({ message: "We could not process your message. Please try again." }, { status: 400 });
  }
}
