"use client";

import { useRef } from "react";

type BalPriorityVideoProps = {
  src: string;
  title: string;
  index: number;
};

function BalPriorityVideoCard({ src, title, index }: BalPriorityVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const featured = index === 0;

  const playPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => undefined);
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <article
      className={`bal-priority-video${featured ? " bal-priority-video--featured" : ""}`}
      onPointerEnter={playPreview}
      onPointerLeave={stopPreview}
      onFocusCapture={playPreview}
      onBlurCapture={stopPreview}
    >
      <div className="bal-priority-video-frame">
        <video
          ref={videoRef}
          controls
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support this video.
        </video>
      </div>
      <div className="bal-priority-video-caption">
        <span>{featured ? "Featured clip · hover to play" : `Clip ${String(index).padStart(2, "0")} · hover to play`}</span>
        <b>{title}</b>
      </div>
    </article>
  );
}

type BalPriorityVideoGridProps = {
  videos: Omit<BalPriorityVideoProps, "index">[];
  priorityTitle: string;
};

export function BalPriorityVideoGrid({ videos, priorityTitle }: BalPriorityVideoGridProps) {
  if (!videos.length) return null;

  return (
    <div className="bal-priority-videos">
      <div className="bal-priority-videos-heading">
        <p className="eyebrow">See it in motion</p>
        <h3>{priorityTitle} — learning in action</h3>
        <p>Move over any clip to preview it. Use the controls for sound and fullscreen.</p>
      </div>

      <div className="bal-priority-videos-grid">
        {videos.map((video, index) => (
          <BalPriorityVideoCard key={video.src} {...video} index={index} />
        ))}
      </div>
    </div>
  );
}
