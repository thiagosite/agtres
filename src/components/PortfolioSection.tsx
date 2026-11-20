import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, X, Check, ShoppingBag } from 'lucide-react';
import { PORTFOLIO_CONCEPTS, PortfolioConceptItem } from '../data/ag3Content';
import { SafeImage } from './SafeImage';
import { MotionReveal } from './MotionReveal';

export const PortfolioSection: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<PortfolioConceptItem | null>(null);

  return (
    <section
      id="portfolio"
      className="bg-[#171A17] text-[#FFFDF7] py-16 md:py-22 border-b border-white/10"
    >
      <MotionReveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#D8FF3E] mb-2.5">
              <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Modelos Criados pela Shopify</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[#FFFDF7]">
              Experiências digitais desenvolvidas em Shopify para marcas que querem crescer.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#FFFDF7]/68 max-w-md">
            Três modelos de lojas desenvolvidas na plataforma Shopify como referência de identidade
            visual, organização de vitrines, navegação e conversão em moda feminina.
          </p>
        </div>

        {/* Grid com os 3 Sites Shopify solicitados (SKIMS, Oh Polly, Princess Polly) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_CONCEPTS.map((project) => (
            <article
              key={project.id}
              className="group bg-[#101110] border border-white/10 hover:border-[#D8FF3E]/50 radius-ag3 overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
                  <SafeImage
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#101110]/85 via-transparent to-transparent"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#FFFDF7]/60 mb-2">
                    <span className="text-[#D8FF3E] font-medium">{project.platform}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.segment}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#FFFDF7] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#FFFDF7]/72 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-white/8 flex items-center justify-between gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FFFDF7]/80 hover:text-[#FFFDF7] transition-colors whitespace-nowrap"
                >
                  <span>Visitar loja</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedConcept(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8FF3E] hover:underline whitespace-nowrap"
                >
                  <span>Ver detalhes</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </MotionReveal>

      {/* Modal de Visualização do Modelo Shopify */}
      {selectedConcept && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedConcept(null)}
        >
          <div
            className="bg-[#101110] border border-white/15 max-w-2xl w-full p-6 sm:p-8 radius-ag3-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedConcept(null)}
              aria-label="Fechar detalhes do projeto Shopify"
              className="absolute top-4 right-4 w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-[#FFFDF7]/75 hover:text-[#FFFDF7] hover:border-white/40"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#D8FF3E] font-medium mb-2">
              <span>{selectedConcept.platform}</span>
              <span aria-hidden="true" className="text-[#FFFDF7]/40">·</span>
              <span className="text-[#FFFDF7]/70">{selectedConcept.segment}</span>
            </div>

            <h3
              id="portfolio-modal-title"
              className="font-display text-2xl font-bold text-[#FFFDF7] mb-4"
            >
              {selectedConcept.name}
            </h3>

            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-white/10 mb-5">
              <SafeImage
                src={selectedConcept.image}
                alt={selectedConcept.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[#FFFDF7]/80 leading-relaxed mb-5">
              {selectedConcept.description}
            </p>

            <div className="bg-[#171A17] border border-white/10 p-4 radius-ag3-sm mb-6">
              <span className="block text-xs font-semibold text-[#FFFDF7] mb-2.5">
                Destaques da arquitetura Shopify:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#FFFDF7]/80">
                {selectedConcept.architectureFocus.map((focus) => (
                  <div key={focus} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D8FF3E] shrink-0" aria-hidden="true" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <a
                href={selectedConcept.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FFFDF7]/80 hover:text-[#D8FF3E]"
              >
                <span>Abrir {selectedConcept.url.replace('https://', '').replace(/\/$/, '')}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="#contato"
                onClick={() => setSelectedConcept(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-[#D8FF3E] text-[#101110] radius-ag3-sm"
              >
                <span>Quero uma loja Shopify nesse padrão</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
