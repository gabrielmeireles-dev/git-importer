import { useState } from "react";
import { Gift, Heart, Mail, Sparkles, Star } from "lucide-react";
import { secrets } from "@/lib/couple-data";
import { useReveal } from "@/hooks/use-reveal";

const ICONS = [Heart, Mail, Gift, Sparkles, Star];

export function Secrets() {
  const [opened, setOpened] = useState<Set<number>>(new Set());
  const { ref, visible } = useReveal<HTMLDivElement>();

  const toggle = (i: number) => {
    setOpened((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section id="segredos" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-2xl text-rose">só pra você</p>
          <h2 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">Segredos pra Você</h2>
          <p className="mt-4 text-muted-foreground">
            Toque em cada cartinha. Tem uma surpresa em cada uma — escolha uma por dia, se quiser.
          </p>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? "reveal-in" : ""} mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3`}
        >
          {secrets.map((message, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isOpen = opened.has(i);
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className="group relative aspect-[4/5] [perspective:1200px]"
                aria-label={`Abrir segredo ${i + 1}`}
              >
                <div
                  className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    isOpen ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl border border-border bg-[var(--gradient-romance)] p-4 text-foreground shadow-[var(--shadow-soft)] [backface-visibility:hidden] group-hover:scale-[1.02] transition">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-card/80 shadow-[var(--shadow-gold)]">
                      <Icon className="h-7 w-7 fill-rose/20 text-rose" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.25em] text-rose">
                      segredo {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] text-muted-foreground">toque para abrir</span>
                  </div>
                  {/* back */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-rose/40 bg-card p-5 text-center shadow-[var(--shadow-soft)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="font-display text-lg leading-snug text-foreground sm:text-xl">
                      {message}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
