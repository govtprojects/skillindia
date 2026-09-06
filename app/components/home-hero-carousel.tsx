"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { homeHeroBackgrounds, homeHeroCopy, slideIntervalMs } from "./home-hero-data";

export function HomeHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideCount = homeHeroBackgrounds.length;

  const goTo = useCallback(
    (index: number) => {
      setActive((index + slideCount) % slideCount);
    },
    [slideCount],
  );

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slideCount);
    }, slideIntervalMs);
    return () => window.clearInterval(timer);
  }, [paused, slideCount]);

  return (
    <section
      className="home-cover-hero"
      aria-roledescription="carousel"
      aria-label="T2T Skill Foundation highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="home-cover-slides" aria-hidden="true">
        {homeHeroBackgrounds.map((item, index) => (
          <article className={`home-cover-slide${index === active ? " is-active" : ""}`} key={item.image}>
            <Image
              className="home-cover-slide-image"
              src={item.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              quality={88}
              style={{ objectPosition: item.objectPosition ?? "center right" }}
            />
            <div className="home-cover-slide-shade" />
          </article>
        ))}
      </div>

      <div className="home-cover-content">
        <div className="home-cover-copy">
          <p className="eyebrow">{homeHeroCopy.eyebrow}</p>
          <h1>
            {homeHeroCopy.title}
            <br />
            <em>{homeHeroCopy.titleEm}</em>
          </h1>
          <p>{homeHeroCopy.copy}</p>
        </div>

        <div className="hero-links">
          <Link className="btn" href="/our-work">Explore training →</Link>
          <Link className="link" href="/about">Discover T2T ↓</Link>
        </div>

        <div className="stats">
          <div>
            <b>2019</b>
            <span>Established</span>
          </div>
          <div>
            <b>80%</b>
            <span>self & wage employment plan</span>
          </div>
          <div>
            <b>PwD</b>
            <span>inclusive training focus</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="home-cover-arrow home-cover-arrow--prev"
        onClick={goPrev}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        type="button"
        className="home-cover-arrow home-cover-arrow--next"
        onClick={goNext}
        aria-label="Next slide"
      >
        →
      </button>

      <div className="home-cover-dots" role="tablist" aria-label="Choose a hero slide">
        {homeHeroBackgrounds.map((item, index) => (
          <button
            type="button"
            key={item.image}
            className={index === active ? "is-active" : ""}
            onClick={() => goTo(index)}
            aria-label={`Show photo ${index + 1}`}
            aria-selected={index === active}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
}
