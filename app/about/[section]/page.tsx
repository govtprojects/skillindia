import { notFound } from "next/navigation";
import { Footer, Navbar, PageHero } from "../../components/site";
import { WhatWeDoSection } from "../../components/what-we-do-section";
import { team } from "../../components/data";

export default async function AboutSection({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!['introduction', 'what-we-do', 'our-team'].includes(section)) notFound();
  const page = section === 'introduction' ? { eyebrow: 'About T2T', title: 'Building skills that open doors.', copy: 'Learn about the purpose and people behind T2T Skill Foundation.' } : section === 'what-we-do' ? { eyebrow: 'What we do', title: 'Purpose with practical impact.', copy: 'Our work creates accessible pathways to skills, confidence and livelihood.' } : { eyebrow: 'Our team', title: 'People behind the work.', copy: 'Meet the team committed to making training accessible and relevant.' };
  return <><Navbar /><main className={section === 'what-we-do' ? 'what-we-do-page' : undefined}><div className="subpage-hero"><PageHero {...page} imageSrc="/about/WhatsApp Image 2026-09-03 at 4.55.14 PM (1).jpeg" imageAlt="T2T Skill Foundation training activity" imageOverlay /></div>
    {section === 'introduction' && <section className="section about-intro"><div className="about-intro-label"><p className="eyebrow">Who we are</p><p>Learning that moves people forward.</p></div><div className="about-intro-copy"><h2>A foundation for possibility.</h2><p>T2T Skill Foundation is an approved Training Partner of Skill India. NSDC is a one of its kind,
Public Private Partnership Company in India, under the Ministry of Skill Development &
Entrepreneurship (Govt. of India). It aims to promote skill development by catalyzing creation of
large, quality, for-profit vocational institutions. T2T Skill Foundation was established in 2019 as
a Skill Development Organization by promoters with an experience of running own financial
training schemes in various districts in odisha It has a strong focus on quality training and has
pioneered a unique way to groom students with its smart lab plus training methodology Strength.</p><p>At T2T Skill Foundation, our mission extends beyond providing vocational training—it is
centered on creating sustainable self and Weg employment opportunities for Normal Candidates
and Persons with Disabilities (PwDs). Recognizing that employment is a powerful pathway to
economic independence, dignity, and social inclusion, the organization aims to empower trained
candidates to become Employee, entrepreneurs and service providers within their own
communities.</p><p>We create sustainable self-employment and wage-employment opportunities for candidates, including Persons with Disabilities.</p><div className="about-highlights"><div><b>2019</b><span>Established</span></div><div><b>80%</b><span>Employment transition goal</span></div><div><b>Odisha</b><span>Community rooted</span></div></div></div></section>}
    {section === 'what-we-do' && <WhatWeDoSection />}
    {section === 'our-team' && <section className="team-section"><div className="section"><p className="eyebrow">Our team</p><div className="team-heading"><h2 className="section-heading">People behind the work.</h2><p>Committed to making training accessible, relevant and connected to real opportunity.</p></div><div className="team-grid">{team.map(([name, role], index) => <article key={name}><span>{String(index + 1).padStart(2, '0')}</span><b>{name}</b><small>{role}</small></article>)}</div></div></section>}
  </main><Footer /></>;
}
