import { notFound } from "next/navigation";
import { Breadcrumb, Footer, Navbar, PageHero } from "../../components/site";
import { SchemeGrid } from "../../components/scheme-grid";
import { TrainingCentreMap } from "../../components/training-centre-map";

const sections = ["schemes", "training-centers"] as const;

const trainingCentres = [
  {
    number: "01",
    name: "Sheragada",
    type: "Skill Development Centre",
    lines: ["Badadnada Street, Sheragada,", "Ganjam, Odisha – 761106"],
    mapHref: "https://www.google.com/maps/search/?api=1&query=Block%20Office%2C%20Sheragada%2C%20Odisha%20761106",
  },
  {
    number: "02",
    name: "Rayagada",
    type: "District Skill Centre",
    lines: ["Near Biju Pattnaik Indoor Stadium", "At: Ambaguda, Rayagada, Odisha – 765001"],
  },
  {
    number: "03",
    name: "Kabisuriyanagar",
    type: "Skill Development Centre",
    lines: ["Near Block Development Office", "At: Kabisuriyanagar, Ganjam, Odisha – 761104"],
  },
];

export default async function StudentCornerSection({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!sections.includes(section as (typeof sections)[number])) notFound();

  if (section === "schemes") {
    return (
      <>
        <Navbar />
        <main>
          <Breadcrumb current="Schemes" />
          <div className="subpage-hero">
            <PageHero
              eyebrow="Schemes"
              title="Learning backed by access."
              copy="Training and certification initiatives delivered by T2T Skill Foundation."
              imageSrc="/about/c8o5LNScp3jcDomLIMpylFlo5R7suGPZqTv6a-DDwJBWjevdCQvjKGefc9CqirLH5xiK0nH7KbobZ-BJAdPx4EeB6k2NHBjJVsdL01mmbS68e-pQ0UOT1YbqvpYIm3YLL0r0nw_oE5HieX1Cl5m_WDz5ZEGtoc8u8_-Rcf4fgRlFfILpZhRSOH7U3C9p1tlQ.jpeg"
              imageAlt="Learners taking part in a skills programme"
              imageOverlay
            />
          </div>
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

  return (
    <>
      <Navbar />
      <main className="training-centres">
        <Breadcrumb current="Training Centers" />
        <div className="subpage-hero">
          <PageHero
            eyebrow="Visit for training"
            title="Learning, close to home."
            copy="Find T2T Skill Foundation's training centres in Sheragada, Rayagada and Kabisuriyanagar."
            imageSrc="/Google Maps Enhances User Experience with New Features and Partnerships.jpeg"
            imageAlt="Google Maps location view"
            imageOverlay
          />
        </div>
        <section className="section training-centre-intro">
          <div className="training-centre-intro-copy">
            <p className="eyebrow">Our training centres</p>
            <h2 className="section-heading">A place to learn, grow and move forward.</h2>
            <p>
              Visit a T2T Skill Foundation centre to connect with our team and explore local
              skill-development opportunities.
            </p>
          </div>
          <div className="training-centre-grid">
            {trainingCentres.map((centre) => (
              <article className="training-centre-card" key={centre.number}>
                <div className="training-centre-card-number">{centre.number}</div>
                <div>
                  <span>Training centre</span>
                  <h3>{centre.name}</h3>
                  <p>
                    <b>{centre.type}</b>
                    <br />
                    {centre.lines[0]}
                    <br />
                    {centre.lines[1]}
                  </p>
                  {"mapHref" in centre && centre.mapHref ? (
                    <a href={centre.mapHref} target="_blank" rel="noreferrer">
                      Open in Google Maps <i aria-hidden="true">↗</i>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
        <TrainingCentreMap />
      </main>
      <Footer />
    </>
  );
}
