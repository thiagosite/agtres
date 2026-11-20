import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Ag3Logo } from './Ag3Logo';
import { ROUTES_MANIFEST } from '../config/brand';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerLinks = ROUTES_MANIFEST.filter((r) => r.inHeader);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#101110]/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4 md:gap-8">
        {/* Zona 1: Logo AG3 */}
        <a
          href="#inicio"
          onClick={handleLinkClick}
          aria-label="AG3 — Ir para o início"
          className="focus-visible:outline-2 focus-visible:outline-[#D8FF3E] rounded-sm"
        >
          <Ag3Logo variant="dark" />
        </a>

        {/* Zona 2: Navegação Desktop (5 links limpos de linha única) */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#FFFDF7]/80"
        >
          {headerLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="relative py-1 hover:text-[#FFFDF7] transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#D8FF3E] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação principal + Menu Mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-semibold bg-[#D8FF3E] text-[#101110] hover:bg-[#e5ff70] transition-colors duration-150 radius-ag3-sm whitespace-nowrap shrink-0"
          >
            <span>Falar com especialista</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>

          <a
            href="#contato"
            className="sm:hidden inline-flex items-center px-3 py-2 text-xs font-semibold bg-[#D8FF3E] text-[#101110] radius-ag3-sm whitespace-nowrap shrink-0 min-h-[40px]"
          >
            Especialista
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-[#FFFDF7] border border-white/15 bg-[#171A17]/80 radius-ag3-sm hover:border-[#D8FF3E]/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile com navegação por âncoras */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#101110]/98 backdrop-blur-lg border-t border-white/10 px-4 py-6"
        >
          <nav aria-label="Menu mobile" className="flex flex-col gap-1 max-w-[1280px] mx-auto">
            {ROUTES_MANIFEST.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between py-3 px-3 text-base font-medium text-[#FFFDF7]/90 hover:text-[#D8FF3E] hover:bg-white/5 rounded-md transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFFDF7]/40" aria-hidden="true" />
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10">
              <a
                href="#contato"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-semibold bg-[#D8FF3E] text-[#101110] radius-ag3-sm"
              >
                <span>Falar com especialista</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
