import React, { useState } from 'react';
import { ServiceItem, SERVICES_DATA, BUSINESS_INFO } from '../data/websiteData';
import { SeoHead } from '../components/SeoHead';
import {
  CheckCircle,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Clock,
  Sparkles,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

interface ServiceDetailPageProps {
  serviceSlug: string;
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceSlug,
  onNavigate,
  currentLang,
}) => {
  const service = SERVICES_DATA.find((s) => s.slug === serviceSlug) || SERVICES_DATA[0];
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Other related services for internal links
  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* SEO & Structured Data Injection */}
      <SeoHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`#/service/${service.slug}`}
        schemaType="Service"
        serviceData={{
          name: service.title,
          description: service.summary,
        }}
      />

      {/* =========================================================================
          HERO SECTION
      ========================================================================== */}
      <section className="relative min-h-[460px] md:min-h-[520px] flex items-center bg-[#1C2028] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C2028] via-[#1C2028]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2028] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl space-y-5 text-left">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-gray-400 font-medium" aria-label="Breadcrumb">
              <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                Home
              </button>
              <span>/</span>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                Services
              </button>
              <span>/</span>
              <span className="text-[#F45123] font-semibold">{service.shortTitle}</span>
            </nav>

            <div className="inline-block text-xs font-bold tracking-widest uppercase text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3 py-1 rounded-full">
              {service.eyebrow}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              {service.summary}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('request-evaluation')}
                className="bg-[#F45123] hover:bg-[#DC3E12] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Request a Free Facility Evaluation</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-all text-center"
              >
                Discuss Facility Scope
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED OVERVIEW & SCOPE BREAKDOWN
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-10">
            {/* In-depth Editorial Content */}
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
                FACILITY SPECIFICATIONS &amp; APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C2028]">
                How We Deliver {service.title} in Friant, CA
              </h2>
              {service.detailedDescription.map((para, i) => (
                <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Scope Included Grid */}
            <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F45123]">
                <CheckCircle className="w-4 h-4" />
                <span>What Is Typically Included In Scope</span>
              </div>
              <h3 className="text-lg font-bold text-[#1C2028]">
                Standard Focus Areas &amp; Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.scopeIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F45123] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {service.scopeExcluded && service.scopeExcluded.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
                  <span className="font-bold text-gray-700 block mb-1">Scope Clarifications &amp; Exclusions:</span>
                  <ul className="list-disc pl-4 space-y-1">
                    {service.scopeExcluded.map((exc, i) => (
                      <li key={i}>{exc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
                THE COMMERCIAL ADVANTAGE
              </span>
              <h3 className="text-xl font-bold text-[#1C2028]">
                Benefits for Your Business &amp; Facility Operations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyBenefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-gray-200 flex items-start gap-3 shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-[#F45123] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Delivery Process (4 Steps) */}
            <div className="space-y-4 pt-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
                STEP-BY-STEP METHODOLOGY
              </span>
              <h3 className="text-xl font-bold text-[#1C2028]">
                Our {service.shortTitle} Execution Process
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-xl border border-gray-200 space-y-2 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#F45123] tracking-widest">
                        PHASE {step.step}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#1C2028]">{step.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Concerns Addressed */}
            {service.commonConcerns && service.commonConcerns.length > 0 && (
              <div className="bg-[#FFF0EB]/50 rounded-2xl p-6 border border-[#F45123]/20 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F45123]">
                  <HelpCircle className="w-4 h-4" />
                  <span>Common Client Concerns Addressed</span>
                </div>
                <div className="space-y-3">
                  {service.commonConcerns.map((cc, i) => (
                    <div key={i} className="text-xs sm:text-sm space-y-1">
                      <p className="font-bold text-gray-900">{cc.question}</p>
                      <p className="text-gray-600">{cc.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Service-Specific FAQs */}
            <div className="space-y-4 pt-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
                QUESTIONS &amp; CLARIFICATIONS
              </span>
              <h3 className="text-xl font-bold text-[#1C2028]">
                Frequently Asked Questions About {service.title}
              </h3>
              <div className="space-y-2">
                {service.faqs.map((faq, idx) => {
                  const isExpanded = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => setActiveFaq(isExpanded ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#1C2028] hover:text-[#F45123]"
                        aria-expanded={isExpanded}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 flex-shrink-0 transition-transform ${
                            isExpanded ? 'rotate-180 text-[#F45123]' : 'text-gray-400'
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Free Evaluation Card */}
            <div className="bg-[#1C2028] text-white rounded-2xl p-6 shadow-xl border border-[#374151] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#F45123] flex items-center justify-center text-white">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F45123]">
                  No Cost · No Obligation
                </span>
                <h3 className="text-lg font-extrabold text-white mt-1">
                  Evaluate Your Facility
                </h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Every facility has unique layouts and surfaces. Schedule a complimentary walkthrough to confirm scope and receive an accurate proposal.
                </p>
              </div>

              <button
                onClick={() => onNavigate('request-evaluation')}
                className="w-full bg-[#F45123] hover:bg-[#DC3E12] text-white py-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>Request Free Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 border-t border-[#2A303C] text-[11px] text-gray-400 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F45123]" />
                  <span>24/7 commercial cleaning schedules</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F45123]" />
                  <span>Friant &amp; surrounding commercial coverage</span>
                </div>
              </div>
            </div>

            {/* Internal Links to Other Primary Services */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Explore Related Commercial Services
              </h4>
              <div className="space-y-1.5">
                {relatedServices.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onNavigate(`service/${rel.slug}`)}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between text-xs font-semibold text-gray-800 hover:text-[#F45123] group"
                  >
                    <span>{rel.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#F45123] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
              <div className="pt-2 border-t border-gray-100">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-bold text-[#F45123] hover:underline"
                >
                  View All 9 Commercial Cleaning Services →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="bg-gradient-to-r from-[#1C2028] to-[#2A303C] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to arrange {service.title} for your commercial space?
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Contact Beyond Cleaning 24 today. We review your square footage, surface materials, and timing to craft your custom cleaning scope.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('request-evaluation')}
              className="bg-[#F45123] hover:bg-[#DC3E12] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
            >
              Request Your Free Facility Evaluation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
