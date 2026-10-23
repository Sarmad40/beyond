import React, { useState } from 'react';
import { PROJECTS_DATA, BUSINESS_INFO } from '../data/websiteData';
import { SeoHead } from '../components/SeoHead';
import {
  Sparkles,
  CalendarCheck,
  CheckCircle,
  MapPin,
  Building,
  ArrowRight
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, currentLang }) => {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'Office Cleaning',
    'Retail Store Cleaning',
    'Restaurant Cleaning',
    'Post-Construction Cleaning',
    'Commercial Disinfection',
  ];

  const filtered = filter === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <div className="space-y-16 md:space-y-24">
      <SeoHead
        title="Commercial Cleaning Projects & Gallery | Beyond Cleaning 24"
        description="View our commercial cleaning portfolio showcasing office cleaning, deep cleans, retail store detailing, and post-construction turnovers in Friant, CA."
        canonicalPath="#/projects"
        schemaType="WebPage"
      />

      {/* Hero */}
      <section className="bg-[#1C2028] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMERCIAL WORK &amp; ENVIRONMENT GALLERY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              A Closer Look at Professional Cleaning
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Explore commercial environments maintained with precision. From corporate boardrooms and retail showrooms to restaurant dining floors and post-construction spaces, see the standard of clean we bring to Friant, CA facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Filter Control */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === c
                  ? 'bg-[#1C2028] text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#1C2028]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {proj.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-base font-bold text-[#1C2028]">{proj.title}</h3>
                  <div className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#F45123]" />
                    <span>{proj.facilityType} · {proj.location}</span>
                  </div>
                  <p className="text-xs text-gray-600 pt-1 leading-relaxed">{proj.scopeSummary}</p>

                  <div className="pt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                      Key Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.aspectsCovered.map((asp, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-[#F7F7F8] border border-gray-200 text-gray-700 px-2.5 py-0.5 rounded font-medium"
                        >
                          {asp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('request-evaluation')}
                  className="w-full py-2 bg-[#F7F7F8] hover:bg-[#F45123] text-gray-800 hover:text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Similar Scope for Your Space</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Evaluation Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#1C2028]">
          Have a Specific Commercial Facility Project?
        </h3>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Contact Beyond Cleaning 24 for an on-site walkthrough and customized written proposal.
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
