import React, { useState, useEffect } from 'react';
import { Eye, Type, Sparkles, RotateCcw, Volume2, Globe } from 'lucide-react';

interface AccessibilityProps {
  currentLang: 'en' | 'es';
  onToggleLang: () => void;
}

export const AccessibilityToolbar: React.FC<AccessibilityProps> = ({
  currentLang,
  onToggleLang,
}) => {
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xl'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Apply font scale to document element
  useEffect(() => {
    const root = document.documentElement;
    if (fontSizeLevel === 'large') {
      root.style.fontSize = '18px';
    } else if (fontSizeLevel === 'xl') {
      root.style.fontSize = '20px';
    } else {
      root.style.fontSize = '16px';
    }
  }, [fontSizeLevel]);

  // Apply high contrast class
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('contrast-125', 'brightness-95');
    } else {
      document.body.classList.remove('contrast-125', 'brightness-95');
    }
  }, [highContrast]);

  // Apply reduced motion class
  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add('motion-reduce');
    } else {
      document.documentElement.classList.remove('motion-reduce');
    }
  }, [reducedMotion]);

  const resetSettings = () => {
    setFontSizeLevel('normal');
    setHighContrast(false);
    setReducedMotion(false);
  };

  return (
    <>
      {/* Skip to Main Content Link for screen readers and keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#F45123] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:font-semibold"
      >
        {currentLang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>

      {/* Mini Accessibility & Language Bar */}
      <div className="bg-[#1C2028] text-white border-b border-[#2A303C] text-xs py-1.5 px-4 z-40 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left info badge */}
          <div className="flex items-center gap-2 text-gray-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
            <span>
              {currentLang === 'es'
                ? 'Atención Comercial 24/7 en Friant, CA'
                : 'Commercial Cleaning & Disinfection · Friant, CA · 24/7 Operations'}
            </span>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <span className="text-amber-400 font-medium hidden md:inline">
              ★ 5.0 Google Rating (Verified)
            </span>
          </div>

          {/* Right controls: Language toggle and Accessibility trigger */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded text-gray-300 hover:text-white hover:bg-[#2A303C] transition-colors font-medium"
              title="Toggle language / Cambiar idioma"
            >
              <Globe className="w-3.5 h-3.5 text-[#F45123]" />
              <span>{currentLang === 'en' ? 'Español' : 'English'}</span>
            </button>

            {/* Accessibility Panel Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded text-gray-300 hover:text-white hover:bg-[#2A303C] transition-colors"
              aria-label="Accessibility options"
              aria-expanded={isOpen}
            >
              <Eye className="w-3.5 h-3.5 text-orange-400" />
              <span className="hidden sm:inline">
                {currentLang === 'es' ? 'Accesibilidad' : 'Accessibility'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Accessibility Modal / Tray */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Accessibility Controls"
          className="fixed top-12 right-4 z-[9990] bg-[#1C2028] text-white border border-[#374151] rounded-xl shadow-2xl p-5 w-80 max-w-[95vw] animate-in fade-in slide-in-from-top-2"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#2A303C] mb-4">
            <div className="flex items-center gap-2 font-bold text-sm text-[#F45123]">
              <Eye className="w-4 h-4" />
              <span>Accessibility Preferences</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-lg leading-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4 text-xs">
            {/* Font Size Scaling */}
            <div>
              <label className="text-gray-300 font-medium block mb-1.5 flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-gray-400" />
                Text Size
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {(['normal', 'large', 'xl'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setFontSizeLevel(level)}
                    className={`py-1.5 px-2 rounded font-medium text-center transition-colors ${
                      fontSizeLevel === level
                        ? 'bg-[#F45123] text-white'
                        : 'bg-[#2A303C] text-gray-300 hover:bg-[#374151]'
                    }`}
                  >
                    {level === 'normal' ? 'Default' : level === 'large' ? 'Large' : 'XL'}
                  </button>
                ))}
              </div>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-gray-300 font-medium">Enhanced Contrast</span>
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                  highContrast ? 'bg-[#F45123]' : 'bg-[#374151]'
                }`}
                aria-pressed={highContrast}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    highContrast ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-gray-300 font-medium">Reduce Animations</span>
              <button
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                  reducedMotion ? 'bg-[#F45123]' : 'bg-[#374151]'
                }`}
                aria-pressed={reducedMotion}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    reducedMotion ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full mt-3 py-2 text-center text-gray-400 hover:text-white flex items-center justify-center gap-1.5 border-t border-[#2A303C] pt-3 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset to Defaults
            </button>
          </div>
        </div>
      )}
    </>
  );
};
