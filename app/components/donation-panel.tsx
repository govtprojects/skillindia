"use client";

import Image from "next/image";
import { useState } from "react";
import {
  donationAmounts,
  donationCauses,
  donationHeroImage,
  donationQrImage,
  donationUpiId,
  type DonationAmount,
} from "./donation-data";

type DonationStep = "cause" | "amount" | "payment";

export function DonationPanel() {
  const [step, setStep] = useState<DonationStep>("cause");
  const [causeIndex, setCauseIndex] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState<DonationAmount | null>(null);
  const [copied, setCopied] = useState(false);

  const cause = donationCauses[causeIndex];

  async function copyUpi() {
    try {
      await navigator.clipboard.writeText(donationUpiId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function goToCause(index: number) {
    setCauseIndex(index);
    setSelectedAmount(null);
    setStep("cause");
  }

  return (
    <section className="donation-split" id="donate-start" aria-label="Donation">
      <div className="donation-split-visual">
        <Image
          src={donationHeroImage}
          alt="Support T2T Skill Foundation through donation"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 55vw"
          quality={90}
        />
        <div className="donation-split-shade" />
        <div className="donation-split-message">
          <h1>Donate Generously</h1>
          <p>And Help Make Lives Better</p>
        </div>
      </div>

      <div className="donation-split-panel">
        <div className="donation-card">
          {step === "cause" && (
            <div className="donation-step donation-step--cause">
              <h2>{cause.title}</h2>
              <span className="donation-card-rule" aria-hidden="true" />
              <p className="donation-card-lead">{cause.headline}</p>
              <p className="donation-card-copy">{cause.copy}</p>
              <figure className="donation-card-photo">
                <Image
                  src={cause.image}
                  alt={cause.imageAlt}
                  width={640}
                  height={400}
                  sizes="(max-width: 900px) 100vw, 420px"
                  quality={88}
                />
              </figure>
              <button type="button" className="donation-primary-btn" onClick={() => setStep("amount")}>
                Donate Now <span aria-hidden="true">→</span>
              </button>
              <div className="donation-dots" role="tablist" aria-label="Choose a cause">
                {donationCauses.map((item, index) => (
                  <button
                    type="button"
                    key={item.id}
                    className={index === causeIndex ? "is-active" : ""}
                    onClick={() => goToCause(index)}
                    aria-label={item.title}
                    aria-selected={index === causeIndex}
                    role="tab"
                  />
                ))}
              </div>
              <p className="donation-secure">
                <span aria-hidden="true">🔒</span> Secure donation via UPI
              </p>
            </div>
          )}

          {step === "amount" && (
            <div className="donation-step donation-step--amount">
              <button type="button" className="donation-back" onClick={() => setStep("cause")}>
                ← Back
              </button>
              <h2>Select amount</h2>
              <span className="donation-card-rule" aria-hidden="true" />
              <p className="donation-card-lead">You are supporting</p>
              <p className="donation-card-copy"><strong>{cause.title}</strong></p>
              <div className="donation-amounts" role="group" aria-label="Donation amount">
                {donationAmounts.map((amount) => (
                  <button
                    type="button"
                    key={amount}
                    className={`donation-amount-btn${selectedAmount === amount ? " is-selected" : ""}`}
                    onClick={() => setSelectedAmount(amount)}
                    aria-pressed={selectedAmount === amount}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="donation-primary-btn"
                disabled={!selectedAmount}
                onClick={() => setStep("payment")}
              >
                Continue to payment <span aria-hidden="true">→</span>
              </button>
            </div>
          )}

          {step === "payment" && selectedAmount && (
            <div className="donation-step donation-step--payment" aria-live="polite">
              <button
                type="button"
                className="donation-back"
                onClick={() => setStep("amount")}
              >
                ← Back
              </button>
              <h2>Complete your donation</h2>
              <span className="donation-card-rule" aria-hidden="true" />
              <div className="donation-payment-summary">
                <span>Your contribution</span>
                <b>₹{selectedAmount}</b>
                <small>{cause.title}</small>
              </div>
              <div className="donation-payment-stack">
                <div className="donation-qr">
                  <Image
                    src={donationQrImage}
                    alt="UPI QR code for T2T Skill Foundation donation"
                    width={220}
                    height={220}
                    quality={100}
                  />
                  <span>Scan to pay via UPI</span>
                </div>
                <div className="donation-upi">
                  <p className="eyebrow">Or pay with UPI ID</p>
                  <div className="donation-upi-row">
                    <code>{donationUpiId}</code>
                    <button type="button" className="btn small" onClick={copyUpi}>
                      {copied ? "Copied" : "Copy UPI"}
                    </button>
                  </div>
                  <ul className="donation-upi-steps">
                    <li>Open any UPI app on your phone.</li>
                    <li>Scan the QR code or enter the UPI ID above.</li>
                    <li>Pay ₹{selectedAmount} and email us your transaction reference.</li>
                  </ul>
                  <a className="donation-contact-link" href="mailto:t2tskills@gmail.com">
                    Share payment confirmation →
                  </a>
                </div>
              </div>
              <p className="donation-secure">
                <span aria-hidden="true">🔒</span> Secure donation via UPI
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
