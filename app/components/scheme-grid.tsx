import Image from "next/image";
import Link from "next/link";
import { schemeList } from "./data";
import { schemeLogos } from "./scheme-logos";
import { schemePhotos } from "./scheme-media";

export function SchemeGrid() {
  return (
    <div className="scheme-grid scheme-grid--visual">
      {schemeList.map(([slug, item]) => {
        const image = schemePhotos[slug][0];
        const logo = schemeLogos[slug];
        return (
          <Link href={`/schemes/${slug}`} className="scheme scheme-card" key={slug}>
            <div className="scheme-image">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={90}
                style={{ objectPosition: image.objectPosition }}
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 50vw"
              />
            </div>
            <div className="scheme-card-body">
              {logo ? (
                <div className="scheme-card-logo">
                  <Image
                    className="scheme-logo-image"
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={52}
                    sizes="160px"
                  />
                </div>
              ) : null}
              <div className="scheme-meta">
                <span>{item.year}</span>
                <b>{item.trainees} trainees</b>
              </div>
              <h2>{item.name}</h2>
              <p>{item.summary}</p>
              <footer>
                View programme details <span aria-hidden="true">→</span>
              </footer>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
