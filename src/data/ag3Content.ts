export const MEDIA_ASSETS = {
  heroEditorial: '/src/assets/images/hero_ecommerce_editorial_1795133779244.jpg',
  footwearStudio: '/src/assets/images/product_footwear_studio_1795133780058.jpg',
  cosmeticsStudio: '/src/assets/images/product_cosmetics_studio_1795133779089.jpg',
  fashionApparel: '/src/assets/images/product_fashion_apparel_1795133779634.jpg',
  techAccessories: '/src/assets/images/campaign_tech_accessories_1795133779624.jpg',
} as const;

export interface PillarItem {
  number: string;
  title: string;
  description: string;
  accentColor: string;
  iconKey: 'store' | 'sparkles' | 'layers' | 'search' | 'trending' | 'cpu';
  targetId: string;
}

export const PILLARS: PillarItem[] = [
  {
    number: '01',
    title: 'CRIAÇÃO',
    description: 'Lojas virtuais profissionais',
    accentColor: '#D8FF3E',
    iconKey: 'store',
    targetId: '#solucoes',
  },
  {
    number: '02',
    title: 'TRANSFORMAÇÃO',
    description: 'UX/UI e redesign',
    accentColor: '#8F5CFF',
    iconKey: 'sparkles',
    targetId: '#experiencia',
  },
  {
    number: '03',
    title: 'GESTÃO',
    description: 'Rotina digital contínua',
    accentColor: '#6DA8FF',
    iconKey: 'layers',
    targetId: '#gestao-mensal',
  },
  {
    number: '04',
    title: 'POSICIONAMENTO',
    description: 'SEO e conteúdo',
    accentColor: '#D8FF3E',
    iconKey: 'search',
    targetId: '#seo',
  },
  {
    number: '05',
    title: 'PERFORMANCE',
    description: 'Google Ads e Shopping',
    accentColor: '#FF8D42',
    iconKey: 'trending',
    targetId: '#performance',
  },
  {
    number: '06',
    title: 'INTELIGÊNCIA',
    description: 'Descoberta na era da IA',
    accentColor: '#8F5CFF',
    iconKey: 'cpu',
    targetId: '#ia',
  },
];

export const STORE_CREATION_SERVICES: string[] = [
  'Desenvolvimento de lojas virtuais personalizadas',
  'Design exclusivo de acordo com a identidade da marca',
  'Layout responsivo',
  'Cadastro e organização de produtos',
  'Categorias e filtros inteligentes',
  'Integração com Pix e cartões',
  'Integração com meios de pagamento',
  'Configuração de frete',
  'Carrinho de compras',
  'Recuperação de carrinhos abandonados',
  'Cupons de desconto',
  'Banners promocionais',
  'Páginas institucionais',
  'Integração com WhatsApp',
  'Google Analytics',
  'Google Search Console',
  'Google Merchant Center',
  'Estrutura preparada para SEO',
];

export const STORE_SEGMENTS: string[] = [
  'Moda feminina',
  'Moda masculina',
  'Moda infantil',
  'Cosméticos',
  'Eletrônicos',
  'Calçados',
  'Acessórios',
  'Decoração',
  'Alimentação',
];

export const CONSUMER_BUY_FACTORS = [
  {
    title: 'Apresentação visual',
    detail: 'Direção de arte, fotografia e ritmo de vitrine que valorizam o produto antes mesmo da leitura.',
  },
  {
    title: 'Confiança imediata',
    detail: 'Arquitetura limpa, selos de pagamento claros e políticas acessíveis reduzem objeções no checkout.',
  },
  {
    title: 'Facilidade de navegação',
    detail: 'Menus lógicos e filtros combinados que levam o visitante ao item ideal em poucos cliques.',
  },
  {
    title: 'Contexto de uso',
    detail: 'Composição editorial e informações práticas que ajudam o cliente a visualizar o produto no dia a dia.',
  },
  {
    title: 'Experiência fluida',
    detail: 'Microinterações, resposta ágil no celular e transição natural da vitrine até a finalização do pedido.',
  },
  {
    title: 'Clareza das informações',
    detail: 'Variações, prazos, condições de pagamento e diferenciais organizados sem poluição visual.',
  },
];

export const UX_UI_DELIVERABLES: string[] = [
  'Redesign completo da loja virtual',
  'Novo layout personalizado',
  'Reorganização da página inicial',
  'Nova experiência de navegação',
  'Menu intuitivo',
  'Organização de categorias',
  'Filtros por tamanho, cor, preço e modelo',
  'Vitrines estratégicas',
  'Páginas de produtos mais atrativas',
  'Botões de compra estrategicamente posicionados',
  'Melhorias no carrinho',
  'Checkout simplificado',
  'Experiência otimizada para dispositivos móveis',
  'Elementos de confiança',
  'Destaques para promoções',
  'Recomendações de produtos relacionados',
  'Cross-selling',
  'Up-selling',
  'CRO (Otimização de Conversão)',
];

export const MONTHLY_MANAGEMENT_SERVICES: string[] = [
  'Manutenção técnica',
  'Atualização da loja',
  'Inserção de novos produtos',
  'Cadastro de produtos',
  'Atualização de preços',
  'Atualização de descrições',
  'Organização de categorias',
  'Tratamento de imagens',
  'Atualização de vitrines',
  'Criação de banners',
  'Campanhas promocionais',
  'Cupons de desconto',
  'Campanhas sazonais',
  'Produtos em destaque',
  'Melhorias na apresentação dos produtos',
  'Acompanhamento de desempenho',
  'Suporte mensal',
];

export const SEO_SERVICES: string[] = [
  'Pesquisa estratégica de palavras-chave',
  'Análise de concorrentes',
  'Otimização de títulos',
  'Meta titles',
  'Meta descriptions',
  'SEO em páginas de produtos',
  'SEO em categorias',
  'Otimização de URLs',
  'Dados estruturados Schema.org',
  'Otimização de imagens',
  'Textos alternativos',
  'Links internos',
  'Arquitetura de conteúdo',
  'Google Search Console',
  'Sitemap XML',
  'Monitoramento de indexação',
  'Análise de desempenho orgânico',
];

export interface ConceptualSearchExample {
  query: string;
  title: string;
  url: string;
  description: string;
  schemaType: string;
}

export const CONCEPTUAL_SEARCH_EXAMPLES: ConceptualSearchExample[] = [
  {
    query: 'Comprar vestido feminino online',
    title: 'Vestidos Femininos em Linho e Alfaiataria | Loja Conceito',
    url: 'sualoja.com.br › moda-feminina › vestidos',
    description:
      'Coleção de vestidos femininos com modelagem contemporânea, guia completo de medidas, pagamento via Pix e envio para todo o Brasil.',
    schemaType: 'CollectionPage + Product Offer',
  },
  {
    query: 'Loja de moda masculina',
    title: 'Moda Masculina Essencial: Camisas, Calças e Alfaiataria | Loja Conceito',
    url: 'sualoja.com.br › masculino › colecao',
    description:
      'Peças masculinas em algodão premium e corte estruturado. Consulte disponibilidade por tamanho, trocas facilitadas e parcelas sem juros.',
    schemaType: 'Organization + ItemList',
  },
  {
    query: 'Tênis esportivos em promoção',
    title: 'Tênis Esportivos e Casuais com Condições Especiais | Loja Conceito',
    url: 'sualoja.com.br › calcados › tenis-esportivos',
    description:
      'Seleção de tênis com amortecimento leve, numeração do 34 ao 44 e envio rápido. Confira especificações técnicas e guias de calce.',
    schemaType: 'Product + AggregateOffer',
  },
  {
    query: 'Bolsas femininas',
    title: 'Bolsas Femininas Estruturadas em Couro | Loja Conceito',
    url: 'sualoja.com.br › acessorios › bolsas-femininas',
    description:
      'Bolsas tote, tiracolo e transversais com acabamento artesanal, dimensões detalhadas e entrega segura com rastreio.',
    schemaType: 'CollectionPage + BreadcrumbList',
  },
  {
    query: 'Moda feminina em Alagoas',
    title: 'Moda Feminina com Entrega Rápida em Alagoas e Todo Brasil | Loja Conceito',
    url: 'sualoja.com.br › moda-feminina › alagoas',
    description:
      'Curadoria de moda feminina leve e contemporânea com envio expresso para Maceió, Alagoas e todo o território nacional.',
    schemaType: 'LocalBusiness + Store',
  },
];

export const AI_DISCOVERY_PILLARS: string[] = [
  'Otimização semântica',
  'Organização de informações comerciais',
  'Estruturação de dados Schema.org',
  'Otimização de informações de produtos',
  'Organização de conteúdos',
  'Estrutura técnica para rastreamento',
  'Conteúdos para buscas conversacionais',
  'Preparação para mecanismos de descoberta baseados em IA',
  'Otimização para Google e plataformas de inteligência artificial',
];

export const BLOG_CONTENT_SERVICES: string[] = [
  'Planejamento editorial',
  'Pesquisa de palavras-chave',
  'Produção de artigos otimizados',
  'Artigos educativos',
  'Guias de compra',
  'Comparativos de produtos',
  'Conteúdos sobre tendências',
  'Conteúdos relacionados aos produtos',
  'Otimização de títulos e subtítulos',
  'Links internos',
  'Atualização de conteúdos antigos',
];

export const GOOGLE_ADS_SERVICES: string[] = [
  'Campanhas de pesquisa',
  'Google Shopping',
  'Google Merchant Center',
  'Performance Max',
  'Remarketing',
  'Segmentação por interesses',
  'Segmentação por intenção de compra',
  'Pesquisa de palavras-chave comerciais',
  'Anúncios de produtos',
  'Otimização de campanhas',
  'Gestão de orçamento',
  'Acompanhamento de conversões',
  'Tags',
  'Google Analytics',
  'Relatórios de desempenho',
];

export const BANNER_CAMPAIGN_TYPES: string[] = [
  'Banners para página inicial',
  'Banners de categorias',
  'Black Friday',
  'Natal',
  'Dia das Mães',
  'Dia dos Namorados',
  'Dia dos Pais',
  'Liquidações',
  'Lançamentos',
  'Novas coleções',
  'Campanhas de frete grátis',
  'Cupons promocionais',
  'Produtos em destaque',
];

export interface CampaignGalleryPiece {
  id: string;
  season: string;
  headline: string;
  subline: string;
  cta: string;
  image: string;
  alt: string;
  accent: string;
}

export const CAMPAIGN_GALLERY_PIECES: CampaignGalleryPiece[] = [
  {
    id: 'camp-lancamento',
    season: 'Novas Coleções · Hero Storefront',
    headline: 'Essenciais de Outono em Alfaiataria Urbana',
    subline: 'Peças em lã fria e couro estruturado com curadoria editorial.',
    cta: 'Explorar coleção',
    image: MEDIA_ASSETS.heroEditorial,
    alt: 'Peça demonstrativa de banner para lançamento de coleção de moda feminina',
    accent: '#D8FF3E',
  },
  {
    id: 'camp-calcados',
    season: 'Lançamentos · Banner de Categoria',
    headline: 'Série Minimal em Couro & Malha Técnica',
    subline: 'Numeração completa com envio imediato e primeira troca facilitada.',
    cta: 'Ver modelos',
    image: MEDIA_ASSETS.footwearStudio,
    alt: 'Peça demonstrativa de banner para lançamento de calçados minimalistas',
    accent: '#6DA8FF',
  },
  {
    id: 'camp-black',
    season: 'Black Friday & Tech · Campanha Sazonal',
    headline: 'Seleção Áudio & Workspace com Condições Especiais',
    subline: 'Estrutura visual de alta leitura para campanhas de alta demanda.',
    cta: 'Conferir seleção',
    image: MEDIA_ASSETS.techAccessories,
    alt: 'Peça demonstrativa de campanha promocional para eletrônicos e acessórios',
    accent: '#8F5CFF',
  },
  {
    id: 'camp-maes',
    season: 'Dia das Mães & Natal · Kits Presenteáveis',
    headline: 'Rituais Botânicos de Cuidado Diário',
    subline: 'Apresentação pensada para elevar o ticket médio com kits sazonais.',
    cta: 'Montar presente',
    image: MEDIA_ASSETS.cosmeticsStudio,
    alt: 'Peça demonstrativa de banner sazonal para linha de cosméticos',
    accent: '#FF8D42',
  },
];

export const PRODUCT_OPTIMIZATION_SERVICES: string[] = [
  'Cadastro de produtos',
  'Tratamento de imagens',
  'Títulos comerciais',
  'Descrições persuasivas',
  'Informações técnicas',
  'Categorias',
  'Palavras-chave',
  'SEO',
  'Preços',
  'Promoções',
  'Produtos em destaque',
];

export interface PortfolioConceptItem {
  id: string;
  name: string;
  segment: string;
  filterKey: 'moda' | 'cosmeticos' | 'calcados' | 'eletronicos' | 'decoracao';
  description: string;
  architectureFocus: string[];
  image: string;
  alt: string;
}

export const PORTFOLIO_CONCEPTS: PortfolioConceptItem[] = [
  {
    id: 'concept-atelier-nord',
    name: 'Atelier Nord',
    segment: 'Moda feminina',
    filterKey: 'moda',
    description:
      'Conceito de loja Shopify com vitrines editoriais, filtros por caimento e tecido, e página de produto focada em conversão.',
    architectureFocus: ['Shopify OS 2.0', 'UX/UI Editorial', 'Filtros por tamanho e cor', 'SEO de categorias'],
    image: MEDIA_ASSETS.heroEditorial,
    alt: 'Projeto demonstrativo Atelier Nord — loja virtual conceito de moda feminina',
  },
  {
    id: 'concept-casa-alfaiate',
    name: 'Veste & Forma',
    segment: 'Moda masculina e Acessórios',
    filterKey: 'moda',
    description:
      'Estrutura pensada para moda masculina contemporânea e acessórios em couro, com cross-selling inteligente no carrinho.',
    architectureFocus: ['Lookbook comprável', 'Cross-selling no drawer', 'Tabela de medidas interativa'],
    image: MEDIA_ASSETS.fashionApparel,
    alt: 'Projeto demonstrativo Veste & Forma — loja virtual conceito de moda e acessórios',
  },
  {
    id: 'concept-sola-studio',
    name: 'Sola Studio',
    segment: 'Calçados',
    filterKey: 'calcados',
    description:
      'Vitrine de calçados com seleção rápida de numeração, galeria em alta definição e integração preparada para Google Shopping.',
    architectureFocus: ['Seletor rápido de grade', 'Google Merchant Center', 'Checkout Pix e cartão'],
    image: MEDIA_ASSETS.footwearStudio,
    alt: 'Projeto demonstrativo Sola Studio — loja virtual conceito de calçados',
  },
  {
    id: 'concept-botanica-pura',
    name: 'Ritual Botânico',
    segment: 'Cosméticos',
    filterKey: 'cosmeticos',
    description:
      'Experiência de compra para cosméticos com foco em confiança, transparência de ativos, kits combinados e blog integrado.',
    architectureFocus: ['Kits de up-selling', 'Blog educativo integrado', 'Schema.org Product'],
    image: MEDIA_ASSETS.cosmeticsStudio,
    alt: 'Projeto demonstrativo Ritual Botânico — loja virtual conceito de cosméticos',
  },
  {
    id: 'concept-acustica-lab',
    name: 'Acústica Lab',
    segment: 'Eletrônicos',
    filterKey: 'eletronicos',
    description:
      'Catálogo técnico para eletrônicos e acessórios com fichas comparativas claras, busca inteligente e campanhas sazonais.',
    architectureFocus: ['Fichas técnicas escaneáveis', 'Performance Max ready', 'Busca preditiva'],
    image: MEDIA_ASSETS.techAccessories,
    alt: 'Projeto demonstrativo Acústica Lab — loja virtual conceito de eletrônicos',
  },
  {
    id: 'concept-forma-objeto',
    name: 'Forma & Objeto',
    segment: 'Decoração',
    filterKey: 'decoracao',
    description:
      'Arquitetura digital para objetos de decoração e casa, com cálculo de frete transparente e curadoria por ambiente.',
    architectureFocus: ['Navegação por ambiente', 'Cálculo de frete no PDP', 'SEO semântico'],
    image: MEDIA_ASSETS.fashionApparel,
    alt: 'Projeto demonstrativo Forma & Objeto — loja virtual conceito de decoração',
  },
];

export interface MethodStep {
  step: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export const METHOD_STEPS: MethodStep[] = [
  {
    step: '01',
    title: 'DIAGNÓSTICO',
    summary:
      'Entendemos o negócio, o segmento, os produtos, a concorrência e os objetivos comerciais.',
    deliverables: ['Mapeamento do catálogo', 'Análise da operação atual', 'Levantamento de gargalos de conversão'],
  },
  {
    step: '02',
    title: 'PLANEJAMENTO',
    summary:
      'Definimos a estrutura, a experiência visual, as funcionalidades e as estratégias digitais.',
    deliverables: ['Arquitetura de informação', 'Direção de UX/UI', 'Plano de integrações e canais'],
  },
  {
    step: '03',
    title: 'DESENVOLVIMENTO',
    summary:
      'Criamos ou modernizamos a loja virtual, configurando seus recursos e funcionalidades.',
    deliverables: ['Layout personalizado', 'Pagamentos, frete e WhatsApp', 'Cadastro e organização inicial'],
  },
  {
    step: '04',
    title: 'PUBLICAÇÃO',
    summary:
      'Colocamos a loja no ar, realizamos testes e configuramos as ferramentas de acompanhamento.',
    deliverables: ['Testes de compra e mobile', 'Google Analytics e Search Console', 'Merchant Center e Tags'],
  },
  {
    step: '05',
    title: 'CRESCIMENTO',
    summary:
      'Implementamos estratégias de SEO, conteúdo, Google Ads e otimização da experiência de compra.',
    deliverables: ['SEO técnico e semântico', 'Campanhas no Google Ads', 'Otimização contínua de CRO'],
  },
  {
    step: '06',
    title: 'GESTÃO CONTÍNUA',
    summary:
      'Realizamos atualizações, cadastro de produtos, campanhas, banners, melhorias e acompanhamento mensal.',
    deliverables: ['Novos produtos e vitrines', 'Campanhas sazonais', 'Manutenção e suporte mensal'],
  },
];

export const DIFFERENTIALS: string[] = [
  'Especialização em e-commerce',
  'Shopify Premier Partner',
  'Desenvolvimento personalizado',
  'UX/UI Design',
  'Redesign de lojas virtuais',
  'Gestão mensal especializada',
  'Estratégias de SEO',
  'Tráfego pago no Google',
  'Produção de conteúdo',
  'Cadastro e otimização de produtos',
  'Design de campanhas',
  'Preparação para mecanismos de IA',
  'Foco em experiência e conversão',
  'Acompanhamento contínuo',
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '1. Quanto custa criar uma loja virtual?',
    answer:
      'O investimento varia de acordo com o porte do catálogo, nível de personalização visual, integrações necessárias e serviços complementares (como cadastro completo de produtos, SEO inicial ou tráfego pago). Realizamos um diagnóstico rápido pelo WhatsApp para apresentar uma proposta sob medida para o seu momento.',
  },
  {
    question: '2. Posso ter uma loja virtual mesmo sem experiência?',
    answer:
      'Sim. A AG3 orienta desde a estruturação inicial até a publicação e oferece gestão mensal contínua para cuidar das atualizações técnicas, vitrines, banners e produtos, permitindo que você foque no atendimento, estoque e vendas.',
  },
  {
    question: '3. A AG3 faz o cadastro dos produtos?',
    answer:
      'Sim. Realizamos tanto o cadastro inicial quanto a inclusão recorrente de novos produtos, incluindo tratamento de imagens, títulos comerciais, descrições persuasivas, especificações técnicas, categorias, variações e SEO.',
  },
  {
    question: '4. Vocês fazem manutenção mensal?',
    answer:
      'Sim. Nosso plano de gestão mensal cobre manutenção técnica, atualização de preços e descrições, organização de categorias, troca de vitrines e banners, criação de campanhas promocionais, cupons e suporte contínuo.',
  },
  {
    question: '5. Minha loja pode aparecer no Google?',
    answer:
      'Sim. Estruturamos a loja desde a base seguindo boas práticas técnicas de SEO, sitemap XML, URLs amigáveis, integração com Google Search Console e dados estruturados, além de estratégias de conteúdo e Google Ads para ampliar a visibilidade nas buscas.',
  },
  {
    question: '6. Como funciona o trabalho de SEO?',
    answer:
      'Atuamos em pesquisa de palavras-chave comerciais, análise de concorrentes, otimização de títulos, meta titles, meta descriptions, páginas de categorias e produtos, imagens, links internos, dados estruturados Schema.org e monitoramento no Google Search Console.',
  },
  {
    question: '7. Vocês fazem anúncios no Google?',
    answer:
      'Sim. Planejamos e gerenciamos campanhas de Rede de Pesquisa, Google Shopping (via Google Merchant Center), Performance Max e Remarketing, com configuração completa de tags de conversão e Google Analytics.',
  },
  {
    question: '8. O investimento em anúncios está incluído na gestão?',
    answer:
      'Não. O valor investido diretamente nas plataformas de mídia (verba de anúncios no Google) é separado da taxa de gestão e estratégia da AG3, garantindo total transparência sobre o orçamento de mídia.',
  },
  {
    question: '9. Posso contratar apenas o tráfego pago?',
    answer:
      'Sim. Os serviços de Google Ads e Google Shopping podem ser contratados de forma individual para uma loja que já está no ar, ou integrados à criação, redesign e gestão mensal completa da AG3.',
  },
  {
    question: '10. Vocês fazem redesign de lojas existentes?',
    answer:
      'Sim. Se a sua loja atual já existe, mas tem visual genérico, navegação confusa ou baixa clareza no mobile, executamos um redesign completo com foco em UX/UI Design, organização de vitrines e melhorias no fluxo até o checkout.',
  },
  {
    question: '11. Como funciona o UX/UI Design?',
    answer:
      'Analisamos a jornada do comprador na sua loja para reorganizar menus, filtros, páginas de produto, botões de compra, carrinho, recomendações de cross-selling e elementos de confiança, unindo estética autoral e clareza comercial.',
  },
  {
    question: '12. Vocês criam banners promocionais?',
    answer:
      'Sim. Desenvolvemos peças visuais para página inicial, categorias, lançamentos, novas coleções, campanhas de frete grátis, cupons e datas sazonais como Black Friday, Natal, Dia das Mães, Dia dos Namorados e Dia dos Pais.',
  },
  {
    question: '13. Posso contratar produção de artigos?',
    answer:
      'Sim. Oferecemos planejamento editorial e produção de artigos otimizados para SEO, guias de compra, comparativos e conteúdos educativos integrados à loja para gerar autoridade e atrair visitantes qualificados.',
  },
  {
    question: '14. É possível preparar minha loja para pesquisas feitas por inteligência artificial?',
    answer:
      'Sim. Trabalhamos na organização semântica de conteúdos, detalhamento claro de informações de produtos, estrutura técnica rastreável e dados estruturados Schema.org para melhorar a compreensão da marca por buscadores e sistemas baseados em IA — sempre como preparação estratégica e técnica contínua, sem promessas irreais de inclusão automática.',
  },
  {
    question: '15. A AG3 atende lojas de moda feminina e masculina?',
    answer:
      'Sim. Atendemos marcas de moda feminina, masculina e infantil, além de segmentos como calçados, acessórios, cosméticos, eletrônicos, decoração e alimentação, adaptando a linguagem visual e os filtros às particularidades de cada nicho.',
  },
];
