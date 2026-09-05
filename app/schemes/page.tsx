import Image from "next/image";
import Link from "next/link";
import { Breadcrumb, Footer, Navbar, PageHero } from "../components/site";
import { schemeList } from "../components/data";
import { schemePhotos } from "../components/scheme-media";

export default function Schemes() {
  return <><Navbar /><main><Breadcrumb current="Schemes" /><PageHero eyebrow="Schemes" title="Learning backed by access." copy="Training and certification initiatives delivered by T2T Skill Foundation." imageSrc="/about/c8o5LNScp3jcDomLIMpylFlo5R7suGPZqTv6a-DDwJBWjevdCQvjKGefc9CqirLH5xiK0nH7KbobZ-BJAdPx4EeB6k2NHBjJVsdL01mmbS68e-pQ0UOT1YbqvpYIm3YLL0r0nw_oE5HieX1Cl5m_WDz5ZEGtoc8u8_-Rcf4fgRlFfILpZhRSOH7U3C9p1tlQ.jpeg" imageAlt="Learners taking part in a skills programme" imageOverlay /><section className="section schemes-section"><div className="schemes-heading"><p className="eyebrow">Programmes in action</p><h2 className="section-heading">Access, training and opportunity.</h2></div><div className="scheme-grid scheme-grid--visual">{schemeList.map(([slug, item]) => { const image = schemePhotos[slug][0]; return <Link href={`/schemes/${slug}`} className="scheme scheme-card" key={slug}><div className="scheme-image"><Image src={image.src} alt={image.alt} fill quality={90} style={{ objectPosition: image.objectPosition }} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 50vw" /></div><div className="scheme-card-body"><div className="scheme-meta"><span>{item.year}</span><b>{item.trainees} trainees</b></div><h2>{item.name}</h2><p>{item.summary}</p><footer>View programme details <span aria-hidden="true">→</span></footer></div></Link>; })}</div></section></main><Footer /></>;
}
