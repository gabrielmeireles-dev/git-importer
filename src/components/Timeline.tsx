import { Heart } from "lucide-react";
import { timeline } from "@/lib/couple-data";
import { PhotoCarousel } from "./PhotoCarousel";
import { useReveal } from "@/hooks/use-reveal";

function TimelineEntry({
  item,
  index,
}: {
  item: (typeof timeline)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const isLeft = index % 2 === 0;
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16`}
    >
      <div className={`${isLeft ? "md:order-1" : "md:order-2"}`}>
        <PhotoCarousel photos={item.photos} alt={item.title} />
      </div>
      <div className={`flex flex-col justify-center text-left ${isLeft ? "md:order-2" : "md:order-1"}`}>
        {item.date && (
          <p className="text-xs uppercase tracking-[0.3em] text-rose">{item.date}</p>
        )}
        <h3 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">{item.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">{item.description}</p>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="historia" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-2xl text-rose">capítulo a capítulo</p>
          <h2 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">Nossa História</h2>
          <p className="mt-4 text-muted-foreground">
            Os momentos que ficaram. Os que viraram lembrança e os que viraram raiz.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-rose/40 to-transparent md:block" />
          <div className="space-y-24">
            {timeline.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose/30 bg-background p-2 md:block">
                  <Heart className="h-4 w-4 fill-rose text-rose" />
                </div>
                <TimelineEntry item={item} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
