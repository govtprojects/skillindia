"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type SchemeGalleryPhoto = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export function SchemeGalleryCarousel({ photos }: { photos: SchemeGalleryPhoto[] }) {
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

  return <div ref={viewportRef} className="scheme-carousel-viewport" onMouseEnter={pause} onMouseLeave={resume} onFocusCapture={pause} onBlurCapture={resume} onPointerDown={pause} onPointerUp={resume} onPointerCancel={resume} aria-label="Programme photo gallery">
    <div className="scheme-carousel-track">
      {[0, 1].map(setIndex => <div ref={setIndex === 0 ? firstSetRef : undefined} className="scheme-carousel-set" aria-hidden={setIndex === 1} key={setIndex}>{photos.map(photo => <figure className="scheme-carousel-card" key={`${setIndex}-${photo.src}`}><Image src={photo.src} alt={setIndex === 0 ? photo.alt : ""} fill quality={90} style={{ objectPosition: photo.objectPosition }} sizes="(max-width: 600px) 78vw, (max-width: 900px) 45vw, 320px" /></figure>)}</div>)}
    </div>
  </div>;
}
