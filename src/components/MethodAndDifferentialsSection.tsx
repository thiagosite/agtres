import React, { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { METHOD_STEPS, DIFFERENTIALS } from '../data/ag3Content';
import { MotionReveal } from './MotionReveal';

export const MethodAndDifferentialsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>(METHOD_STEPS[0].step);

  return (
    <section
      id="metodo"
      className="bg-[#F7F5EF] text-[#101110] py-16 md:py-22 border-b border-black/10"
    >
      <MotionReveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Método em 6 etapas */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#101110]/60 mb-2">
                Método de Trabalho AG3
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[#101110]">
                Estratégia, tecnologia e acompanhamento em cada etapa.
              </h2>
            </div>
            <p className="text-sm text-[#101110]/70 max-w-sm">
              Do diagnóstico inicial à operação mensal contínua da sua loja virtual.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {METHOD_STEPS.map((item) => {
              const isSelected = item.step === activeStep;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(item.step)}
                  className={`text-left p-5 radius-ag3 border transition-all duration-150 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#101110] text-[#FFFDF7] border-[#101110]'
                      : 'bg-[#FFFDF7] text-[#101110] border-black/12 hover:border-black/35'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-display text-sm font-bold tabular-nums ${
                          isSelected ? 'text-[#D8FF3E]' : 'text-[#101110]/55'
                        }`}
                      >
                        {item.step}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`h-[2px] w-8 ${isSelected ? 'bg-[#D8FF3E]' : 'bg-black/15'}`}
                      />
                    </div>
                    <h3 className="font-display text-lg font-bold tracking-tight mb-1.5">
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                        isSelected ? 'text-[#FFFDF7]/80' : 'text-[#101110]/72'
                      }`}
                    >
                      {item.summary}
                    </p>
                  </div>

                  <ul
                    className={`space-y-1 pt-3 border-t text-xs ${
                      isSelected
                        ? 'border-white/12 text-[#FFFDF7]/85'
                        : 'border-black/8 text-[#101110]/75'
                    }`}
                  >
                    {item.deliverables.map((del) => (
                      <li key={del} className="flex items-center gap-1.5">
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

        {/* Faixa Compacta de Diferenciais AG3 */}
        <div className="bg-[#101110] text-[#FFFDF7] p-6 sm:p-8 radius-ag3-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D8FF3E] mb-2">
                Diferenciais AG3
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight mb-3">
                Muito além de criar sites. Construímos estruturas digitais para vender.
              </h3>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-[#D8FF3E] hover:underline"
              >
                <span>Conversar sobre meu projeto</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#FFFDF7]/85">
              {DIFFERENTIALS.map((diff) => (
                <div key={diff} className="flex items-center gap-2 py-1">
                  <Check className="w-4 h-4 text-[#D8FF3E] shrink-0" aria-hidden="true" />
                  <span>{diff}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
};
