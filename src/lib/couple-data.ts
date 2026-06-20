// ====================================================
// Edite os dados do casal abaixo. Substitua textos e
// links de imagens. Tudo o que aparece no site sai daqui.
// ====================================================
import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";
import primeiroOlhar3 from "@/assets/primeiro-olhar-3.jpg.asset.json";
import primeiroOlhar4 from "@/assets/primeiro-olhar-4.jpg.asset.json";
import primeiroOlhar5 from "@/assets/primeiro-olhar-5.jpg.asset.json";
import primeiroOlhar6 from "@/assets/primeiro-olhar-6.jpg.asset.json";
import primeiroOlhar7 from "@/assets/primeiro-olhar-7.jpg.asset.json";
import aprox1 from "@/assets/aprox-1.jpg.asset.json";
import aprox2 from "@/assets/aprox-2.jpg.asset.json";
import aprox3 from "@/assets/aprox-3.jpg.asset.json";
import aprox4 from "@/assets/aprox-4.mp4.asset.json";
import aprox5 from "@/assets/aprox-5.mp4.asset.json";
import comeco1 from "@/assets/comeco-1.jpg.asset.json";
import comeco2 from "@/assets/comeco-2.jpg.asset.json";
import comeco3 from "@/assets/comeco-3.jpg.asset.json";
import comeco4 from "@/assets/comeco-4.jpg.asset.json";
import comeco5 from "@/assets/comeco-5.jpg.asset.json";
import comeco6 from "@/assets/comeco-6.jpg.asset.json";
import comeco7 from "@/assets/comeco-7.jpg.asset.json";
import comeco8 from "@/assets/comeco-8.jpg.asset.json";
import comeco9 from "@/assets/comeco-9.mp4.asset.json";
import comeco10 from "@/assets/comeco-10.jpg.asset.json";
import beijo1 from "@/assets/beijo-1.jpg.asset.json";
import beijo2 from "@/assets/beijo-2.jpg.asset.json";
import beijo3 from "@/assets/beijo-3.jpg.asset.json";
import beijo4 from "@/assets/beijo-4.jpg.asset.json";
import beijo5 from "@/assets/beijo-5.jpg.asset.json";
import beijo6 from "@/assets/beijo-6.jpg.asset.json";
import dias1 from "@/assets/dias-1.jpg.asset.json";
import dias2 from "@/assets/dias-2.jpg.asset.json";
import dias3 from "@/assets/dias-3.jpg.asset.json";
import dias4 from "@/assets/dias-4.jpg.asset.json";
import dias5 from "@/assets/dias-5.jpg.asset.json";
import dias6 from "@/assets/dias-6.jpg.asset.json";
import dias7 from "@/assets/dias-7.jpg.asset.json";
import viagem1 from "@/assets/viagem-1.jpg.asset.json";
import viagem2 from "@/assets/viagem-2.jpg.asset.json";
import viagem3 from "@/assets/viagem-3.jpg.asset.json";
import viagem4 from "@/assets/viagem-4.jpg.asset.json";
import viagem5 from "@/assets/viagem-5.jpg.asset.json";
import viagem6 from "@/assets/viagem-6.jpg.asset.json";
import viagem7 from "@/assets/viagem-7.jpg.asset.json";
import viagem8 from "@/assets/viagem-8.jpg.asset.json";
import viagem9 from "@/assets/viagem-9.jpg.asset.json";
import viagem10 from "@/assets/viagem-10.jpg.asset.json";
import pedido1 from "@/assets/pedido-1.mp4.asset.json";
import pedido2 from "@/assets/pedido-2.jpg.asset.json";
import pedido3 from "@/assets/pedido-3.jpg.asset.json";
import pedido4 from "@/assets/pedido-4.jpg.asset.json";
import pedido5 from "@/assets/pedido-5.jpg.asset.json";
import pedido6 from "@/assets/pedido-6.jpg.asset.json";
import pedido7 from "@/assets/pedido-7.jpg.asset.json";
import dias8 from "@/assets/dias-8.jpg.asset.json";
import dias9 from "@/assets/dias-9.jpg.asset.json";
import dias10 from "@/assets/dias-10.jpg.asset.json";
import paraSempre1 from "@/assets/para-sempre-1.jpg.asset.json";
import paraSempre2 from "@/assets/para-sempre-2.jpg.asset.json";
import paraSempre3 from "@/assets/para-sempre-3.jpg.asset.json";
import paraSempre4 from "@/assets/para-sempre-4.jpg.asset.json";
import paraSempre5 from "@/assets/para-sempre-5.jpg.asset.json";
import paraSempre6 from "@/assets/para-sempre-6.jpg.asset.json";
import paraSempre7 from "@/assets/para-sempre-7.jpg.asset.json";
import paraSempre8 from "@/assets/para-sempre-8.jpg.asset.json";

export const couple = {
  name1: "Gabriel",
  name2: "Amanda",
  startDate: "2024-12-09T00:00:00", // AAAA-MM-DDTHH:mm:ss
  tagline: "A nossa história, escrita a dois.",
};

export type TimelineItem = {
  title: string;
  date: string;
  description: string;
  photos: string[];
};

export const timeline: TimelineItem[] = [
  {
    title: "O Primeiro Olhar",
    date: "07 DE OUTUBRO, 2023",
    description:
      "No dia em que te conheci, eu te achei linda, isso é fato. Mas o que mais me impressionou foi a sua inteligência e o modo como todos ao seu redor te admiravam. Isso me acendeu uma dúvida e um interesse genuíno: o que ela tem de tão impecável para ser tão admirada? Fiquei com muita vontade de te conhecer melhor, mas, infelizmente, você acabou saindo da empresa.",
    photos: [primeiroOlhar7.url, primeiroOlhar6.url, primeiroOlhar4.url, primeiroOlhar5.url, primeiroOlhar3.url],
  },
  {
    title: "Aproximação",
    date: "",
    description:
      "Demorou um tempo para que a gente ficasse próximo. Eu sempre achei que você era inalcançável para mim e até o Gei brinca com isso. Afinal, você é impecável: uma garota forte, inteligente, linda, resiliente e gentil. Com tantas qualidades, parecia impossível despertar o mínimo de interesse em você. Acredito que isso não teria acontecido se não fosse a nossa proximidade com o pessoal do RH. Se não estivéssemos juntos com a Ana Lívia, o Nicolas e a Tainara, é até difícil imaginar que teria interesse em mim. É até difícil imaginar que você se encantaria por mim, porque eu não achava que tinha nada de tão legal a não ser a minha profundidade, que você me permitiu te mostrar com o tempo.",
    photos: [aprox1.url, aprox2.url, aprox3.url, aprox4.url, aprox5.url],
  },
  {
    title: "Nosso começo",
    date: "",
    description:
      "Com o tempo, fomos nos aproximando e conversando um pouco mais. Eu sempre te chamava para treinar e você nunca ia comigo, haha. Até o dia em que fomos à feirinha juntos. Acredito que ali foi o nosso começo, onde nos conectamos um pouco mais. Foi o momento em que você me mostrou o seu íntimo e me permitiu ver a Amanda que não era apenas impecável, mas que também era uma garota normal. Sentir que só eu conhecia esse seu lado foi o que, talvez, acendeu a paixão por você. Eu queria saber cada vez mais de ti. Nossa conversa à noite foi a minha preferida desde o início, porque você se abriu de verdade e me deixou te conhecer ao máximo. E quando cheguei em casa depois desse dia, foi uma festa, haha! Eu contando para o Gei e para a Miriã sobre o seu abraço safado em cima de mim.",
    photos: [comeco1.url, comeco2.url, comeco3.url, comeco4.url, comeco5.url, comeco6.url, comeco7.url, comeco8.url, comeco9.url, comeco10.url],
  },
  {
    title: "Nosso Primeiro Beijo",
    date: "09 DE DEZEMBRO, 2024",
    description:
      "Em plena segunda-feira, você realmente estava a fim de mim. Afinal, com tantas coisas para fazer, aceitou ir assistir a Moana comigo em plena segunda-feira, agradeço muito por isso, foi incrível. E claro, antes disso, outro momento marcante foi o dia em que voltamos do shopping e você simplesmente deitou no meu ombro. Meu Deus, como eu fui lerdo em não te beijar, não é? Mas talvez tenha sido o melhor, porque no final deu tudo certo e ficamos juntos, haha. O dia do cinema foi maravilhoso, nossa conversa sempre fluía tão bem... Acho que eu já estava completamente apaixonado, te achava tão, mas tão linda! E a hora em que estávamos juntos na fila e finalmente nos beijamos... foi inesquecível.",
    photos: [beijo1.url, beijo2.url, beijo3.url, beijo4.url, beijo5.url, beijo6.url],
  },
  {
    title: "Nossos dias",
    date: "",
    description:
      "Depois do nosso beijo e de começarmos a ficar juntos, os próximos dias foram surreais. A nossa química e a nossa conexão eram de outro mundo. Amo tudo o que envolve a gente, a forma como você me deseja e a intensidade do que sentimos quando estamos juntos. Mas, enfim... a gente passou um tempo juntos antes de namorar; eu tinha medo e você tinha dúvidas.",
    photos: [dias1.url, dias2.url, dias3.url, dias4.url, dias5.url, dias6.url, dias7.url, dias8.url, dias9.url, dias10.url],
  },
  {
    title: "O pedido de Namoro",
    date: "",
    description:
      "Para mim, sempre esteve claro que eu queria você. Mas eu tinha medo e, para ser sincero, até hoje tenho. Medo de não ser bom o suficiente, de não ser o cara ideal para ti, e medo de que as nossas expectativas fossem diferentes. Mas, com o tempo, o que eu sentia se tornou inevitável. Hoje, a primeira coisa que faço ao acordar é olhar o celular para ver se tem um 'bom dia' seu; se não tem, eu corro para te mandar um. Sinto uma vontade enorme de te contar cada detalhe da minha rotina, e espero ansiosamente para saber como foi o seu dia. Aos poucos, você virou a pessoa que acolhe as minhas maiores inseguranças. Os meus pensamentos mais profundos eu só queria dividir contigo. Ficou claro que você já fazia parte da minha vida, e que era você quem eu queria. Antes mesmo das alianças, comprei aquele colar porque a pressa de te chamar de minha era maior. E, quando finalmente escolhi as alianças, decidi que você seria o meu sempre. Sempre você. Sempre por você.",
    photos: [pedido1.url, pedido2.url, pedido3.url, pedido4.url, pedido5.url, pedido6.url, pedido7.url],
  },
  {
    title: "Primeira Viagem",
    date: "09 DE ABRIL, 2026",
    description:
      "Nossa primeira viagem foi um marco importante para nós. Foi a primeira vez que você viu como seria passar um final de semana inteirinho ao meu lado. E, por incrível que pareça, você não desistiu de mim depois daquilo! Fiquei muito feliz por você ter ido, por ter gostado e, principalmente, por ter conhecido a minha família e se aproximado de pessoas tão importantes para mim. No final das contas, sei que a viagem também teve os seus momentos complicados, que acabaram trazendo novas dúvidas, mas, no balanço geral, foi incrível compartilhar essa experiência com você.",
    photos: [viagem1.url, viagem2.url, viagem3.url, viagem4.url, viagem5.url, viagem6.url, viagem7.url, viagem8.url, viagem9.url, viagem10.url],
  },
  {
    title: "Para sempre",
    date: "",
    description:
      "Aqui está um pouco da nossa história e dos momentos que construímos juntos. O restante é um quadro em branco, concorda comigo? Queria deixar com você este registro sobre nós, algo para você olhar sempre que quiser. Eu poderia tentar adivinhar o amanhã, mas prefiro te entregar o nosso presente. Quanto ao futuro... o que será que nós iremos escrever nele?",
    photos: [
      paraSempre1.url,
      paraSempre2.url,
      paraSempre3.url,
      paraSempre4.url,
      paraSempre5.url,
      paraSempre6.url,
      paraSempre7.url,
      paraSempre8.url,
    ],
  },
];

export type Song = {
  title: string;
  artist: string;
  cover: string; // URL ou import
  spotifyEmbed?: string; // ex: https://open.spotify.com/embed/track/ID
};

export const songs: Song[] = [
  {
    title: "Eu Quero Só Você - Ao Vivo",
    artist: "Jorge & Mateus",
    cover: "https://i.scdn.co/image/ab67616d0000b273b65a0d49c83cf83a9082e1ae",
    spotifyEmbed: "https://open.spotify.com/embed/track/7blWdaLlmXMEh4ej2IPP8N",
  },
  {
    title: "Se o Amor Tiver Lugar",
    artist: "Jorge & Mateus",
    cover: "https://i.scdn.co/image/ab67616d0000b2736197faf2bd777f66c32a84b9",
    spotifyEmbed: "https://open.spotify.com/embed/track/4sFVdIwmVj2y87qqOWwSU3",
  },
  {
    title: "Eu Te Seguro - Ao Vivo",
    artist: "Panda, MJ Records",
    cover: "https://i.scdn.co/image/ab67616d0000b273bfd85a89e28cbbc84b1d1ae3",
    spotifyEmbed: "https://open.spotify.com/embed/track/587Lf3LyhC8smoFnNIQtn3",
  },
  {
    title: "Hotel Caro",
    artist: "Baco Exu do Blues, Luísa Sonza",
    cover: "https://i.scdn.co/image/ab67616d0000b2732ce1e8483e34e2ab91bdeb72",
    spotifyEmbed: "https://open.spotify.com/embed/track/13cC8N59S63EOeSNMhskEO",
  },
  {
    title: "Viro Vira Virou",
    artist: "Grupo Triii",
    cover: "https://i.scdn.co/image/ab67616d0000b27349ad2d5402e6998f2ce5aa72",
    spotifyEmbed: "https://open.spotify.com/embed/track/4Ngl1fqCSOQfx5DTsqeyKb",
  },
  {
    title: "Romântico (Ao Vivo)",
    artist: "Henrique & Juliano",
    cover: "https://i.scdn.co/image/ab67616d0000b2735856830b78bbf4343b930538",
    spotifyEmbed: "https://open.spotify.com/embed/track/3oO9ys8uafPkMG8Ey29bqu",
  },
  {
    title: "ILHA",
    artist: "Luan Santana",
    cover: "https://i.scdn.co/image/ab67616d0000b2730cc35eea32bca2900fd69dea",
    spotifyEmbed: "https://open.spotify.com/embed/track/2zvfMwpBdm9zC4zwLWq1Wg",
  },
  {
    title: "Duas Metades - Ao Vivo",
    artist: "Jorge & Mateus",
    cover: "https://i.scdn.co/image/ab67616d0000b273b65a0d49c83cf83a9082e1ae",
    spotifyEmbed: "https://open.spotify.com/embed/track/3UStHHOyFXetR5621bKJBz",
  },
  {
    title: "É Amor",
    artist: "Jorge & Mateus",
    cover: "https://i.scdn.co/image/ab67616d0000b273b65a0d49c83cf83a9082e1ae",
    spotifyEmbed: "https://open.spotify.com/embed/track/4CWRKwYu8WTrEBng1JsiIO",
  },
  {
    title: "Chuva de Arroz - Ao Vivo",
    artist: "Luan Santana",
    cover: "https://i.scdn.co/image/ab67616d0000b2735cbeb91004f0a92ab15de39b",
    spotifyEmbed: "https://open.spotify.com/embed/track/66rhnZizvTv2ufYpyHoWoW",
  },
  {
    title: "Cuida Bem Dela (Ao Vivo)",
    artist: "Henrique & Juliano",
    cover: "https://i.scdn.co/image/ab67616d0000b27374538f06508d8a3b26b52fc5",
    spotifyEmbed: "https://open.spotify.com/embed/track/5lEBgfgvNWyFThpFgCw9lL",
  },
  {
    title: "Tubarões - Ao Vivo",
    artist: "Diego & Victor Hugo",
    cover: "https://i.scdn.co/image/ab67616d0000b273d8ee93255a158269d92b0bf7",
    spotifyEmbed: "https://open.spotify.com/embed/track/3JojUdNlifAfB5J9dLvJ9H",
  },
  {
    title: "Apaga Apaga Apaga - Ao Vivo",
    artist: "Danilo e Davi",
    cover: "https://i.scdn.co/image/ab67616d0000b273ee575d99f001805ca93ac8da",
    spotifyEmbed: "https://open.spotify.com/embed/track/17tg01y3RhlfRKMnd333yL",
  },
  {
    title: "Caso Indefinido - Ao Vivo",
    artist: "Cristiano Araújo",
    cover: "https://i.scdn.co/image/ab67616d0000b2739c12f24c564c6b0d7af8fedc",
    spotifyEmbed: "https://open.spotify.com/embed/track/54TwNxgRorpA9lsStXcv0k",
  },
  {
    title: "Dona Encrenca",
    artist: "Natanzinho Lima",
    cover: "https://i.scdn.co/image/ab67616d0000b273a785a9304081f1c2d7fb09ac",
    spotifyEmbed: "https://open.spotify.com/embed/track/5Avx4bKyudd3qhSBFCJ8Mv",
  },
];

export const secrets: string[] = [
  "Uma das frases que eu mais amo é: \"Eu prefiro me afogar no profundo do que morrer sufocado pelo raso\". Ela me representa muito, porque sempre fui uma pessoa que não tem medo de demonstrar o que sente.",
  "Eu amo te ver dormindo. Você é uma pessoa tão forte, mas, quando dorme do meu lado, é o momento em que você repousa em mim. Amo cuidar de você nesses momentos: te ajeitar na cama, te cobrir, te fazer carinho... É quando sinto que realmente estou cuidando de você. E, além disso, amo o fato de você falar coisas nada a ver enquanto dorme.",
  "Eu não ligo para presentes para mim, mas me tornei viciado em te dar presentes porque amo o seu sorriso e a sua animação nos momentos em que recebe algo novo.",
  "Sou uma pessoa muito melancólica. Digo isso porque só consigo escrever poesias quando estou passando por momentos difíceis. As minhas melhores poesias sempre foram falando sobre o fim, sobre a saudade, e nunca sobre o amor. Por isso escrevi cartas para você e não poesias: porque estou feliz, e é bem mais difícil escrever sobre momentos felizes.",
  "Quando eu escolhi as nossas alianças, mesmo sabendo o seu número, eu falei com a Bia para me ajudar e \"roubar\" um anel seu para eu levar de exemplo. Talvez você nem saiba disso até agora.",
  "Antes de te pedir em namoro aqui em casa, a minha intenção era fazer o pedido junto com toda a sua família, porque sei o quanto eles são importantes para você. No dia, eu levei o buquê e as alianças, e cheguei a falar com a sua mãe para me ajudar, mas na hora todo mundo foi dormir e não consegui realizar o plano. Acabou que pedi só com você por perto. E outra curiosidade: aquele buquê de flores que te entreguei quando você foi promovida, na verdade, fazia parte do combo para o pedido de namoro. Como aquela primeira tentativa não deu certo, decidi guardá-lo para te presentear e celebrar a sua promoção.",
  "Sempre que você dorme comigo, eu tiro uma foto sua; tenho várias assim. E não sei se você se lembra, mas eu tenho um álbum no Drive só para colocar fotos suas.",
];
