import { notFound } from "next/navigation";
import { Footer, Navbar, PageHero } from "../../components/site";
import { team } from "../../components/data";

const values = [["01", "Mission", "Practical vocational training that supports livelihood, dignity and economic independence."], ["02", "Vision", "Inclusive opportunity where skills lead to meaningful work and stronger communities."], ["03", "Values", "Quality, inclusion, self-reliance and community-centred progress."]] as const;

export default async function AboutSection({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!['introduction', 'what-we-do', 'our-team'].includes(section)) notFound();
  const page = section === 'introduction' ? { eyebrow: 'About T2T', title: 'Building skills that open doors.', copy: 'Learn about the purpose and people behind T2T Skill Foundation.' } : section === 'what-we-do' ? { eyebrow: 'What we do', title: 'Purpose with practical impact.', copy: 'Our work creates accessible pathways to skills, confidence and livelihood.' } : { eyebrow: 'Our team', title: 'People behind the work.', copy: 'Meet the team committed to making training accessible and relevant.' };
  return <><Navbar /><main><div className="subpage-hero"><PageHero {...page} imageSrc="/about/WhatsApp Image 2026-09-03 at 4.55.14 PM (1).jpeg" imageAlt="T2T Skill Foundation training activity" imageOverlay /></div>
    {section === 'introduction' && <section className="section about-intro"><div className="about-intro-label"><p className="eyebrow">Who we are</p><p>Learning that moves people forward.</p></div><div className="about-intro-copy"><h2>A foundation for possibility.</h2><p>Established in 2019, T2T Skill Foundation delivers quality skill-development programmes across Odisha.</p><p>We create sustainable self-employment and wage-employment opportunities for candidates, including Persons with Disabilities.</p><div className="about-highlights"><div><b>2019</b><span>Established</span></div><div><b>80%</b><span>Employment transition goal</span></div><div><b>Odisha</b><span>Community rooted</span></div></div></div></section>}
    {section === 'what-we-do' && <section className="about-values"><div className="section"><p className="eyebrow">What guides us</p><h2 className="section-heading">Skills with a lasting impact.</h2><div className="about-values-grid">{values.map(([number, title, copy]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>}
    {section === 'our-team' && <section className="team-section"><div className="section"><p className="eyebrow">Our team</p><div className="team-heading"><h2 className="section-heading">People behind the work.</h2><p>Committed to making training accessible, relevant and connected to real opportunity.</p></div><div className="team-grid">{team.map(([name, role], index) => <article key={name}><span>{String(index + 1).padStart(2, '0')}</span><b>{name}</b><small>{role}</small></article>)}</div></div></section>}
  </main><Footer /></>;
}
