import React, { useEffect, useState } from 'react';
import { Check, ArrowUpRight, Sparkles, Store, Layers, X } from 'lucide-react';
import {
  STORE_CREATION_SERVICES,
  STORE_SEGMENTS,
  CONSUMER_BUY_FACTORS,
  UX_UI_DELIVERABLES,
  MONTHLY_MANAGEMENT_SERVICES,
  PRODUCT_OPTIMIZATION_SERVICES,
  BANNER_CAMPAIGN_TYPES,
} from '../data/ag3Content';
import { MotionReveal } from './MotionReveal';

type SolutionTab = 'criacao' | 'uxui' | 'gestao';

export const SolutionsHubSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SolutionTab>('criacao');

  useEffect(() => {
    const syncTabFromHash = () => {
      const hash = window.location.hash;
      if (hash === '#experiencia') setActiveTab('uxui');
      else if (hash === '#gestao-mensal') setActiveTab('gestao');
      else if (hash === '#solucoes') setActiveTab('criacao');
    };
    syncTabFromHash();
    window.addEventListener('hashchange', syncTabFromHash);
    return () => window.removeEventListener('hashchange', syncTabFromHash);
  }, []);

  return (
    <section
      id="solucoes"
      className="bg-[#F7F5EF] text-[#101110] py-16 md:py-22 border-b border-black/10"
    >
      {/* Âncoras secundárias para navegação direta por hash */}
      <span id="experiencia" className="block -mt-20 pt-20 pointer-events-none" aria-hidden="true" />
      <span id="gestao-mensal" className="block -mt-20 pt-20 pointer-events-none" aria-hidden="true" />

      <MotionReveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho + Seletor de Abas */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#101110]/60 mb-2.5">
              Estrutura &amp; Soluções de E-commerce
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[#101110]">
              Sua marca pronta para conquistar e vender no mercado digital.
            </h2>
          </div>

          {/* Abas Compactas */}
          <div
            role="tablist"
            aria-label="Áreas de atuação da AG3 em lojas virtuais"
            className="inline-flex flex-wrap gap-1.5 p-1.5 bg-[#FFFDF7] border border-black/12 rounded-lg self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'criacao'}
              onClick={() => setActiveTab('criacao')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'criacao'
                  ? 'bg-[#101110] text-[#D8FF3E]'
                  : 'text-[#101110]/75 hover:text-[#101110]'
              }`}
            >
              <Store className="w-4 h-4" aria-hidden="true" />
              <span>Criação &amp; Shopify</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'uxui'}
              onClick={() => setActiveTab('uxui')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'uxui'
                  ? 'bg-[#101110] text-[#D8FF3E]'
                  : 'text-[#101110]/75 hover:text-[#101110]'
              }`}
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>UX/UI &amp; Redesign</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'gestao'}
              onClick={() => setActiveTab('gestao')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'gestao'
                  ? 'bg-[#101110] text-[#D8FF3E]'
                  : 'text-[#101110]/75 hover:text-[#101110]'
              }`}
            >
              <Layers className="w-4 h-4" aria-hidden="true" />
              <span>Gestão Mensal &amp; Catálogo</span>
            </button>
          </div>
        </div>

        {/* ABA 1: CRIAÇÃO & SHOPIFY */}
        {activeTab === 'criacao' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 bg-[#FFFDF7] border border-black/12 p-6 sm:p-8 radius-ag3-lg flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#101110] mb-3">
                  Desenvolvimento personalizado com padrão Shopify Premier Partner
                </h3>
                <p className="text-sm sm:text-base text-[#101110]/75 leading-relaxed mb-6">
                  Desenvolvemos lojas virtuais profissionais, personalizadas e preparadas para
                  oferecer uma experiência de compra moderna, segura, responsiva e intuitiva.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 text-sm text-[#101110]/85">
                  {STORE_CREATION_SERVICES.map((service) => (
                    <li key={service} className="flex items-start gap-2 leading-snug">
                      <span className="mt-0.5 w-4 h-4 rounded-sm bg-[#101110] text-[#D8FF3E] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" aria-hidden="true" />
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-5 border-t border-black/10">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#101110]/55 mb-2">
                  Segmentos atendidos
                </span>
                <p className="text-sm font-medium text-[#101110]">
                  {STORE_SEGMENTS.join(' · ')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#101110] text-[#FFFDF7] p-6 sm:p-8 radius-ag3-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D8FF3E] block mb-2">
                  Arquitetura pronta para vender
                </span>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Do visual da marca ao checkout com Pix, frete e WhatsApp
                </h3>
                <p className="text-sm text-[#FFFDF7]/75 leading-relaxed mb-6">
                  Estruturamos categorias, filtros inteligentes, recuperação de carrinhos, cupons e
                  rastreamento completo (Google Analytics, Search Console e Merchant Center) desde o
                  primeiro dia no ar.
                </p>
                <div className="space-y-3 text-sm text-[#FFFDF7]/85 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between">
                    <span>Plataforma principal</span>
                    <span className="font-display font-semibold text-[#D8FF3E]">Shopify</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Experiência móvel</span>
                    <span className="font-display font-semibold">Mobile-First</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Base técnica</span>
                    <span className="font-display font-semibold">Pronta para SEO</span>
                  </div>
                </div>
              </div>

              <a
                href="#contato"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold bg-[#D8FF3E] text-[#101110] hover:bg-[#e5ff70] transition-colors radius-ag3-sm"
              >
                <span>Solicitar criação da minha loja</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}

        {/* ABA 2: UX/UI & REDESIGN */}
        {activeTab === 'uxui' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Comparativo enxuto Antes vs Depois */}
              <div className="lg:col-span-6 bg-[#101110] text-[#FFFDF7] p-6 sm:p-7 radius-ag3-lg flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8F5CFF] block mb-2">
                    Redesign &amp; CRO
                  </span>
                  <h3 className="font-display text-2xl font-bold mb-3">
                    Não é apenas um novo layout. É uma nova experiência de compra.
                  </h3>
                  <p className="text-sm text-[#FFFDF7]/75 leading-relaxed mb-6">
                    O consumidor não compra apenas um produto: ele compra apresentação visual,
                    confiança, facilidade de navegação, contexto, experiência fluida e clareza.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#171A17] border border-white/10 rounded-lg">
                      <span className="block text-xs font-semibold text-[#FF8D42] mb-2">
                        Antes / e-commerce genérico
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#FFFDF7]/70">
                        <li className="flex items-start gap-1.5">
                          <X className="w-3.5 h-3.5 text-[#FF8D42] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>Navegação confusa e filtros limitados</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <X className="w-3.5 h-3.5 text-[#FF8D42] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>Mobile lento e checkout burocrático</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#171A17] border border-[#D8FF3E]/45 rounded-lg">
                      <span className="block text-xs font-semibold text-[#D8FF3E] mb-2">
                        Depois / experiência AG3
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#FFFDF7]/85">
                        <li className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#D8FF3E] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>Filtros por tamanho, cor, modelo e preço</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#D8FF3E] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>Cross-selling, up-selling e compra clara</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-[#FFFDF7]/80">
                  {CONSUMER_BUY_FACTORS.map((f) => (
                    <span key={f.title} className="font-medium">
                      · {f.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lista de Entregáveis UX/UI */}
              <div className="lg:col-span-6 bg-[#FFFDF7] border border-black/12 p-6 sm:p-7 radius-ag3-lg flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#101110] mb-4">
                    Entregas em UX/UI Design e Otimização de Conversão
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#101110]/85">
                    {UX_UI_DELIVERABLES.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#101110] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 flex justify-end">
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold bg-[#101110] text-[#D8FF3E] radius-ag3-sm"
                  >
                    <span>Avaliar redesign da minha loja</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABA 3: GESTÃO MENSAL, CADASTRO DE PRODUTOS E CAMPANHAS */}
        {activeTab === 'gestao' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 bg-[#FFFDF7] border border-black/12 p-6 sm:p-8 radius-ag3-lg">
              <h3 className="font-display text-2xl font-bold text-[#101110] mb-2">
                Sua loja sempre atualizada, organizada e preparada para vender.
              </h3>
              <p className="text-sm text-[#101110]/75 mb-5">
                “A AG3 assume a rotina de atualização da loja para que o empresário possa concentrar
                seus esforços na operação comercial.”
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#101110]/85">
                {MONTHLY_MANAGEMENT_SERVICES.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#101110] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 bg-[#101110] text-[#FFFDF7] p-6 sm:p-8 radius-ag3-lg flex flex-col justify-between space-y-6">
              <div>
                <h4 className="font-display text-lg font-bold text-[#D8FF3E] mb-3">
                  Cadastro &amp; Otimização de Produtos
                </h4>
                <p className="text-xs text-[#FFFDF7]/75 mb-3">
                  {PRODUCT_OPTIMIZATION_SERVICES.join(' · ')}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="font-display text-lg font-bold text-[#6DA8FF] mb-3">
                  Banners &amp; Campanhas Sazonais
                </h4>
                <p className="text-xs text-[#FFFDF7]/75 leading-relaxed">
                  {BANNER_CAMPAIGN_TYPES.join(' · ')}
                </p>
              </div>

              <a
                href="#contato"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold bg-[#D8FF3E] text-[#101110] hover:bg-[#e5ff70] transition-colors radius-ag3-sm"
              >
                <span>Contratar gestão mensal</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </MotionReveal>
    </section>
  );
};
