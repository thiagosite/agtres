import React from 'react';

interface Ag3LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

/**
 * Logotipo geométrico minimalista da AG3 combinando os traços de "A", "/" e "3".
 */
export const Ag3Logo: React.FC<Ag3LogoProps> = ({ variant = 'dark', className = '' }) => {
  const primaryText = variant === 'dark' ? 'text-[#FFFDF7]' : 'text-[#101110]';
  const strokePrimary = variant === 'dark' ? '#FFFDF7' : '#101110';

  return (
    <span className={`inline-flex items-center gap-2.5 select-none whitespace-nowrap shrink-0 ${className}`}>
      <svg
        width="34"
        height="26"
        viewBox="0 0 34 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Traço geométrico do "A" */}
        <path
          d="M2.5 23L9.5 3.5H12L15.5 14"
          stroke={strokePrimary}
          strokeWidth="2.4"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M5.2 16.5H12.5"
          stroke={strokePrimary}
          strokeWidth="2.2"
          strokeLinecap="square"
        />
        {/* Barra diagonal "/" proprietária em verde-lima */}
        <path
          d="M15.2 23.5L21.8 2.5"
          stroke="#D8FF3E"
          strokeWidth="2.6"
          strokeLinecap="square"
        />
        {/* Construção geométrica do "3" */}
        <path
          d="M23.5 4.2H31.2L26.8 11.8H29.4C31.1 11.8 32.2 13 32.2 15.1V19.1C32.2 21.3 30.8 22.8 28.4 22.8H23.2"
          stroke={strokePrimary}
          strokeWidth="2.4"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
      <span className={`font-display text-xl font-bold tracking-tight ${primaryText}`}>
        AG3
      </span>
    </span>
  );
};
