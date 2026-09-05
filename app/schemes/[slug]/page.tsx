import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, Footer, Navbar } from "../../components/site";
import { schemes } from "../../components/data";
import { schemePhotos } from "../../components/scheme-media";
import { SchemeGalleryCarousel } from "../../components/scheme-gallery-carousel";

export function generateStaticParams() { return Object.keys(schemes).map(slug => ({ slug })); }

export default async function SchemeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = schemes[slug as keyof typeof schemes];
  const photos = schemePhotos[slug];
  if (!item || !photos) notFound();
  return <><Navbar /><main><Breadcrumb current={item.name} /><section className="detail-hero detail-hero--photo"><div><p className="eyebrow">Scheme details · {item.year}</p><h1>{item.name}</h1><p>{item.summary}</p><div className="detail-stats"><b>{item.trainees}<small>Trainees</small></b><b>{item.agency}<small>Sponsoring agency</small></b></div></div><div className="detail-hero-photo"><Image src={photos[0].src} alt={photos[0].alt} fill priority quality={90} style={{ objectPosition: photos[0].objectPosition }} sizes="(max-width: 900px) 100vw, 40vw" /></div></section><section className="section reading detail-copy"><p>{item.detail}</p><div className="scheme-facts" aria-label={`${item.name} project information`}><div><span>Financial year</span><b>{item.year}</b></div><div><span>Projects delivered</span><b>{item.projects}</b></div><div><span>Coverage</span><b>{item.coverage}</b></div><div><span>Sponsoring agency</span><b>{item.agency}</b></div></div><div className="scheme-highlights"><p className="eyebrow">Programme focus</p><h2>What this scheme delivers.</h2><ul>{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div><Link className="btn" href="/contact">Contact T2T →</Link></section><section className="section scheme-gallery-section"><p className="eyebrow">Programme in action</p><h2 className="section-heading">Learning, seen in practice.</h2><SchemeGalleryCarousel photos={photos.slice(1)} /></section></main><Footer /></>;
}
