"use client";

import { useRef } from "react";

export function AchievementHoverVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

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
