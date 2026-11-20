import React, { useEffect, useState } from 'react';
import { Check, Search, Cpu, TrendingUp, BookOpen, Globe, ArrowUpRight } from 'lucide-react';
import {
  SEO_SERVICES,
  CONCEPTUAL_SEARCH_EXAMPLES,
  AI_DISCOVERY_PILLARS,
  GOOGLE_ADS_SERVICES,
  BLOG_CONTENT_SERVICES,
} from '../data/ag3Content';
import { MotionReveal } from './MotionReveal';

type GrowthTab = 'seo' | 'ads' | 'ia' | 'conteudo';

export const GrowthAndAiSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GrowthTab>('seo');
  const [selectedQueryIdx, setSelectedQueryIdx] = useState(0);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (hash === '#performance') setActiveTab('ads');
      else if (hash === '#ia') setActiveTab('ia');
      else if (hash === '#seo') setActiveTab('seo');
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const currentSearch = CONCEPTUAL_SEARCH_EXAMPLES[selectedQueryIdx];

  return (
    <section
      id="seo"
      className="bg-[#101110] text-[#FFFDF7] py-16 md:py-22 border-b border-white/10"
    >
      <span id="performance" className="block -mt-20 pt-20 pointer-events-none" aria-hidden="true" />
      <span id="ia" className="block -mt-20 pt-20 pointer-events-none" aria-hidden="true" />

      <MotionReveal className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho + Abas */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#6DA8FF] mb-2.5">
              Visibilidade, Tráfego &amp; Descoberta
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[#FFFDF7]">
              Seja encontrado no Google, nos anúncios e nas pesquisas com IA.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Frentes de visibilidade e performance"
            className="inline-flex flex-wrap gap-1.5 p-1.5 bg-[#171A17] border border-white/12 rounded-lg self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'seo'}
              onClick={() => setActiveTab('seo')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'seo'
                  ? 'bg-[#D8FF3E] text-[#101110]'
                  : 'text-[#FFFDF7]/75 hover:text-[#FFFDF7]'
              }`}
            >
              <Search className="w-3.5 h-3.5" aria-hidden="true" />
              <span>SEO &amp; Busca</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'ads'}
              onClick={() => setActiveTab('ads')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'ads'
                  ? 'bg-[#D8FF3E] text-[#101110]'
                  : 'text-[#FFFDF7]/75 hover:text-[#FFFDF7]'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Google Ads &amp; Shopping</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'ia'}
              onClick={() => setActiveTab('ia')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'ia'
                  ? 'bg-[#D8FF3E] text-[#101110]'
                  : 'text-[#FFFDF7]/75 hover:text-[#FFFDF7]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Era da IA</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'conteudo'}
              onClick={() => setActiveTab('conteudo')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'conteudo'
                  ? 'bg-[#D8FF3E] text-[#101110]'
                  : 'text-[#FFFDF7]/75 hover:text-[#FFFDF7]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Blog &amp; Conteúdo</span>
            </button>
          </div>
        </div>

        {/* CONTEÚDO: SEO & BUSCA */}
        {activeTab === 'seo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-[#171A17] border border-white/12 p-6 radius-ag3-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                <span className="font-display text-sm font-bold text-[#FFFDF7]">
                  Simulação conceitual de busca no Google
                </span>
                <span className="text-[11px] text-[#FFFDF7]/55">
                  Exemplos ilustrativos (não são resultados reais de clientes)
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {CONCEPTUAL_SEARCH_EXAMPLES.map((item, idx) => (
                  <button
                    key={item.query}
                    type="button"
                    onClick={() => setSelectedQueryIdx(idx)}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                      idx === selectedQueryIdx
                        ? 'bg-[#D8FF3E] text-[#101110]'
                        : 'bg-[#101110] text-[#FFFDF7]/75 border border-white/10 hover:text-[#FFFDF7]'
                    }`}
                  >
                    {item.query}
                  </button>
                ))}
              </div>

              <div className="p-5 bg-[#101110] border border-white/10 radius-ag3">
                <div className="flex items-center gap-2 text-xs text-[#FFFDF7]/60 mb-1.5">
                  <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{currentSearch.url}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#6DA8FF] mb-1.5">
                  {currentSearch.title}
                </h3>
                <p className="text-sm text-[#FFFDF7]/80 leading-relaxed mb-3">
                  {currentSearch.description}
                </p>
                <span className="text-xs text-[#FFFDF7]/55">
                  Dados estruturados: {currentSearch.schemaType} · Exemplo conceitual
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#171A17] border border-white/12 p-6 radius-ag3-lg">
              <h3 className="font-display text-lg font-bold text-[#FFFDF7] mb-4">
                Otimização técnica e orgânica
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm text-[#FFFDF7]/82">
                {SEO_SERVICES.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D8FF3E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* CONTEÚDO: GOOGLE ADS & SHOPPING */}
        {activeTab === 'ads' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-[#171A17] border border-white/12 p-6 sm:p-7 radius-ag3-lg space-y-5">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#FFFDF7] mb-2">
                  Seus produtos na frente de quem está pronto para comprar.
                </h3>
                <p className="text-sm text-[#FFFDF7]/75 leading-relaxed">
                  Criamos e gerenciamos campanhas de Pesquisa, Google Shopping (Merchant Center),
                  Performance Max e Remarketing com rastreamento completo via Tags e Google
                  Analytics.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#101110] border border-[#FF8D42]/45 rounded-lg">
                  <span className="block text-xs font-semibold text-[#FF8D42] uppercase tracking-wider mb-1">
                    Transparência financeira
                  </span>
                  <p className="text-sm text-[#FFFDF7]">
                    O investimento em anúncios é separado da taxa de gestão da AG3.
                  </p>
                </div>
                <div className="p-4 bg-[#101110] border border-white/12 rounded-lg">
                  <span className="block text-xs font-semibold text-[#D8FF3E] uppercase tracking-wider mb-1">
                    Contratação flexível
                  </span>
                  <p className="text-sm text-[#FFFDF7]/80">
                    Pode ser contratado de forma individual ou integrado à gestão mensal da loja.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#171A17] border border-white/12 p-6 radius-ag3-lg">
              <h3 className="font-display text-lg font-bold text-[#FFFDF7] mb-4">
                Escopo em tráfego pago
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm text-[#FFFDF7]/82 mb-6">
                {GOOGLE_ADS_SERVICES.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D8FF3E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold bg-[#D8FF3E] text-[#101110] radius-ag3-sm"
              >
                <span>Estruturar campanhas no Google</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}

        {/* CONTEÚDO: ERA DA IA */}
        {activeTab === 'ia' && (
          <div className="bg-[#171A17] border border-white/12 p-6 sm:p-8 radius-ag3-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h3 className="font-display text-2xl font-bold text-[#FFFDF7] mb-3">
                Sua marca preparada para a nova era das pesquisas com inteligência artificial.
              </h3>
              <p className="text-sm text-[#FFFDF7]/75 leading-relaxed mb-4">
                Organizamos dados estruturados, semântica e conteúdo técnico para melhorar a
                compreensão da sua loja por buscadores e sistemas baseados em IA — como preparação
                estratégica e técnica, sem promessas irreais de inclusão automática.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AI_DISCOVERY_PILLARS.map((item, idx) => (
                <div
                  key={item}
                  className="bg-[#101110] border border-white/10 p-3.5 radius-ag3-sm flex items-start gap-2.5"
                >
                  <span className="font-display text-xs font-semibold text-[#D8FF3E] tabular-nums mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-sm text-[#FFFDF7]/88">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTEÚDO: BLOG & CONTEÚDO */}
        {activeTab === 'conteudo' && (
          <div className="bg-[#171A17] border border-white/12 p-6 sm:p-8 radius-ag3-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <h3 className="font-display text-2xl font-bold text-[#FFFDF7] mb-3">
                Conteúdo que gera autoridade, atrai visitantes e fortalece sua presença no Google.
              </h3>
              <p className="text-sm text-[#FFFDF7]/75 leading-relaxed mb-5">
                Planejamento editorial, guias de compra, comparativos e artigos integrados aos
                produtos da sua loja para captar tráfego orgânico qualificado.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D8FF3E] hover:underline"
              >
                <span>Planejar conteúdo para minha loja</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#FFFDF7]/85">
              {BLOG_CONTENT_SERVICES.map((service) => (
                <div key={service} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D8FF3E] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </MotionReveal>
    </section>
  );
};
