import React, { useState } from 'react';
import { Check, Truck, ShieldCheck, CreditCard, ShoppingBag } from 'lucide-react';
import { PRODUCT_OPTIMIZATION_SERVICES, MEDIA_ASSETS } from '../data/ag3Content';
import { SafeImage } from './SafeImage';

const PRODUCT_GALLERY = [
  {
    src: MEDIA_ASSETS.footwearStudio,
    alt: 'Tênis Minimal em Couro e Mesh — vista principal',
    label: 'Vista lateral',
  },
  {
    src: MEDIA_ASSETS.fashionApparel,
    alt: 'Composição de look editorial com peças da coleção',
    label: 'Composição',
  },
  {
    src: MEDIA_ASSETS.heroEditorial,
    alt: 'Uso editorial em ambiente urbano',
    label: 'Em uso',
  },
];

const PRODUCT_COLORS = [
  { name: 'Areia & Travertino', hex: '#D6CEC2' },
  { name: 'Carvão Fosco', hex: '#232423' },
  { name: 'Off-White', hex: '#F3EFE6' },
];

const PRODUCT_SIZES = ['37', '38', '39', '40', '41', '42'];

export const ProductOptimizationSection: React.FC = () => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(PRODUCT_COLORS[0].name);
  const [selectedSize, setSelectedSize] = useState('40');
  const [cartCount, setCartCount] = useState(0);

  return (
    <section className="bg-[#FFFDF7] text-[#101110] py-20 md:py-28 border-b border-black/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#101110]/60 mb-3">
              Cadastro &amp; Otimização de Produtos
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-[#101110]">
              Seus produtos apresentados da maneira certa para vender.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#101110]/75 leading-relaxed">
              Um catálogo mal estruturado desperdiça tráfego pago e orgânico. Preparamos cada item
              com fotografia padronizada, ficha técnica clara, variações intuitivas e SEO aplicado.
            </p>
          </div>
        </div>

        {/* Mockup Interativo de Página de Produto (PDP) + Lista de Serviços */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Mockup Interativo PDP */}
          <div className="lg:col-span-8 bg-[#F7F5EF] border border-black/12 p-5 sm:p-7 radius-ag3-lg">
            <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-black/10 text-xs text-[#101110]/65">
              <span className="font-semibold text-[#101110]">
                Mockup interativo de página de produto
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-[#101110]">
                <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
                Sacola ({cartCount})
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Fotografia Principal + Galeria de Imagens */}
              <div className="md:col-span-6 space-y-3">
                <div className="aspect-[4/3] overflow-hidden radius-ag3 border border-black/10 bg-[#FFFDF7]">
                  <SafeImage
                    src={PRODUCT_GALLERY[activeImageIdx].src}
                    alt={PRODUCT_GALLERY[activeImageIdx].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {PRODUCT_GALLERY.map((img, idx) => (
                    <button
                      key={img.label}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`overflow-hidden rounded-md border transition-colors ${
                        activeImageIdx === idx
                          ? 'border-[#101110] ring-2 ring-[#D8FF3E]'
                          : 'border-black/12 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <div className="aspect-[4/3]">
                        <SafeImage
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Módulo Contíguo de Compra */}
              <div className="md:col-span-6 space-y-4">
                <div>
                  <span className="block text-xs text-[#101110]/60 mb-1">
                    Calçados · Série Minimalista (Produto conceitual)
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#101110] leading-tight">
                    Tênis Urbano Couro &amp; Malha Técnica
                  </h3>
                </div>

                {/* Preço e Condições de Pagamento */}
                <div className="pt-2 border-t border-black/10">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-display text-2xl font-bold text-[#101110] tabular-nums">
                      R$ 549,00
                    </span>
                    <span className="text-xs text-[#101110]/50 line-through tabular-nums">
                      R$ 629,00
                    </span>
                  </div>
                  <p className="inline-flex items-center gap-1.5 text-xs text-[#101110]/75 mt-1">
                    <CreditCard className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>6x de R$ 91,50 sem juros ou R$ 521,55 no Pix</span>
                  </p>
                </div>

                {/* Variações de Cor */}
                <div>
                  <span className="block text-xs font-semibold text-[#101110] mb-2">
                    Cor: <span className="font-normal text-[#101110]/70">{selectedColor}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    {PRODUCT_COLORS.map((color) => {
                      const active = selectedColor === color.name;
                      return (
                        <button
                          key={color.name}
                          type="button"
                          aria-label={`Selecionar cor ${color.name}`}
                          onClick={() => setSelectedColor(color.name)}
                          className={`w-7 h-7 rounded-full border transition-transform ${
                            active
                              ? 'border-[#101110] scale-110 ring-2 ring-[#D8FF3E]'
                              : 'border-black/25'
                          }`}
                          style={{ backgroundColor: color.hex }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Variações de Tamanho */}
                <div>
                  <span className="block text-xs font-semibold text-[#101110] mb-2">
                    Numeração: <span className="font-normal text-[#101110]/70">{selectedSize}</span>
                  </span>
                  <div className="grid grid-cols-6 gap-1.5">
                    {PRODUCT_SIZES.map((size) => {
                      const active = selectedSize === size;
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 text-xs font-semibold rounded border transition-colors tabular-nums ${
                            active
                              ? 'bg-[#101110] text-[#D8FF3E] border-[#101110]'
                              : 'bg-[#FFFDF7] text-[#101110] border-black/15 hover:border-black/40'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Botão de Compra */}
                <button
                  type="button"
                  onClick={() => setCartCount((c) => c + 1)}
                  className="w-full py-3.5 px-5 text-sm font-semibold bg-[#101110] text-[#D8FF3E] hover:bg-[#171A17] transition-colors radius-ag3-sm flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {cartCount > 0 ? `Adicionado à sacola (${cartCount})` : 'Adicionar à sacola'}
                  </span>
                </button>

                {/* Informações de Entrega */}
                <div className="bg-[#FFFDF7] border border-black/10 p-3 rounded-md space-y-1.5 text-xs text-[#101110]/80">
                  <div className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>Envio para todo o Brasil com cálculo de frete transparente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>Primeira troca facilitada e compra segura</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Produtos Relacionados dentro do PDP */}
            <div className="mt-6 pt-5 border-t border-black/10">
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#101110]/60 mb-3">
                Produtos relacionados (Cross-selling)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-2.5 bg-[#FFFDF7] border border-black/10 rounded-md">
                  <div className="w-14 h-12 rounded overflow-hidden shrink-0">
                    <SafeImage
                      src={MEDIA_ASSETS.fashionApparel}
                      alt="Blazer estruturado relacionado"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#101110] truncate">
                      Blazer Estruturado Areia
                    </p>
                    <p className="text-xs text-[#101110]/65 tabular-nums">R$ 790,00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2.5 bg-[#FFFDF7] border border-black/10 rounded-md">
                  <div className="w-14 h-12 rounded overflow-hidden shrink-0">
                    <SafeImage
                      src={MEDIA_ASSETS.cosmeticsStudio}
                      alt="Kit de cuidados relacionado"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#101110] truncate">
                      Kit Proteção &amp; Limpeza
                    </p>
                    <p className="text-xs text-[#101110]/65 tabular-nums">R$ 129,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de Serviços de Cadastro e Otimização */}
          <div className="lg:col-span-4 bg-[#F7F5EF] border border-black/12 p-6 radius-ag3-lg">
            <h3 className="font-display text-xl font-bold text-[#101110] mb-2">
              O que fazemos no seu catálogo
            </h3>
            <p className="text-sm text-[#101110]/70 mb-6">
              Cuidamos da apresentação comercial e técnica de cada item cadastrado na plataforma.
            </p>
            <ul className="space-y-3 text-sm text-[#101110]/85">
              {PRODUCT_OPTIMIZATION_SERVICES.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2.5 pb-2.5 border-b border-black/8 last:border-b-0 last:pb-0"
                >
                  <span className="w-5 h-5 rounded-sm bg-[#101110] text-[#D8FF3E] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" aria-hidden="true" />
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
