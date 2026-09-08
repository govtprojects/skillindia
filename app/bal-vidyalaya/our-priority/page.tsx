import Image from "next/image";
import type { CSSProperties } from "react";
import { Footer, Navbar } from "../../components/site";
import { balPriorities, balPriorityIntroPhotos, balPriorityQuote } from "../../components/bal-priority-data";
import { BalPageHero, balOurPriorityHeroImage } from "../../components/bal-page-hero";
import { BalPriorityVideoGrid } from "../../components/bal-priority-videos";

export default function BalOurPriority() {
  return (
    <>
      <Navbar />
      <main className="bal-page bal-priority-page">
        <BalPageHero
          badge="What We Stand For"
          title="Our Priority"
          imageSrc={balOurPriorityHeroImage}
          imageAlt="Children engaged in joyful learning at Bal Vidyalaya"
          currentPage="Our Priority"
        />

        <section className="section bal-priority-intro">
          <p className="eyebrow">Our Core Focus</p>
          <h2>Shaping Future-Ready Learners</h2>
          <p>
            In today&apos;s fast-changing world, new technologies and innovations are continuously shifting
            the way we learn, live and work. Our priorities are thoughtfully designed to nurture every
            child&apos;s inner potential — making learning a joyful, lifelong adventure.
          </p>
          <div className="bal-priority-intro-photos">
            {balPriorityIntroPhotos.map((photo) => (
              <figure className="bal-priority-intro-photo" key={photo.src}>
                <Image src={photo.src} alt={photo.alt} width={640} height={480} sizes="(max-width: 900px) 33vw, 420px" quality={88} />
              </figure>
            ))}
          </div>
        </section>

        <section className="bal-priority-detail-section">
          {balPriorities.map((priority, index) => (
            <article
              className={`bal-priority-detail ${index % 2 === 1 ? "bal-priority-detail--reverse" : ""}`}
              key={priority.number}
              style={{ "--priority-accent": priority.accent } as CSSProperties}
            >
              <div className="section bal-priority-detail-inner">
                <div className="bal-priority-detail-layout">
                  <figure className="bal-priority-detail-photo">
                    <Image
                      src={priority.image}
                      alt={priority.imageAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      quality={88}
                    />
                    {priority.number === "03" ? (
                      <span className="bal-priority-photo-star" aria-hidden="true">🌟</span>
                    ) : null}
                  </figure>
                  <div className="bal-priority-detail-content">
                    <div className="bal-priority-detail-head">
                      <div className="bal-priority-detail-number">
                        <span>{priority.number}</span>
                        <small>{priority.label}</small>
                      </div>
                      <div className="bal-priority-detail-copy">
                        <h2>{priority.title}</h2>
                        <p>{priority.description}</p>
                      </div>
                    </div>
                    <ul className="bal-priority-points">
                      {priority.points.map((point) => (
                        <li key={point.title}>
                          <span className="bal-priority-point-icon" aria-hidden="true">{point.icon}</span>
                          <div>
                            <b>{point.title}</b>
                            <p>{point.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <BalPriorityVideoGrid videos={priority.videos} priorityTitle={priority.title} />
              </div>
            </article>
          ))}
        </section>

        <section className="section bal-priority-quote">
          <blockquote>
            <p>&ldquo;{balPriorityQuote.text}&rdquo;</p>
            <footer>— {balPriorityQuote.attribution}</footer>
          </blockquote>
        </section>

        <section className="section bal-priority-glance">
          <div className="bal-priority-glance-heading">
            <p className="eyebrow">At A Glance</p>
            <h2>Our Three Priorities</h2>
          </div>
          <div className="bal-priority-glance-grid">
            {balPriorities.map((priority) => (
              <article
                className="bal-priority-glance-card"
                key={priority.number}
                style={{ "--priority-accent": priority.accent } as CSSProperties}
              >
                <figure className="bal-priority-glance-photo">
                  <Image src={priority.image} alt={priority.imageAlt} fill sizes="(max-width: 900px) 100vw, 33vw" quality={85} />
                </figure>
                <span className="bal-priority-glance-icon" aria-hidden="true">{priority.summaryIcon}</span>
                <h3>{priority.title}</h3>
                <p>{priority.summary}</p>
                <span className="bal-priority-glance-tag">{priority.label}</span>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
