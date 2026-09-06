import { whatWeDoIntro } from "./what-we-do-data";
import { WhatWeDoPosterGrid } from "./what-we-do-poster-grid";

const values = [
  ["01", "Mission", "Practical vocational training that supports livelihood, dignity and economic independence."],
  ["02", "Vision", "Inclusive opportunity where skills lead to meaningful work and stronger communities."],
  ["03", "Values", "Quality, inclusion, self-reliance and community-centred progress."],
] as const;

export function WhatWeDoSection() {
  return (
    <>
      <section className="what-we-do-intro section">
        <div className="what-we-do-intro-copy">
          <p className="eyebrow">{whatWeDoIntro.eyebrow}</p>
          <h2 className="section-heading">{whatWeDoIntro.title}</h2>
          <p>{whatWeDoIntro.copy}</p>
        </div>
        <div className="what-we-do-highlights">
          <article>
            <b>5</b>
            <span>programme posters</span>
          </article>
          <article>
            <b>PwD</b>
            <span>inclusive training focus</span>
          </article>
          <article>
            <b>Odisha</b>
            <span>rooted in Ganjam</span>
          </article>
        </div>
      </section>

      <section className="what-we-do-programmes section">
        <div className="what-we-do-programmes-heading">
          <p className="eyebrow">Programmes & initiatives</p>
          <h2 className="section-heading">Where learning meets real opportunity.</h2>
          <p className="what-we-do-programmes-note">
            Click any poster to open a zoom viewer — scan QR codes or read details at full size.
          </p>
        </div>
        <WhatWeDoPosterGrid />
      </section>

      <section className="about-values">
        <div className="section">
          <p className="eyebrow">What guides us</p>
          <h2 className="section-heading">Skills with a lasting impact.</h2>
          <div className="about-values-grid">
            {values.map(([number, title, copy]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
