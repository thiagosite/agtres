import React, { useState } from 'react';
import { Check, TrendingUp, Target, BarChart3, Layers, ArrowUpRight } from 'lucide-react';
import {
  GOOGLE_ADS_SERVICES,
  BANNER_CAMPAIGN_TYPES,
  CAMPAIGN_GALLERY_PIECES,
} from '../data/ag3Content';
import { SafeImage } from './SafeImage';

export const AdsAndCampaignsSection: React.FC = () => {
  const [selectedPieceId, setSelectedPieceId] = useState<string>(CAMPAIGN_GALLERY_PIECES[0].id);
  const activePiece =
    CAMPAIGN_GALLERY_PIECES.find((piece) => piece.id === selectedPieceId) ||
    CAMPAIGN_GALLERY_PIECES[0];

  return (
    <section
      id="performance"
      className="bg-[#101110] text-[#FFFDF7] py-20 md:py-28 border-b border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* BLOCO A: GOOGLE ADS E PERFORMANCE */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#FF8D42] mb-3">
                05 · Google Ads, Google Shopping &amp; Performance
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-[#FFFDF7]">
                Seus produtos na frente de quem está pronto para comprar.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg leading-relaxed text-[#FFFDF7]/78">
                Criamos e gerenciamos campanhas estratégicas no Google para atrair consumidores
                interessados nos seus produtos, ampliar a visibilidade da sua loja e gerar
                oportunidades de vendas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Painel Conceitual de Performance (sem métricas falsas) */}
            <div className="lg:col-span-7 bg-[#171A17] border border-white/12 p-5 sm:p-7 radius-ag3-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#D8FF3E]" aria-hidden="true" />
                  <span className="font-display text-sm font-bold text-[#FFFDF7]">
                    Arquitetura conceitual de campanhas Google
                  </span>
                </div>
                <span className="text-[11px] text-[#FFFDF7]/60">
                  Painel ilustrativo de estrutura de mídia
                </span>
              </div>

              {/* Canais Estruturados */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#101110] border border-white/10 p-4 radius-ag3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-sm font-bold text-[#FFFDF7]">
                      Google Shopping &amp; Merchant Center
                    </span>
                    <Target className="w-4 h-4 text-[#D8FF3E]" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-[#FFFDF7]/70 leading-relaxed">
                    Exibição direta de foto, preço e título do produto para buscas com intenção
                    comercial imediata.
                  </p>
                </div>

                <div className="bg-[#101110] border border-white/10 p-4 radius-ag3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-sm font-bold text-[#FFFDF7]">
                      Rede de Pesquisa &amp; Performance Max
                    </span>
                    <TrendingUp className="w-4 h-4 text-[#6DA8FF]" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-[#FFFDF7]/70 leading-relaxed">
                    Palavras-chave comerciais, segmentação por intenção e distribuição coordenada no
                    ecossistema Google.
                  </p>
                </div>

                <div className="bg-[#101110] border border-white/10 p-4 radius-ag3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-sm font-bold text-[#FFFDF7]">
                      Remarketing Inteligente
                    </span>
                    <Layers className="w-4 h-4 text-[#8F5CFF]" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-[#FFFDF7]/70 leading-relaxed">
                    Reimpacto de visitantes que visualizaram categorias, páginas de produto ou
                    iniciaram o carrinho.
                  </p>
                </div>

                <div className="bg-[#101110] border border-white/10 p-4 radius-ag3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-sm font-bold text-[#FFFDF7]">
                      Tags, GA4 &amp; Conversões
                    </span>
                    <Check className="w-4 h-4 text-[#FF8D42]" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-[#FFFDF7]/70 leading-relaxed">
                    Implementação técnica de mensuração para leitura clara de desempenho e
                    otimização de orçamento.
                  </p>
                </div>
              </div>

              {/* Aviso Transparente de Investimento + Contratação Modular */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-white/10">
                <div className="bg-[#101110] border border-[#FF8D42]/45 p-4 radius-ag3-sm">
                  <p className="text-xs font-semibold text-[#FF8D42] uppercase tracking-wider mb-1">
                    Transparência financeira
                  </p>
                  <p className="text-sm font-medium text-[#FFFDF7]">
                    O investimento em anúncios é separado da taxa de gestão da AG3.
                  </p>
                </div>
                <div className="bg-[#101110] border border-white/15 p-4 radius-ag3-sm">
                  <p className="text-xs font-semibold text-[#D8FF3E] uppercase tracking-wider mb-1">
                    Contratação flexível
                  </p>
                  <p className="text-sm text-[#FFFDF7]/80">
                    Pode ser contratado de forma individual ou integrado à gestão mensal da loja.
                  </p>
                </div>
              </div>
            </div>

            {/* Lista dos 15 Serviços de Google Ads */}
            <div className="lg:col-span-5 bg-[#171A17] border border-white/12 p-6 radius-ag3-lg flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-[#FFFDF7] mb-4">
                  Escopo completo em tráfego pago
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#FFFDF7]/82 mb-6">
                  {GOOGLE_ADS_SERVICES.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check
                        className="w-4 h-4 text-[#D8FF3E] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contato"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold bg-[#D8FF3E] text-[#101110] hover:bg-[#e5ff70] transition-colors radius-ag3-sm"
              >
                <span>Estruturar campanhas no Google</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* BLOCO B: BANNERS E CAMPANHAS PROMOCIONAIS */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D8FF3E] mb-3">
                Design de Campanhas &amp; Vitrines
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[#FFFDF7]">
                Uma loja visualmente atrativa desperta o desejo de comprar.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#FFFDF7]/75">
                Criamos peças comerciais alinhadas à identidade da marca para cada data do
                calendário varejista, lançamentos e ações promocionais.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Galeria Visual Sofisticada */}
            <div className="lg:col-span-8 bg-[#171A17] border border-white/12 p-4 sm:p-6 radius-ag3-lg">
              {/* Banner Principal em Destaque */}
              <div className="relative aspect-[16/9] overflow-hidden radius-ag3 border border-white/10 mb-4">
                <SafeImage
                  src={activePiece.image}
                  alt={activePiece.alt}
                  className="w-full h-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
                />
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="max-w-lg">
                    <span
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                      style={{ color: activePiece.accent }}
                    >
                      {activePiece.season}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFFDF7] leading-snug mb-1.5">
                      {activePiece.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FFFDF7]/80">{activePiece.subline}</p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#101110] rounded-md whitespace-nowrap self-start sm:self-end"
                    style={{ backgroundColor: activePiece.accent }}
                  >
                    {activePiece.cta}
                  </span>
                </div>
              </div>

              {/* Seletores de Peças Demonstrativas */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {CAMPAIGN_GALLERY_PIECES.map((piece) => {
                  const isSelected = piece.id === activePiece.id;
                  return (
                    <button
                      key={piece.id}
                      type="button"
                      onClick={() => setSelectedPieceId(piece.id)}
                      className={`text-left p-2.5 rounded-lg border transition-colors ${
                        isSelected
                          ? 'bg-[#101110] border-[#D8FF3E]'
                          : 'bg-[#101110]/60 border-white/10 hover:border-white/25'
                      }`}
                    >
                      <div className="aspect-[16/10] rounded overflow-hidden mb-2">
                        <SafeImage
                          src={piece.image}
                          alt={piece.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="block text-[11px] font-semibold text-[#FFFDF7] truncate">
                        {piece.season.split('·')[0].trim()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tipos de Peças e Datas Atendidas */}
            <div className="lg:col-span-4 bg-[#171A17] border border-white/12 p-6 radius-ag3-lg">
              <h3 className="font-display text-lg font-bold text-[#FFFDF7] mb-4">
                Calendário de campanhas e peças
              </h3>
              <ul className="space-y-2.5 text-sm text-[#FFFDF7]/82">
                {BANNER_CAMPAIGN_TYPES.map((type) => (
                  <li
                    key={type}
                    className="flex items-center gap-2.5 pb-2 border-b border-white/8 last:border-b-0 last:pb-0"
                  >
                    <Check className="w-4 h-4 text-[#D8FF3E] shrink-0" aria-hidden="true" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
