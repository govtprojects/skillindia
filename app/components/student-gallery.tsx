"use client";

import Image from "next/image";
import { ActivityVideoGrid } from "./activity-video-grid";

const photoLanes = [
  [
    { src: "/about/IMG-20250306-WA0031.jpg", alt: "Learners presenting their practical work", label: "Making & design" },
    { src: "/about/IMG-20250306-WA0026.jpg", alt: "Students learning computer skills", label: "Digital skills" },
    { src: "/about/PHOTO22 (1).jpeg", alt: "Student practising sewing skills", label: "Hands-on learning" },
    { src: "/about/PHOTO24 (4).jpeg", alt: "Students taking part in practical training", label: "Career-ready training" },
  ],
  [
    { src: "/about/IMG-20250306-WA0027.jpg", alt: "Learners at a training session", label: "Learning together" },
    { src: "/about/training (3).jpeg", alt: "Students participating in a classroom activity", label: "Active classrooms" },
    { src: "/about/PHOTO11 (8).jpeg", alt: "A practical skill development session", label: "Skills in practice" },
    { src: "/about/PHOTO3 (20).jpeg", alt: "Learners developing career skills", label: "Growing confidence" },
  ],
];

export function StudentGallery() {
  return (
    <section className="section student-gallery">
      <div className="student-gallery-heading">
        <div>
          <p className="eyebrow">Life at T2T</p>
          <h2 className="section-heading">Learning that feels alive.</h2>
        </div>
        <p>From first lessons to practical work, see learners build the skills and confidence for what comes next.</p>
      </div>
      <div className="student-photo-marquee" aria-label="Photo gallery of T2T learning activities">
        {photoLanes.map((lane, laneIndex) => (
          <div className={`student-photo-lane ${laneIndex === 1 ? "student-photo-lane--reverse" : ""}`} key={laneIndex}>
            <div className="student-photo-track">
              {[0, 1].map((setIndex) => (
                <div className="student-photo-set" aria-hidden={setIndex === 1} key={setIndex}>
                  {lane.map((photo) => (
                    <figure className="student-photo" key={photo.src}>
                      <Image
                        src={photo.src}
                        alt={setIndex === 0 ? photo.alt : ""}
                        fill
                        quality={88}
                        sizes="(max-width: 600px) 78vw, (max-width: 900px) 43vw, 360px"
                      />
                      <figcaption>{photo.label}</figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ActivityVideoGrid />
    </section>
  );
}
