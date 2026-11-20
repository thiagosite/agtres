import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle, Copy, Check } from 'lucide-react';
import { AG3_BRAND, buildWhatsAppUrl } from '../config/brand';
import { MotionReveal } from './MotionReveal';

interface FormData {
  nome: string;
  empresa: string;
  whatsapp: string;
  segmento: string;
  possuiLoja: string;
  servico: string;
  mensagem: string;
}

const INITIAL_FORM: FormData = {
  nome: '',
  empresa: '',
  whatsapp: '',
  segmento: '',
  possuiLoja: 'Ainda não possuo loja virtual',
  servico: 'Criação de loja virtual (Shopify / Personalizada)',
  mensagem: '',
};

const SERVICO_OPTIONS = [
  'Criação de loja virtual (Shopify / Personalizada)',
  'UX/UI Design e Redesign de loja existente',
  'Gestão mensal de e-commerce',
  'Cadastro e otimização de produtos',
  'SEO e preparação para buscas com IA',
  'Google Ads e Google Shopping',
  'Blog e conteúdo estratégico',
  'Banners e campanhas promocionais',
  'Estrutura completa (Loja + Gestão + Performance)',
];

export const ContactCtaSection: React.FC = () => {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [formattedSummary, setFormattedSummary] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nome.trim() || !form.empresa.trim() || !form.whatsapp.trim() || !form.segmento.trim()) {
      setErrorMsg('Preencha nome, empresa, WhatsApp e segmento de atuação para continuar.');
      return;
    }

    const digitsOnly = form.whatsapp.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setErrorMsg('Informe um número de WhatsApp válido com DDD.');
      return;
    }

    const composedMessage = [
      'Olá, equipe AG3! Vim pelo site institucional e gostaria de conversar sobre meu e-commerce.',
      '',
      `*Nome:* ${form.nome.trim()}`,
      `*Empresa:* ${form.empresa.trim()}`,
      `*WhatsApp:* ${form.whatsapp.trim()}`,
      `*Segmento:* ${form.segmento.trim()}`,
      `*Já possui loja virtual?:* ${form.possuiLoja}`,
      `*Serviço de interesse:* ${form.servico}`,
      form.mensagem.trim() ? `*Mensagem:* ${form.mensagem.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = buildWhatsAppUrl(composedMessage);
    setFormattedSummary(composedMessage);
    setSubmittedUrl(waUrl);

    // Abre em nova aba via elemento âncora programático seguro (evita window.open bloqueado em sandbox)
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyMessage = async () => {
    if (!formattedSummary) return;
    try {
      await navigator.clipboard.writeText(formattedSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silencioso caso clipboard não esteja disponível
    }
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#101110] text-[#FFFDF7] py-20 md:py-28 border-b border-white/10"
    >
      {/* Brilho ambiental sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-[-10%] w-[420px] h-[420px] rounded-full bg-[#D8FF3E]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-10%] w-[460px] h-[460px] rounded-full bg-[#8F5CFF]/14 blur-[130px]"
      />

      <MotionReveal className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Final de Alto Impacto */}
        <div className="bg-[#171A17] border border-white/12 p-7 sm:p-10 lg:p-12 radius-ag3-lg mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D8FF3E] mb-3">
                AG3 · Shopify Premier Partner
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold leading-[1.08] tracking-tight text-[#FFFDF7] mb-4">
                Sua próxima fase de crescimento começa com a AG3.
              </h2>
              <p className="text-base sm:text-lg text-[#FFFDF7]/78 leading-relaxed max-w-2xl">
                Sua empresa merece uma loja virtual profissional, uma experiência de compra
                diferenciada e estratégias digitais preparadas para conquistar clientes e aumentar
                as vendas.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <a
                href="#formulario-ag3"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-bold tracking-wide bg-[#D8FF3E] text-[#101110] hover:bg-[#e5ff70] transition-colors radius-ag3-sm text-center"
              >
                <span>QUERO TRANSFORMAR MINHA LOJA VIRTUAL</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
              <a
                href={AG3_BRAND.social.whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold tracking-wide border border-white/20 text-[#FFFDF7] bg-[#101110] hover:border-[#D8FF3E]/60 hover:text-[#D8FF3E] transition-colors radius-ag3-sm text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>FALAR NO WHATSAPP · {AG3_BRAND.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Formulário Direto para WhatsApp */}
        <div
          id="formulario-ag3"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FFFDF7] mb-3">
              Conte sobre o momento da sua marca
            </h3>
            <p className="text-sm sm:text-base text-[#FFFDF7]/72 leading-relaxed mb-6">
              Ao preencher os campos ao lado, montamos automaticamente um resumo estruturado do seu
              projeto e encaminhamos sua solicitação direto para o WhatsApp da AG3.
            </p>

            <div className="space-y-4 border-t border-white/10 pt-6 text-sm text-[#FFFDF7]/80">
              <div>
                <span className="block font-display font-semibold text-[#D8FF3E]">
                  WhatsApp comercial: {AG3_BRAND.whatsappDisplay}
                </span>
                <a
                  href={AG3_BRAND.social.whatsappDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#FFFDF7]/75 hover:text-[#D8FF3E] mt-1 underline underline-offset-4"
                >
                  <span>Iniciar conversa direta no WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
              <div>
                <span className="block font-display font-semibold text-[#FFFDF7]">
                  Atendimento consultivo direto
                </span>
                <span className="text-xs text-[#FFFDF7]/60">
                  Diagnóstico comercial e técnico alinhado aos objetivos da sua operação.
                </span>
              </div>
              <div>
                <span className="block font-display font-semibold text-[#FFFDF7]">
                  Serviços modulares ou operação completa
                </span>
                <span className="text-xs text-[#FFFDF7]/60">
                  Contrate criação, redesign, gestão mensal, SEO ou Google Ads conforme sua
                  prioridade.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#171A17] border border-white/12 p-6 sm:p-8 radius-ag3-lg">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ag3-nome" className="block text-xs font-medium text-[#FFFDF7]/80 mb-1.5">
                    Nome *
                  </label>
                  <input
                    id="ag3-nome"
                    name="nome"
                    type="text"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#101110] text-[#FFFDF7] border border-white/15 rounded-md focus:border-[#D8FF3E] focus:outline-none placeholder:text-[#FFFDF7]/35"
                  />
                </div>

                <div>
                  <label htmlFor="ag3-empresa" className="block text-xs font-medium text-[#FFFDF7]/80 mb-1.5">
                    Nome da empresa *
                  </label>
                  <input
                    id="ag3-empresa"
                    name="empresa"
                    type="text"
                    required
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Nome da sua marca ou loja"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#101110] text-[#FFFDF7] border border-white/15 rounded-md focus:border-[#D8FF3E] focus:outline-none placeholder:text-[#FFFDF7]/35"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ag3-whatsapp" className="block text-xs font-medium text-[#FFFDF7]/80 mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    id="ag3-whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="(00) 90000-0000"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#101110] text-[#FFFDF7] border border-white/15 rounded-md focus:border-[#D8FF3E] focus:outline-none placeholder:text-[#FFFDF7]/35"
                  />
                </div>

                <div>
                  <label htmlFor="ag3-segmento" className="block text-xs font-medium text-[#FFFDF7]/80 mb-1.5">
                    Segmento de atuação *
                  </label>
                  <input
                    id="ag3-segmento"
                    name="segmento"
                    type="text"
                    required
                    value={form.segmento}
                    onChange={handleChange}
                    placeholder="Ex: Moda feminina, cosméticos, calçados..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#101110] text-[#FFFDF7] border border-white/15 rounded-md focus:border-[#D8FF3E] focus:outline-none placeholder:text-[#FFFDF7]/35"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ag3-possui-loja" className="block text-xs font-medium text-[#FFFDF7]/80 mb-1.5">
                    Já possui loja virtual?
                  </label>
                  <select
                    id="ag3-possui-loja"
                    name="possuiLoja"
                    value={form.possuiLoja}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#101110] text-[#FFFDF7] border border-white/15 rounded-md focus:border-[#D8FF3E] focus:outline-none"
                  >
                    <option value="Ainda não possuo loja virtual">Ainda não possuo loja virtual</option>
                    <option value="Sim, já tenho loja no ar e quero melhorar">
                      Sim, já tenho loja no ar e quero melhorar
                    </option>
                    <option value="Sim, já uso Shopify">Sim, já uso Shopify</option>
                    <option value="Quero migrar para a Shopify">Quero migrar para a Shopify</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="ag3-servico" className="block text-xs font-medium text-[#FFFDF7]/80 mb-1.5">
                    Qual serviço deseja contratar?
                  </label>
                  <select
                    id="ag3-servico"
                    name="servico"
                    value={form.servico}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#101110] text-[#FFFDF7] border border-white/15 rounded-md focus:border-[#D8FF3E] focus:outline-none"
                  >
                    {SERVICO_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="ag3-mensagem" className="block text-xs font-medium text-[#FFFDF7]/80 mb-1.5">
                  Mensagem
                </label>
                <textarea
                  id="ag3-mensagem"
                  name="mensagem"
                  rows={3}
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Conte brevemente sobre seus produtos, objetivos ou link da loja atual (se tiver)."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#101110] text-[#FFFDF7] border border-white/15 rounded-md focus:border-[#D8FF3E] focus:outline-none placeholder:text-[#FFFDF7]/35"
                />
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="p-3 text-xs font-medium text-[#FF8D42] bg-[#FF8D42]/10 border border-[#FF8D42]/40 rounded-md"
                >
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold bg-[#D8FF3E] text-[#101110] hover:bg-[#e5ff70] transition-colors radius-ag3-sm"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Enviar dados e continuar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>

              {submittedUrl && (
                <div className="mt-4 p-4 bg-[#101110] border border-[#D8FF3E]/50 radius-ag3-sm space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FFFDF7]">
                    <CheckCircle2 className="w-4 h-4 text-[#D8FF3E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      Mensagem preparada com sucesso! Se o WhatsApp não abriu automaticamente,
                      utilize o botão abaixo:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#D8FF3E] text-[#101110] rounded"
                    >
                      <span>Abrir WhatsApp da AG3</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium border border-white/20 text-[#FFFDF7] rounded hover:border-white/40"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#D8FF3E]" aria-hidden="true" />
                          <span>Texto copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copiar resumo</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
};
