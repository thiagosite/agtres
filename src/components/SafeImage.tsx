import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
}

/**
 * Componente de imagem resiliente com fallback estilizado para garantir zero quadros quebrados.
 */
export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackLabel,
  className = '',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#171A17] via-[#1E221E] to-[#101110] text-[#FFFDF7]/70 p-6 text-center ${className}`}
      >
        <ImageOff className="w-6 h-6 text-[#D8FF3E] mb-2" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide text-[#FFFDF7]/80">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
