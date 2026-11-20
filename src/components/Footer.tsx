import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Ag3Logo } from './Ag3Logo';
import { AG3_BRAND, ROUTES_MANIFEST } from '../config/brand';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const footerLinks = ROUTES_MANIFEST.filter((r) => r.inFooter);

  return (
    <footer className="bg-[#101110] text-[#FFFDF7] py-14 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Identidade da Marca */}
          <div className="md:col-span-5">
            <Ag3Logo variant="dark" className="mb-3" />
            <p className="font-display text-sm font-medium text-[#D8FF3E] mb-3">
              {AG3_BRAND.tagline}
            </p>
            <p className="text-sm text-[#FFFDF7]/65 max-w-sm leading-relaxed">
              {AG3_BRAND.centralMessage}
            </p>
          </div>

          {/* Navegação por Âncoras */}
          <div className="md:col-span-4">
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFDF7]/50 mb-4">
              Navegação
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#FFFDF7]/80">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="hover:text-[#D8FF3E] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Canais & Institucional */}
          <div className="md:col-span-3">
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFDF7]/50 mb-4">
              Canais &amp; Legal
            </h2>
            <ul className="space-y-2.5 text-sm text-[#FFFDF7]/80">
              <li>
                <a
                  href={AG3_BRAND.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#D8FF3E] transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={AG3_BRAND.social.whatsappDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#D8FF3E] transition-colors"
                >
                  <span>WhatsApp · {AG3_BRAND.whatsappDisplay}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={AG3_BRAND.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#D8FF3E] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(true)}
                  className="hover:text-[#D8FF3E] transition-colors text-left"
                >
                  Política de privacidade
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FFFDF7]/55">
          <p>© 2026 AG3. Todos os direitos reservados.</p>
          <p>Shopify Premier Partner · Estruturas digitais para e-commerce</p>
        </div>
      </div>

      {/* Modal de Política de Privacidade */}
      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="bg-[#171A17] border border-white/15 max-w-lg w-full p-6 sm:p-7 radius-ag3-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPrivacyOpen(false)}
              aria-label="Fechar política de privacidade"
              className="absolute top-4 right-4 w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-[#FFFDF7]/75 hover:text-[#FFFDF7]"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 id="privacy-modal-title" className="font-display text-xl font-bold text-[#FFFDF7] mb-3">
              Política de privacidade
            </h3>
            <div className="space-y-3 text-sm text-[#FFFDF7]/75 leading-relaxed">
              <p>
                A AG3 respeita a privacidade dos visitantes e trata qualquer informação informada no
                formulário de contato exclusivamente para atendimento comercial via WhatsApp.
              </p>
              <p>
                Os dados preenchidos no formulário são formatados localmente no seu navegador para
                iniciar a conversa solicitada, sem armazenamento em bancos de dados nesta página
                institucional.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
