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
    const website = text(body.website, 200);

    if (website) return Response.json({ ok: true });
    if (!fullName || !phoneNumber || !email || !state || !district || !message) return Response.json({ message: "Please complete all required fields." }, { status: 400 });
    if (!EMAIL_PATTERN.test(email)) return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
    if (!PHONE_PATTERN.test(phoneNumber)) return Response.json({ message: "Please enter a valid phone number." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL || "purusottam349@gmail.com";
    const sender = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    if (!apiKey) {
      console.error("Contact form email configuration is incomplete: missing RESEND_API_KEY.");
      return Response.json({ message: "The contact form is temporarily unavailable. Please call or email us directly." }, { status: 503 });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `New website message from ${fullName}`,
        text: `Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email}\nState: ${state}\nDistrict: ${district}\n\nMessage:\n${message}`,
      }),
    });

    if (!emailResponse.ok) {
      console.error("Contact email delivery failed:", await emailResponse.text());
      return Response.json({ message: "We could not send your message right now. Please try again shortly." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: "We could not process your message. Please try again." }, { status: 400 });
  }
}
