import React, { useState } from 'react';
import { FAQS_DATA, BUSINESS_INFO } from '../data/websiteData';
import { SeoHead } from '../components/SeoHead';
import {
  HelpCircle,
  ChevronDown,
  CalendarCheck,
  Search,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

interface FaqPageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, currentLang }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<string | null>('cat-0-0');

  // Filter FAQs based on search query
  const filteredCategories = FAQS_DATA.map((cat, catIdx) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    catIdx,
  })).filter((cat) => cat.items.length > 0);

  return (
    <div className="space-y-16 md:space-y-24">
      <SeoHead
        title="Frequently Asked Questions | Beyond Cleaning 24 (Friant, CA)"
        description="Find clear answers to common questions about commercial cleaning, scheduling, disinfection, and free facility evaluations with Beyond Cleaning 24 in Friant, CA."
        canonicalPath="#/faq"
        schemaType="WebPage"
      />

      {/* Hero */}
      <section className="bg-[#1C2028] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3 py-1 rounded-full">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>TRANSPARENT CLIENT GUIDANCE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Everything you need to know about our commercial cleaning capabilities, 24/7 scheduling options, and complimentary facility evaluation process in Friant, California.
            </p>

            {/* Search Bar */}
            <div className="pt-4 max-w-xl">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search questions (e.g. office, 24/7 hours, evaluation, supplies)..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:text-[#1C2028] focus:border-[#F45123] transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorized FAQs Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {filteredCategories.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 space-y-3">
            <HelpCircle className="w-8 h-8 text-gray-400 mx-auto" />
            <h3 className="text-base font-bold text-gray-800">No matching questions found</h3>
            <p className="text-xs text-gray-500">
              Try searching a different term or ask our Virtual Assistant directly.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs font-bold text-[#F45123] hover:underline"
            >
              Clear Search
            </button>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h2 className="text-lg font-bold text-[#1C2028] border-b border-gray-200 pb-2">
                {category.category}
              </h2>

              <div className="space-y-3">
                {category.items.map((item, itemIdx) => {
                  const key = `cat-${category.catIdx}-${itemIdx}`;
                  const isExpanded = expandedIndex === key;

                  return (
                    <div
                      key={key}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : key)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#1C2028] hover:text-[#F45123]"
                        aria-expanded={isExpanded}
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 flex-shrink-0 transition-transform ${
                            isExpanded ? 'rotate-180 text-[#F45123]' : 'text-gray-400'
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C2028] text-white rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#374151]">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F45123]">
              HAVE A SPECIFIC FACILITY QUESTION?
            </span>
            <h3 className="text-xl font-bold text-white">
              Speak directly with our commercial specialists
            </h3>
            <p className="text-xs text-gray-300 max-w-md">
              We provide prompt, honest answers regarding our service territory, scope details, and scheduling availability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-gray-100 text-[#1C2028] text-xs font-bold px-5 py-3 rounded-lg transition-colors text-center"
            >
              Contact Us Directly
            </button>
            <button
              onClick={() => onNavigate('request-evaluation')}
              className="bg-[#F45123] hover:bg-[#DC3E12] text-white text-xs font-bold px-5 py-3 rounded-lg transition-colors text-center shadow"
            >
              Request Free Evaluation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
