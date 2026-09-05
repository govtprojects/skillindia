"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/folderforuse/desktop-repair-1.webp", alt: "Learner practising desktop repair", title: "Practical skills", copy: "Learners gain confidence by working with the tools, equipment and tasks used in real jobs." },
  { src: "/folderforuse/automotive-technician.png", alt: "Automotive technician at work", title: "Industry-ready learning", copy: "Courses connect foundational knowledge with the technical skills employers look for." },
  { src: "/folderforuse/mobile-repairing-technician.png", alt: "Mobile repair technician training", title: "Skills for today", copy: "From digital services to repairs, training stays connected to everyday opportunities." },
  { src: "/folderforuse/sewing-machine-operator-course-500x500.webp", alt: "Sewing machine operator training", title: "A path forward", copy: "Every programme supports learners on the journey towards self-employment or meaningful work." },
];

export function HomeFocusCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % slides.length), 2000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return <section className="home-focus" aria-labelledby="home-focus-title"><div className="section"><div className="home-focus-heading"><div><p className="eyebrow">Learning in focus</p><h2 id="home-focus-title">See skills turn into opportunity.</h2></div><p>Our training combines guided teaching, hands-on practice and support for the next step after learning.</p></div><div className="home-focus-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}><div className="home-focus-stage">{slides.map((slide, index) => <Image className={`home-focus-image ${index === active ? "is-active" : ""}`} src={slide.src} alt={index === active ? slide.alt : ""} aria-hidden={index !== active} fill sizes="(max-width: 900px) 100vw, 58vw" quality={88} priority={index === 0} key={slide.src} />)}<div className="home-focus-caption"><span>0{active + 1} / 0{slides.length}</span><b>{slides[active].title}</b></div></div><div className="home-focus-copy"><p className="eyebrow">What this means</p><h3>{slides[active].title}</h3><p>{slides[active].copy}</p><div className="home-focus-dots" aria-label="Choose a photo">{slides.map((slide, index) => <button type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Show ${slide.title}`} aria-pressed={index === active} key={slide.src} />)}</div></div></div><div className="home-focus-points"><article><b>Learn</b><span>Build strong foundations with experienced guidance.</span></article><article><b>Practise</b><span>Apply new knowledge through real, hands-on work.</span></article><article><b>Progress</b><span>Prepare for employment, enterprise and independence.</span></article></div></div></section>;
}
