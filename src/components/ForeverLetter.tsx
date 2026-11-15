import { Heart } from "lucide-react";

export function ForeverLetter() {
  return (
    <section aria-labelledby="forever-letter-title" className="border-y border-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 flex items-center justify-center gap-4 text-rose" aria-hidden="true">
          <span className="h-px w-16 bg-border" />
          <Heart className="h-5 w-5" />
          <span className="h-px w-16 bg-border" />
        </div>
        <h2 id="forever-letter-title" className="text-center font-display text-4xl leading-tight text-foreground sm:text-5xl">
          Para sempre permanece mesmo no fim
        </h2>
        <div className="mt-10 space-y-6 text-base leading-loose text-muted-foreground sm:text-lg">
          <p>Eu disse quando te entreguei as alianças: o sempre não significa necessariamente que seremos para sempre, mas que, mesmo com o fim, o sentimento é para sempre. O carinho permanece para sempre, a história permanece para sempre. E você é o meu sempre, para sempre.</p>
          <p>Independentemente de tudo de ruim que fomos um para o outro, foi uma maravilha estar na sua vida. Uma maravilha ser a pessoa que você amava. Nossa intimidade, sua família, seus valores... Tudo em você me encanta e desperta fascínio.</p>
          <p>Eu queria que você ficasse e fosse feliz comigo, mas, mesmo com tudo isso, quero que seja feliz. Desejo o melhor para você e saiba que sempre estarei aqui por você.</p>
          <p>Amar é deixar ir, e vou tentar respeitar você e deixar que siga sua vida.</p>
          <p className="border-l-2 border-rose/50 pl-5 text-foreground">Como diz meu texto preferido: se sentir saudades, me avisa. Me manda mensagem, vem correndo me ver.</p>
        </div>
      </div>
    </section>
  );
}