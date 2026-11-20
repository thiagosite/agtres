import React, { useState } from 'react';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/ag3Content';
import { MotionReveal } from './MotionReveal';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? FAQ_ITEMS : FAQ_ITEMS.slice(0, 6);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="bg-[#FFFDF7] text-[#101110] py-16 md:py-22 border-b border-black/10"
    >
      <MotionReveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#101110]/60 mb-2.5">
              Perguntas Frequentes
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[#101110] mb-4">
              Dúvidas comerciais e técnicas respondidas com clareza.
            </h2>
            <p className="text-sm text-[#101110]/70 leading-relaxed">
              Transparência desde o primeiro contato sobre prazos, plataforma Shopify, gestão
              mensal, anúncios no Google e preparação para IA.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-black/12 border-t border-b border-black/12">
              {visibleItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                const panelId = `faq-panel-${idx}`;
                const buttonId = `faq-button-${idx}`;
                return (
                  <div key={item.question} className="py-4">
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleItem(idx)}
                        className="w-full flex items-center justify-between gap-4 text-left py-1 font-display text-base sm:text-lg font-semibold text-[#101110] hover:text-[#101110]/75 transition-colors"
                      >
                        <span>{item.question}</span>
                        <span
                          className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-[#101110] text-[#D8FF3E]'
                              : 'bg-[#F7F5EF] text-[#101110] border border-black/10'
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4" aria-hidden="true" />
                          ) : (
                            <Plus className="w-4 h-4" aria-hidden="true" />
                          )}
                        </span>
                      </button>
                    </h3>

                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="pt-2.5 pr-10 text-sm text-[#101110]/78 leading-relaxed"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border border-black/15 bg-[#F7F5EF] text-[#101110] hover:border-black/40 rounded-md transition-colors"
              >
                <span>
                  {showAll ? 'Mostrar menos perguntas' : `Ver todas as ${FAQ_ITEMS.length} perguntas`}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
};
