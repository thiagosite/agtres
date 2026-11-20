import React, { useState } from 'react';
import { Check, X, ShieldCheck, Smartphone, ShoppingBag, ArrowRight } from 'lucide-react';
import { CONSUMER_BUY_FACTORS, UX_UI_DELIVERABLES, MEDIA_ASSETS } from '../data/ag3Content';
import { SafeImage } from './SafeImage';

export const UxUiSection: React.FC = () => {
  const [comparisonView, setComparisonView] = useState<'split' | 'antes' | 'depois'>('split');

  return (
    <section
      id="experiencia"
      className="bg-[#101110] text-[#FFFDF7] py-20 md:py-28 border-b border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8F5CFF] mb-3">
            02 · UX/UI Design, Redesign &amp; CRO
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-[#FFFDF7] mb-5">
            Não é apenas um novo layout. É uma nova experiência de compra.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#FFFDF7]/78">
            Transformamos lojas virtuais tradicionais em experiências digitais modernas, intuitivas e
            envolventes, utilizando princípios avançados de UX/UI Design para despertar o desejo de
            compra, melhorar a navegação e aumentar as oportunidades de conversão.
          </p>
        </div>

        {/* O que o consumidor realmente compra */}
        <div className="mb-16">
          <p className="text-sm font-medium text-[#D8FF3E] mb-5">
            O consumidor não compra apenas um produto. Ele também compra:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONSUMER_BUY_FACTORS.map((factor, idx) => (
              <div
                key={factor.title}
                className="bg-[#171A17] border border-white/10 p-5 radius-ag3"
              >
                <span className="block font-display text-xs text-[#FFFDF7]/45 tabular-nums mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#FFFDF7] mb-1.5">
                  {factor.title}
                </h3>
                <p className="text-sm text-[#FFFDF7]/70 leading-relaxed">{factor.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparação Visual: Antes vs Depois */}
        <div className="bg-[#171A17] border border-white/12 p-5 sm:p-8 radius-ag3-lg mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFFDF7]">
                Comparativo estrutural de experiência
              </h3>
              <p className="text-xs sm:text-sm text-[#FFFDF7]/65 mt-1">
                Representação conceitual da evolução de arquitetura, clareza e jornada de compra.
              </p>
            </div>

            <div className="inline-flex items-center gap-1 p-1 bg-[#101110] border border-white/10 rounded-lg self-start">
              <button
                type="button"
                onClick={() => setComparisonView('split')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  comparisonView === 'split'
                    ? 'bg-[#D8FF3E] text-[#101110]'
                    : 'text-[#FFFDF7]/70 hover:text-[#FFFDF7]'
                }`}
              >
                Lado a lado
              </button>
              <button
                type="button"
                onClick={() => setComparisonView('antes')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  comparisonView === 'antes'
                    ? 'bg-white/15 text-[#FFFDF7]'
                    : 'text-[#FFFDF7]/70 hover:text-[#FFFDF7]'
                }`}
              >
                Antes
              </button>
              <button
                type="button"
                onClick={() => setComparisonView('depois')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  comparisonView === 'depois'
                    ? 'bg-[#D8FF3E] text-[#101110]'
                    : 'text-[#FFFDF7]/70 hover:text-[#FFFDF7]'
                }`}
              >
                Depois (AG3)
              </button>
            </div>
          </div>

          <div
            className={`grid gap-6 ${
              comparisonView === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto'
            }`}
          >
            {/* Antes / e-commerce genérico */}
            {(comparisonView === 'split' || comparisonView === 'antes') && (
              <div className="bg-[#101110] border border-white/10 p-5 radius-ag3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <span className="font-display text-sm font-semibold text-[#FFFDF7]/75">
                      Antes / e-commerce genérico
                    </span>
                    <span className="text-xs text-[#FF8D42]">Fricção na jornada</span>
                  </div>

                  {/* Mockup wireframe de loja genérica */}
                  <div className="bg-[#1b1c1b] border border-white/8 p-4 rounded-md mb-5 space-y-3 opacity-80">
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10 text-[11px] text-[#FFFDF7]/45">
                      <span>LOGO GENÉRICO</span>
                      <span>Cat 1 · Cat 2 · Cat 3 · Cat 4 · Promo · Contato</span>
                    </div>
                    <div className="h-20 bg-white/[0.04] border border-dashed border-white/15 rounded flex items-center justify-center text-xs text-[#FFFDF7]/45 text-center px-4">
                      Banner padrão sem hierarquia visual nem proposta de valor clara
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((box) => (
                        <div key={box} className="bg-white/[0.03] p-2 rounded border border-white/8">
                          <div className="h-12 bg-white/[0.05] rounded mb-1.5" />
                          <div className="h-2 w-3/4 bg-white/15 rounded mb-1" />
                          <div className="h-2 w-1/2 bg-white/10 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-[#FFFDF7]/65">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-[#FF8D42] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Menu confuso, categorias desorganizadas e filtros limitados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-[#FF8D42] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Página de produto sem clareza de entrega, variações ou confiança</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-[#FF8D42] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Experiência mobile pesada com botões de compra pouco visíveis</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Depois / experiência desenvolvida pela AG3 */}
            {(comparisonView === 'split' || comparisonView === 'depois') && (
              <div className="bg-[#101110] border border-[#D8FF3E]/45 p-5 radius-ag3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <span className="font-display text-sm font-semibold text-[#FFFDF7]">
                      Depois / experiência desenvolvida pela AG3
                    </span>
                    <span className="text-xs font-medium text-[#D8FF3E]">Foco em conversão</span>
                  </div>

                  {/* Mockup estruturado da experiência AG3 */}
                  <div className="bg-[#171A17] border border-white/12 p-4 rounded-md mb-5 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-[#FFFDF7]/85 pb-2 border-b border-white/10">
                      <span className="font-display font-bold">MARCA CONCEITO</span>
                      <span className="text-[#D8FF3E]">Menu intuitivo · Busca · Sacola</span>
                    </div>
                    <div className="grid grid-cols-12 gap-3 items-center">
                      <div className="col-span-5 aspect-[4/3] rounded overflow-hidden border border-white/10">
                        <SafeImage
                          src={MEDIA_ASSETS.fashionApparel}
                          alt="Exemplo de vitrine estratégica desenvolvida pela AG3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="col-span-7 space-y-2">
                        <span className="block text-[10px] uppercase tracking-wider text-[#6DA8FF]">
                          Vitrine estratégica · Mobile first
                        </span>
                        <p className="font-display text-sm font-semibold text-[#FFFDF7] leading-snug">
                          Seleção direta por tamanho, cor e ocasião de uso
                        </p>
                        <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#FFFDF7]/75">
                          <span className="inline-flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-[#D8FF3E]" aria-hidden="true" />
                            Confiança
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Smartphone className="w-3 h-3 text-[#6DA8FF]" aria-hidden="true" />
                            Mobile fluido
                          </span>
                        </div>
                        <div className="pt-1 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold bg-[#D8FF3E] text-[#101110] rounded">
                            <ShoppingBag className="w-3 h-3" aria-hidden="true" />
                            Comprar agora
                          </span>
                          <span className="text-[11px] text-[#FFFDF7]/60">+ Cross-selling</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-[#FFFDF7]/85">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D8FF3E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Filtros por tamanho, cor, preço e modelo com resposta imediata</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D8FF3E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Checkout simplificado, recomendações e up-selling no carrinho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D8FF3E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Botões de compra em destaque e elementos claros de confiança</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Lista Completa de Entregas em UX/UI & Redesign */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <h3 className="font-display text-2xl font-bold text-[#FFFDF7] mb-3">
              O que transformamos na sua loja
            </h3>
            <p className="text-sm text-[#FFFDF7]/70 leading-relaxed mb-6">
              Atuamos tanto em projetos novos quanto no redesign completo de lojas existentes,
              aplicando boas práticas de CRO em cada ponto de contato.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D8FF3E] hover:underline"
            >
              <span>Avaliar redesign da minha loja</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm text-[#FFFDF7]/85">
            {UX_UI_DELIVERABLES.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 py-2 border-b border-white/8"
              >
                <Check className="w-4 h-4 text-[#8F5CFF] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
