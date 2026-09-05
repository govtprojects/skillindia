"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type GalleryPhoto = { src: string; alt: string; label: string };

export function BalGalleryCarousel({ photos }: { photos: GalleryPhoto[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let lastTime: number | undefined;
    const move = (time: number) => {
      if (lastTime !== undefined && !pausedRef.current && viewport.scrollWidth > viewport.clientWidth) {
        const loopPoint = firstSetRef.current?.offsetWidth ?? 0;
        const elapsed = Math.min((time - lastTime) / 1000, 0.1);

        if (loopPoint > 0) {
          // Keep a gentle but visible, constant pace (pixels per second).
          viewport.scrollLeft += elapsed * 38;
          if (viewport.scrollLeft >= loopPoint) viewport.scrollLeft -= loopPoint;
        }
      }
      lastTime = time;
      frame = requestAnimationFrame(move);
    };

    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, []);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  return <div ref={viewportRef} className="bal-carousel-viewport" onMouseEnter={pause} onMouseLeave={resume} onFocusCapture={pause} onBlurCapture={resume} onPointerDown={pause} onPointerUp={resume} onPointerCancel={resume} aria-label="Bal Vidyalaya photo gallery">
    <div className="bal-carousel-track">
      {[0, 1].map(setIndex => <div ref={setIndex === 0 ? firstSetRef : undefined} className="bal-carousel-set" aria-hidden={setIndex === 1} key={setIndex}>{photos.map(photo => <figure className="bal-carousel-card" key={`${setIndex}-${photo.src}`}><Image src={photo.src} alt={setIndex === 0 ? photo.alt : ""} fill sizes="(max-width: 600px) 78vw, (max-width: 900px) 45vw, 320px" quality={85} /><figcaption>{photo.label}</figcaption></figure>)}</div>)}
    </div>
  </div>;
}
