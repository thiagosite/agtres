import React, { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { METHOD_STEPS, DIFFERENTIALS } from '../data/ag3Content';

export const MethodAndDifferentialsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>(METHOD_STEPS[0].step);

  return (
    <>
      {/* MÉTODO DE TRABALHO (Fundo editorial claro #F7F5EF) */}
      <section
        id="metodo"
        className="bg-[#F7F5EF] text-[#101110] py-20 md:py-28 border-b border-black/10"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#101110]/60 mb-3">
              Método de Trabalho AG3
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-[#101110]">
              Estratégia, tecnologia e acompanhamento em cada etapa.
            </h2>
          </div>

          {/* Linha do Tempo Interativa em 6 Etapas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {METHOD_STEPS.map((item) => {
              const isSelected = item.step === activeStep;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(item.step)}
                  className={`text-left p-6 radius-ag3 border transition-all duration-150 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#101110] text-[#FFFDF7] border-[#101110]'
                      : 'bg-[#FFFDF7] text-[#101110] border-black/12 hover:border-black/35'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-display text-sm font-bold tabular-nums ${
                          isSelected ? 'text-[#D8FF3E]' : 'text-[#101110]/55'
                        }`}
                      >
                        {item.step}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`h-[2px] w-10 ${
                          isSelected ? 'bg-[#D8FF3E]' : 'bg-black/15'
                        }`}
                      />
                    </div>

                    <h3 className="font-display text-xl font-bold tracking-tight mb-2.5">
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed mb-5 ${
                        isSelected ? 'text-[#FFFDF7]/80' : 'text-[#101110]/72'
                      }`}
                    >
                      {item.summary}
                    </p>
                  </div>

                  <ul
                    className={`space-y-1.5 pt-4 border-t text-xs ${
                      isSelected
                        ? 'border-white/12 text-[#FFFDF7]/85'
                        : 'border-black/8 text-[#101110]/75'
                    }`}
                  >
                    {item.deliverables.map((del) => (
                      <li key={del} className="flex items-center gap-2">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isSelected ? 'text-[#D8FF3E]' : 'text-[#101110]'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS DA AG3 (Fundo escuro #101110) */}
      <section className="bg-[#101110] text-[#FFFDF7] py-20 md:py-24 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D8FF3E] mb-3">
                Por que escolher a AG3
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[#FFFDF7] mb-5">
                Muito além de criar sites. Construímos estruturas digitais para vender.
              </h2>
              <p className="text-base text-[#FFFDF7]/75 leading-relaxed mb-7">
                AG3 — Transformamos lojas virtuais em experiências digitais preparadas para vender
                mais, unindo especialização em Shopify, design estratégico e rotina comercial.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-[#D8FF3E] text-[#101110] hover:bg-[#e5ff70] transition-colors radius-ag3-sm"
              >
                <span>Conversar sobre meu projeto</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {DIFFERENTIALS.map((diff, index) => (
                <div
                  key={diff}
                  className="bg-[#171A17] border border-white/10 px-4 py-3.5 radius-ag3-sm flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xs text-[#FFFDF7]/45 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium text-[#FFFDF7]">{diff}</span>
                  </div>
                  <Check className="w-4 h-4 text-[#D8FF3E] shrink-0" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
