import React from 'react';
import { SERVICE_AREAS, BUSINESS_INFO } from '../data/websiteData';
import { SeoHead } from '../components/SeoHead';
import {
  MapPin,
  Clock,
  CalendarCheck,
  CheckCircle,
  Building,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ServiceAreasPageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ onNavigate, currentLang }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <SeoHead
        title="Commercial Cleaning Service Areas in Friant, CA | Beyond Cleaning 24"
        description="Beyond Cleaning 24 serves commercial facilities in Friant, California (93626) and surrounding Fresno County commercial corridors. Inquire about service availability."
        canonicalPath="#/service-areas"
        schemaType="WebPage"
      />

      {/* Hero */}
      <section className="bg-[#1C2028] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              <span>CALIFORNIA SERVICE TERRITORY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Commercial Cleaning in Friant, California and Nearby Areas
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Looking for commercial cleaning services in the Friant, California area? Contact Beyond Cleaning 24 to discuss your facility and confirm whether your location is within the company&apos;s current service area.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Service Areas Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border transition-all ${
                area.isPrimary
                  ? 'bg-white border-[#F45123] shadow-lg ring-1 ring-[#F45123]/30'
                  : 'bg-white border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      area.isPrimary ? 'bg-[#FFF0EB] text-[#F45123]' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1C2028]">{area.name}</h3>
                </div>

                {area.isPrimary && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F45123] text-white px-2 py-0.5 rounded">
                    Primary Territory
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                {area.description}
              </p>

              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                  Commercial Corridors &amp; Hubs:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {area.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#F7F7F8] border border-gray-200 text-gray-700 px-2.5 py-1 rounded font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => onNavigate('request-evaluation')}
                  className="text-xs font-bold text-[#F45123] hover:underline flex items-center gap-1.5"
                >
                  <span>Check Availability for Your Address</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Location Verification Notice */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 bg-[#FFF0EB] text-[#F45123] rounded-full flex items-center justify-center mx-auto shadow-sm">
            <Building className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C2028]">
            Confirm Service Dispatch for Your Property
          </h2>

          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            We confirm our dispatch schedule and service parameters with every facility manager before beginning work. Share your property address and facility type for immediate confirmation.
          </p>

          <button
            onClick={() => onNavigate('request-evaluation')}
            className="bg-[#F45123] hover:bg-[#DC3E12] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
          >
            Check Service Availability &amp; Request Walkthrough
          </button>
        </div>
      </section>
    </div>
  );
};
