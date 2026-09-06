import Image from "next/image";
import { achievementMilestones, achievementStats } from "./achievement-data";

export function AchievementsSection() {
  return (
    <section className="achievements-page" id="achievements">
      <div className="section achievements-intro">
        <p className="eyebrow">Our milestones</p>
        <h2>Inclusive training. Recognised outcomes.</h2>
        <p>
          A record of placement excellence, government recognition, and meaningful career pathways for
          Persons with Disabilities and rural youth across Odisha — drawn from Skill Development Centre
          and Dakshyata Vikas Kendra, Sheragada.
        </p>
        <div className="achievements-stats">
          {achievementStats.map((stat) => (
            <article key={stat.label}>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="section achievements-list">
        {achievementMilestones.map((item, index) => (
          <article className="achievement-card" key={item.id}>
            <div className="achievement-card-copy">
              <div className="achievement-card-meta">
                <span>{item.year}</span>
                <b>Milestone {String(index + 1).padStart(2, "0")}</b>
              </div>
              <h3>{item.title}</h3>
              <p className="achievement-card-summary">{item.summary}</p>
              <p className="achievement-card-body">{item.body}</p>
              <ul className="achievement-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight.label}>
                    <span>{highlight.label}</span>
                    <b>{highlight.value}</b>
                  </li>
                ))}
              </ul>
            </div>
            <div className="achievement-card-media">
              <figure className="achievement-image">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={1400}
                  height={980}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  quality={90}
                  className="achievement-photo"
                />
              </figure>
              {item.video && (
                <figure className="achievement-video">
                  <video controls preload="metadata" playsInline>
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <figcaption>Event highlights</figcaption>
                </figure>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
