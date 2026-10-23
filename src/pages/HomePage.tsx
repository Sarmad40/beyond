import React, { useState } from 'react';
import {
  SERVICES_DATA,
  INDUSTRIES_DATA,
  PROJECTS_DATA,
  REVIEWS_DATA,
  FAQS_DATA,
  BUSINESS_INFO
} from '../data/websiteData';
import {
  ArrowRight,
  CheckCircle,
  CalendarCheck,
  ShieldCheck,
  Clock,
  Sparkles,
  Building,
  ChevronDown,
  Star,
  MapPin,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, currentLang }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>('All');

  const galleryCategories = [
    'All',
    'Office Cleaning',
    'Retail Store Cleaning',
    'Restaurant Cleaning',
    'Post-Construction Cleaning',
    'Commercial Disinfection',
  ];

  const filteredProjects =
    activeGalleryFilter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeGalleryFilter);

  return (
    <div className="space-y-20 md:space-y-28">
      {/* =========================================================================
          SECTION 1: PREMIUM HERO
      ========================================================================== */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-[#1C2028] text-white overflow-hidden">
        {/* Background Editorial Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
            alt="Pristine modern corporate facility maintained by Beyond Cleaning 24"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000"
          />
          {/* Subtle directional gradients for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C2028] via-[#1C2028]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2028] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl lg:max-w-3xl space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#F45123] animate-pulse" />
              <span>COMMERCIAL CLEANING &amp; DISINFECTION</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              A Higher Standard of Clean for Your Business
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Create a cleaner, more professional environment with commercial cleaning and disinfection services tailored to your facility. Beyond Cleaning 24 helps businesses in Friant, California maintain their spaces with attention to detail, clear communication, and a focus on consistent service.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('request-evaluation')}
                className="bg-[#F45123] hover:bg-[#DC3E12] text-white font-bold text-base px-7 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 active:translate-y-0"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Request a Free Facility Evaluation</span>
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-4 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#F45123]" />
              </button>
            </div>

            {/* Supporting Trust Points */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#F45123] flex-shrink-0" />
                <span className="font-semibold text-white">Commercial Cleaning Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F45123] flex-shrink-0" />
                <span>Flexible Scheduling Options</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F45123] flex-shrink-0" />
                <span>Plans Tailored to Your Facility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: BUSINESS INTRODUCTION (EDITORIAL SPLIT)
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
              BEYOND THE SURFACE
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2028] tracking-tight leading-tight">
              A Cleaner Space Makes a Stronger Impression
            </h2>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                A clean workplace influences how employees, visitors, customers, and business partners experience your facility. When spaces are maintained with precision, it signals reliability, respect, and operational excellence.
              </p>
              <p>
                Beyond Cleaning 24 focuses on commercial cleaning and disinfection to help businesses maintain clean, orderly, and professional environments. We operate without shortcuts—treating every conference table, entryway, executive office, and commercial restroom with uncompromising thoroughness.
              </p>
              <p>
                From routine janitorial care to intensive commercial deep cleaning projects, the right service begins with understanding your space, priorities, and operational requirements.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1C2028] hover:text-[#F45123] group transition-colors"
              >
                <span>Discover Beyond Cleaning 24</span>
                <ArrowRight className="w-4 h-4 text-[#F45123] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                alt="Commercial cleaning team member polishing surface with commercial microfiber"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F45123]">
                  Commercial Standards
                </span>
                <h4 className="text-base font-bold">
                  Cleaning &amp; Disinfection with Perfection
                </h4>
                <p className="text-xs text-gray-300">
                  Serving Friant, CA and surrounding commercial complexes 24/7.
                </p>
              </div>
            </div>

            {/* Decorative accent card */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[220px]">
              <div className="flex items-center gap-2 text-[#F45123] font-bold text-xs uppercase mb-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>5.0 Rating</span>
              </div>
              <p className="text-[11px] text-gray-600">
                Verified review on Google Business Profile for commercial precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CORE SERVICES (9 DEDICATED SERVICE CARDS)
      ========================================================================== */}
      <section className="bg-white py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
              SPECIALIZED COMMERCIAL CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2028]">
              Commercial Cleaning Solutions Built Around Your Facility
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore cleaning services designed for different commercial environments and facility requirements. Each service is executed according to verified scopes of work.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="group bg-[#F7F7F8] rounded-2xl overflow-hidden border border-gray-200/80 hover:border-[#F45123]/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Service Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={srv.heroImage}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2028]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-wider text-orange-200 bg-[#1C2028]/80 px-2.5 py-1 rounded">
                      {srv.eyebrow}
                    </span>
                  </div>

                  {/* Service Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-[#1C2028] group-hover:text-[#F45123] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {srv.summary}
                    </p>

                    <ul className="pt-2 space-y-1.5 text-xs text-gray-700">
                      {srv.keyBenefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#F45123] flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate(`service/${srv.slug}`)}
                    className="w-full py-2.5 px-4 bg-white hover:bg-[#F45123] text-[#1C2028] hover:text-white border border-gray-200 hover:border-[#F45123] text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 group-hover:shadow"
                  >
                    <span>Explore {srv.shortTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('request-evaluation')}
              className="inline-flex items-center gap-2 bg-[#F45123] hover:bg-[#DC3E12] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-md transition-all"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Discuss Custom Facility Scope With Our Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY CHOOSE BEYOND CLEANING 24? (6 FEATURE BLOCKS)
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
            BUILT ON REPUTATION &amp; ACCOUNTABILITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2028]">
            Professional Cleaning With Attention to Detail
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We ground every commercial relationship in transparency, rigorous task verification, and respect for your operational facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Block 1 */}
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-[#1C2028]">Facility-Focused Approach</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We understand the exact requirements of each commercial space—from floor compositions to high-traffic patterns—before recommending an appropriate service package.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-[#1C2028]">Clear Communication</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We make it easy for business managers to explain their cleaning needs, outline specific priorities, and receive prompt, transparent updates.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-[#1C2028]">Flexible Service Planning</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We discuss appropriate scheduling options around your facility hours and confirmed availability, supporting late-night, early-morning, and weekend routines.
            </p>
          </div>

          {/* Block 4 */}
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center font-bold">
              04
            </div>
            <h3 className="text-lg font-bold text-[#1C2028]">Commercial Cleaning Expertise</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We focus exclusively on the demands of professional business environments rather than presenting our company as a generic residential maid service.
            </p>
          </div>

          {/* Block 5 */}
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center font-bold">
              05
            </div>
            <h3 className="text-lg font-bold text-[#1C2028]">Attention to Detail</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Consistent cleaning practices, pristine baseboards, streak-free glass, sanitized restroom hardware, and orderly work areas define every shift.
            </p>
          </div>

          {/* Block 6 */}
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center font-bold">
              06
            </div>
            <h3 className="text-lg font-bold text-[#1C2028]">Free Facility Evaluation</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We invite prospective commercial clients to request a thorough walkthrough of their space with zero charge, zero pressure, and zero obligation.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: INDUSTRIES WE SERVE
      ========================================================================== */}
      <section className="bg-[#1C2028] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
              COMMERCIAL SECTORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Cleaning Solutions for Professional Environments
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Every industry carries distinct operational demands. We tailor equipment, chemistry, and shift times to your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                onClick={() => onNavigate('industries')}
                className="group cursor-pointer bg-[#2A303C]/70 hover:bg-[#2A303C] rounded-2xl overflow-hidden border border-[#374151] hover:border-[#F45123] transition-all p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-40 rounded-xl overflow-hidden relative">
                    <img
                      src={ind.heroImage}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#F45123] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {ind.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#374151] flex items-center justify-between text-xs text-[#F45123] font-semibold">
                  <span>View Industry Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FREE FACILITY EVALUATION (PROMINENT CALLOUT)
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F45123] to-[#DC3E12] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background graphic */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full text-white inline-block">
              NO-OBLIGATION ONSITE AUDIT
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Let&apos;s Evaluate Your Facility&apos;s Cleaning Needs
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              Every commercial space has different cleaning requirements. Request a facility evaluation to discuss your environment, priorities, desired schedule, and the type of service that best fits your needs.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('request-evaluation')}
                className="bg-[#1C2028] hover:bg-black text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-5 h-5 text-[#F45123]" />
                <span>Request Your Free Evaluation</span>
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="bg-white/15 hover:bg-white/25 text-white font-semibold text-base px-6 py-4 rounded-xl backdrop-blur-sm transition-all text-center"
              >
                Explore Our Cleaning Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: OUR PROCESS (4 STEPS TIMELINE)
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
            TRANSPARENT WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2028]">
            A Clear Path to a Cleaner Facility
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            From initial consultation through verified execution, our process ensures alignment at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 relative space-y-3">
            <span className="text-2xl font-black text-[#F45123]">01</span>
            <h3 className="text-base font-bold text-[#1C2028]">Tell Us About Your Facility</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Share the type of property, its general location in Friant or nearby, and your cleaning requirements.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 relative space-y-3">
            <span className="text-2xl font-black text-[#F45123]">02</span>
            <h3 className="text-base font-bold text-[#1C2028]">Discuss Your Priorities</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Explain the cleaning tasks, areas of concern, high-traffic friction zones, and preferred scheduling arrangements.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 relative space-y-3">
            <span className="text-2xl font-black text-[#F45123]">03</span>
            <h3 className="text-base font-bold text-[#1C2028]">Review the Proposed Scope</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Discuss the recommended services and the itemized written estimate tailored to your exact facility footprint.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 relative space-y-3">
            <span className="text-2xl font-black text-[#F45123]">04</span>
            <h3 className="text-base font-bold text-[#1C2028]">Confirm the Service Plan</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Proceed with the agreed service scope, security protocols, and confirmed 24/7 scheduling arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PROJECT GALLERY (FILTERABLE CATEGORIES)
      ========================================================================== */}
      <section className="bg-white py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
              COMMERCIAL PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2028]">
              A Closer Look at Professional Cleaning
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore photography illustrating commercial environments, precision surface detailing, and post-construction turnovers.
            </p>
          </div>

          {/* Filter Bar (Interactive Buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveGalleryFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeGalleryFilter === cat
                    ? 'bg-[#1C2028] text-white shadow-sm'
                    : 'bg-[#F7F7F8] text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="bg-[#F7F7F8] rounded-2xl overflow-hidden border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#1C2028]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {p.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-bold text-[#1C2028]">{p.title}</h3>
                    <p className="text-xs text-gray-500 font-medium">{p.facilityType} · {p.location}</p>
                    <p className="text-xs text-gray-600 pt-1 leading-relaxed">{p.scopeSummary}</p>

                    <div className="pt-3 flex flex-wrap gap-1.5">
                      {p.aspectsCovered.map((a, i) => (
                        <span key={i} className="text-[10px] bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded font-medium">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate('request-evaluation')}
                    className="w-full text-xs font-bold text-[#F45123] hover:underline flex items-center justify-between pt-2 border-t border-gray-200"
                  >
                    <span>Request Similar Scope</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CUSTOMER REVIEWS (ACCURATELY ATTRIBUTED)
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
            VERIFIED FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2028]">
            Built on Attention to Detail
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            The supplied business profile reports a 5.0 out of 5 rating based on customer review data. We hold our service delivery to that benchmark every single shift.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-1.5 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-gray-800 ml-1">
                    5.0 / 5.0 Rating
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  ✓ {rev.source}
                </span>
              </div>

              <blockquote className="text-base text-gray-800 italic leading-relaxed">
                &ldquo;{rev.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-2 text-xs text-gray-500">
                <div>
                  <span className="font-bold text-[#1C2028] block">{rev.author}</span>
                  <span>{rev.businessType} · {rev.location}</span>
                </div>
                <span className="text-[11px] text-gray-400">{rev.date}</span>
              </div>
            </div>
          ))}

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('reviews')}
              className="text-xs font-bold text-[#1C2028] hover:text-[#F45123] underline"
            >
              View Verified Review Attribution &amp; Details →
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: SERVICE AREAS (FRIANT & NEARBY)
      ========================================================================== */}
      <section className="bg-[#F7F7F8] py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
                LOCAL COMMERCIAL COVERAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2028]">
                Commercial Cleaning in Friant, California and Nearby Areas
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Looking for commercial cleaning services in the Friant, California area? Contact Beyond Cleaning 24 to discuss your facility and confirm whether your location is within the company&apos;s current service territory.
              </p>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F45123]" />
                  <span className="font-semibold">Home Base: Friant, CA 93626 (Fresno County)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F45123]" />
                  <span>24 Hours / 7 Days Commercial Operational Availability</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('service-areas')}
                  className="bg-[#1C2028] hover:bg-[#2A303C] text-white text-xs font-bold px-6 py-3 rounded-lg shadow transition-all flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#F45123]" />
                  <span>Check Service Availability</span>
                </button>
              </div>
            </div>

            {/* Visual map representative card */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-gray-200 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h4 className="text-sm font-bold text-[#1C2028]">Service Territory Overview</h4>
                <span className="text-[11px] font-semibold text-[#F45123]">California Central Valley</span>
              </div>
              <div className="h-60 rounded-xl bg-gray-100 border border-gray-200 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-[#FFF0EB] text-[#F45123] flex items-center justify-center mb-2 shadow">
                  <MapPin className="w-6 h-6" />
                </div>
                <h5 className="text-sm font-bold text-[#1C2028]">Friant, California (93626)</h5>
                <p className="text-xs text-gray-500 max-w-xs mt-1">
                  Millerton Lake Corridor · North Fresno County · Woodward Park Area
                </p>
                <div className="mt-3 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Active Commercial Dispatch Zone
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FREQUENTLY ASKED QUESTIONS
      ========================================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
            ANSWERS &amp; TRANSPARENCY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2028]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Clear facts regarding our commercial services, scheduling flexibility, and free facility evaluations.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA[0].items.concat(FAQS_DATA[1].items).slice(0, 7).map((faq, idx) => {
            const isExpanded = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(isExpanded ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#1C2028] hover:text-[#F45123] transition-colors"
                  aria-expanded={isExpanded}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#F45123]' : 'text-gray-400'
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('faq')}
            className="text-xs font-bold text-[#1C2028] hover:text-[#F45123] underline"
          >
            Explore All Commercial FAQs &amp; Operational Policies →
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: FINAL CONVERSION CTA
      ========================================================================== */}
      <section className="bg-[#1C2028] text-white py-20 relative overflow-hidden">
        {/* Background visual asset */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1800&q=80"
            alt="High-end corporate boardroom"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3 py-1 rounded-full">
            CLEANING &amp; DISINFECTION WITH PERFECTION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Your Facility Deserves a Higher Standard of Clean
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your commercial cleaning requirements and let Beyond Cleaning 24 help you explore the right service for your space in Friant, California.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('request-evaluation')}
              className="w-full sm:w-auto bg-[#F45123] hover:bg-[#DC3E12] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Request a Free Evaluation</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Contact Our Team</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
