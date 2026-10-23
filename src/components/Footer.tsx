import React from 'react';
import { BrandLogo } from './BrandLogo';
import { SERVICES_DATA, INDUSTRIES_DATA, BUSINESS_INFO } from '../data/websiteData';
import {
  MapPin,
  Clock,
  Mail,
  Phone,
  ShieldCheck,
  Star,
  ArrowRight,
  CalendarCheck
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentLang }) => {
  return (
    <footer className="bg-[#1C2028] text-white pt-16 pb-10 border-t border-[#2A303C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Banner: Free Evaluation Highlight */}
        <div className="bg-gradient-to-r from-[#2A303C] to-[#1C2028] border border-[#374151] rounded-2xl p-6 md:p-8 mb-14 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[#F45123] text-xs font-bold tracking-widest uppercase">
              {currentLang === 'es' ? 'COBERTURA COMERCIAL EN FRIANT, CA' : 'COMMERCIAL FACILITY SOLUTIONS'}
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white">
              {currentLang === 'es'
                ? '¿Listo para evaluar las necesidades de su instalación?'
                : 'Ready to evaluate your commercial facility cleaning needs?'}
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              {currentLang === 'es'
                ? 'Programe una visita presencial gratuita y reciba un plan de limpieza comercial detallado sin compromiso.'
                : 'Schedule a complimentary walkthrough and receive an itemized, facility-specific cleaning and disinfection proposal with zero obligation.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('request-evaluation')}
            className="flex-shrink-0 bg-[#F45123] hover:bg-[#DC3E12] text-white font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group text-sm"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>{currentLang === 'es' ? 'Solicitar Evaluación Gratuita' : 'Request Free Facility Evaluation'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2A303C]">
          {/* Column 1: Company Profile & Verification */}
          <div className="space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none"
            >
              <BrandLogo theme="dark" showTagline={true} size="sm" />
            </button>
            <p className="text-xs text-gray-300 leading-relaxed pt-2">
              Beyond Cleaning 24 delivers commercial cleaning and targeted disinfection services built around the highest standards of perfection, accountability, and attention to detail in Friant, California.
            </p>

            {/* Verified Rating Card */}
            <div className="bg-[#2A303C]/80 border border-[#374151] rounded-lg p-3 space-y-1.5">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">5.0 / 5.0</span>
              </div>
              <p className="text-[11px] text-gray-300">
                Verified customer review on Google Business Profile. Built on precision commercial service.
              </p>
            </div>
          </div>

          {/* Column 2: 9 Primary Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F45123] mb-4">
              {currentLang === 'es' ? 'Servicios Comerciales' : 'Commercial Services'}
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate(`service/${srv.slug}`)}
                    className="text-gray-300 hover:text-white hover:underline text-left transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#F45123] text-[10px]">›</span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries & Key Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F45123] mb-4">
              {currentLang === 'es' ? 'Industrias y Empresa' : 'Industries & Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#F45123] text-[10px]">›</span>
                  <span>About Beyond Cleaning 24</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#F45123] text-[10px]">›</span>
                  <span>Industries We Serve</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-areas')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#F45123] text-[10px]">›</span>
                  <span>Service Areas (Friant &amp; Surrounds)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#F45123] text-[10px]">›</span>
                  <span>Commercial Project Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#F45123] text-[10px]">›</span>
                  <span>Customer Reviews &amp; Testimonials</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#F45123] text-[10px]">›</span>
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('request-evaluation')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 font-bold text-[#F45123]"
                >
                  <span className="text-[#F45123] text-[10px]">›</span>
                  <span>Request a Free Evaluation Form</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Service Hours */}
          <div className="space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F45123] mb-4">
              {currentLang === 'es' ? 'Atención y Ubicación' : 'Location & Operations'}
            </h4>
            <div className="flex items-start gap-2.5 text-gray-300">
              <MapPin className="w-4 h-4 text-[#F45123] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Serving Friant, CA</p>
                <p className="text-gray-400 text-[11px]">Fresno County &amp; Regional Commercial Facilities</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-gray-300">
              <Clock className="w-4 h-4 text-[#F45123] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">24/7 Operations</p>
                <p className="text-gray-400 text-[11px]">Cleanings scheduled around the clock upon scope agreement</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-gray-300">
              <Mail className="w-4 h-4 text-[#F45123] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Inquiries by Email</p>
                <p className="text-gray-400 text-[11px]">{BUSINESS_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-gray-300">
              <Phone className="w-4 h-4 text-[#F45123] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Direct Telephone Line</p>
                <p className="text-gray-400 text-[11px]">
                  Provided during facility evaluation confirmation or via inquiry form
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Cleaning &amp; Disinfection with Perfection.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="hover:text-white transition-colors underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('accessibility')}
              className="hover:text-white transition-colors underline"
            >
              Accessibility Statement
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors underline"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
