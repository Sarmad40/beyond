import React from 'react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/websiteData';
import { SeoHead } from '../components/SeoHead';
import {
  CheckCircle,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Layers
} from 'lucide-react';

interface ServicesOverviewPageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({
  onNavigate,
  currentLang,
}) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <SeoHead
        title="Commercial Cleaning Services in Friant, CA | Beyond Cleaning 24"
        description="Comprehensive commercial cleaning and disinfection services for facilities in Friant, CA. Explore our 9 specialized services and request a free facility evaluation."
        canonicalPath="#/services"
        schemaType="Service"
      />

      {/* Hero */}
      <section className="bg-[#1C2028] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3 py-1 rounded-full">
              <Layers className="w-3.5 h-3.5" />
              <span>FULL COMMERCIAL SERVICE DIRECTORY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Commercial Cleaning Solutions Built Around Your Facility
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Beyond Cleaning 24 provides nine specialized commercial services throughout Friant, California and surrounding commercial properties. Every primary service has a dedicated operational scope and verified standards of perfection.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('request-evaluation')}
                className="bg-[#F45123] hover:bg-[#DC3E12] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Request a Free Facility Walkthrough</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Services Detailed Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#F45123] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={srv.heroImage}
                    alt={srv.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2028]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-[#F45123] px-2 py-0.5 rounded">
                    Service 0{idx + 1}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F45123] block">
                    {srv.eyebrow}
                  </span>
                  <h3 className="text-lg font-bold text-[#1C2028]">{srv.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {srv.summary}
                  </p>

                  <div className="pt-2 space-y-1.5 text-xs text-gray-700">
                    <span className="font-bold text-gray-900 block text-[11px] uppercase tracking-wider">
                      Key Deliverables:
                    </span>
                    {srv.scopeIncluded.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#F45123] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate(`service/${srv.slug}`)}
                  className="w-full py-2.5 px-4 bg-[#F7F7F8] hover:bg-[#F45123] text-[#1C2028] hover:text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore {srv.shortTitle} Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Callout */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F45123]">
              CHOOSING THE RIGHT SERVICE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C2028]">
              Standard Cleaning vs. Janitorial vs. Deep Cleaning
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
              Not sure which service matches your facility stage? Here is how to decide:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-[#F7F7F8] p-5 rounded-xl border border-gray-200 space-y-2">
              <h4 className="font-bold text-sm text-[#1C2028]">Commercial Standard</h4>
              <p className="text-gray-600">
                Ideal for smaller offices or spaces needing reliable weekly/bi-weekly surface maintenance, trash handling, and restroom sanitation.
              </p>
            </div>

            <div className="bg-[#FFF0EB] p-5 rounded-xl border border-[#F45123]/30 space-y-2">
              <h4 className="font-bold text-sm text-[#F45123]">Commercial Janitorial</h4>
              <p className="text-gray-700">
                Designed for active corporate or commercial buildings requiring recurring maintenance (daily or 3-5 days/week) with full supply restocking.
              </p>
            </div>

            <div className="bg-[#F7F7F8] p-5 rounded-xl border border-gray-200 space-y-2">
              <h4 className="font-bold text-sm text-[#1C2028]">Commercial Deep Clean</h4>
              <p className="text-gray-600">
                An intensive top-to-bottom reset for tile grout, high vents, baseboards, and neglected corners. Typically scheduled quarterly or semi-annually.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('request-evaluation')}
              className="bg-[#1C2028] hover:bg-[#2A303C] text-white text-xs font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Request Free Facility Walkthrough to Determine Optimal Scope
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
