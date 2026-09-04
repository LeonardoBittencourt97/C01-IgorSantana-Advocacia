// ─── Informações da Empresa ──────────────────────────
export const COMPANY = {
  name: "Igor Santana Advocacia",
  shortName: "Igor Santana",
  tagline: "Advocacia Trabalhista",
  description:
    "Defendemos os direitos dos trabalhadores com transparência, ética e excelência. Atuação em todo o Brasil.",
  longDescription:
    "Advogado, sócio-proprietário do escritório Igor Santana Advocacia, com atuação voltada ao Direito do Trabalho. Membro Relator da Comissão do Pacto Global e Sustentabilidade da OAB/PR, contribuindo com pautas voltadas ao trabalho decente e ao crescimento econômico sustentável.",
  oab: "OAB/PR 128.723",
  phone: "(41) 3262-7377",
  phoneFormatted: "+554132627377",
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de mais informações sobre seus serviços.",
  email: "", // PENDENTE - cliente não informou
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
} as const;

// ─── Redes Sociais ──────────────────────────────────
export const SOCIALS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/igorsantanaadv/",
    icon: "instagram" as const,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/p/Igor-Santana-Advocacia-Trabalhista-61574651908384/",
    icon: "facebook" as const,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/igor-santana-adv/",
    icon: "linkedin" as const,
  },
] as const;

// ─── Navegação ──────────────────────────────────────
export const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { label: "Contato", href: "/contato" },
] as const;

// ─── Áreas de Atuação ───────────────────────────────
export const SERVICES = [
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
      " vale-transporte e vale-refeição",
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
export const METRICS = [
  { value: 120, suffix: "+", label: "Avaliações 5 Estrelas", prefix: "" },
  { value: 100, suffix: "+", label: "Clientes Atendidos em 2025", prefix: "" },
  { value: 100, suffix: "%", label: "Dedicação e Compromisso", prefix: "" },
] as const;

// ─── Depoimentos (reais do Google) ──────────────────
export const TESTIMONIALS = [
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
] as const;

// ─── Experiência Profissional ───────────────────────
export const EXPERIENCE = [
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
export const EDUCATION = {
  degree: "Bacharel em Direito",
  institution: "Centro de Ensino Superior de Maringá (CESUMAR)",
  highlights: [
    "Monitor voluntário e programas de pesquisa científica",
    "Publicação de artigo sobre trabalhador eventual e contrato intermitente na Revista Eletrônica do TRT-PR",
    "Programa Voluntário de Iniciação Científica (PVIC) — estudo sobre trabalho de motoristas de aplicativo",
  ],
} as const;

// ─── Comissão OAB/PR ────────────────────────────────
export const OAB_COMMISSION = {
  title: "Membro Relator da Comissão do Pacto Global e Sustentabilidade da OAB/PR",
  description:
    "Contribuindo com pautas voltadas ao trabalho decente e ao crescimento econômico sustentável, alinhando a atuação jurídica aos princípios do desenvolvimento responsável.",
};

// ─── SEO ────────────────────────────────────────────
export const SEO = {
  title: "Igor Santana Advocacia | Advogado Trabalhista em Curitiba",
  description:
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
  url: "https://igorsantanaadv.com.br",
  ogImage: "/images/og-image.png",
};

// ─── Linktree ───────────────────────────────────────
export const LINKTREE = {
  title: "Igor Santana Advocacia",
  subtitle: "Advogado Trabalhista | OAB/PR 128.723",
  links: [
    { label: "Site Oficial", url: "https://igorsantana-advocacia.vercel.app", icon: "globe" as const },
    { label: "WhatsApp", url: `https://wa.me/${COMPANY.phoneFormatted}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`, icon: "whatsapp" as const },
    { label: "Instagram", url: SOCIALS[0].url, icon: "instagram" as const },
    { label: "Facebook", url: SOCIALS[1].url, icon: "facebook" as const },
    { label: "LinkedIn", url: SOCIALS[2].url, icon: "linkedin" as const },
    { label: "Localização", url: COMPANY.mapsRoutesUrl, icon: "mapPin" as const },
  ],
} as const;
