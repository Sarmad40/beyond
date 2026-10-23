import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Eye, CheckCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

interface AccessibilityPageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const AccessibilityPage: React.FC<AccessibilityPageProps> = () => {
  return (
    <div className="space-y-12 py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Accessibility Statement | Beyond Cleaning 24"
        description="Accessibility statement for Beyond Cleaning 24. WCAG 2.2 AA compliance standards and commitment to inclusive digital commercial experiences."
        canonicalPath="#/accessibility"
        schemaType="WebPage"
      />

      <div className="space-y-3 border-b border-gray-200 pb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F45123]">
          <Eye className="w-4 h-4" />
          <span>INCLUSIVE DIGITAL DESIGN</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1C2028]">
          Accessibility Statement
        </h1>
        <p className="text-xs text-gray-500">
          Conformance Target: WCAG 2.2 Level AA · Beyond Cleaning 24 (Friant, CA)
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#1C2028]">Our Commitment</h2>
          <p>
            Beyond Cleaning 24 is committed to ensuring digital accessibility for all website visitors, including commercial clients with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards in accordance with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#1C2028]">Accessibility Features Implemented</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <li className="p-3 bg-white rounded-xl border border-gray-200 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#F45123] flex-shrink-0 mt-0.5" />
              <span><strong>Keyboard Navigation:</strong> All navigation links, service dropdowns, and form controls are fully navigable via Tab and Enter keys.</span>
            </li>
            <li className="p-3 bg-white rounded-xl border border-gray-200 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#F45123] flex-shrink-0 mt-0.5" />
              <span><strong>Skip to Content:</strong> A direct skip link allows keyboard and screen reader users to bypass top navigation.</span>
            </li>
            <li className="p-3 bg-white rounded-xl border border-gray-200 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#F45123] flex-shrink-0 mt-0.5" />
              <span><strong>Contrast &amp; Sizing:</strong> Minimum 4.5:1 text contrast ratio, plus an interactive toolbar with Large/XL text scaling and high contrast toggle.</span>
            </li>
            <li className="p-3 bg-white rounded-xl border border-gray-200 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#F45123] flex-shrink-0 mt-0.5" />
              <span><strong>Reduced Motion:</strong> Supports the CSS `prefers-reduced-motion` media query and manual motion pause toggle.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#1C2028]">Feedback &amp; Accommodation Assistance</h2>
          <p>
            If you encounter accessibility barriers on any page of this website, or require assistance completing our Free Facility Evaluation form, please reach out to us at{' '}
            <strong className="text-gray-900">{BUSINESS_INFO.email}</strong>. We will gladly accommodate your request.
          </p>
        </section>
      </div>
    </div>
  );
};
