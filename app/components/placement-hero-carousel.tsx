"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { placementHeroBackgrounds } from "./placement-hero-data";
import { slideIntervalMs } from "./home-hero-data";

type PlacementHeroCarouselProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function PlacementHeroCarousel({ eyebrow, title, copy }: PlacementHeroCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideCount = placementHeroBackgrounds.length;

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slideCount);
    }, slideIntervalMs);
    return () => window.clearInterval(timer);
  }, [paused, slideCount]);

  return (
    <section
      className="page-hero page-hero--image-overlay page-hero--carousel"
      aria-roledescription="carousel"
      aria-label="Placements at T2T Skill Foundation"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
      <div className="page-hero-image" aria-hidden="true">
        {placementHeroBackgrounds.map((item, index) => (
          <div
            className={`page-hero-carousel-slide${index === active ? " is-active" : ""}`}
            key={item.image}
          >
            <Image
              src={item.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              quality={88}
              style={{ objectPosition: item.objectPosition ?? "center center" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
