"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { WhatWeDoProgramme } from "./what-we-do-data";
import { whatWeDoPosterSize } from "./what-we-do-data";

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;

type WhatWeDoPosterModalProps = {
  programme: WhatWeDoProgramme | null;
  onClose: () => void;
};

export function WhatWeDoPosterModal({ programme, onClose }: WhatWeDoPosterModalProps) {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const offsetRef = useRef(offset);
  const dragRef = useRef<{ active: boolean; startX: number; startY: number; originX: number; originY: number }>({
    active: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });
  const viewportRef = useRef<HTMLDivElement>(null);

  offsetRef.current = offset;

  const clampZoom = useCallback((value: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value)), []);

  const resetView = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (!programme) return;
    resetView();
  }, [programme, resetView]);

  useEffect(() => {
    if (!programme) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [programme, onClose]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !programme) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
      setZoom((current) => {
        const next = clampZoom(current + delta);
        if (next === 1) setOffset({ x: 0, y: 0 });
        return next;
      });
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, [programme, clampZoom]);

  function zoomIn() {
    setZoom((current) => clampZoom(current + ZOOM_STEP));
  }

  function zoomOut() {
    setZoom((current) => {
      const next = clampZoom(current - ZOOM_STEP);
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (zoom <= 1) return;
    event.preventDefault();
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      originX: offsetRef.current.x,
      originY: offsetRef.current.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!dragRef.current.active) return;
    event.preventDefault();
    setOffset({
      x: dragRef.current.originX + (event.clientX - dragRef.current.startX),
      y: dragRef.current.originY + (event.clientY - dragRef.current.startY),
    });
  }

  function endDrag(event: React.PointerEvent<HTMLDivElement>) {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  if (!programme) return null;

  const imageWidth = `calc(min(720px, 88vw) * ${zoom})`;

  return (
    <div className="what-we-do-modal" role="dialog" aria-modal="true" aria-labelledby="what-we-do-modal-title">
      <button type="button" className="what-we-do-modal-backdrop" onClick={onClose} aria-label="Close poster viewer" />
      <div className="what-we-do-modal-panel">
        <header className="what-we-do-modal-header">
          <div>
            <p className="eyebrow">{programme.label}</p>
            <h2 id="what-we-do-modal-title">{programme.title}</h2>
          </div>
          <button type="button" className="what-we-do-modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        <div className="what-we-do-modal-toolbar" aria-label="Zoom controls">
          <span className="what-we-do-modal-toolbar-label">Zoom</span>
          <button
            type="button"
            className="what-we-do-modal-zoom-btn"
            onClick={zoomOut}
            disabled={zoom <= MIN_ZOOM}
            aria-label="Zoom out"
          >
            <strong aria-hidden="true">−</strong>
            <small>Out</small>
          </button>
          <span className="what-we-do-modal-zoom-level" aria-live="polite">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            className="what-we-do-modal-zoom-btn"
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM}
            aria-label="Zoom in"
          >
            <strong aria-hidden="true">+</strong>
            <small>In</small>
          </button>
          <button type="button" className="what-we-do-modal-reset-btn" onClick={resetView} aria-label="Reset zoom">
            Reset view ↺
          </button>
        </div>

        <p className="what-we-do-modal-hint">
          Zoom in, then click and drag the poster to move it — or scroll inside the viewer to reach QR codes.
        </p>

        <div
          ref={viewportRef}
          className={`what-we-do-modal-viewport${zoom > 1 ? " is-draggable" : ""}`}
        >
          <div
            className="what-we-do-modal-stage"
            style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <Image
              className="what-we-do-modal-image"
              src={programme.image}
              alt={programme.imageAlt}
              width={whatWeDoPosterSize.width}
              height={whatWeDoPosterSize.height}
              quality={100}
              sizes="100vw"
              priority
              draggable={false}
              style={{ width: imageWidth, maxWidth: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
