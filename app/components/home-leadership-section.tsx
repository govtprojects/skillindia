import Image from "next/image";
import Link from "next/link";
import { homeLeadership } from "./home-leadership-data";

export function HomeLeadershipSection() {
  return (
    <section className="section home-leadership" aria-labelledby="home-leadership-title">
      <div className="home-leadership-heading">
        <p className="eyebrow">Our leadership</p>
        <h2 id="home-leadership-title" className="section-heading">
          People who guide our work.
        </h2>
        <p>
          Meet the leaders committed to inclusive skill development and meaningful opportunity
          across Odisha.
        </p>
      </div>
      <div className="home-leadership-grid">
        {homeLeadership.map((member) => (
          <article className="home-leadership-card" key={member.name}>
            <div className="home-leadership-card-inner">
              <figure className="home-leadership-photo">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 600px) 100vw, 420px"
                  quality={90}
                />
              </figure>
              <div className="home-leadership-copy">
                <span>{member.serial}</span>
                <h3>{member.name}</h3>
                <p className="home-leadership-role">{member.role}</p>
                <a className="home-leadership-phone" href={`tel:+91${member.phone}`}>
                  +91 {member.phone}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Link className="link home-leadership-link" href="/about/our-team">
        Meet the full team →
      </Link>
    </section>
  );
}
