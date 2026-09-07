// ─── Informações da Empresa ──────────────────────────
export const company = {
  name: "Igor Santana Advocacia",
  shortName: "Igor Santana",
  tagline: "Advocacia Trabalhista",
  description:
    "Defendemos os direitos dos trabalhadores com transparência, ética e excelência. Atuação em todo o Brasil.",
  longDescription:
    "Advogado, sócio-proprietário do escritório Igor Santana Advocacia, com atuação voltada ao Direito do Trabalho. Membro Relator da Comissão do Pacto Global e Sustentabilidade da OAB/PR, contribuindo com pautas voltadas ao trabalho decente e ao crescimento econômico sustentável.",
  oab: "OAB/PR 128.723",
  phone: "(41) 3262-7377",
  phoneWa: "+554132627377",
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de mais informações sobre seus serviços.",
  email: "",
  domain: "https://igorsantana-advocacia.vercel.app",
  address: {
    street: "Rua Pedro Gusso, 4127",
    complement: "Sala 6",
    neighborhood: "Cidade Industrial de Curitiba (CIC)",
    city: "Curitiba",
    state: "PR",
    zip: "81315-000",
    full:
      "Rua Pedro Gusso, 4127, Sala 6 — CIC, Curitiba/PR, 81315-000",
  },
  mapsUrl:
    "https://www.google.com/maps/place/Igor+Santana+Advocacia+Trabalhista/data=!4m2!3m1!1s0x0:0xcc20852449a123f4?sa=X&ved=1t:2428&ictx=111",
  mapsRoutesUrl:
    "https://www.google.com/maps/dir//R.+Pedro+Gusso,+4127+-+Sl+6+-+Cidade+Industrial+de+Curitiba,+Curitiba+-+PR,+81315-000",
  coordinates: { lat: -25.4531, lng: -49.3182 },
  social: {
    instagram: "https://www.instagram.com/igorsantanaadv/",
    facebook:
      "https://www.facebook.com/p/Igor-Santana-Advocacia-Trabalhista-61574651908384/",
    linkedin: "https://www.linkedin.com/in/igor-santana-adv/",
  },
} as const;

// ─── Cores ──────────────────────────────────────────
export const colors = {
  background: "#060608",
  card: "#0c0c10",
  border: "#1e1e24",
  textPrimary: "#f0ece4",
  textSecondary: "#9a9590",
  gold: "#c8a44e",
  goldLight: "#d4b76a",
  goldDark: "#a88a3a",
} as const;

// ─── SEO ────────────────────────────────────────────
export const seo = {
  titleTemplate: "%s | Igor Santana Advocacia",
  defaultTitle:
    "Igor Santana Advocacia | Advogado Trabalhista em Curitiba",
  defaultDescription:
    "Advogado trabalhista em Curitiba com +120 avaliações 5 estrelas. Atuação em todo o Brasil. Acidente de trabalho, vínculo empregatício, estabilidade e mais.",
  keywords: [
    "advogado trabalhista curitiba",
    "advogado trabalhista",
    "direito do trabalho",
    "reclamação trabalhista",
    "acidente de trabalho",
    "vínculo empregatício",
    "estabilidade no emprego",
    "advogado curitiba",
    "igor santana advogado",
    "oab pr",
  ],
  ogImage: "/images/og-image.png",
  url: "https://igorsantana-advocacia.vercel.app",
} as const;

// ─── Navegação ──────────────────────────────────────
export const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
] as const;

// ─── Áreas de Atuação ───────────────────────────────
export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  features: readonly string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "acidente-de-trabalho",
    title: "Acidente de Trabalho",
    shortTitle: "Acidente de Trabalho",
    description:
      "Reconhecimento de estabilidade acidentária e indenizações por danos materiais e morais decorrentes de acidentes de trabalho.",
    features: [
      "Estabilidade acidentária (art. 118, Lei 8.213/91)",
      "Indenização por danos materiais e morais",
      "Auxílio-doença e aposentadoria por invalidez",
      "Perícia médica e laudos técnicos",
      "Recurso em instâncias superiores",
    ],
    icon: "Shield",
  },
  {
    slug: "reconhecimento-de-vinculo",
    title: "Reconhecimento de Vínculo",
    shortTitle: "Vínculo Empregatício",
    description:
      "Comprovação de relação de emprego para garantia de todos os direitos trabalhistas, incluindo FGTS, férias e 13º salário.",
    features: [
      "Comprovação de vínculo empregatício",
      "Pagamento de verbas rescisórias",
      "FGTS e multa de 40%",
      "Férias proporcionais e 13º salário",
      "Horas extras e adicional noturno",
    ],
    icon: "Link",
  },
  {
    slug: "estabilidade-no-emprego",
    title: "Estabilidade no Emprego",
    shortTitle: "Estabilidade",
    description:
      "Proteção contra demissão arbitrária para categorias com estabilidade garantida por lei ou convenção coletiva.",
    features: [
      "Estabilidade de gestantes e lactantes",
      "Estabilidade de CIPA",
      "Estabilidade do acidentado",
      "Estabilidade por negociação coletiva",
      "Reintegração e indenização",
    ],
    icon: "Lock",
  },
  {
    slug: "horas-extras-e-beneficios",
    title: "Horas Extras e Benefícios",
    shortTitle: "Horas Extras",
    description:
      "Cobrança de horas extras, adicionais e benefícios não pagos corretamente pelo empregador.",
    features: [
      "Horas extras com adicional de 50%",
      "Adicional noturno (22h às 5h)",
      "Adicional de periculosidade e insalubridade",
      "DSR e descanso semanal remunerado",
      "Vale-transporte e vale-refeição",
    ],
    icon: "Clock",
  },
  {
    slug: "demissao-sem-justa-causa",
    title: "Demissão sem Justa Causa",
    shortTitle: "Demissão",
    description:
      "Garantia de todos os direitos na rescisão contratual, incluindo aviso prévio, multa do FGTS e seguro-desemprego.",
    features: [
      "Aviso prévio proporcional",
      "Multa de 40% sobre o FGTS",
      "Saldo de salário e férias proporcionais",
      "13º proporcional",
      "Seguro-desemprego e guias CD/SD",
    ],
    icon: "UserX",
  },
  {
    slug: "contrato-de-trabalho",
    title: "Contrato de Trabalho",
    shortTitle: "Contratos",
    description:
      "Análise, elaboração e revisão de contratos de trabalho para garantir conformidade legal e proteção dos direitos.",
    features: [
      "Revisão de contrato de trabalho",
      "Contrato por prazo determinado",
      "Contrato intermitente",
      "Acordo de compensação de jornada",
      "Teletrabalho e home office",
    ],
    icon: "FileText",
  },
] as const;

// ─── Números / Métricas ─────────────────────────────
export const metrics = [
  { value: 120, suffix: "+", label: "Avaliações 5 Estrelas", prefix: "" },
  { value: 100, suffix: "+", label: "Clientes Atendidos em 2025", prefix: "" },
  { value: 100, suffix: "%", label: "Dedicação e Compromisso", prefix: "" },
] as const;

// ─── Depoimentos (reais do Google) ──────────────────
export type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Augusto Cezar Pereira de Souza",
    text: "Excelente profissional, suporte total para o cliente com esclarecimentos das estratégias do processo. Super recomendável.",
    rating: 5,
  },
  {
    name: "Fernanda Fer",
    text: "Ótima advocacia, excelente atendimento e um profissional muito raro que realmente faz o trabalho direito e perfeito. Muito agradecida ao Dr. Igor Santana.",
    rating: 5,
  },
  {
    name: "Jefferson Lima",
    text: "Ótimo atendimento, retorno rápido, atenciosos e tiram todas as suas dúvidas. Tudo bem claro e muita transparência no processo.",
    rating: 5,
  },
  {
    name: "KAIOCOSTA Costa",
    text: "Igor Santana Advocacia eu super recomendo. São muito profissionais e de uma reputação bem valorizada. Se precisar é só chamar.",
    rating: 5,
  },
  {
    name: "Natalia Camargo",
    text: "Ótimos profissionais, realizaram meu processo trabalhista, um acordo muito bom para ambas as partes. Processo finalizado com muita competência em prazo menor que o esperado. Indico a todos.",
    rating: 5,
  },
  {
    name: "Andreia Cabral",
    text: "Muito satisfeita com o resultado, ótimo suporte e atendimento, processo extremamente rápido e sem estresse. Recomendo de olhos fechados!",
    rating: 5,
  },
];

// ─── Experiência Profissional ───────────────────────
export const experience = [
  {
    role: "Advogado — Sócio-Proprietário",
    company: "Igor Santana Advocacia",
    period: "Maio 2025 — Atual",
    location: "Curitiba, PR",
    description:
      "Advocacia trabalhista com atuação em todo o Brasil. Defesa dos direitos de trabalhadores e empregadores com ética e excelência.",
  },
  {
    role: "Advogado",
    company: "Laquila Advogados",
    period: "Outubro 2024 — Maio 2025",
    location: "Curitiba, PR",
    description:
      "Confeção de Reclamatórias Trabalhistas em âmbito nacional, envolvendo diversas demandas trabalhistas, como acidentes de trabalho, reconhecimento de vínculo de emprego, estabilidade no emprego.",
  },
  {
    role: "Estagiário",
    company: "Ludkevitch Tourinho Gomes Sociedade de Advogados",
    period: "Novembro 2022 — Setembro 2024",
    location: "Curitiba, PR",
    description:
      "Elaboração de contratos, notificações extrajudiciais, petição inicial, contestação, recursos e contrarrazões recursais. Atuação nos Estados do PR e SC.",
  },
  {
    role: "Estagiário",
    company: "Küster Machado Advogados",
    period: "Março 2022 — Novembro 2022",
    location: "Curitiba, PR",
    description:
      "Elaboração de manifestações processuais, emissão de guias de custas, consultas processuais pelo PROJUDI e EPROC.",
  },
] as const;

// ─── Formação Acadêmica ─────────────────────────────
export const education = {
  degree: "Bacharel em Direito",
  institution: "Centro de Ensino Superior de Maringá (CESUMAR)",
  highlights: [
    "Monitor voluntário e programas de pesquisa científica",
    "Publicação de artigo sobre trabalhador eventual e contrato intermitente na Revista Eletrônica do TRT-PR",
    "Programa Voluntário de Iniciação Científica (PVIC) — estudo sobre trabalho de motoristas de aplicativo",
  ],
} as const;

// ─── Comissão OAB/PR ────────────────────────────────
export const oabCommission = {
  title:
    "Membro Relator da Comissão do Pacto Global e Sustentabilidade da OAB/PR",
  description:
    "Contribuindo com pautas voltadas ao trabalho decente e ao crescimento econômico sustentável, alinhando a atuação jurídica aos princípios do desenvolvimento responsável.",
};

// ─── Blog Posts ─────────────────────────────────────
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "quando-entrar-com-reclamacao-trabalhista",
    title: "Quando o Trabalhador Pode Entrar com Reclamação Trabalhista",
    excerpt:
      "Entenda em quais situações você tem direito de ingressar com uma reclamação trabalhista e quais os prazos importantes.",
    content: `A reclamação trabalhista é o principal instrumento do trabalhador para garantir seus direitos na Justiça do Trabalho. Mas quando é possível entrar com uma ação trabalhista?

## Situações que justificam uma reclamação trabalhista

Existem diversas situações em que o trabalhador pode buscar a Justiça do Trabalho:

### 1. Verbas rescisórias não pagas
Quando o empregador não paga corretamente as verbas rescisórias após a demissão, como aviso prévio, saldo de salário, férias proporcionais e 13º proporcional.

### 2. Horas extras não compensadas
Se você trabalhou horas extras sem receber o adicional de 50% (ou o percentual previsto na convenção coletiva), tem direito a cobrar judicialmente.

### 3. FGTS e multa de 40%
O não recolhimento do FGTS ou a ausência da multa de 40% na demissão sem justa causa são motivos claros para ação.

### 4. Assédio moral ou sexual
Situações de humilhação, constrangimento ou assédio no ambiente de trabalho também podem ser objeto de reclamação trabalhista.

### 5. Acidente de trabalho
Quando o trabalhador sofre um acidente e não recebe os benefícios devidos, como estabilidade acidentária ou indenização.

## Prazos importantes

- **2 anos** após a saída da empresa para ações principais
- **5 anos** durante o contrato de trabalho (prescrição quinquenal)
- **Até 12 meses** após o término do contrato paraFGTS

## Como começar

O primeiro passo é reunir documentos como cartão de ponto, holerites, contrato de trabalho e comprovantes de depósito do FGTS. Com esses documentos, um advogado trabalhista poderá analisar seu caso e orientar sobre a melhor estratégia.

**Precisa de orientação?** Entre em contato para uma avaliação do seu caso.`,
    date: "01/09/2026",
    readTime: "5 min",
    category: "Direito Trabalhista",
  },
  {
    slug: "estabilidade-acidentaria-o-que-voce-precisa-saber",
    title: "Estabilidade Acidentária: O Que Você Precisa Saber",
    excerpt:
      "Saiba o que é a estabilidade acidentária, quem tem direito e como garantir seus direitos após um acidente de trabalho.",
    content: `A estabilidade acidentária é um dos direitos mais importantes do trabalhador que sofre um acidente de trabalho. Vamos esclarecer as principais dúvidas sobre esse tema.

## O que é a estabilidade acidentária?

A estabilidade acidentária é o direito do trabalhador acidentado de não ser demitido sem justa causa pelo período de **12 meses** após o retorno ao trabalho, conforme o art. 118 da Lei 8.213/91.

## Quem tem direito?

Tem direito à estabilidade acidentária:
- Trabalhadores que sofreram acidente de trabalho ou doença ocupacional
- Trabalhadores que receberam auxílio-doença previdenciário (B31)
- O período de 12 meses conta a partir da alta médica ou do retorno ao trabalho

## O que fazer se for demitido?

Se você foi demitido sem justa causa durante o período de estabilidade, tem direito à **reintegração** ou, se não for possível, à **indenização** correspondente ao período restante de estabilidade.

## Documentos importantes

- CAT (Comunicação de Acidente de Trabalho)
- Laudos médicos
- Atestados de retorno ao trabalho
- Comunicação de afastamento

## Prazo para ação

O trabalhador tem até **2 anos** após a demissão para ingressar com reclamação trabalhista pleiteando seus direitos.

**Foi demitido estando estável?** Consulte um advogado trabalhista para avaliar seu caso.`,
    date: "25/08/2026",
    readTime: "4 min",
    category: "Direito Trabalhista",
  },
  {
    slug: "demissao-sem-justa-causa-seus-direitos",
    title: "Demissão sem Justa Causa: Conheça Todos os Seus Direitos",
    excerpt:
      "Lista completa de direitos do trabalhador demitido sem justa causa, desde verbas rescisórias até seguro-desemprego.",
    content: `Ser demitido sem justa causa é uma situação difícil, mas é importante conhecer todos os seus direitos para garantir que sejam respeitados.

## Direitos na demissão sem justa causa

### 1. Aviso prévio
O aviso prévio pode ser trabalhado ou indenizado. O período é de **30 dias + 3 dias por ano de trabalho**, limitado a 90 dias.

### 2. Saldo de salário
O pagamento dos dias trabalhados no mês da demissão que ainda não foram pagos.

### 3. Férias proporcionais + 1/3
As férias que você acumulou no ano da demissão, acrescidas do terço constitucional.

### 4. 13º salário proporcional
A parcela do 13º salário correspondente aos meses trabalhados no ano.

### 5. Multa de 40% sobre o FGTS
O empregador deve depositar a multa de 40% sobre o saldo da conta do FGTS.

### 6. Saque do FGTS
O trabalhador demitido sem justa causa tem direito a sacar todo o saldo da conta do FGTS.

### 7. Seguro-desemprego
Benefício temporário pago ao trabalhador demitido sem justa causa, por 3 a 5 parcelas, dependendo do tempo de trabalho.

## Como calcular suas verbas

É importante verificar se todas as verbas estão corretas. Erros comuns incluem:
- Cálculo incorreto do aviso prévio
- Não pagamento das férias proporcionais
- FGTS sem a multa de 40%

## O que fazer se seus direitos não foram respeitados?

Se você identificou que algum direito não foi respeitado, consulte um advogado trabalhista. O prazo para ingressar com reclamação trabalhista é de **2 anos** após a demissão.

**Precisa de ajuda?** Entre em contato para uma avaliação do seu caso.`,
    date: "18/08/2026",
    readTime: "6 min",
    category: "Direito Trabalhista",
  },
];

// ─── Linktree ───────────────────────────────────────
export const linktree = {
  title: "Igor Santana Advocacia",
  subtitle: "Advogado Trabalhista | OAB/PR 128.723",
  links: [
    {
      label: "Site Oficial",
      url: "https://igorsantana-advocacia.vercel.app",
      icon: "globe" as const,
    },
    {
      label: "WhatsApp",
      url: `https://wa.me/${company.phoneWa}?text=${encodeURIComponent(company.whatsappMessage)}`,
      icon: "whatsapp" as const,
    },
    {
      label: "Instagram",
      url: company.social.instagram,
      icon: "instagram" as const,
    },
    {
      label: "Facebook",
      url: company.social.facebook,
      icon: "facebook" as const,
    },
    {
      label: "LinkedIn",
      url: company.social.linkedin,
      icon: "linkedin" as const,
    },
    {
      label: "Localização",
      url: company.mapsRoutesUrl,
      icon: "mapPin" as const,
    },
  ],
} as const;
