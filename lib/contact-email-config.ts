function readEnv(name: string): string {
  const value = process.env[name];
  if (!value) return "";
  return value.trim().replace(/^["']|["']$/g, "");
}

export type ContactEmailConfig =
  | { ok: true; apiKey: string; sender: string; recipient: string }
  | { ok: false; reason: "missing_api_key" | "missing_sender" | "missing_recipient" };

export function getContactEmailConfig(): ContactEmailConfig {
  const apiKey = readEnv("RESEND_API_KEY");
  const sender = readEnv("CONTACT_FROM_EMAIL") || "onboarding@resend.dev";
  const recipient = readEnv("CONTACT_EMAIL") || "t2tskills@gmail.com";

  if (!apiKey) return { ok: false, reason: "missing_api_key" };
  if (!sender) return { ok: false, reason: "missing_sender" };
  if (!recipient) return { ok: false, reason: "missing_recipient" };

  return { ok: true, apiKey, sender, recipient };
}
