import { Breadcrumb, Footer, Navbar, PageHero } from "../components/site";
import { SchemeGrid } from "../components/scheme-grid";

export default function Schemes() {
  return (
    <>
      <Navbar />
      <main>
        <Breadcrumb current="Schemes" />
        <PageHero
          eyebrow="Schemes"
          title="Learning backed by access."
          copy="Training and certification initiatives delivered by T2T Skill Foundation."
          imageSrc="/about/c8o5LNScp3jcDomLIMpylFlo5R7suGPZqTv6a-DDwJBWjevdCQvjKGefc9CqirLH5xiK0nH7KbobZ-BJAdPx4EeB6k2NHBjJVsdL01mmbS68e-pQ0UOT1YbqvpYIm3YLL0r0nw_oE5HieX1Cl5m_WDz5ZEGtoc8u8_-Rcf4fgRlFfILpZhRSOH7U3C9p1tlQ.jpeg"
          imageAlt="Learners taking part in a skills programme"
          imageOverlay
        />
        <section className="section schemes-section">
          <div className="schemes-heading">
            <p className="eyebrow">Programmes in action</p>
            <h2 className="section-heading">Access, training and opportunity.</h2>
          </div>
          <SchemeGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
