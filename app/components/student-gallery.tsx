"use client";

import Image from "next/image";
import { useRef } from "react";

const photos = [
  { src: "/about/IMG-20250306-WA0031.jpg", alt: "Learners presenting their practical work", label: "Making & design" },
  { src: "/about/IMG-20250306-WA0026.jpg", alt: "Students learning computer skills", label: "Digital skills" },
  { src: "/about/PHOTO22 (1).jpeg", alt: "Student practising sewing skills", label: "Hands-on learning" },
  { src: "/about/PHOTO24 (4).jpeg", alt: "Students taking part in practical training", label: "Career-ready training" },
];

const videos = [
  { src: "/about/sewing.mp4", poster: "/about/PHOTO22 (1).jpeg", title: "Practical sewing training" },
  { src: "/about/it lab.mp4", poster: "/about/IMG-20250306-WA0026.jpg", title: "Computer lab learning" },
];

function HoverVideo({ src, poster, title }: (typeof videos)[number]) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playPreview = () => videoRef.current?.play().catch(() => undefined);
  const stopPreview = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return <article className="student-video" onPointerEnter={playPreview} onPointerLeave={stopPreview} onFocus={playPreview} onBlur={stopPreview}>
    <video ref={videoRef} controls muted loop playsInline preload="metadata" poster={poster} aria-label={title}>
      <source src={src} type="video/mp4" />Your browser does not support this video.
    </video>
    <div className="student-video-caption"><span>Hover to preview</span><b>{title}</b><i aria-hidden="true">↗</i></div>
  </article>;
}

export function StudentGallery() {
  return <section className="section student-gallery">
    <div className="student-gallery-heading"><div><p className="eyebrow">Life at T2T</p><h2 className="section-heading">Learning that feels alive.</h2></div><p>From first lessons to practical work, see learners build the skills and confidence for what comes next.</p></div>
    <div className="student-photo-grid">{photos.map((photo, index) => <figure className={index === 0 ? "student-photo student-photo--feature" : "student-photo"} key={photo.src}><Image src={photo.src} alt={photo.alt} fill quality={90} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /><figcaption>{photo.label}</figcaption></figure>)}</div>
    <div className="student-video-heading"><div><p className="eyebrow">See it in motion</p><h3>Step inside our training spaces.</h3></div><span>Move over a film to preview it</span></div>
    <div className="student-video-grid">{videos.map(video => <HoverVideo key={video.src} {...video} />)}</div>
  </section>;
}
