import React from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Search,
  ShoppingBag,
  TrendingUp,
  Layers,
  Globe,
  Check,
} from 'lucide-react';
import { SafeImage } from './SafeImage';
import { MEDIA_ASSETS } from '../data/ag3Content';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#101110] text-[#FFFDF7] pt-28 pb-16 md:pt-36 md:pb-24 border-b border-white/10"
    >
      {/* Brilho ambiental sutil: violeta, verde-lima e azul técnico */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] w-[520px] h-[520px] rounded-full bg-[#8F5CFF]/16 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-[-8%] w-[400px] h-[400px] rounded-full bg-[#D8FF3E]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[18%] w-[420px] h-[420px] rounded-full bg-[#6DA8FF]/12 blur-[130px]"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna Esquerda: Posicionamento, Selo Shopify Premier Partner e CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Selo Shopify Premier Partner acima do título principal */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 border border-[#D8FF3E]/85 bg-[#171A17]/80 backdrop-blur-md radius-ag3-sm mb-5">
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D8FF3E] shrink-0" aria-hidden="true" />
              <span className="font-display text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap">
                <span className="text-[#FFFDF7]">Shopify</span>{' '}
                <span className="text-[#D8FF3E]">Premier Partner</span>
              </span>
            </div>

            {/* Identificador institucional */}
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.18em] text-[#FFFDF7]/65 mb-4">
              AG3 / E-COMMERCE, DIGITAL EXPERIENCE &amp; PERFORMANCE
            </p>

            {/* Título Principal */}
            <h1 className="font-display text-[clamp(2.15rem,4.1vw,3.65rem)] font-bold leading-[1.06] tracking-tight text-[#FFFDF7] mb-6 max-w-2xl">
              Sua loja virtual merece mais do que apenas{' '}
              <span className="relative inline-block text-[#D8FF3E]">
                estar online
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#D8FF3E]/60"
                />
              </span>{' '}
              na internet. Ela precisa{' '}
              <span className="text-[#D8FF3E]">vender</span>.
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg leading-relaxed text-[#FFFDF7]/78 max-w-xl mb-8">
              A AG3 desenvolve, transforma e gerencia lojas virtuais com estratégias de design,
              tecnologia, SEO e tráfego pago para empresas que desejam crescer no comércio
              eletrônico.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[#D8FF3E] text-[#101110] hover:bg-[#e5ff70] transition-colors duration-150 radius-ag3-sm whitespace-nowrap w-full sm:w-auto"
              >
                <span>Quero transformar minha loja</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium border border-white/20 text-[#FFFDF7] bg-[#171A17]/70 hover:border-[#D8FF3E]/60 hover:text-[#D8FF3E] transition-colors duration-150 radius-ag3-sm whitespace-nowrap w-full sm:w-auto"
              >
                <span>Conhecer nossas soluções</span>
                <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Indicadores estruturais */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/10 text-xs text-[#FFFDF7]/70">
              <div>
                <span className="block font-display text-[#FFFDF7] font-semibold">
                  interface / commerce system
                </span>
                <span className="text-[#FFFDF7]/55">Shopify &amp; Sob medida</span>
              </div>
              <div>
                <span className="block font-display text-[#6DA8FF] font-semibold">
                  discovery
                </span>
                <span className="text-[#FFFDF7]/55">SEO, Google &amp; IA</span>
              </div>
              <div>
                <span className="block font-display text-[#8F5CFF] font-semibold">
                  system ready
                </span>
                <span className="text-[#FFFDF7]/55">UX/UI &amp; Conversão</span>
              </div>
              <div>
                <span className="block font-display text-[#D8FF3E] font-semibold tabular-nums">
                  06 pilares
                </span>
                <span className="text-[#FFFDF7]/55">Operação completa</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Ecossistema Multi-dispositivo (Computador, Tablet e Smartphone) */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#171A17]/90 border border-white/12 p-4 sm:p-6 radius-ag3-lg">
              {/* Barra superior do navegador Desktop */}
              <div className="flex items-center justify-between gap-4 pb-3.5 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-[11px] text-[#FFFDF7]/60">
                  <Globe className="w-3.5 h-3.5 text-[#6DA8FF]" aria-hidden="true" />
                  <span className="truncate">storefront.ag3commerce.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-[#FFFDF7]/65 whitespace-nowrap">
                  <span>Busca</span>
                  <span aria-hidden="true">·</span>
                  <span>Produtos</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#D8FF3E] font-medium">Conversão</span>
                </div>
              </div>

              {/* Composição Desktop + Tablet + Smartphone */}
              <div className="grid grid-cols-12 gap-3.5 items-stretch">
                {/* Frame Computador (Desktop Storefront) */}
                <div className="col-span-12 sm:col-span-8 bg-[#101110] border border-white/10 radius-ag3 overflow-hidden flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <SafeImage
                      src={MEDIA_ASSETS.heroEditorial}
                      alt="Visualização desktop de uma loja virtual premium desenvolvida com estética editorial"
                      className="w-full h-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#101110] via-[#101110]/30 to-transparent"
                    />
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between gap-2">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-[#D8FF3E] font-medium">
                          Experiência digital · Desktop
                        </span>
                        <span className="font-display text-sm sm:text-base font-semibold text-[#FFFDF7]">
                          Vitrine Editorial &amp; Checkout Ágil
                        </span>
                      </div>
                      <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#D8FF3E] text-[#101110] radius-ag3-sm whitespace-nowrap">
                        Comprar
                      </span>
                    </div>
                  </div>

                  {/* Faixa de busca Google & Performance dentro da composição */}
                  <div className="p-3.5 grid grid-cols-2 gap-2.5 border-t border-white/10 text-xs">
                    <div className="bg-[#171A17] border border-white/8 p-2.5 rounded-md">
                      <div className="flex items-center gap-1.5 text-[#6DA8FF] mb-1">
                        <Search className="w-3.5 h-3.5" aria-hidden="true" />
                        <span className="font-medium">Google &amp; SEO</span>
                      </div>
                      <p className="text-[11px] text-[#FFFDF7]/65 leading-snug">
                        Estrutura indexável, Merchant Center e Schema.org
                      </p>
                    </div>
                    <div className="bg-[#171A17] border border-white/8 p-2.5 rounded-md">
                      <div className="flex items-center gap-1.5 text-[#D8FF3E] mb-1">
                        <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
                        <span className="font-medium">Performance</span>
                      </div>
                      <p className="text-[11px] text-[#FFFDF7]/65 leading-snug">
                        Navegação orientada a vendas e crescimento
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coluna Direita Empilhada: Tablet + Smartphone */}
                <div className="col-span-12 sm:col-span-4 flex flex-col gap-3.5">
                  {/* Visualização Tablet */}
                  <div className="bg-[#101110] border border-white/10 radius-ag3 p-3 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[10px] text-[#FFFDF7]/60 mb-2">
                      <span>Tablet · Catálogo</span>
                      <Layers className="w-3 h-3 text-[#8F5CFF]" aria-hidden="true" />
                    </div>
                    <div className="aspect-[4/3] rounded overflow-hidden mb-2.5 border border-white/8">
                      <SafeImage
                        src={MEDIA_ASSETS.footwearStudio}
                        alt="Visualização em tablet de catálogo de produtos otimizado"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-medium text-[#FFFDF7]">Filtros inteligentes</span>
                      <span className="text-[#8F5CFF]">UX/UI</span>
                    </div>
                  </div>

                  {/* Visualização Smartphone */}
                  <div className="bg-[#101110] border border-[#D8FF3E]/35 radius-ag3 p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[10px] text-[#FFFDF7]/65 mb-2">
                      <span>Smartphone · Mobile</span>
                      <span className="text-[#D8FF3E] font-semibold">Pix</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-12 h-12 rounded overflow-hidden shrink-0 border border-white/10">
                        <SafeImage
                          src={MEDIA_ASSETS.cosmeticsStudio}
                          alt="Visualização mobile de página de produto"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold text-[#FFFDF7] truncate">
                          Compra em 1 toque
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#D8FF3E]">
                          <Check className="w-3 h-3" aria-hidden="true" />
                          Checkout móvel ágil
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
