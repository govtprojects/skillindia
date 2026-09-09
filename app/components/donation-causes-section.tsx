import Image from "next/image";
import Link from "next/link";
import { donationCauses } from "./donation-data";

export function DonationCausesSection() {
  return (
    <section className="donation-causes-section" aria-labelledby="donation-causes-title">
      <div className="section donation-causes-intro">
        <p className="eyebrow">Donate for a cause</p>
        <h2 id="donation-causes-title">Help give the underserved a better future</h2>
        <p>
          Every contribution to T2T Skill Foundation supports learning, inclusion and livelihood
          programmes that create lasting change across Odisha. Choose the cause closest to your heart
          and make a difference today.
        </p>
      </div>

      <div className="donation-causes-list">
        {donationCauses.map((cause, index) => (
          <article
            className={`donation-cause-row${index % 2 === 1 ? " donation-cause-row--reverse" : ""}`}
            key={cause.id}
          >
            <figure className="donation-cause-row-photo">
              <Image
                src={cause.image}
                alt={cause.imageAlt}
                width={720}
                height={480}
                sizes="(max-width: 900px) 100vw, 50vw"
                quality={88}
              />
            </figure>
            <div className="donation-cause-row-copy">
              <span className="donation-cause-program">{cause.program}</span>
              <h3>{cause.headline}</h3>
              <p>{cause.copy}</p>
              <Link className="donation-cause-link" href="#donate-start">
                Donate now <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="section donation-causes-footer">
        <p>
          T2T Skill Foundation is an approved Training Partner of Skill India. NSDC is a not-for-profit
          public-private partnership organisation under the Ministry of Skill Development &amp;
          Entrepreneurship (Govt. of India), working to catalyse quality vocational training across
          the country.
        </p>
        <Link className="btn" href="#donate-start">Donate now →</Link>
      </div>
    </section>
  );
}
