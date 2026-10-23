import React from 'react';
import { EvaluationForm } from '../components/EvaluationForm';
import { SeoHead } from '../components/SeoHead';
import {
  CalendarCheck,
  CheckCircle,
  Clock,
  ShieldCheck,
  Building,
  HelpCircle
} from 'lucide-react';

interface EvaluationPageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const EvaluationPage: React.FC<EvaluationPageProps> = ({ onNavigate, currentLang }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      <SeoHead
        title="Request a Free Facility Evaluation | Beyond Cleaning 24 (Friant, CA)"
        description="Request a free commercial cleaning evaluation for your facility in Friant, CA. Beyond Cleaning 24 provides no-obligation walkthroughs and custom cleaning proposals."
        canonicalPath="#/request-evaluation"
        schemaType="WebPage"
      />

      {/* Header Banner */}
      <section className="bg-[#1C2028] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3 py-1 rounded-full">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>NO-OBLIGATION COMMERCIAL PROPOSAL</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Request a Free Commercial Cleaning Evaluation
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Tell us about your facility and cleaning requirements. Beyond Cleaning 24 can review your information, conduct an on-site walkthrough in Friant, CA, and discuss the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Form + Trust Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <EvaluationForm currentLang={currentLang} />
          </div>

          {/* Right Column: Why Walkthrough Matters */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F45123]">
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#1C2028] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-gray-900 block">Review Within 24 Hours:</strong>
                    Our commercial team reviews your facility specs and scheduling window.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#1C2028] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-gray-900 block">Onsite Facility Walkthrough:</strong>
                    We visit your location in Friant or nearby to inspect surface finishes and high-touch areas.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#1C2028] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-gray-900 block">Transparent Written Proposal:</strong>
                    You receive an itemized scope of work with zero hidden fees and no long-term trap.
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-[#1C2028] text-white rounded-2xl p-6 border border-[#2A303C] space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F45123]">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Commercial Pledge</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                We never provide generic guesswork quotes over the phone without understanding your facility footprint. Accurate commercial estimates require verified parameters.
              </p>
              <div className="pt-2 border-t border-[#2A303C] text-[11px] text-gray-400">
                Operating 24 Hours, 7 Days a Week for scheduled cleanings.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
