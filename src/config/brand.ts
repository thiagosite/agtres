/**
 * Configurações centrais da marca AG3 e manifesto de rotas por âncora.
 */

// Número oficial do WhatsApp da AG3: (82) 99914-0485
const FALLBACK_WHATSAPP_NUMBER = '5582999140485';

export const AG3_WHATSAPP_NUMBER: string = (
  import.meta.env.VITE_AG3_WHATSAPP_NUMBER || FALLBACK_WHATSAPP_NUMBER
).replace(/\D/g, '');

export const AG3_WHATSAPP_DISPLAY = '(82) 99914-0485';

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${AG3_WHATSAPP_NUMBER}?text=${encoded}`;
}

export const AG3_BRAND = {
  name: 'AG3',
  tagline: 'E-commerce | Digital Experience | Performance',
  centralMessage:
    'AG3 — Transformamos lojas virtuais em experiências digitais preparadas para vender mais.',
  partnerBadge: {
    brand: 'Shopify',
    tier: 'Premier Partner',
  },
  whatsappDisplay: AG3_WHATSAPP_DISPLAY,
  social: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    whatsappDirect: buildWhatsAppUrl(
      'Olá, equipe AG3! Gostaria de conversar com um especialista sobre minha loja virtual.'
    ),
  },
} as const;

export interface RouteEntry {
  id: string;
  label: string;
  href: string;
  inHeader?: boolean;
  inFooter?: boolean;
}

export const ROUTES_MANIFEST: RouteEntry[] = [
  { id: 'inicio', label: 'Início', href: '#inicio', inFooter: true },
  { id: 'solucoes', label: 'Soluções', href: '#solucoes', inHeader: true, inFooter: true },
  { id: 'experiencia', label: 'Experiência', href: '#experiencia', inHeader: true, inFooter: true },
  { id: 'gestao-mensal', label: 'Gestão mensal', href: '#gestao-mensal', inFooter: true },
  { id: 'seo', label: 'SEO', href: '#seo', inFooter: true },
  { id: 'performance', label: 'Performance', href: '#performance', inHeader: true, inFooter: true },
  { id: 'portfolio', label: 'Portfólio', href: '#portfolio', inHeader: true, inFooter: true },
  { id: 'metodo', label: 'Método', href: '#metodo', inHeader: true, inFooter: true },
  { id: 'contato', label: 'Contato', href: '#contato', inFooter: true },
];
