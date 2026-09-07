"use client";

import { useRef } from "react";
import { activityVideos, type ActivityVideo } from "./activity-videos-data";

function ActivityVideoCard({ src, title }: ActivityVideo) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playPreview = () => videoRef.current?.play().catch(() => undefined);
  const stopPreview = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <article
      className="student-video activity-video-card"
      onPointerEnter={playPreview}
      onPointerLeave={stopPreview}
      onFocus={playPreview}
      onBlur={stopPreview}
    >
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
      <div className="student-video-caption">
        <span>Hover to preview</span>
        <b>{title}</b>
        <i aria-hidden="true">↗</i>
      </div>
    </article>
  );
}

type ActivityVideoGridProps = {
  heading?: boolean;
};

export function ActivityVideoGrid({ heading = true }: ActivityVideoGridProps) {
  return (
    <div className="activity-video-section">
      {heading ? (
        <div className="student-video-heading">
          <div>
            <p className="eyebrow">See it in motion</p>
            <h3>Step inside our training spaces.</h3>
          </div>
          <span>Move over a film to preview it</span>
        </div>
      ) : null}
      <div className="student-video-grid student-video-grid--activity">
        {activityVideos.map((video) => (
          <ActivityVideoCard key={video.src} {...video} />
        ))}
      </div>
    </div>
  );
}
