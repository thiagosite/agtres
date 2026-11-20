import React, { useState } from 'react';
import { ArrowUpRight, X, Check } from 'lucide-react';
import { PORTFOLIO_CONCEPTS, PortfolioConceptItem } from '../data/ag3Content';
import { SafeImage } from './SafeImage';

const FILTER_OPTIONS: { id: 'all' | PortfolioConceptItem['filterKey']; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'moda', label: 'Moda & Acessórios' },
  { id: 'calcados', label: 'Calçados' },
  { id: 'cosmeticos', label: 'Cosméticos' },
  { id: 'eletronicos', label: 'Eletrônicos' },
  { id: 'decoracao', label: 'Decoração' },
];

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | PortfolioConceptItem['filterKey']>('all');
  const [selectedConcept, setSelectedConcept] = useState<PortfolioConceptItem | null>(null);

  const visibleProjects =
    activeFilter === 'all'
      ? PORTFOLIO_CONCEPTS
      : PORTFOLIO_CONCEPTS.filter((item) => item.filterKey === activeFilter);

  return (
    <section
      id="portfolio"
      className="bg-[#171A17] text-[#FFFDF7] py-20 md:py-28 border-b border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D8FF3E] mb-3">
              Portfólio Demonstrativo
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-[#FFFDF7]">
              Experiências digitais desenvolvidas para marcas que querem crescer.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#FFFDF7]/65 max-w-md">
            Conceitos autorais desenvolvidos pela AG3 para demonstrar arquitetura visual, UX/UI e
            posicionamento por segmento. Estrutura preparada para atualização com novos cases.
          </p>
        </div>

        {/* Filtros por Segmento */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filtrar projetos demonstrativos por segmento"
        >
          {FILTER_OPTIONS.map((option) => {
            const isActive = option.id === activeFilter;
            return (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(option.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-[#D8FF3E] text-[#101110]'
                    : 'bg-[#101110] text-[#FFFDF7]/75 border border-white/10 hover:border-white/25 hover:text-[#FFFDF7]'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Cards do Portfólio Demonstrativo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
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
                    className="absolute inset-0 bg-gradient-to-t from-[#101110]/80 via-transparent to-transparent"
                  />
                </div>

                <div className="p-6">
                  {/* Metadado limpo sem pílulas: Segmento · Projeto demonstrativo */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#FFFDF7]/60 mb-2">
                    <span className="text-[#D8FF3E] font-medium">{project.segment}</span>
                    <span aria-hidden="true">·</span>
                    <span>Projeto demonstrativo</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#FFFDF7] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#FFFDF7]/72 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-white/8 flex items-center justify-between">
                <span className="text-xs text-[#FFFDF7]/50">Conceito AG3</span>
                <button
                  type="button"
                  onClick={() => setSelectedConcept(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8FF3E] hover:underline whitespace-nowrap"
                >
                  <span>Visualizar projeto</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal de Visualização de Conceito Demonstrativo */}
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
              aria-label="Fechar visualização do projeto demonstrativo"
              className="absolute top-4 right-4 w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-[#FFFDF7]/75 hover:text-[#FFFDF7] hover:border-white/40"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#D8FF3E] font-medium mb-2">
              <span>{selectedConcept.segment}</span>
              <span aria-hidden="true" className="text-[#FFFDF7]/40">·</span>
              <span className="text-[#FFFDF7]/70">Projeto demonstrativo</span>
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
                Arquitetura planejada neste conceito:
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
              <span className="text-xs text-[#FFFDF7]/55">
                Modelo conceitual sem métricas comerciais fictícias.
              </span>
              <a
                href="#contato"
                onClick={() => setSelectedConcept(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-[#D8FF3E] text-[#101110] radius-ag3-sm"
              >
                <span>Quero uma estrutura assim</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
