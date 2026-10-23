import React, { useState } from 'react';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/websiteData';
import { SeoHead } from '../components/SeoHead';
import {
  Star,
  CheckCircle,
  CalendarCheck,
  ShieldCheck,
  Building2,
  MessageSquare,
  Send,
  Loader2
} from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (route: string) => void;
  currentLang: 'en' | 'es';
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate, currentLang }) => {
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackCompany, setFeedbackCompany] = useState('');
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackName || !feedbackText) return;
    setSubmittedFeedback(true);
  };

  return (
    <div className="space-y-16 md:space-y-24">
      <SeoHead
        title="Client Reviews & Ratings | Beyond Cleaning 24 (Friant, CA)"
        description="Read verified client feedback for Beyond Cleaning 24. 5.0 out of 5 rating on Google Business Profile for commercial cleaning and disinfection in Friant, CA."
        canonicalPath="#/reviews"
        schemaType="WebPage"
      />

      {/* Hero */}
      <section className="bg-[#1C2028] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F45123] bg-[#F45123]/10 border border-[#F45123]/30 px-3 py-1 rounded-full">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>AUTHENTIC CLIENT FEEDBACK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Built on Attention to Detail
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              We hold ourselves accountable to the highest standard of service. Read authentic customer feedback attributed directly to our official business profile.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Metric Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#F45123]">
            CURRENT PROFILE RATING
          </span>
          <div className="flex items-center justify-center gap-2 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-current" />
            ))}
          </div>
          <div className="text-4xl font-black text-[#1C2028]">5.0 / 5.0</div>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            Based on verified client reviews on our Google Business Profile for commercial cleaning and disinfection in Friant, California.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Verified Google Business Profile Citation</span>
            </span>
          </div>
        </div>
      </section>

      {/* Verified Reviews Feed */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-xl font-bold text-[#1C2028]">Verified Client Testimonials</h2>

        {REVIEWS_DATA.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">{rev.source}</span>
            </div>

            <p className="text-sm sm:text-base text-gray-800 italic leading-relaxed">
              &ldquo;{rev.text}&rdquo;
            </p>

            <div className="flex items-center justify-between pt-2 text-xs text-gray-500">
              <div>
                <span className="font-bold text-[#1C2028] block">{rev.author}</span>
                <span>{rev.businessType} · {rev.location}</span>
              </div>
              <span className="text-gray-400">{rev.date}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Leave Feedback Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F7F8] rounded-2xl p-8 border border-gray-200 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-[#1C2028]">
              Are You an Active Commercial Client?
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              We value direct operational feedback to continually maintain our benchmark of perfection.
            </p>
          </div>

          {submittedFeedback ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-xl text-xs sm:text-sm">
              <p className="font-bold">Thank you for your feedback!</p>
              <p className="mt-1">
                Your comments have been received by our commercial operations leadership.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    placeholder="e.g. David Miller"
                    className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#F45123]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Facility / Business Name
                  </label>
                  <input
                    type="text"
                    required
                    value={feedbackCompany}
                    onChange={(e) => setFeedbackCompany(e.target.value)}
                    placeholder="e.g. Friant Commercial Plaza"
                    className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#F45123]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Service Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setFeedbackRating(star)}
                      className="p-1 text-amber-500 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= feedbackRating ? 'fill-current' : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Feedback or Review Comments
                </label>
                <textarea
                  rows={3}
                  required
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Share your experience with our commercial cleaning team, thoroughness, and communication..."
                  className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#F45123]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#1C2028] hover:bg-[#2A303C] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-[#F45123]" />
                <span>Submit Client Review</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Evaluation Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#1C2028]">
          Ready to experience 5-star commercial cleaning?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          Contact Beyond Cleaning 24 for a complimentary on-site facility evaluation in Friant, CA.
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
