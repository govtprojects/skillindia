import Image from "next/image";
import Link from "next/link";
import { schemeList } from "./data";
import { schemeLogos } from "./scheme-logos";

export function SchemeGrid() {
  return (
    <div className="scheme-ticket-grid">
      {schemeList.map(([slug, item], index) => {
        const logo = schemeLogos[slug];
        return (
          <Link href={`/schemes/${slug}`} className="scheme-ticket" key={slug}>
            <div className="scheme-ticket-logo">
              {logo ? (
                <Image
                  className="scheme-ticket-logo-image"
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={120}
                  sizes="220px"
                />
              ) : null}
            </div>
            <h2>
              {index + 1}. {item.name}
            </h2>
            <span className="scheme-ticket-more">
              Learn More <i aria-hidden="true">→</i>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
