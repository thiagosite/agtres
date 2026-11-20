import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/ag3Content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="bg-[#FFFDF7] text-[#101110] py-20 md:py-28 border-b border-black/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#101110]/60 mb-3">
              Perguntas Frequentes
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[#101110] mb-4">
              Dúvidas comerciais e técnicas respondidas com clareza.
            </h2>
            <p className="text-sm text-[#101110]/70 leading-relaxed">
              Transparência desde o primeiro contato sobre prazos, plataforma, gestão mensal,
              anúncios no Google e preparação para buscas com IA.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-black/12 border-t border-b border-black/12">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `faq-panel-${idx}`;
              const buttonId = `faq-button-${idx}`;
              return (
                <div key={item.question} className="py-4 sm:py-5">
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
                      className="pt-3 pr-10 text-sm sm:text-base text-[#101110]/78 leading-relaxed"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
