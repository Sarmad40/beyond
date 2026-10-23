import React from 'react';

interface BrandLogoProps {
  theme?: 'dark' | 'light';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  theme = 'light',
  className = '',
  size = 'md'
}) => {
  const isDark = theme === 'dark';

  const heights = {
    sm: 'h-11 md:h-12',
    md: 'h-14 md:h-16',
    lg: 'h-20 md:h-24',
  };

  // Official logo image path provided by the client
  const logoSrc = '/assets/aistudio/image_a5647224.png';

  if (isDark) {
    return (
      <div className={`inline-flex items-center select-none bg-white px-3 py-1.5 rounded-xl shadow-sm border border-gray-100 transition-transform duration-200 hover:scale-[1.02] ${className}`}>
        <img
          src={logoSrc}
          alt="Beyond Cleaning 24 - Cleaning & Disinfection with Perfection"
          className={`${heights[size]} w-auto object-contain max-w-[200px] sm:max-w-[240px]`}
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}>
      <img
        src={logoSrc}
        alt="Beyond Cleaning 24 - Cleaning & Disinfection with Perfection"
        className={`${heights[size]} w-auto object-contain max-w-[200px] sm:max-w-[240px]`}
        loading="eager"
      />
    </div>
  );
};
