"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { WhatWeDoProgramme } from "./what-we-do-data";
import { whatWeDoPosterSize, whatWeDoProgrammes } from "./what-we-do-data";
import { WhatWeDoPosterModal } from "./what-we-do-poster-modal";

export function WhatWeDoPosterGrid() {
  const [activeProgramme, setActiveProgramme] = useState<WhatWeDoProgramme | null>(null);

  return (
    <>
      <div className="what-we-do-grid">
        {whatWeDoProgrammes.map((programme, index) => (
          <div className="what-we-do-card-wrap" key={programme.id}>
            <article className="what-we-do-card">
              <button
                type="button"
                className="what-we-do-card-media what-we-do-card-media-button"
                onClick={() => setActiveProgramme(programme)}
                aria-label={`Open and zoom ${programme.title} poster`}
              >
                <figure>
                  <Image
                    className="what-we-do-card-photo"
                    src={programme.image}
                    alt={programme.imageAlt}
                    width={whatWeDoPosterSize.width}
                    height={whatWeDoPosterSize.height}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 480px"
                    quality={92}
                    priority={index < 2}
                  />
                </figure>
                <span className="what-we-do-card-zoom-hint">Tap to zoom & scan QR →</span>
              </button>
              <div className="what-we-do-card-body">
                <div className="what-we-do-card-meta">
                  <span>{programme.label}</span>
                  {programme.stat ? <b>{programme.stat}</b> : null}
                </div>
                <h3>{programme.title}</h3>
                <p>{programme.copy}</p>
                {programme.href ? (
                  <Link className="what-we-do-card-link" href={programme.href}>
                    Learn more →
                  </Link>
                ) : null}
              </div>
            </article>
          </div>
        ))}
      </div>

      <WhatWeDoPosterModal programme={activeProgramme} onClose={() => setActiveProgramme(null)} />
    </>
  );
}
