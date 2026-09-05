"use client";

import { FormEvent, useState } from "react";

const initialForm = {
  fullName: "",
  phoneNumber: "",
  email: "",
  state: "",
  district: "",
  message: "",
  _honeypot: "",
};

type FormValues = typeof initialForm;

export function ContactForm() {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = (field: keyof FormValues, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle") setStatus("idle");
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) throw new Error(result.message || "We could not send your message. Please try again.");

      setForm(initialForm);
      setStatus("success");
      setFeedback("Thank you. Your message has been sent to the T2T Skill Foundation team.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "We could not send your message. Please try again.");
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="contact-form-heading"><p className="eyebrow">Send a message</p><h2>Tell us how we can help.</h2></div>
    <div className="contact-form-fields">
      <label>Full name<input name="fullName" value={form.fullName} onChange={(event) => updateField("fullName", event.target.value)} autoComplete="name" required /></label>
      <label>Phone number<input name="phoneNumber" value={form.phoneNumber} onChange={(event) => updateField("phoneNumber", event.target.value)} autoComplete="tel" inputMode="tel" required /></label>
      <label>Email address<input name="email" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} autoComplete="email" required /></label>
      <label>State<input name="state" value={form.state} onChange={(event) => updateField("state", event.target.value)} autoComplete="address-level1" required /></label>
      <label>District<input name="district" value={form.district} onChange={(event) => updateField("district", event.target.value)} autoComplete="address-level2" required /></label>
      <label className="contact-form-message">Message<textarea name="message" value={form.message} onChange={(event) => updateField("message", event.target.value)} rows={5} required /></label>
      <label className="contact-form-honeypot" aria-hidden="true">Leave blank<input name="_honeypot" value={form._honeypot} onChange={(event) => updateField("_honeypot", event.target.value)} tabIndex={-1} autoComplete="off" /></label>
    </div>
    {feedback && <p className={`contact-form-feedback contact-form-feedback--${status}`} role="status">{feedback}</p>}
    <button className="contact-form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "SENDING MESSAGE…" : "SEND MESSAGE"}<span aria-hidden="true">→</span></button>
  </form>;
}
