"use client";

import { useRef } from "react";
import { successStoryVideos } from "./success-story-videos-data";

function SuccessStoryVideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playPreview = () => {
    void videoRef.current?.play().catch(() => undefined);
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <figure
      className="success-story-card success-story-card--video"
      onPointerEnter={playPreview}
      onPointerLeave={stopPreview}
      onFocusCapture={playPreview}
      onBlurCapture={stopPreview}
    >
      <div className="success-story-video">
        <video
          ref={videoRef}
          controls
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Success story video"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support this video.
        </video>
      </div>
    </figure>
  );
}

export function SuccessStoryVideos() {
  return (
    <div className="success-story-films">
      <div className="success-story-grid success-story-grid--video">
        {successStoryVideos.map((src) => (
          <SuccessStoryVideoCard key={src} src={src} />
        ))}
      </div>
    </div>
  );
}
