import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import heroImg from "@/assets/couple-hero.jpg.asset.json";
import { couple } from "@/lib/couple-data";

function diff(start: Date) {
  const now = new Date();
  let ms = Math.max(0, now.getTime() - start.getTime());
  const days = Math.floor(ms / 86_400_000); ms -= days * 86_400_000;
  const hours = Math.floor(ms / 3_600_000); ms -= hours * 3_600_000;
  const minutes = Math.floor(ms / 60_000); ms -= minutes * 60_000;
  const seconds = Math.floor(ms / 1000);
  return { days, hours, minutes, seconds };
}

export function CoupleHero() {
  const start = new Date(couple.startDate);
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    setT(diff(start));
    const id = setInterval(() => setT(diff(start)), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stats = [
    { label: "dias", value: t.days },
    { label: "horas", value: t.hours },
    { label: "minutos", value: t.minutes },
    { label: "segundos", value: t.seconds },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto grid min-h-screen grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="font-script text-2xl text-rose">Dedicado ao meu para Sempre</p>
          <h1 className="mt-2 font-display text-6xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl">
            {couple.name1}
            <span className="block text-shimmer">&amp;</span>
            {couple.name2}
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">{couple.tagline}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            DESDE 09/12/2024
          </p>

          <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card/70 px-2 py-4 text-center shadow-[var(--shadow-soft)] backdrop-blur"
              >
                <div className="font-display text-3xl text-rose sm:text-4xl">
                  {String(s.value).padStart(2, "0")}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-4 rounded-[2rem] bg-[var(--gradient-romance)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <img
              src={heroImg.url}
              alt={`${couple.name1} e ${couple.name2}`}
              width={1536}
              height={1536}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 animate-float rounded-full bg-card p-4 shadow-[var(--shadow-gold)]">
            <Heart className="h-6 w-6 fill-rose text-rose" />
          </div>
        </div>
      </div>
    </section>
  );
}
