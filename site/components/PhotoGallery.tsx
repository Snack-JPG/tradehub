"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera, ImageIcon } from "lucide-react";

export interface TradePhoto {
  url: string;
  caption?: string;
  type: "before" | "after" | "general";
}

interface Props {
  photos: TradePhoto[];
  tradeName: string;
}

function PhotoBadge({ type }: { type: TradePhoto["type"] }) {
  if (type === "general") return null;
  return (
    <span
      className={`absolute top-2 left-2 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${
        type === "before"
          ? "bg-slate-800/80 text-white"
          : "bg-amber-500/90 text-white"
      }`}
    >
      {type}
    </span>
  );
}

export default function PhotoGallery({ photos, tradeName }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // No photos — show CTA
  if (!photos || photos.length === 0) {
    return (
      <div className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 text-center">
        <Camera className="mx-auto h-10 w-10 text-slate-300" />
        <h3 className="mt-3 font-serif text-lg font-bold text-navy-950">
          Photos Coming Soon
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          {tradeName} hasn&apos;t added project photos yet. Profiles with photos
          get up to 3× more enquiries.
        </p>
      </div>
    );
  }

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + photos.length) % photos.length : null
    );
  const next = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % photos.length : null
    );

  return (
    <>
      {/* Photo Grid */}
      <div>
        <h2 className="font-serif text-2xl font-bold text-navy-950 mb-4 flex items-center gap-2">
          <ImageIcon className="h-6 w-6 text-amber-600" />
          Project Photos
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.url}
                alt={photo.caption || `${tradeName} project photo ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              <PhotoBadge type={photo.type} />
              {photo.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs text-white line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 transition"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[lightboxIndex].url}
              alt={
                photos[lightboxIndex].caption ||
                `${tradeName} project photo ${lightboxIndex + 1}`
              }
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
            {photos[lightboxIndex].caption && (
              <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-black/60 p-4 backdrop-blur">
                <p className="text-center text-sm text-white">
                  {photos[lightboxIndex].caption}
                </p>
              </div>
            )}
            <PhotoBadge type={photos[lightboxIndex].type} />
          </div>

          {/* Next */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur">
            {lightboxIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
