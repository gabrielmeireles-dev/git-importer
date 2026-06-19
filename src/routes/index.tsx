import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { CoupleHero } from "@/components/CoupleHero";
import { Timeline } from "@/components/Timeline";
import { Soundtrack } from "@/components/Soundtrack";
import { Secrets } from "@/components/Secrets";
import { couple } from "@/lib/couple-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${couple.name1} & ${couple.name2} — Nossa História` },
      {
        name: "description",
        content:
          "Um site feito com amor: nossa linha do tempo, nossas músicas e segredinhos só pra você.",
      },
      { property: "og:title", content: `${couple.name1} & ${couple.name2}` },
      { property: "og:description", content: "Nossa história, nossa trilha sonora e nossos segredos." },
    ],
  }),
  component: Index,
});

function Nav() {
  const links = [
    { href: "#historia", label: "História" },
    { href: "#trilha", label: "Trilha" },
    { href: "#segredos", label: "Segredos" },
  ];
  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full border border-border bg-card/70 px-2 py-2 shadow-[var(--shadow-soft)] backdrop-blur">
      <ul className="flex items-center gap-1 text-sm">
        <li className="px-3 text-rose">
          <Heart className="inline h-4 w-4 fill-rose" />
        </li>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="rounded-full px-3 py-1.5 text-foreground/80 transition hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 text-center">
      <p className="font-script text-2xl text-rose">para sempre</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Feito com <Heart className="inline h-3 w-3 fill-rose text-rose" /> por {couple.name1} &amp; {couple.name2}
      </p>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative">
      <Nav />
      <CoupleHero />
      <Timeline />
      <Soundtrack />
      <Secrets />
      <Footer />
    </main>
  );
}
