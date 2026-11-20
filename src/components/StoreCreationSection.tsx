import React, { useState } from 'react';
import {
  Check,
  SlidersHorizontal,
  CreditCard,
  Truck,
  MessageCircle,
  ShoppingBag,
  ArrowUpRight,
} from 'lucide-react';
import {
  STORE_CREATION_SERVICES,
  STORE_SEGMENTS,
  MEDIA_ASSETS,
} from '../data/ag3Content';
import { SafeImage } from './SafeImage';

interface StorePreviewPreset {
  id: string;
  label: string;
  brand: string;
  headline: string;
  category: string;
  price: string;
  installment: string;
  filters: string[];
  image: string;
}

const STORE_PRESETS: StorePreviewPreset[] = [
  {
    id: 'moda-feminina',
    label: 'Moda feminina',
    brand: 'ATELIER NORD',
    headline: 'Coleção Alfaiataria & Couro Estruturado',
    category: 'Casacos · Bolsas · Vestidos',
    price: 'R$ 689,00',
    installment: '6x de R$ 114,83 sem juros ou 5% no Pix',
    filters: ['Tamanho P / M / G', 'Cor Carvão', 'Pronta entrega'],
    image: MEDIA_ASSETS.heroEditorial,
  },
  {
    id: 'calcados',
    label: 'Calçados',
    brand: 'SOLA STUDIO',
    headline: 'Linha Minimal em Couro Legítimo & Mesh',
    category: 'Tênis · Casuais · Lançamentos',
    price: 'R$ 549,00',
    installment: '6x de R$ 91,50 sem juros ou Pix imediato',
    filters: ['Numeração 35–43', 'Cor Areia', 'Frete expresso'],
    image: MEDIA_ASSETS.footwearStudio,
  },
  {
    id: 'cosmeticos',
    label: 'Cosméticos',
    brand: 'RITUAL BOTÂNICO',
    headline: 'Sérum Concentrado & Hidratação Facial',
    category: 'Skincare · Kits · Rotina Diária',
    price: 'R$ 239,00',
    installment: '3x de R$ 79,66 sem juros ou Pix',
    filters: ['Pele Mista', 'Fórmula Vegana', 'Kit completo'],
    image: MEDIA_ASSETS.cosmeticsStudio,
  },
  {
    id: 'eletronicos',
    label: 'Eletrônicos',
    brand: 'ACÚSTICA LAB',
    headline: 'Headphone Studio ANC & Acessórios de Mesa',
    category: 'Áudio · Workspace · Conectividade',
    price: 'R$ 1.290,00',
    installment: '10x de R$ 129,00 sem juros ou 7% no Pix',
    filters: ['Bluetooth 5.3', 'Alumínio Anodizado', 'Garantia Brasil'],
    image: MEDIA_ASSETS.techAccessories,
  },
];

export const StoreCreationSection: React.FC = () => {
  const [activePresetId, setActivePresetId] = useState<string>(STORE_PRESETS[0].id);
  const currentPreset =
    STORE_PRESETS.find((item) => item.id === activePresetId) || STORE_PRESETS[0];

  return (
    <section
      id="solucoes"
      className="bg-[#F7F5EF] text-[#101110] py-20 md:py-28 border-b border-black/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#101110]/60 mb-3">
              01 · Criação de Lojas Virtuais &amp; Shopify
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-[#101110]">
              Sua marca pronta para conquistar o mercado digital.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg leading-relaxed text-[#101110]/75">
              Desenvolvemos lojas virtuais profissionais, personalizadas e preparadas para oferecer
              uma experiência de compra moderna, segura e intuitiva.
            </p>
          </div>
        </div>

        {/* Grid Principal: Mockup Visual Editorial da Loja + Lista de Entregas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Mockup Interativo de Loja Virtual Editorial */}
          <div className="lg:col-span-7 bg-[#FFFDF7] border border-black/12 p-4 sm:p-6 radius-ag3-lg">
            {/* Seletor de Segmento Interativo */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-black/10">
              <span className="text-xs font-medium text-[#101110]/60">
                Simulação de loja editorial · Selecione um segmento:
              </span>
              <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Segmentos de loja demonstrativa">
                {STORE_PRESETS.map((preset) => {
                  const isActive = preset.id === activePresetId;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActivePresetId(preset.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                        isActive
                          ? 'bg-[#101110] text-[#D8FF3E]'
                          : 'bg-[#F7F5EF] text-[#101110]/75 hover:text-[#101110]'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navegação Interna da Loja Simulada */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 bg-[#101110] text-[#FFFDF7] radius-ag3-sm mb-4">
              <span className="font-display text-sm font-bold tracking-wider">
                {currentPreset.brand}
              </span>
              <div className="hidden sm:flex items-center gap-5 text-xs text-[#FFFDF7]/75">
                <span>Novidades</span>
                <span>Categorias</span>
                <span>Coleções</span>
                <span>Sobre a marca</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1.5 text-[#D8FF3E] font-medium">
                  <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
                  Sacola (2)
                </span>
              </div>
            </div>

            {/* Conteúdo Visual do Storefront */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-7 relative aspect-[4/3] sm:aspect-auto sm:min-h-[280px] overflow-hidden radius-ag3 border border-black/10">
                <SafeImage
                  src={currentPreset.image}
                  alt={`Exemplo editorial de loja virtual para ${currentPreset.label}`}
                  className="w-full h-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                />
                <div className="absolute bottom-4 left-4 right-4 text-[#FFFDF7]">
                  <span className="block text-[11px] text-[#D8FF3E] font-medium mb-1">
                    {currentPreset.category}
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug">
                    {currentPreset.headline}
                  </h3>
                </div>
              </div>

              <div className="sm:col-span-5 flex flex-col justify-between bg-[#F7F5EF] border border-black/8 p-4 radius-ag3">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#101110]/70 mb-3">
                    <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Filtros inteligentes ativos</span>
                  </div>
                  <div className="flex flex-col gap-2 mb-5">
                    {currentPreset.filters.map((filter) => (
                      <div
                        key={filter}
                        className="flex items-center justify-between text-xs py-1.5 px-2.5 bg-[#FFFDF7] border border-black/8 rounded"
                      >
                        <span className="text-[#101110]/85">{filter}</span>
                        <Check className="w-3.5 h-3.5 text-[#101110]" aria-hidden="true" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-black/10">
                  <span className="block text-xs text-[#101110]/60">Valor de vitrine conceitual</span>
                  <span className="font-display text-xl font-bold text-[#101110] tabular-nums">
                    {currentPreset.price}
                  </span>
                  <span className="block text-[11px] text-[#101110]/70 mt-0.5 mb-3">
                    {currentPreset.installment}
                  </span>

                  <div className="grid grid-cols-3 gap-1.5 text-[11px] text-[#101110]/80">
                    <div className="flex items-center gap-1 bg-[#FFFDF7] px-2 py-1.5 rounded border border-black/8">
                      <CreditCard className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>Pix</span>
                    </div>
                    <div className="flex items-center gap-1 bg-[#FFFDF7] px-2 py-1.5 rounded border border-black/8">
                      <Truck className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>Frete</span>
                    </div>
                    <div className="flex items-center gap-1 bg-[#FFFDF7] px-2 py-1.5 rounded border border-black/8">
                      <MessageCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>Whats</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Segmentos Atendidos */}
            <div className="mt-6 pt-5 border-t border-black/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#101110]/60 mb-2.5">
                Experiência adaptada para diversos segmentos
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-medium text-[#101110]">
                {STORE_SEGMENTS.map((segment, index) => (
                  <React.Fragment key={segment}>
                    <span>{segment}</span>
                    {index < STORE_SEGMENTS.length - 1 && (
                      <span aria-hidden="true" className="text-[#101110]/30">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Lista Estruturada dos 18 Recursos de Criação */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FFFDF7] border border-black/12 p-6 sm:p-7 radius-ag3-lg">
            <div>
              <h3 className="font-display text-xl font-bold text-[#101110] mb-2">
                Estrutura completa para operar e vender
              </h3>
              <p className="text-sm text-[#101110]/70 mb-6">
                Cada loja nasce pronta para conversão, rastreamento de dados e descoberta orgânica.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#101110]/85">
                {STORE_CREATION_SERVICES.map((service) => (
                  <li key={service} className="flex items-start gap-2 leading-snug">
                    <span
                      aria-hidden="true"
                      className="mt-1 w-4 h-4 rounded-sm bg-[#101110] text-[#D8FF3E] flex items-center justify-center shrink-0"
                    >
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#101110]/65">
                Implementação Shopify Premier Partner ou sob medida
              </span>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold bg-[#101110] text-[#D8FF3E] hover:bg-[#171A17] transition-colors radius-ag3-sm whitespace-nowrap shrink-0"
              >
                <span>Solicitar projeto</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
