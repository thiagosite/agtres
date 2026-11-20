import React from 'react';
import { Store, Sparkles, Layers, Search, TrendingUp, Cpu, ArrowUpRight } from 'lucide-react';
import { PILLARS, PillarItem } from '../data/ag3Content';

const PILLAR_ICONS: Record<PillarItem['iconKey'], React.ReactNode> = {
  store: <Store className="w-5 h-5" aria-hidden="true" />,
  sparkles: <Sparkles className="w-5 h-5" aria-hidden="true" />,
  layers: <Layers className="w-5 h-5" aria-hidden="true" />,
  search: <Search className="w-5 h-5" aria-hidden="true" />,
  trending: <TrendingUp className="w-5 h-5" aria-hidden="true" />,
  cpu: <Cpu className="w-5 h-5" aria-hidden="true" />,
};

export const PillarsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="pilares-heading"
      className="bg-[#171A17] text-[#FFFDF7] py-16 md:py-20 border-b border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-[#D8FF3E] uppercase mb-2">
              Estrutura Completa
            </p>
            <h2
              id="pilares-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFDF7]"
            >
              Os 06 pilares da AG3 para vender mais
            </h2>
          </div>
          <p className="text-sm text-[#FFFDF7]/70 max-w-md">
            Unimos engenharia de e-commerce, direção de arte, operação mensal e tráfego qualificado
            sob um único ecossistema.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {PILLARS.map((pillar) => (
            <a
              key={pillar.number}
              href={pillar.targetId}
              className="group relative flex flex-col justify-between bg-[#101110] border border-white/10 hover:border-white/25 p-5 radius-ag3 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#D8FF3E]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-xs font-semibold tabular-nums text-[#FFFDF7]/55">
                    {pillar.number}
                  </span>
                  <span
                    className="p-2 rounded-md bg-white/[0.04] text-[#FFFDF7] transition-colors"
                    style={{ color: pillar.accentColor }}
                  >
                    {PILLAR_ICONS[pillar.iconKey]}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold tracking-tight text-[#FFFDF7] mb-1.5 flex items-center justify-between gap-1">
                  <span>{pillar.title}</span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8FF3E] shrink-0"
                    aria-hidden="true"
                  />
                </h3>
                <p className="text-sm text-[#FFFDF7]/70 leading-snug mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Linha colorida inferior */}
              <div
                aria-hidden="true"
                className="h-[3px] w-full rounded-full transition-opacity duration-200 opacity-80 group-hover:opacity-100"
                style={{ backgroundColor: pillar.accentColor }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
