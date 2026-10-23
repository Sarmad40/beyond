import React, { useState, useEffect, useRef } from 'react';
import { BrandLogo } from './BrandLogo';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/websiteData';
import {
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, currentLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for header background transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  const navigateTo = (route: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(route);
  };

  const navItems = [
    { label: currentLang === 'es' ? 'Inicio' : 'Home', route: 'home' },
    { label: currentLang === 'es' ? 'Sobre Nosotros' : 'About', route: 'about' },
    {
      label: currentLang === 'es' ? 'Servicios' : 'Services',
      route: 'services',
      hasDropdown: true,
    },
    { label: currentLang === 'es' ? 'Industrias' : 'Industries', route: 'industries' },
    { label: currentLang === 'es' ? 'Áreas de Servicio' : 'Service Areas', route: 'service-areas' },
    { label: currentLang === 'es' ? 'Proyectos' : 'Projects', route: 'projects' },
    { label: currentLang === 'es' ? 'Contacto' : 'Contact', route: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md text-[#1C2028] border-b border-gray-100'
          : 'bg-[#1C2028] text-white border-b border-[#2A303C]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on Left */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center text-left focus:outline-none"
            aria-label="Beyond Cleaning 24 Home"
          >
            <BrandLogo
              theme={isScrolled ? 'light' : 'dark'}
              showTagline={true}
              size="md"
            />
          </button>

          {/* Desktop Center Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.route} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                        currentRoute.startsWith('service')
                          ? 'text-[#F45123] font-bold'
                          : isScrolled
                          ? 'text-[#1C2028] hover:text-[#F45123]'
                          : 'text-gray-200 hover:text-white'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#F45123]' : ''
                        }`}
                      />
                    </button>

                    {/* Services Dropdown Panel */}
                    {servicesDropdownOpen && (
                      <div
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                        className="absolute left-0 mt-1 w-80 bg-white text-[#1C2028] rounded-xl shadow-2xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2"
                      >
                        <div className="px-4 pb-2 mb-2 border-b border-gray-100 flex items-center justify-between">
                          <span className="text-[11px] font-bold tracking-wider uppercase text-gray-500">
                            {currentLang === 'es' ? 'Nuestros 9 Servicios' : 'All 9 Primary Services'}
                          </span>
                          <button
                            onClick={() => navigateTo('services')}
                            className="text-xs text-[#F45123] font-semibold hover:underline"
                          >
                            {currentLang === 'es' ? 'Ver Todos' : 'View Overview'} →
                          </button>
                        </div>
                        <div className="max-h-[380px] overflow-y-auto space-y-0.5 px-2">
                          {SERVICES_DATA.map((srv) => (
                            <button
                              key={srv.id}
                              onClick={() => navigateTo(`service/${srv.slug}`)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${
                                currentRoute === `service/${srv.slug}`
                                  ? 'bg-[#FFF0EB] text-[#F45123] font-semibold'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-[#F45123]'
                              }`}
                            >
                              <span>{srv.title}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#F45123]" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => navigateTo(item.route)}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                    isActive
                      ? 'text-[#F45123] font-bold'
                      : isScrolled
                      ? 'text-[#1C2028] hover:text-[#F45123]'
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F45123] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Telephone Notice */}
            <div className="flex flex-col text-right">
              <span className={`text-[11px] font-bold uppercase tracking-wider ${isScrolled ? 'text-gray-500' : 'text-gray-400'}`}>
                {currentLang === 'es' ? 'Atención Comercial' : 'Direct Line'}
              </span>
              <button
                onClick={() => navigateTo('contact')}
                className={`text-xs font-semibold hover:text-[#F45123] transition-colors flex items-center gap-1 ${
                  isScrolled ? 'text-[#1C2028]' : 'text-gray-200'
                }`}
                title="Phone line confirmed upon facility evaluation"
              >
                <PhoneCall className="w-3 h-3 text-[#F45123]" />
                <span>Available by Request</span>
              </button>
            </div>

            {/* Primary Orange Free Evaluation Button */}
            <button
              onClick={() => navigateTo('request-evaluation')}
              className="bg-[#F45123] hover:bg-[#DC3E12] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 active:translate-y-0"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{currentLang === 'es' ? 'Evaluación Gratuita' : 'Free Facility Evaluation'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={() => navigateTo('request-evaluation')}
              className="bg-[#F45123] text-white text-xs font-bold px-3 py-1.5 rounded-md"
            >
              {currentLang === 'es' ? 'Evaluar' : 'Free Quote'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-[#2A303C]'
              }`}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1C2028] text-white border-t border-[#2A303C] px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4">
          <div className="space-y-1">
            <button
              onClick={() => navigateTo('home')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-base font-semibold ${
                currentRoute === 'home' ? 'text-[#F45123] bg-[#2A303C]' : 'text-gray-200'
              }`}
            >
              {currentLang === 'es' ? 'Inicio' : 'Home'}
            </button>

            <button
              onClick={() => navigateTo('about')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-base font-semibold ${
                currentRoute === 'about' ? 'text-[#F45123] bg-[#2A303C]' : 'text-gray-200'
              }`}
            >
              {currentLang === 'es' ? 'Sobre Nosotros' : 'About Beyond Cleaning 24'}
            </button>

            {/* Mobile Services Accordion */}
            <div className="py-1">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-base font-semibold text-gray-200 hover:bg-[#2A303C]"
              >
                <span>{currentLang === 'es' ? 'Servicios de Limpieza' : 'Commercial Services'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    servicesDropdownOpen ? 'rotate-180 text-[#F45123]' : ''
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-[#15181F] rounded-lg mt-1">
                  <button
                    onClick={() => navigateTo('services')}
                    className="w-full text-left px-3 py-2 rounded text-xs font-bold text-[#F45123] uppercase tracking-wider"
                  >
                    {currentLang === 'es' ? 'Ver Resumen General de Servicios' : 'View All 9 Services Overview'} →
                  </button>
                  {SERVICES_DATA.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => navigateTo(`service/${srv.slug}`)}
                      className={`w-full text-left px-3 py-2 rounded text-sm ${
                        currentRoute === `service/${srv.slug}`
                          ? 'text-[#F45123] font-bold bg-[#2A303C]'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {srv.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('industries')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-base font-semibold ${
                currentRoute === 'industries' ? 'text-[#F45123] bg-[#2A303C]' : 'text-gray-200'
              }`}
            >
              {currentLang === 'es' ? 'Industrias que Servimos' : 'Industries We Serve'}
            </button>

            <button
              onClick={() => navigateTo('service-areas')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-base font-semibold ${
                currentRoute === 'service-areas' ? 'text-[#F45123] bg-[#2A303C]' : 'text-gray-200'
              }`}
            >
              {currentLang === 'es' ? 'Áreas de Servicio' : 'Service Areas (Friant, CA)'}
            </button>

            <button
              onClick={() => navigateTo('projects')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-base font-semibold ${
                currentRoute === 'projects' ? 'text-[#F45123] bg-[#2A303C]' : 'text-gray-200'
              }`}
            >
              {currentLang === 'es' ? 'Proyectos y Galería' : 'Our Projects & Gallery'}
            </button>

            <button
              onClick={() => navigateTo('reviews')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-base font-semibold ${
                currentRoute === 'reviews' ? 'text-[#F45123] bg-[#2A303C]' : 'text-gray-200'
              }`}
            >
              {currentLang === 'es' ? 'Opiniones de Clientes' : 'Client Reviews (5.0 ★)'}
            </button>

            <button
              onClick={() => navigateTo('faq')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-base font-semibold ${
                currentRoute === 'faq' ? 'text-[#F45123] bg-[#2A303C]' : 'text-gray-200'
              }`}
            >
              {currentLang === 'es' ? 'Preguntas Frecuentes' : 'FAQs'}
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-base font-semibold ${
                currentRoute === 'contact' ? 'text-[#F45123] bg-[#2A303C]' : 'text-gray-200'
              }`}
            >
              {currentLang === 'es' ? 'Contacto' : 'Contact Us'}
            </button>
          </div>

          {/* Mobile Bottom CTA */}
          <div className="mt-6 pt-4 border-t border-[#2A303C] space-y-3">
            <button
              onClick={() => navigateTo('request-evaluation')}
              className="w-full bg-[#F45123] hover:bg-[#DC3E12] text-white py-3 rounded-lg font-bold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>{currentLang === 'es' ? 'Solicitar Evaluación Gratuita' : 'Request Free Facility Evaluation'}</span>
            </button>
            <div className="text-center text-xs text-gray-400">
              Serving Friant, CA &amp; surrounding commercial properties · 24/7 Operations
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
