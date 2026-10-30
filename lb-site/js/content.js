/* =====================================================================
   CONTEÚDO DO SITE — Luana Bandouk Atelier
   ---------------------------------------------------------------------
   Este arquivo concentra TODOS os textos, contatos, links, galeria,
   depoimentos e perguntas frequentes. Os vestidos ficam em js/catalogo.js.

   >>> PARA TROCAR O TELEFONE / WHATSAPP: altere apenas as 2 linhas
       "whatsappNumero" e "whatsappExibicao" logo abaixo. O botão flutuante,
       os botões de agendamento, a seleção de vestidos, o rodapé e os dados
       do Google se atualizam sozinhos. <<<

   Regras: mantenha as aspas "" e a vírgula no fim de cada linha.
   Em títulos, o trecho entre *asteriscos* aparece em itálico elegante.
   ===================================================================== */

window.SITE = {

  /* ---------- CONTATO E LOCALIZAÇÃO ---------- */
  atelie: {
    nome: "Luana Bandouk Atelier",
    whatsappNumero: "5511960207771",          // só números: 55 + DDD + número
    whatsappExibicao: "(11) 96020-7771",
    endereco: "R. Prof. Astolfo Tavares Pais, 143 - Cidade São Francisco, São Paulo - SP, 05352-070",
    enderecoLinha1: "R. Prof. Astolfo Tavares Pais, 143",
    enderecoLinha2: "Cidade São Francisco · São Paulo - SP · 05352-070",
    atendimento: "Atendimento exclusivamente com horário marcado.",
    horarios: [
      { dia: "Segunda a sexta-feira", hora: "10h às 19h" },
      { dia: "Sábados", hora: "9h às 16h" },
    ],
    instagram: "https://www.instagram.com/luanabandouk_atelier/",
    facebook: "https://www.facebook.com/profile.php?id=61590352379967",
    tiktok: "https://www.tiktok.com/@luanabandouk_atelier",
    linkedin: "https://www.linkedin.com/in/luana-bandouk-57ba17b5/",
    catalogoCompleto: "https://www2.weblocacao.com.br/public/catalog?id=55F88AECF970FB48A068E674E94284D0",
    // Opcional: cole aqui o link "Incorporar mapa" do Google Maps para um pino exato
    mapaPersonalizado: "",
  },

  /* ---------- MENSAGENS DO WHATSAPP ----------
     {lista} e {vestido} são preenchidos automaticamente pelo site.   */
  mensagens: {
    padrao: "Olá! Vim pelo site do Luana Bandouk Atelier e me encantei com os vestidos. Gostaria de agendar uma visita para viver a experiência de noiva. Quais horários vocês têm disponíveis? 🤍",
    selecao: "Olá! Vim pelo site do Luana Bandouk Atelier e separei meus vestidos favoritos para experimentar:\n\n{lista}\n\nGostaria de agendar uma visita para prová-los. Quais horários vocês têm disponíveis? 🤍",
    vestido: "Olá! Vim pelo site do Luana Bandouk Atelier e me apaixonei pelo vestido {vestido}. Gostaria de agendar uma visita para prová-lo. Quais horários vocês têm disponíveis? 🤍",
  },

  /* ---------- MENU ---------- */
  menu: [
    { texto: "O Ateliê", alvo: "#atelie" },
    { texto: "Vestidos", alvo: "#vestidos" },
    { texto: "Experiência", alvo: "#experiencia" },
    { texto: "Luana", alvo: "#luana" },
    { texto: "Noivas", alvo: "#noivas" },
    { texto: "Visite-nos", alvo: "#visita" },
  ],

  /* ---------- INÍCIO ----------
     "imagens": fotos que alternam dentro do arco (qualquer vestido do catálogo). */
  inicio: {
    selo: "Ateliê de noivas · São Paulo",
    titulo: "Transformando sonhos em *presença.*",
    texto: "Vestidos de noiva exclusivos para locação e venda em São Paulo. Dirigido pela estilista de noivas Luana Bandouk.",
    botaoPrincipal: "Agendar minha visita",
    botaoSecundario: "Ver os vestidos",
    imagens: [
      { src: "assets/img/catalogo/24-aimmee.webp", alt: "Noiva com vestido de renda, mangas longas e véu" },
      { src: "assets/img/catalogo/03-jade-chantilly.webp", alt: "Noiva com vestido de renda chantilly" },
      { src: "assets/img/catalogo/04-anna.webp", alt: "Noiva com vestido liso e véu longo" },
      { src: "assets/img/catalogo/05-triunfo.webp", alt: "Noiva com vestido de saia ampla" },
    ],
    cartao: { titulo: "Mais de 100 modelos", texto: "para locação e venda" },
  },

  /* ---------- FAIXA ANIMADA (palavras que rolam) ---------- */
  faixa: ["Vestidos exclusivos", "Locação e venda", "Consultoria de imagem", "Visagismo", "Atendimento com hora marcada", "São Paulo"],

  /* ---------- O ATELIÊ ---------- */
  sobre: {
    titulo: "Mais do que escolher um vestido, *construir a sua imagem.*",
    paragrafos: [
      "O Luana Bandouk Atelier é um ateliê especializado em moda bridal, liderado pela estilista Luana Bandouk. Em São Paulo, desenvolvemos e oferecemos consultoria de vestidos de noiva exclusivos, disponíveis para locação e para venda.",
      "Nossa proposta vai além da escolha do vestido: visagistas especializadas acompanham a noiva na construção de toda a sua imagem, incluindo véu, acessórios, cabelo, maquiagem e buquê.",
    ],
    pilares: [
      { titulo: "Vestidos exclusivos", texto: "Modelos para locação e venda, com um catálogo sempre atualizado a cada novo lançamento." },
      { titulo: "Imagem completa", texto: "Visagistas especializadas ajudam com véu, acessórios, cabelo, maquiagem e buquê." },
      { titulo: "Hora marcada", texto: "Atendimento exclusivo, para você provar cada vestido com atenção e sem pressa." },
    ],
  },

  /* ---------- CATÁLOGO ---------- */
  catalogo: {
    titulo: "Escolha seus *favoritos.*",
    texto: "Passeie pelos modelos, toque no coração dos que mais encantarem e leve a sua seleção para o dia da visita. Ao agendar, é só enviar a lista pelo WhatsApp.",
    buscaPlaceholder: "Buscar vestido pelo nome",
    maisTexto: "Ver mais vestidos",
    porPagina: 12,
    limiteSelecao: 20,
    completo: {
      titulo: "Quer ver ainda mais?",
      texto: "O catálogo completo, com mais de 100 modelos, é atualizado a cada novo lançamento.",
      botao: "Abrir catálogo completo",
    },
  },

  /* ---------- EXPERIÊNCIA (passo a passo) ---------- */
  experiencia: {
    titulo: "Do primeiro olhar ao *grande dia.*",
    passos: [
      { titulo: "Encante-se", texto: "Explore o catálogo no site e favorite os vestidos que combinam com você." },
      { titulo: "Agende", texto: "Envie sua seleção pelo WhatsApp e reserve o seu horário exclusivo." },
      { titulo: "Viva a experiência", texto: "Visite o ateliê, experimente os vestidos e sinta-se noiva." },
      { titulo: "Construa a sua imagem", texto: "Com as visagistas, escolha véu, acessórios, cabelo, maquiagem e buquê." },
    ],
  },

  /* ---------- LUANA BANDOUK ---------- */
  luana: {
    foto: "assets/img/marca/luana-bandouk.webp",
    fotoAlt: "Luana Bandouk, estilista de noivas, de blazer branco, com fita métrica e tesoura nas mãos",
    selo: "A estilista",
    titulo: "Luana *Bandouk*",
    subtitulo: "Da enfermagem à moda noiva, o cuidado transformado em propósito.",
    paragrafos: [
      "Enfermeira de formação e estilista de moda noiva por vocação, Luana descobriu que a sua missão sempre foi a mesma: cuidar de pessoas.",
      "À frente do Luana Bandouk Atelier, tem o privilégio de vestir histórias, acolher sonhos e fazer parte de um dos dias mais especiais da vida de tantas mulheres.",
      "Esposa, mãe e mulher de fé, acredita que tudo o que é feito com amor se transforma em eternidade.",
    ],
  },

  /* ---------- GALERIA "NOIVAS" ---------- */
  galeria: {
    titulo: "Noivas *reais.*",
    texto: "Momentos de noivas que viveram a experiência no ateliê. Acompanhe mais no nosso Instagram.",
    fotos: [
      { src: "assets/img/galeria/noiva-01.webp", alt: "Noiva com vestido de decote coração e tiara, em um jardim" },
      { src: "assets/img/galeria/noiva-02.webp", alt: "Noiva com véu de renda e colar de pérolas" },
      { src: "assets/img/galeria/noiva-03.webp", alt: "Noiva de cabelo ruivo em retrato delicado" },
      { src: "assets/img/galeria/noiva-04.webp", alt: "Noiva com vestido de peplum, sobre fundo azul" },
      { src: "assets/img/galeria/noiva-05.webp", alt: "Noiva com vestido de ombros com babados, em meio às plantas" },
      { src: "assets/img/galeria/noiva-06.webp", alt: "Noiva com vestido sereia e buquê na varanda" },
      { src: "assets/img/galeria/noiva-07.webp", alt: "Noiva com véu de renda sobre a cabeça" },
      { src: "assets/img/galeria/noiva-08.webp", alt: "Noiva sentada com véu longo e saia ampla" },
      { src: "assets/img/galeria/noiva-09.webp", alt: "Noiva com véu curto de renda" },
      { src: "assets/img/galeria/noiva-10.webp", alt: "Noiva sorrindo com buquê de flores brancas" },
    ],
  },

  /* ---------- DEPOIMENTOS (avaliações 5 estrelas no Google) ---------- */
  depoimentos: {
    titulo: "Noivas que *viveram* o sonho.",
    lista: [
      { nome: "Mariana Carmello", texto: "Me casei em maio de 2026 com o vestido dos meus sonhos! Conheci o ateliê da Luana em abril de 2025 e foi lá que tive o atendimento mais exclusivo e assertivo de todos. Ambiente perfeito, intimista e calmo, perfeito para encontrar seu vestido com calma!" },
      { nome: "Fernanda Albuquerque", texto: "O Ateliê da Lu vai muito além de um contrato de prestação de serviço. No Ateliê, você realmente se sente uma noiva. O espaço é aconchegante e lindo, e tudo é pensado com muito cuidado e carinho." },
      { nome: "Agatha Berti", texto: "O que mais me deixou à vontade foi a transparência, a honestidade e a falta de “pressão” no atendimento. Vocês me mostraram o valor do vestido e não o preço, e me deixaram livre para decidir." },
      { nome: "Sara Aragão", texto: "Minha experiência foi maravilhosa desde a primeira visita até a devolução do meu vestido. Foi literalmente o vestido dos meus sonhos. As meninas são incríveis e eu recomendo de olhos fechados!" },
      { nome: "Isabela Hernandes", texto: "Minha experiência foi maravilhosa! As meninas são incríveis, a Luana me deixou super à vontade e confiante na escolha do meu vestido. Super recomendo!" },
    ],
    rotulo: "Avaliação 5 estrelas no Google",
  },

  /* ---------- VISITA ---------- */
  visita: {
    titulo: "Reserve o seu *momento.*",
    texto: "Nosso atendimento é exclusivo e feito com horário marcado. Fale com uma de nossas consultoras e agende a sua visita ao ateliê.",
    botao: "Agendar pelo WhatsApp",
  },

  /* ---------- PERGUNTAS FREQUENTES ---------- */
  faq: {
    titulo: "Perguntas *frequentes.*",
    lista: [
      { p: "Preciso agendar para ir ao ateliê?", r: "Sim. O atendimento é exclusivamente com horário marcado. Chame-nos pelo WhatsApp para reservar o seu horário." },
      { p: "Quais são os horários de funcionamento?", r: "De segunda a sexta-feira, das 10h às 19h, e aos sábados, das 9h às 16h, sempre com agendamento." },
      { p: "Os vestidos são para locação ou venda?", r: "O ateliê trabalha com vestidos de noiva exclusivos tanto para locação quanto para venda." },
      { p: "Como escolho os vestidos antes da visita?", r: "Navegue pelo catálogo deste site, favorite os modelos de que mais gostou e envie a sua seleção pelo WhatsApp. Se preferir, o catálogo completo, com mais de 100 modelos, também está disponível online." },
      { p: "O ateliê ajuda com véu, acessórios, cabelo e maquiagem?", r: "Sim. Visagistas especializadas acompanham a noiva na construção de toda a sua imagem: véu, acessórios, cabelo, maquiagem e buquê." },
      { p: "Onde fica o ateliê?", r: "Na R. Prof. Astolfo Tavares Pais, 143, Cidade São Francisco, São Paulo - SP. O mapa está logo acima." },
    ],
  },
};
