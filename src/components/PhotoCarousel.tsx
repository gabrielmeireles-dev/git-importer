import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PhotoCarousel({ photos, alt }: { photos: string[]; alt: string }) {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + photos.length) % photos.length);
  const next = () => setI((p) => (p + 1) % photos.length);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {photos.map((src, idx) => {
          const isVideo = /\.(mp4|webm|mov)(\?|$)/i.test(src);
          return isVideo ? (
            <video
              key={idx}
              src={src}
              controls
              playsInline
              preload="metadata"
              className="aspect-[4/3] w-full shrink-0 object-cover bg-black"
            />
          ) : (
            <img
              key={idx}
              src={src}
              alt={`${alt} ${idx + 1}`}
              loading="lazy"
              className="aspect-[4/3] w-full shrink-0 object-cover"
            />
          );
        })}
      </div>

      {photos.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 text-foreground shadow-md backdrop-blur transition hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-2 text-foreground shadow-md backdrop-blur transition hover:scale-110"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {photos.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Ir para foto ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-6 bg-rose" : "w-1.5 bg-card/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
