import { useState } from "react";
import { Music, Pause, Play } from "lucide-react";
import { songs } from "@/lib/couple-data";
import { useReveal } from "@/hooks/use-reveal";

export function Soundtrack() {
  const [active, setActive] = useState<number | null>(null);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="trilha" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-2xl text-rose">a trilha sonora de nós</p>
          <h2 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">Nossas Músicas</h2>
          <p className="mt-4 text-muted-foreground">
            Cada uma delas me lembra de você. Aperte o play e venha lembrar comigo.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? "reveal-in" : ""} mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-2`}
        >
          {songs.map((song, i) => {
            const isActive = active === i;
            return (
              <div
                key={i}
                className="group flex flex-col gap-4 rounded-3xl border border-border bg-card/80 p-5 shadow-[var(--shadow-soft)] backdrop-blur transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                    <img
                      src={song.cover}
                      alt={song.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/20 opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-rose">
                      <Music className="h-3 w-3" /> faixa {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-1 truncate font-display text-2xl text-foreground">
                      {song.title}
                    </h3>
                    <p className="truncate text-sm text-muted-foreground">{song.artist}</p>
                  </div>
                  <button
                    onClick={() => setActive(isActive ? null : i)}
                    aria-label={isActive ? "Esconder player" : "Tocar"}
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--gradient-gold)] text-foreground shadow-[var(--shadow-gold)] transition hover:scale-110"
                  >
                    {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 translate-x-[1px]" />}
                  </button>
                </div>

                {isActive && song.spotifyEmbed && (
                  <iframe
                    title={song.title}
                    src={song.spotifyEmbed}
                    width="100%"
                    height="80"
                    allow="encrypted-media"
                    loading="lazy"
                    className="overflow-hidden rounded-xl border-0"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
