import React from 'react';
import { INDUSTRIES_DATA, BUSINESS_INFO } from '../data/websiteData';
import { SeoHead } from '../components/SeoHead';
import {
  Building2,
  CheckCircle,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Layers
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, currentLang }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <SeoHead
        title="Industries We Serve | Beyond Cleaning 24 Commercial Services"
        description="Explore commercial cleaning solutions for corporate offices, retail stores, restaurants, commercial buildings, and newly renovated spaces in Friant, CA."
        canonicalPath="#/industries"
        schemaType="WebPage"
      />

      {/* Hero */}
      <section className="bg-[#1C2028] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3 py-1 rounded-full">
              <Building2 className="w-3.5 h-3.5" />
              <span>COMMERCIAL CLIENT SECTORS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Cleaning Solutions for Professional Environments
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              From corporate suites and boutiques to food service venues and post-construction buildouts, Beyond Cleaning 24 aligns commercial cleaning protocols with the unique demands of your industry in Friant, CA.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Detail Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={ind.heroImage}
                    alt={ind.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2028]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wider text-white bg-[#F45123] px-2.5 py-1 rounded">
                    {ind.title}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {ind.detailedDesc}
                  </p>

                  {/* Typical Scope Elements */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                      Common Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.typicalScope.map((scope, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#F7F7F8] border border-gray-200 text-gray-800 px-2.5 py-1 rounded-md font-medium"
                        >
                          {scope}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Services */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F45123] block">
                      Recommended Services:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {ind.suitableServices.map((srvTitle, i) => (
                        <span key={i} className="flex items-center gap-1 text-gray-700 font-semibold">
                          <CheckCircle className="w-3.5 h-3.5 text-[#F45123]" />
                          <span>{srvTitle}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('request-evaluation')}
                  className="w-full py-2.5 bg-[#1C2028] hover:bg-[#2A303C] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4 text-[#F45123]" />
                  <span>Request Facility Evaluation for {ind.title}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#1C2028]">
          Operate a Different Commercial Facility Type?
        </h3>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Contact our team to discuss your facility footprint, operating schedules, and tailored sanitation protocols.
        </p>
        <button
          onClick={() => onNavigate('request-evaluation')}
          className="bg-[#F45123] hover:bg-[#DC3E12] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-lg shadow transition-all"
        >
          Schedule a Custom Facility Evaluation
        </button>
      </section>
    </div>
  );
};
