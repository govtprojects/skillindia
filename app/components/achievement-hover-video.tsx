"use client";

import { useRef } from "react";

type AchievementHoverVideoProps = {
  src: string;
  title?: string;
  year?: string;
};

export function AchievementHoverVideo({ src, title, year }: AchievementHoverVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const featured = Boolean(title && year);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  }

  function pause() {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }

  if (featured) {
    return (
      <figure
        className="achievement-video-card"
        onMouseEnter={play}
        onMouseLeave={pause}
        onFocusCapture={play}
        onBlurCapture={pause}
      >
        <div className="achievement-video-frame">
          <video ref={videoRef} controls preload="metadata" playsInline muted loop>
            <source src={src} type="video/mp4" />
          </video>
        </div>
        <figcaption>
          <span>{year}</span>
          <b>{title}</b>
          <small>Hover to play</small>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      className="achievement-video"
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocusCapture={play}
      onBlurCapture={pause}
    >
      <video ref={videoRef} controls preload="metadata" playsInline muted loop>
        <source src={src} type="video/mp4" />
      </video>
      <figcaption>Hover to play · use controls for sound</figcaption>
    </figure>
  );
}
