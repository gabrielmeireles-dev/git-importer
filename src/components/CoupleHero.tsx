import { Heart } from "lucide-react";
import heroImg from "@/assets/couple-hero.jpg.asset.json";
import { couple } from "@/lib/couple-data";
import { relationshipDuration } from "@/lib/relationship-duration";

export function CoupleHero() {
  const t = relationshipDuration(couple.startDate, couple.endDate);

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
          <div className="mt-8 flex max-w-md items-center gap-4 border-y border-border py-5 sm:gap-6">
            <div className="shrink-0">
              <p className="text-xs uppercase text-muted-foreground">Desde</p>
              <time dateTime={couple.startDate.slice(0, 10)} className="mt-1 block font-display text-2xl text-foreground sm:text-3xl">09/12/2024</time>
            </div>
            <div className="flex flex-1 items-center gap-2 text-rose" aria-hidden="true">
              <span className="h-px flex-1 bg-border" />
              <Heart className="h-4 w-4 shrink-0" />
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="shrink-0 text-right">
              <p className="text-xs uppercase text-muted-foreground">Até</p>
              <time dateTime={couple.endDate} className="mt-1 block font-display text-2xl text-foreground sm:text-3xl">11/10/2026</time>
            </div>
          </div>

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
