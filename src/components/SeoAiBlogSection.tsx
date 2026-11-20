import React, { useState } from 'react';
import { Search, Check, Cpu, BookOpen, ArrowUpRight, Globe } from 'lucide-react';
import {
  SEO_SERVICES,
  CONCEPTUAL_SEARCH_EXAMPLES,
  AI_DISCOVERY_PILLARS,
  BLOG_CONTENT_SERVICES,
  MEDIA_ASSETS,
} from '../data/ag3Content';
import { SafeImage } from './SafeImage';

export const SeoAiBlogSection: React.FC = () => {
  const [selectedQueryIdx, setSelectedQueryIdx] = useState(0);
  const currentSearch = CONCEPTUAL_SEARCH_EXAMPLES[selectedQueryIdx];

  return (
    <section
      id="seo"
      className="bg-[#F7F5EF] text-[#101110] py-20 md:py-28 border-b border-black/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* BLOCO A: SEO E POSICIONAMENTO */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#101110]/60 mb-3">
                04 · SEO &amp; Posicionamento Orgânico
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-[#101110]">
                Seja encontrado por quem já está procurando seus produtos.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg leading-relaxed text-[#101110]/75">
                A AG3 trabalha estratégias de SEO para melhorar o posicionamento das lojas virtuais
                nos mecanismos de busca, ampliar a visibilidade da marca e atrair consumidores de
                maneira orgânica.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Simulador Conceitual de Busca no Google */}
            <div className="lg:col-span-7 bg-[#FFFDF7] border border-black/12 p-5 sm:p-7 radius-ag3-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-black/10">
                <span className="font-display text-sm font-bold text-[#101110]">
                  Representação visual de busca no Google
                </span>
                <span className="text-[11px] font-medium text-[#101110]/65">
                  Exemplos conceituais ilustrativos (não são resultados reais de clientes)
                </span>
              </div>

              {/* Botões das 5 pesquisas ilustrativas */}
              <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Exemplos conceituais de busca">
                {CONCEPTUAL_SEARCH_EXAMPLES.map((item, idx) => {
                  const isActive = idx === selectedQueryIdx;
                  return (
                    <button
                      key={item.query}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedQueryIdx(idx)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-[#101110] text-[#D8FF3E]'
                          : 'bg-[#F7F5EF] text-[#101110]/75 hover:text-[#101110] border border-black/8'
                      }`}
                    >
                      {item.query}
                    </button>
                  );
                })}
              </div>

              {/* Barra de busca simulada */}
              <div className="flex items-center gap-3 px-4 py-3 bg-[#F7F5EF] border border-black/12 rounded-lg mb-5">
                <Search className="w-4 h-4 text-[#101110]/60 shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-[#101110]">{currentSearch.query}</span>
              </div>

              {/* Resultado SERP Estruturado */}
              <div className="p-5 bg-[#F7F5EF]/70 border border-black/10 radius-ag3">
                <div className="flex items-center gap-2 text-xs text-[#101110]/70 mb-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#101110]/60" aria-hidden="true" />
                  <span>{currentSearch.url}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#1a0dab] mb-1.5">
                  {currentSearch.title}
                </h3>
                <p className="text-sm text-[#101110]/80 leading-relaxed mb-3">
                  {currentSearch.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-black/10 text-xs text-[#101110]/65">
                  <span>Estrutura aplicada: {currentSearch.schemaType}</span>
                  <span aria-hidden="true">·</span>
                  <span>Meta title &amp; description otimizados</span>
                  <span aria-hidden="true">·</span>
                  <span>Exemplo conceitual</span>
                </div>
              </div>
            </div>

            {/* Lista de Entregas de SEO */}
            <div className="lg:col-span-5 bg-[#FFFDF7] border border-black/12 p-6 radius-ag3-lg">
              <h3 className="font-display text-xl font-bold text-[#101110] mb-4">
                Arquitetura e otimização técnica de SEO
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#101110]/85">
                {SEO_SERVICES.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#101110] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BLOCO B: PREPARAÇÃO PARA INTELIGÊNCIA ARTIFICIAL */}
        <div
          id="ia"
          className="bg-[#101110] text-[#FFFDF7] p-7 sm:p-10 lg:p-12 radius-ag3-lg border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#8F5CFF] mb-3">
                <Cpu className="w-4 h-4" aria-hidden="true" />
                <span>06 · Descoberta na Era da IA</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.12] tracking-tight text-[#FFFDF7] mb-4">
                Sua marca também precisa estar preparada para a nova era das pesquisas com
                inteligência artificial.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#FFFDF7]/75 mb-5">
                A AG3 prepara lojas virtuais com organização semântica, dados estruturados e clareza
                técnica para melhorar sua descoberta e compreensão por mecanismos de busca e
                sistemas baseados em inteligência artificial.
              </p>
              <p className="text-xs leading-relaxed text-[#FFFDF7]/60 border-t border-white/10 pt-4">
                Atuamos com preparação técnica e estratégica contínua — sem prometer indexação
                automática, inclusão garantida ou recomendações garantidas por plataformas de IA.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {AI_DISCOVERY_PILLARS.map((item, idx) => (
                <div
                  key={item}
                  className="bg-[#171A17] border border-white/10 p-4 radius-ag3-sm flex items-start gap-3"
                >
                  <span className="font-display text-xs font-semibold text-[#D8FF3E] tabular-nums mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-sm text-[#FFFDF7]/90 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BLOCO C: BLOG E CONTEÚDO ESTRATÉGICO */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#101110]/60 mb-3">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>Blog &amp; Conteúdo Estratégico</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[#101110] mb-4">
                Conteúdo que gera autoridade, atrai visitantes e fortalece sua presença no Google.
              </h2>
              <p className="text-base text-[#101110]/75 leading-relaxed mb-6">
                Produzimos e organizamos conteúdos integrados diretamente às categorias e produtos da
                sua loja virtual para responder dúvidas reais de compra.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#101110]/85 mb-6">
                {BLOG_CONTENT_SERVICES.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#101110] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#101110] underline decoration-[#D8FF3E] decoration-2 underline-offset-4 hover:opacity-80"
              >
                <span>Planejar conteúdo para minha loja</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Mockup Editorial de Blog Integrado à Loja */}
            <div className="lg:col-span-7 bg-[#FFFDF7] border border-black/12 p-5 sm:p-6 radius-ag3-lg">
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-black/10 text-xs text-[#101110]/65">
                <span className="font-display font-bold text-[#101110]">
                  Journal &amp; Guias de Compra · Integrado à Loja
                </span>
                <span>Mockup editorial</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
                <div className="sm:col-span-7 flex flex-col justify-between bg-[#F7F5EF] border border-black/8 p-4 radius-ag3">
                  <div>
                    <div className="aspect-[16/10] rounded overflow-hidden mb-3.5">
                      <SafeImage
                        src={MEDIA_ASSETS.cosmeticsStudio}
                        alt="Artigo guia de compra integrado à loja virtual"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="block text-xs text-[#101110]/60 mb-1">
                      Guia de compra · Skincare
                    </span>
                    <h3 className="font-display text-lg font-bold text-[#101110] leading-snug mb-2">
                      Como escolher o sérum ideal para cada rotina e tipo de pele
                    </h3>
                    <p className="text-xs text-[#101110]/70 leading-relaxed">
                      Comparativo de ativos, ordem de aplicação e links internos diretos para os
                      produtos do catálogo.
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-5 flex flex-col justify-between gap-3">
                  <div className="p-4 bg-[#101110] text-[#FFFDF7] radius-ag3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="block text-[11px] text-[#D8FF3E] font-medium mb-1">
                        Produto vinculado no artigo
                      </span>
                      <p className="font-display text-sm font-semibold mb-1">
                        Sérum Botânico Concentrado 30ml
                      </p>
                      <span className="text-xs text-[#FFFDF7]/65">
                        Link interno estratégico com Schema.org Product
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-between pt-3 mt-3 border-t border-white/10 text-xs font-semibold text-[#D8FF3E]">
                      <span>Ver produto na loja</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="p-4 bg-[#F7F5EF] border border-black/8 radius-ag3">
                    <span className="block text-xs font-semibold text-[#101110] mb-1">
                      Outros formatos editoriais
                    </span>
                    <p className="text-xs text-[#101110]/70 leading-relaxed">
                      Comparativos de modelos · Tendências da estação · Atualização de artigos
                      existentes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
