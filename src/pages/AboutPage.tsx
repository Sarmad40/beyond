import React from 'react';
import { BUSINESS_INFO } from '../data/websiteData';
import { SeoHead } from '../components/SeoHead';
import {
  ShieldCheck,
  CheckCircle,
  CalendarCheck,
  Clock,
  Sparkles,
  Target,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, currentLang }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <SeoHead
        title="About Beyond Cleaning 24 | Commercial Cleaning in Friant, CA"
        description="Learn about Beyond Cleaning 24. Professional commercial cleaning and disinfection serving Friant, California. Cleaning & Disinfection with Perfection."
        canonicalPath="#/about"
        schemaType="AboutPage"
      />

      {/* Hero */}
      <section className="bg-[#1C2028] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OUR MISSION &amp; STANDARDS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Commercial Cleaning and Disinfection with Perfection
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Beyond Cleaning 24 was established to provide commercial facilities in Friant, California with an uncompromising standard of cleanliness, meticulous attention to detail, and dependable 24/7 operational flexibility.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
              COMMERCIAL EXCELLENCE
            </span>
            <h2 className="text-3xl font-extrabold text-[#1C2028]">
              A Dedicated Focus on Professional Environments
            </h2>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Many cleaning services attempt to bridge the gap between residential housekeeping and commercial maintenance. At Beyond Cleaning 24, our focus is strictly commercial. We understand that business environments require different chemistry, specialized high-filtration equipment, and strict security and confidentiality protocols.
              </p>
              <p>
                Whether servicing corporate suites, busy retail sales floors, dining rooms, or newly built tenant spaces, our approach centers on a thorough understanding of each facility&apos;s unique operational rhythm.
              </p>
              <p>
                We do not believe in superficial surface wiping. Our tagline—<em>Cleaning &amp; Disinfection with Perfection</em>—is our daily operating commitment. Every shift follows documented checklists, verifiable standards, and direct management oversight.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('request-evaluation')}
                className="bg-[#F45123] hover:bg-[#DC3E12] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-lg shadow transition-all flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Request a Free Facility Walkthrough</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Beyond Cleaning 24 commercial facility standard"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-white p-5 rounded-xl border border-gray-200 shadow-xl max-w-xs">
              <span className="text-xs font-extrabold text-[#F45123] uppercase tracking-wider block mb-1">
                Local Presence
              </span>
              <p className="text-xs text-gray-700 font-semibold">
                Proudly based in Friant, CA, servicing commercial clients across Fresno County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F45123]">
              WHAT GUIDES OUR WORK
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C2028]">
              Our Operating Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F7F7F8] rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#1C2028]">Precision &amp; Thoroughness</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                From high-vent dust extraction to detailed tile grout cleaning, we treat the edges and overlooked spaces with the same care as center-stage surfaces.
              </p>
            </div>

            <div className="p-6 bg-[#F7F7F8] rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#1C2028]">Operational Respect</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We work around your schedule. Our 24/7 commercial availability ensures cleaning happens when your operations are quiet, never interrupting your staff or guests.
              </p>
            </div>

            <div className="p-6 bg-[#F7F7F8] rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#1C2028]">Accountability &amp; Integrity</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We don’t make exaggerated claims or hide behind confusing contracts. We deliver what we promise, verify task completion, and communicate openly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#1C2028]">
          Experience the Beyond Cleaning 24 Difference
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          Request a free, no-obligation evaluation of your Friant facility today.
        </p>
        <button
          onClick={() => onNavigate('request-evaluation')}
          className="bg-[#F45123] hover:bg-[#DC3E12] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-lg shadow transition-all"
        >
          Request Your Free Facility Evaluation
        </button>
      </section>
    </div>
  );
};
