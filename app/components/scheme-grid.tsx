import Image from "next/image";
import Link from "next/link";
import { schemeList } from "./data";
import { schemeLogos } from "./scheme-logos";

export function SchemeGrid() {
  return (
    <div className="scheme-ticket-grid">
      {schemeList.map(([slug, item], index) => {
        const logo = schemeLogos[slug];
        const logoSize = logo?.size && logo.size !== "default" ? logo.size : null;
        return (
          <Link href={`/schemes/${slug}`} className={`scheme-ticket${slug === "pmgdisha" ? " scheme-ticket--pmgdisha" : ""}`} key={slug}>
            <div className={`scheme-ticket-logo${logoSize ? ` scheme-ticket-logo--${logoSize}` : ""}`}>
              {logo ? (
                <Image
                  className={`scheme-ticket-logo-image${logoSize ? ` scheme-ticket-logo-image--${logoSize}` : ""}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={logoSize === "xlarge" ? 560 : 220}
                  height={logoSize === "xlarge" ? 320 : 120}
                  sizes={logoSize === "xlarge" ? "560px" : "220px"}
                />
              ) : null}
            </div>
            <h2>
              {index + 1}. {item.name}
            </h2>
            <p className="scheme-ticket-message">{item.summary}</p>
            <span className="scheme-ticket-more">
              Learn More <i aria-hidden="true">→</i>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
