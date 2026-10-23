import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/websiteData';
import { SeoHead } from '../components/SeoHead';
import {
  MapPin,
  Clock,
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  CalendarCheck,
  ShieldCheck,
  Loader2
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Commercial Inquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setLoading(true);

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const res = await resp.json();
      if (!resp.ok) throw new Error(res.error || 'Failed to submit message.');

      setSuccessMsg(
        'Thank you! Your message has been received by Beyond Cleaning 24. A team member will respond promptly.'
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Commercial Inquiry',
        message: '',
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'Submission error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 md:space-y-24">
      <SeoHead
        title="Contact Beyond Cleaning 24 | Commercial Cleaning in Friant, CA"
        description="Get in touch with Beyond Cleaning 24 for commercial cleaning and disinfection in Friant, California. Available 24/7 for scheduled operations."
        canonicalPath="#/contact"
        schemaType="ContactPage"
      />

      {/* Hero */}
      <section className="bg-[#1C2028] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3 py-1 rounded-full">
              <Mail className="w-3.5 h-3.5" />
              <span>DIRECT COMMERCIAL INQUIRIES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Contact Beyond Cleaning 24
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Whether inquiring about recurring janitorial services, intensive deep cleans, or scheduling your complimentary facility walkthrough, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Business Details & Location Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-[#1C2028]">
                Company Information
              </h2>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold">Service Headquarters:</strong>
                    <p className="text-gray-600">Friant, California 93626</p>
                    <p className="text-[11px] text-gray-500">Fresno County &amp; Regional Commercial Facilities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold">Operating Hours:</strong>
                    <p className="text-gray-600">Open 24 Hours, 7 Days a Week</p>
                    <p className="text-[11px] text-gray-500">Commercial cleaning scheduled 24/7 around your shifts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold">Electronic Inquiries:</strong>
                    <p className="text-gray-600">{BUSINESS_INFO.email}</p>
                    <p className="text-[11px] text-gray-500">Inquiries answered within 1 business day</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FFF0EB] text-[#F45123] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold">Telephone Inquiries:</strong>
                    <p className="text-gray-600">Direct line provided during facility evaluation confirmation</p>
                    <p className="text-[11px] text-gray-500">Call-back requested via the form below</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area Card */}
            <div className="bg-[#1C2028] text-white rounded-2xl p-7 border border-[#2A303C] space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F45123]">
                Commercial Dispatch
              </span>
              <h3 className="text-base font-bold text-white">
                Serving Friant &amp; Surrounding Commercial Properties
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                We confirm our dispatch schedule and service parameters with every facility manager before beginning work.
              </p>
              <button
                onClick={() => onNavigate('request-evaluation')}
                className="w-full bg-[#F45123] hover:bg-[#DC3E12] text-white py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Request Free Facility Evaluation</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 md:p-10 border border-gray-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F45123]">
                  DIRECT COMMUNICATION
                </span>
                <h2 className="text-2xl font-extrabold text-[#1C2028] mt-1">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Have a question about our cleaning standards, scheduling, or commercial service agreements? Drop us a line.
                </p>
              </div>

              {successMsg && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Message Delivered Successfully</p>
                    <p>{successMsg}</p>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Error Sending Message</p>
                    <p>{errorMsg}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Your Name <span className="text-[#F45123]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Michael Chang"
                      className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Email Address <span className="text-[#F45123]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="m.chang@facility.com"
                      className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white"
                    >
                      <option value="General Commercial Inquiry">General Commercial Inquiry</option>
                      <option value="Facility Evaluation Walkthrough">Facility Evaluation Walkthrough</option>
                      <option value="Recurring Janitorial Scope">Recurring Janitorial Scope</option>
                      <option value="Commercial Deep Clean">Commercial Deep Clean</option>
                      <option value="Post-Construction Clean">Post-Construction Clean</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Message <span className="text-[#F45123]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your facility size, service goals, or specific concerns..."
                    className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg p-3 text-xs text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#F45123] hover:bg-[#DC3E12] disabled:opacity-50 text-white text-xs font-bold px-6 py-3 rounded-lg shadow transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
