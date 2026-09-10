import type { CSSProperties } from "react";
import Link from "next/link";
import { Footer, Navbar } from "../../components/site";
import { BalPageHero } from "../../components/bal-page-hero";
import {
  balContactHighlights,
  balContactLocation,
  balContactMembers,
} from "../../components/bal-contact-data";

const balContactHeroImage =
  "/How%20To%20Create%20An%20Expert%20Like%20Design%20Portfolio%20With%20These%2020%20Pro%20Tips%20-%20Graphic%20Design%20Junction.jpeg";

function memberInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function BalContactPage() {
  return (
    <>
      <Navbar />
      <main className="bal-page bal-contact-page">
        <BalPageHero
          badge="We&apos;d Love to Hear From You"
          title="Contact Us"
          imageSrc={balContactHeroImage}
          imageAlt="Bal Vidyalaya school community"
          currentPage="Contact"
        />

        <section className="section bal-contact-intro">
          <p className="eyebrow">Get in touch</p>
          <h2>We&apos;re here to help you.</h2>
          <p>
            Whether you have questions about admissions, programmes or visits, our Bal Vidyalaya team
            is ready to guide you. Reach out to the right member below or visit us at our Sheragada campus.
          </p>
        </section>

        <section className="section bal-contact-highlights" aria-label="Contact highlights">
          <div className="bal-contact-highlight-grid">
            {balContactHighlights.map((item) => (
              <article className="bal-contact-highlight-card" key={item.label}>
                <span className="bal-contact-highlight-icon" aria-hidden="true">{item.icon}</span>
                <span className="bal-contact-highlight-label">{item.label}</span>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <p>{item.value}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section bal-contact-members">
          <div className="bal-contact-members-heading">
            <p className="eyebrow">Contact members</p>
            <h2>Meet our school leadership.</h2>
            <p>Speak directly with the people who lead learning, care and day-to-day support at Bal Vidyalaya.</p>
          </div>
          <div className="bal-contact-member-grid">
            {balContactMembers.map((member, index) => (
              <article
                className="bal-contact-member-card"
                key={member.name}
                style={{ "--member-accent": member.accent } as CSSProperties}
              >
                <div className="bal-contact-member-top">
                  <div className="bal-contact-member-avatar" aria-hidden="true">
                    {memberInitials(member.name)}
                  </div>
                  <span className="bal-contact-member-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="bal-contact-member-role">{member.role}</p>
                <a className="bal-contact-member-phone" href={`tel:+91${member.phone}`}>
                  <span aria-hidden="true">📞</span>
                  +91 {member.phone}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section bal-contact-location">
          <div className="bal-contact-location-copy">
            <p className="eyebrow">Find us</p>
            <h2>Our location &amp; details</h2>
            <p>
              Visit Bal Vidyalaya Sheragada on Padhi Street. We welcome families, partners and
              community members to connect with us in person.
            </p>
            <div className="bal-contact-location-details">
              <article>
                <span>Campus</span>
                <b>{balContactLocation.name}</b>
              </article>
              <article>
                <span>Address</span>
                <p>{balContactLocation.address}</p>
              </article>
            </div>
            <div className="bal-contact-location-actions">
              <a
                className="btn"
                href={balContactLocation.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps →
              </a>
              <Link className="bal-contact-location-link" href="/bal-vidyalaya">
                Back to Bal Vidyalaya →
              </Link>
            </div>
          </div>
          <div className="bal-contact-map-wrap">
            <iframe
              title="Bal Vidyalaya Sheragada location"
              src={balContactLocation.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
