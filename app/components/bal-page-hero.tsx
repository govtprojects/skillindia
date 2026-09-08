import Link from "next/link";

const asset = (file: string) => `/whatwedo/${encodeURIComponent(file)}`;

export const balWhatWeOfferHeroImage = asset(
  "6 Key Reasons Why You Should Consider Data Security Solution for D365 F&SCM - ERP Software Blog.jpeg",
);

export const balOurPriorityHeroImage = asset(
  "Las empresas buscan en la IA un aliado para seleccionar personal.jpeg",
);

type BalPageHeroProps = {
  badge: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  currentPage: string;
};

export function BalPageHero({ badge, title, imageSrc, imageAlt, currentPage }: BalPageHeroProps) {
  return (
    <section className="bal-offer-hero bal-offer-hero--photo">
      <div className="bal-offer-hero-inner">
        <span className="bal-offer-badge">{badge}</span>
        <h1>{title}</h1>
        <nav className="bal-offer-crumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/bal-vidyalaya">Bal Vidyalaya</Link>
          <span aria-hidden="true">›</span>
          <span>{currentPage}</span>
        </nav>
      </div>
      <div className="bal-offer-hero-image" aria-label={imageAlt}>
        <img src={imageSrc} alt="" />
      </div>
    </section>
  );
}
