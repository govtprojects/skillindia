import { Breadcrumb, Footer, Navbar, PageHero } from "../components/site";
import { team } from "../components/data";

const coverImage = "/BAL VIDYALAYA/activity/WhatsApp Image 2026-09-03 at 4.55.14 PM (2).jpeg";

const values = [
  ["01", "Mission", "Practical vocational training that supports livelihood, dignity and economic independence."],
  ["02", "Vision", "Inclusive opportunity where skills lead to meaningful work and stronger communities."],
  ["03", "Values", "Quality, inclusion, self-reliance and community-centred progress."],
] as const;

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <Breadcrumb current="About Us" />
        <PageHero eyebrow="About T2T" title="A foundation for possibility." copy="Quality skill development designed to lead to livelihood, inclusion and stronger communities." imageSrc={coverImage} imageAlt="T2T Skill Foundation training activity" imageBelow />
        <section className="section about-intro">
          <div className="about-intro-label"><p className="eyebrow">Who we are</p><p>Building skills that open doors.</p></div>
          <div className="about-intro-copy">
            <h2>Learning that moves people forward.</h2>
            <p>T2T Skill Foundation is an approved Training Partner of Skill India. Established in 2019, we bring experience in delivering financial training schemes across districts in Odisha.</p>
            <p>We go beyond vocational training to create sustainable self-employment and wage-employment opportunities for candidates, including Persons with Disabilities (PwDs).</p>
            <div className="about-highlights" aria-label="T2T Skill Foundation highlights"><div><b>2019</b><span>Established</span></div><div><b>80%</b><span>Employment transition goal</span></div><div><b>Odisha</b><span>Community rooted</span></div></div>
          </div>
        </section>
        <section className="about-values"><div className="section"><p className="eyebrow">What guides us</p><h2 className="section-heading">Purpose with practical impact.</h2><div className="about-values-grid">{values.map(([number,title,copy])=><article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
        <section className="team-section"><div className="section"><p className="eyebrow">Our team</p><div className="team-heading"><h2 className="section-heading">People behind the work.</h2><p>Committed to making training accessible, relevant and connected to real opportunity.</p></div><div className="team-grid">{team.map(([name,role],index)=><article key={name}><span>{String(index+1).padStart(2,"0")}</span><b>{name}</b><small>{role}</small></article>)}</div></div></section>
      </main>
      <Footer />
    </>
  );
}
