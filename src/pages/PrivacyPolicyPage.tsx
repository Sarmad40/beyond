import React from 'react';
import { BUSINESS_INFO } from '../data/websiteData';
import { SeoHead } from '../components/SeoHead';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = () => {
  return (
    <div className="space-y-12 py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoHead
        title="Privacy Policy | Beyond Cleaning 24"
        description="Privacy policy of Beyond Cleaning 24 regarding commercial client information, facility evaluation details, and digital communication."
        canonicalPath="#/privacy-policy"
        schemaType="WebPage"
      />

      <div className="space-y-3 border-b border-gray-200 pb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F45123]">
          <ShieldCheck className="w-4 h-4" />
          <span>DATA INTEGRITY &amp; COMMERCIAL CONFIDENTIALITY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1C2028]">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500">
          Last Updated: October 2026 · Beyond Cleaning 24 (Friant, CA)
        </p>
      </div>

      <div className="prose prose-sm text-gray-700 space-y-6 text-xs sm:text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#1C2028]">1. Information We Collect</h2>
          <p>
            Beyond Cleaning 24 collects information necessary to evaluate commercial facilities and provide customized cleaning proposals. This includes business names, facility addresses, contact names, work email addresses, telephone numbers, facility square footage, and specific cleaning preferences submitted through our Free Facility Evaluation form or AI Virtual Assistant.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#1C2028]">2. How We Use Collected Information</h2>
          <p>
            Information provided by commercial clients is strictly used to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Schedule on-site facility evaluations and walkthroughs in Friant, CA and surrounding areas.</li>
            <li>Draft accurate, itemized commercial cleaning and disinfection scopes of work.</li>
            <li>Communicate operational scheduling and service delivery updates.</li>
            <li>Verify customer identity and respond to customer service inquiries.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#1C2028]">3. Non-Disclosure &amp; Security</h2>
          <p>
            Beyond Cleaning 24 does not sell, rent, trade, or distribute your commercial property data or contact information to third-party marketing companies. We respect the confidentiality of our clients&apos; premises, operational routines, and security access details.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#1C2028]">4. Contact Regarding Data Inquiries</h2>
          <p>
            If you have questions regarding your data or wish to have your facility information deleted from our prospective evaluation records, please contact us at{' '}
            <strong className="text-gray-900">{BUSINESS_INFO.email}</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};
