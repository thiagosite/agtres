import React, { useState } from 'react';
import { Check, RefreshCw, Tag, Image as ImageIcon, Wrench, ArrowUpRight } from 'lucide-react';
import { MONTHLY_MANAGEMENT_SERVICES } from '../data/ag3Content';

interface RoutineCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  tasks: { title: string; detail: string; cadence: string }[];
}

const ROUTINE_CATEGORIES: RoutineCategory[] = [
  {
    id: 'catalogo',
    label: 'Catálogo & Preços',
    icon: <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />,
    tasks: [
      {
        title: 'Inserção e cadastro de novos produtos',
        detail: 'Títulos comerciais, variações de grade, descrições e categorização completa.',
        cadence: 'Rotina semanal',
      },
      {
        title: 'Atualização de preços e tabelas promocionais',
        detail: 'Ajuste de valores, preços comparativos e produtos em destaque.',
        cadence: 'Sob demanda',
      },
      {
        title: 'Tratamento de imagens e padronização',
        detail: 'Recorte, proporção uniforme e otimização de peso para carregamento ágil.',
        cadence: 'A cada lote',
      },
    ],
  },
  {
    id: 'campanhas',
    label: 'Vitrines & Campanhas',
    icon: <Tag className="w-3.5 h-3.5" aria-hidden="true" />,
    tasks: [
      {
        title: 'Atualização de vitrines e coleções sazonais',
        detail: 'Organização estratégica dos itens de maior giro na página inicial.',
        cadence: 'Ciclo mensal',
      },
      {
        title: 'Criação de banners e cupons de desconto',
        detail: 'Peças para datas comerciais, frete grátis e condições especiais.',
        cadence: 'Calendário comercial',
      },
      {
        title: 'Melhorias contínuas na apresentação dos produtos',
        detail: 'Refinamento de descrições, atributos e recomendações relacionadas.',
        cadence: 'Contínuo',
      },
    ],
  },
  {
    id: 'suporte',
    label: 'Manutenção & Suporte',
    icon: <Wrench className="w-3.5 h-3.5" aria-hidden="true" />,
    tasks: [
      {
        title: 'Manutenção técnica e verificação de navegação',
        detail: 'Checagem de links, filtros, integrações de pagamento e frete.',
        cadence: 'Monitoramento contínuo',
      },
      {
        title: 'Organização de categorias e menus',
        detail: 'Ajustes conforme entrada de novas linhas ou saída de coleções.',
        cadence: 'Mensal',
      },
      {
        title: 'Acompanhamento de desempenho e suporte mensal',
        detail: 'Canal direto com a equipe AG3 para solicitações e prioridades.',
        cadence: 'Atendimento dedicado',
      },
    ],
  },
];

export const MonthlyManagementSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(ROUTINE_CATEGORIES[0].id);
  const currentCategory =
    ROUTINE_CATEGORIES.find((cat) => cat.id === activeTab) || ROUTINE_CATEGORIES[0];

  return (
    <section
      id="gestao-mensal"
      className="bg-[#171A17] text-[#FFFDF7] py-20 md:py-28 border-b border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Coluna Esquerda: Posicionamento e Lista */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#6DA8FF] mb-3">
              03 · Gestão Mensal de E-commerce
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[#FFFDF7] mb-5">
              Sua loja sempre atualizada, organizada e preparada para vender.
            </h2>
            <p className="text-base leading-relaxed text-[#FFFDF7]/78 mb-6">
              A AG3 oferece acompanhamento mensal especializado para manter sua loja virtual
              atualizada, atrativa e competitiva.
            </p>

            {/* Destaque Institucional */}
            <div className="bg-[#101110] border border-[#D8FF3E]/40 p-5 radius-ag3 mb-8">
              <p className="font-display text-base font-semibold leading-snug text-[#FFFDF7]">
                “A AG3 assume a rotina de atualização da loja para que o empresário possa concentrar
                seus esforços na operação comercial.”
              </p>
            </div>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-[#D8FF3E] text-[#101110] hover:bg-[#e5ff70] transition-colors radius-ag3-sm"
            >
              <span>Contratar gestão mensal</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Coluna Direita: Mockup de Painel Operacional + Grade de 17 Entregas */}
          <div className="lg:col-span-7 space-y-6">
            {/* Mockup de Painel de Rotina Contínua */}
            <div className="bg-[#101110] border border-white/12 p-5 sm:p-6 radius-ag3-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-5 border-b border-white/10">
                <div>
                  <span className="text-xs font-medium text-[#6DA8FF] block mb-0.5">
                    Painel conceitual de operação mensal
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#FFFDF7]">
                    Rotina de atualizações constantes da loja
                  </h3>
                </div>

                {/* Abas do Painel */}
                <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Áreas da gestão mensal">
                  {ROUTINE_CATEGORIES.map((category) => {
                    const isActive = category.id === activeTab;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTab(category.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                          isActive
                            ? 'bg-[#D8FF3E] text-[#101110]'
                            : 'bg-[#171A17] text-[#FFFDF7]/75 hover:text-[#FFFDF7]'
                        }`}
                      >
                        {category.icon}
                        <span>{category.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Lista de Tarefas da Aba Selecionada */}
              <div className="space-y-3">
                {currentCategory.tasks.map((task) => (
                  <div
                    key={task.title}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#171A17] border border-white/8 radius-ag3-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded bg-[#D8FF3E]/15 text-[#D8FF3E] flex items-center justify-center shrink-0">
                        <ImageIcon className="w-3 h-3" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="font-display text-sm font-semibold text-[#FFFDF7]">
                          {task.title}
                        </h4>
                        <p className="text-xs text-[#FFFDF7]/65 mt-0.5">{task.detail}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#6DA8FF] whitespace-nowrap shrink-0 sm:text-right">
                      {task.cadence}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Todos os 17 Serviços da Gestão Mensal */}
            <div className="bg-[#101110] border border-white/10 p-5 sm:p-6 radius-ag3">
              <h3 className="font-display text-base font-semibold text-[#FFFDF7] mb-4">
                Escopo coberto no acompanhamento mensal
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2.5 text-sm text-[#FFFDF7]/80">
                {MONTHLY_MANAGEMENT_SERVICES.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D8FF3E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
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
