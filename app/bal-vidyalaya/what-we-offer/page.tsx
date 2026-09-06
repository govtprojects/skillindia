import Link from "next/link";
import type { CSSProperties } from "react";
import { Footer, Navbar } from "../../components/site";
import { applicationFormUrl } from "../../components/data";
import { balOfferBadges, balOfferings, balOfferStats } from "../../components/bal-offer-data";

export default function BalWhatWeOffer() {
  return (
    <>
      <Navbar />
      <main className="bal-page bal-offer-page">
        <section className="bal-offer-hero">
          <div className="bal-offer-hero-inner">
            <span className="bal-offer-badge">NCF 2022 Aligned</span>
            <h1>What We Offer</h1>
            <nav className="bal-offer-crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/bal-vidyalaya">Bal Vidyalaya</Link>
              <span aria-hidden="true">›</span>
              <span>What We Offer</span>
            </nav>
          </div>
        </section>

        <section className="section bal-offer-intro">
          <p className="eyebrow">Our Comprehensive Programme</p>
          <h2>A Complete Ecosystem for Joyful Learning</h2>
          <p>
            Bal Vidyalaya brings together an NCF 2022 aligned curriculum, cutting-edge technology, and
            research-backed pedagogy to create a holistic learning experience. Every element of our offering
            is designed to ignite curiosity, build skills, and empower every child to thrive.
          </p>
        </section>

        <section className="section bal-offer-grid-section">
          <div className="bal-offer-grid">
            {balOfferings.map((item) => (
              <article className="bal-offer-card" key={item.title} style={{ "--offer-accent": item.accent } as CSSProperties}>
                <div className="bal-offer-card-bar" />
                <div className="bal-offer-card-icon" aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="bal-offer-card-tag">{item.tag}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="bal-offer-why">
          <div className="section bal-offer-why-inner">
            <div className="bal-offer-why-copy">
              <p className="eyebrow">Why Bal Vidyalaya</p>
              <h2>Built on Research, Delivered with Love</h2>
              <p>
                Every offering under the Bal Vidyalaya programme is crafted through years of research,
                collaboration with IIT Delhi, and a deep understanding of how young children learn best.
                We don&apos;t just provide tools — we build a complete learning ecosystem.
              </p>
              <div className="bal-offer-stats">
                {balOfferStats.map((stat) => (
                  <div key={stat.label}>
                    <b>{stat.value}</b>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bal-offer-badges" aria-label="Programme highlights">
              {balOfferBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section bal-offer-quote">
          <blockquote>
            <p>
              We believe every school deserves access to world-class resources — and every child deserves
              a learning experience that is joyful, purposeful, and truly transformative.
            </p>
            <footer>— Bal Vidyalaya Vision</footer>
          </blockquote>
        </section>

        <section className="bal-offer-cta">
          <div className="section bal-offer-cta-inner">
            <p className="eyebrow">Get Started Today</p>
            <h2>Ready to Transform Your School?</h2>
            <p>
              Join schools already benefiting from the Bal Vidyalaya ecosystem. Connect with us to learn how
              our offering can be tailored for your institution.
            </p>
            <div className="bal-offer-cta-actions">
              <Link href={applicationFormUrl} className="btn" target="_blank" rel="noreferrer">Apply now →</Link>
              <Link href="/contact" className="bal-offer-cta-link">Contact us →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
