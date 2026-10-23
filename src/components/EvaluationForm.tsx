import React, { useState } from 'react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/websiteData';
import {
  CheckCircle,
  AlertCircle,
  Building2,
  CalendarCheck,
  Send,
  Loader2,
  FileText,
  Upload,
  Download,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';

interface EvaluationFormProps {
  currentLang?: 'en' | 'es';
  preselectedService?: string;
  onSuccess?: () => void;
}

export const EvaluationForm: React.FC<EvaluationFormProps> = ({
  currentLang = 'en',
  preselectedService,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    facilityAddress: '',
    facilityType: 'Corporate Office',
    approxSize: '2,500 - 5,000 sq ft',
    services: preselectedService ? [preselectedService] : ['Commercial Deep Cleaning'],
    frequency: 'Weekly',
    preferredSchedule: 'Evening (After Business Hours)',
    projectDescription: '',
    consent: false,
  });

  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    fullName: string;
    businessName: string;
    services: string[];
    date: string;
  } | null>(null);

  const facilityTypeOptions = [
    'Corporate Office',
    'Executive Suite / Legal / Finance',
    'Retail Store / Showroom',
    'Restaurant / Food Service',
    'Commercial Property / Common Building',
    'Newly Built or Renovated Space',
    'Medical-Adjacent Professional Office',
    'Other Commercial Facility',
  ];

  const sizeOptions = [
    'Under 1,500 sq ft',
    '1,500 - 3,500 sq ft',
    '3,500 - 7,500 sq ft',
    '7,500 - 15,000 sq ft',
    '15,000 - 30,000 sq ft',
    '30,000+ sq ft',
  ];

  const frequencyOptions = [
    'Daily (5-7 days / week)',
    '3 Days / Week',
    'Weekly',
    'Bi-Weekly (Every 2 weeks)',
    'Monthly',
    'One-Time Project / Turnover',
  ];

  const scheduleOptions = [
    'Evening (After Business Hours)',
    'Overnight (11 PM - 6 AM)',
    'Early Morning (Before Opening)',
    'Weekend Dedicated Service',
    'Flexible / 24-7 Availability',
  ];

  const handleServiceToggle = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceTitle);
      if (exists) {
        if (prev.services.length === 1) return prev; // Keep at least one
        return { ...prev, services: prev.services.filter((s) => s !== serviceTitle) };
      } else {
        return { ...prev, services: [...prev.services, serviceTitle] };
      }
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage('File size exceeds 10MB limit. Please upload a smaller file.');
        return;
      }
      setUploadedFileName(file.name);
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.fullName.trim() || !formData.businessName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please complete all required fields: Name, Business Name, Email, and Phone.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Please accept the consent checkbox to permit contact regarding your facility evaluation.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/evaluation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          uploadedFileName,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit evaluation request.');
      }

      setSubmittedData({
        referenceId: result.referenceId || `BC24-EVAL-${Date.now().toString().slice(-6)}`,
        fullName: formData.fullName,
        businessName: formData.businessName,
        services: formData.services,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      });

      if (onSuccess) onSuccess();
    } catch (err: any) {
      setErrorMessage(err.message || 'Submission failed. Please check your internet connection or call our Friant office directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const downloadSummaryPdf = () => {
    if (!submittedData) return;
    const content = `BEYOND CLEANING 24 - FACILITY EVALUATION CONFIRMATION
Reference ID: ${submittedData.referenceId}
Date: ${submittedData.date}

Client Name: ${submittedData.fullName}
Business Name: ${submittedData.businessName}
Selected Services: ${submittedData.services.join(', ')}
Facility Type: ${formData.facilityType}
Approximate Size: ${formData.approxSize}
Preferred Schedule: ${formData.preferredSchedule}
Frequency: ${formData.frequency}
Address / Area: ${formData.facilityAddress || 'Friant, CA Area'}
Operational Notes: ${formData.projectDescription || 'None provided'}

Thank you for choosing Beyond Cleaning 24.
Cleaning & Disinfection with Perfection.
Serving Friant, California and surrounding commercial facilities.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${submittedData.referenceId}-Facility-Evaluation-Summary.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (submittedData) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center max-w-2xl mx-auto animate-in fade-in zoom-in-95">
        <div className="w-16 h-16 bg-[#FFF0EB] text-[#F45123] rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
          <CheckCircle className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#F45123] mb-1 block">
          Evaluation Request Confirmed
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2028] mb-3">
          Thank You, {submittedData.fullName}
        </h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Your request for a free commercial cleaning evaluation for <strong className="text-gray-900">{submittedData.businessName}</strong> has been securely logged with our operations management team.
        </p>

        {/* Reference confirmation box */}
        <div className="bg-[#F7F7F8] border border-gray-200 rounded-xl p-5 mb-8 text-left space-y-2 text-xs md:text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="text-gray-500 font-medium">Evaluation Reference:</span>
            <span className="font-mono font-bold text-[#F45123]">{submittedData.referenceId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Facility Type:</span>
            <span className="font-semibold text-gray-800">{formData.facilityType}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Service Coverage:</span>
            <span className="font-semibold text-gray-800">{submittedData.services.join(', ')}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Service Territory:</span>
            <span className="font-semibold text-gray-800">Friant, CA &amp; Surrounding Area</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={downloadSummaryPdf}
            className="w-full sm:w-auto bg-[#1C2028] hover:bg-[#2A303C] text-white px-5 py-3 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow"
          >
            <Download className="w-4 h-4 text-[#F45123]" />
            <span>Download Summary (.txt)</span>
          </button>
          <button
            onClick={() => setSubmittedData(null)}
            className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 rounded-lg text-xs font-bold transition-colors"
          >
            Submit Another Evaluation
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 space-y-8"
      noValidate
    >
      {/* Form Introduction */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#F45123] mb-2">
          <CalendarCheck className="w-4 h-4" />
          <span>Complimentary Facility Assessment</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C2028]">
          Request a Free Commercial Cleaning Evaluation
        </h2>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          Tell us about your facility and cleaning requirements. Beyond Cleaning 24 can review your information and discuss the next steps. Zero cost, no generic estimates, and no obligation.
        </p>
      </div>

      {/* Error alert if any */}
      {errorMessage && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs md:text-sm flex items-start gap-2.5"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          <div>
            <p className="font-semibold">Unable to submit form</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Section 1: Contact & Company Profile */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100 pb-2">
          1. Company &amp; Contact Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-gray-700 mb-1">
              Full Name <span className="text-[#F45123]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Sarah Jenkins"
              className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label htmlFor="businessName" className="block text-xs font-bold text-gray-700 mb-1">
              Business / Facility Name <span className="text-[#F45123]">*</span>
            </label>
            <input
              id="businessName"
              type="text"
              required
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              placeholder="e.g. Sierra Vista Corporate Center"
              className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1">
              Work Email Address <span className="text-[#F45123]">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="s.jenkins@company.com"
              className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-1">
              Phone Number <span className="text-[#F45123]">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(555) 000-0000"
              className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white transition-all"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="facilityAddress" className="block text-xs font-bold text-gray-700 mb-1">
              Facility Address or General Location
            </label>
            <input
              id="facilityAddress"
              type="text"
              value={formData.facilityAddress}
              onChange={(e) => setFormData({ ...formData, facilityAddress: e.target.value })}
              placeholder="e.g. Friant Road Corridor, Friant, CA 93626"
              className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white transition-all"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Facility Specifications */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100 pb-2">
          2. Facility Scope &amp; Environment
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="facilityType" className="block text-xs font-bold text-gray-700 mb-1">
              Facility Type
            </label>
            <select
              id="facilityType"
              value={formData.facilityType}
              onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
              className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white transition-all"
            >
              {facilityTypeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="approxSize" className="block text-xs font-bold text-gray-700 mb-1">
              Approximate Square Footage
            </label>
            <select
              id="approxSize"
              value={formData.approxSize}
              onChange={(e) => setFormData({ ...formData, approxSize: e.target.value })}
              className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white transition-all"
            >
              {sizeOptions.map((sz) => (
                <option key={sz} value={sz}>
                  {sz}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Section 3: Primary Services Required */}
      <div className="space-y-3">
        <label className="block text-xs font-bold text-gray-700">
          Required Commercial Services (Select all that apply) <span className="text-[#F45123]">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {SERVICES_DATA.map((srv) => {
            const isSelected = formData.services.includes(srv.title);
            return (
              <button
                type="button"
                key={srv.id}
                onClick={() => handleServiceToggle(srv.title)}
                className={`p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 ${
                  isSelected
                    ? 'border-[#F45123] bg-[#FFF0EB] text-[#1C2028] shadow-sm font-semibold'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                    isSelected
                      ? 'bg-[#F45123] border-[#F45123] text-white'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {isSelected && <span className="text-[10px] leading-none">✓</span>}
                </div>
                <span>{srv.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 4: Frequency & Operational Schedule */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100 pb-2">
          3. Scheduling &amp; Operational Cadence
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="frequency" className="block text-xs font-bold text-gray-700 mb-1">
              Desired Cleaning Frequency
            </label>
            <select
              id="frequency"
              value={formData.frequency}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
              className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white transition-all"
            >
              {frequencyOptions.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="preferredSchedule" className="block text-xs font-bold text-gray-700 mb-1">
              Preferred Cleaning Window
            </label>
            <select
              id="preferredSchedule"
              value={formData.preferredSchedule}
              onChange={(e) => setFormData({ ...formData, preferredSchedule: e.target.value })}
              className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white transition-all"
            >
              {scheduleOptions.map((sch) => (
                <option key={sch} value={sch}>
                  {sch}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="projectDescription" className="block text-xs font-bold text-gray-700 mb-1">
            Project Description &amp; Specific Areas of Concern
          </label>
          <textarea
            id="projectDescription"
            rows={3}
            value={formData.projectDescription}
            onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
            placeholder="Share details such as high-traffic lobbies, executive conference rooms, tile grout concerns, move-out inspection deadlines, or desired start dates..."
            className="w-full bg-[#F7F7F8] border border-gray-200 rounded-lg p-3 text-sm text-gray-900 focus:outline-none focus:border-[#F45123] focus:bg-white transition-all"
          />
        </div>

        {/* Optional File Upload */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Optional Facility Floorplan or Scope Spec (Max 10MB)
          </label>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-[#F45123] transition-colors relative bg-gray-50/50">
            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center space-y-1">
              <Upload className="w-5 h-5 text-gray-400" />
              <span className="text-xs text-gray-600 font-medium">
                {uploadedFileName ? (
                  <span className="text-[#F45123] font-bold">Selected: {uploadedFileName}</span>
                ) : (
                  'Click or drag PDF, Image, or Word document'
                )}
              </span>
              <span className="text-[10px] text-gray-400">PDF, PNG, JPG, or DOC up to 10MB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#F45123] focus:ring-[#F45123]"
          />
          <span className="text-xs text-gray-600 leading-normal">
            I confirm that I am authorized to request a facility evaluation for this commercial property, and I consent to Beyond Cleaning 24 contacting me via email or phone regarding this evaluation request.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Strict commercial privacy · No third-party sharing</span>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto bg-[#F45123] hover:bg-[#DC3E12] disabled:opacity-50 text-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Evaluation Request...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Free Evaluation Request</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
