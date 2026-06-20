import nossoVideo from "@/assets/nosso-video.mp4.asset.json";
import { useReveal } from "@/hooks/use-reveal";

export function OurVideo() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="video" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-2xl text-rose">um pedacinho de nós</p>
          <h2 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">Nosso Vídeo</h2>
          <p className="mt-4 text-muted-foreground">
            Aperte o play e relembra esse momento comigo.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? "reveal-in" : ""} mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-border bg-card/80 shadow-[var(--shadow-soft)] backdrop-blur`}
        >
          <video
            src={nossoVideo.url}
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full bg-black"
          />
        </div>
      </div>
    </section>
  );
}