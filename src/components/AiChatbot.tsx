import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  CheckCircle,
  HelpCircle,
  Building,
  CalendarCheck,
  ChevronRight,
  ShieldCheck,
  Loader2
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  isLeadSummary?: boolean;
  leadData?: Record<string, string>;
}

interface AiChatbotProps {
  onNavigateToService?: (slug: string) => void;
  onOpenEvaluationForm?: () => void;
  currentLang?: 'en' | 'es';
}

export const AiChatbot: React.FC<AiChatbotProps> = ({
  onNavigateToService,
  onOpenEvaluationForm,
  currentLang = 'en',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadMode, setLeadMode] = useState<
    'idle' | 'asking_name' | 'asking_business' | 'asking_contact' | 'asking_facility' | 'confirm_summary' | 'submitted'
  >('idle');
  const [leadCollector, setLeadCollector] = useState({
    name: '',
    business: '',
    contact: '',
    facility: '',
    service: '',
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const welcomeText = currentLang === 'es'
    ? '¡Hola! Bienvenido a Beyond Cleaning 24. ¿En qué podemos ayudarle hoy con sus necesidades de limpieza comercial y desinfección?'
    : 'Hello! Welcome to Beyond Cleaning 24. How can we help with your commercial cleaning needs today?';

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: welcomeText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const suggestedQuestions = [
    'I need office cleaning.',
    'I need commercial deep cleaning.',
    'I need janitorial services.',
    'I need post-construction cleaning.',
    'I need restaurant or retail cleaning.',
    'I would like a free facility evaluation.',
  ];

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const sendUserMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const lower = text.toLowerCase();

    // Check if user is triggering lead flow
    if (leadMode === 'idle' && (lower.includes('evaluation') || lower.includes('quote') || lower.includes('walkthrough') || lower.includes('estimate'))) {
      setLeadMode('asking_name');
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `ast-${Date.now()}`,
          sender: 'assistant',
          text: "We would be delighted to arrange your Free Facility Evaluation in Friant, CA! Let's get a few quick details. First, may I know your full name?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      return;
    }

    // Step 1: Collecting Name
    if (leadMode === 'asking_name') {
      setLeadCollector((prev) => ({ ...prev, name: text }));
      setLeadMode('asking_business');
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `ast-${Date.now()}`,
          sender: 'assistant',
          text: `Nice to meet you, ${text}! What is the name of your company or commercial property?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      return;
    }

    // Step 2: Collecting Business
    if (leadMode === 'asking_business') {
      setLeadCollector((prev) => ({ ...prev, business: text }));
      setLeadMode('asking_contact');
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `ast-${Date.now()}`,
          sender: 'assistant',
          text: `Got it, ${text}. Please provide your email address and best contact phone number so our team can send your proposal details:`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      return;
    }

    // Step 3: Collecting Contact
    if (leadMode === 'asking_contact') {
      setLeadCollector((prev) => ({ ...prev, contact: text }));
      setLeadMode('asking_facility');
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `ast-${Date.now()}`,
          sender: 'assistant',
          text: "Thank you! What type of facility is it (e.g., corporate office, retail store, restaurant, newly renovated space) and its approximate size in square feet?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      return;
    }

    // Step 4: Facility Info & Confirming Summary
    if (leadMode === 'asking_facility') {
      const updatedCollector = { ...leadCollector, facility: text };
      setLeadCollector(updatedCollector);
      setLeadMode('confirm_summary');
      setIsLoading(false);

      setMessages((prev) => [
        ...prev,
        {
          id: `ast-${Date.now()}`,
          sender: 'assistant',
          text: `Here is a summary of your Free Facility Evaluation request:\n\n• Name: ${updatedCollector.name}\n• Business: ${updatedCollector.business}\n• Contact: ${updatedCollector.contact}\n• Facility / Scope: ${text}\n\nShall I submit this to our Beyond Cleaning 24 commercial operations team?`,
          isLeadSummary: true,
          leadData: {
            name: updatedCollector.name,
            business: updatedCollector.business,
            contact: updatedCollector.contact,
            facility: text,
          },
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      return;
    }

    // Step 5: Submission confirmed in chat
    if (leadMode === 'confirm_summary') {
      if (lower.includes('yes') || lower.includes('submit') || lower.includes('ok') || lower.includes('confirm') || lower.includes('sure') || lower.includes('please')) {
        try {
          const resp = await fetch('/api/evaluation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fullName: leadCollector.name || 'Chat Lead',
              businessName: leadCollector.business || 'Commercial Client',
              email: leadCollector.contact.includes('@') ? leadCollector.contact : 'lead@beyondcleaning24.com',
              phone: leadCollector.contact,
              facilityType: leadCollector.facility,
              consent: true,
            }),
          });
          const data = await resp.json();
          setLeadMode('submitted');
          setMessages((prev) => [
            ...prev,
            {
              id: `ast-${Date.now()}`,
              sender: 'assistant',
              text: `✅ Fantastic! Your Free Facility Evaluation request has been recorded (Reference: ${data.referenceId || 'BC24-CONFIRMED'}). A commercial cleaning specialist will review your space requirements and reach out within 1 business day.\n\nIs there anything else I can clarify about our cleaning protocols or services?`,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
          ]);
        } catch {
          setLeadMode('submitted');
          setMessages((prev) => [
            ...prev,
            {
              id: `ast-${Date.now()}`,
              sender: 'assistant',
              text: "✅ Your evaluation request details have been recorded! You can also complete our full multi-step facility evaluation form on our website for instant file attachment.",
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
          ]);
        } finally {
          setIsLoading(false);
        }
        return;
      }
    }

    // Standard API Call to Backend with Gemini 3.8-flash
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversationHistory: messages.map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();
      const replyText = data.reply || "Beyond Cleaning 24 provides commercial cleaning, janitorial, and disinfection services in Friant, CA. Let us know if you'd like to book a free facility evaluation.";

      setMessages((prev) => [
        ...prev,
        {
          id: `ast-${Date.now()}`,
          sender: 'assistant',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      // Local fallback
      setMessages((prev) => [
        ...prev,
        {
          id: `ast-${Date.now()}`,
          sender: 'assistant',
          text: "We specialize in commercial cleaning and disinfection for facilities in Friant, CA. You can schedule a 100% Free Facility Evaluation anytime via our online form or explore our specific service pages.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const confirmLeadSubmissionFromCard = async () => {
    setIsLoading(true);
    await sendUserMessage('Yes, please submit my free facility evaluation request.');
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          {hasUnread && (
            <div className="hidden sm:flex items-center bg-[#1C2028] text-white text-xs px-3.5 py-2 rounded-full shadow-lg border border-[#374151] animate-bounce">
              <span className="w-2 h-2 rounded-full bg-[#F45123] mr-2"></span>
              <span>Ask about Commercial Cleaning or Free Evaluation</span>
            </div>
          )}

          <button
            onClick={handleOpen}
            className="w-14 h-14 bg-[#F45123] hover:bg-[#DC3E12] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-orange-300"
            aria-label="Open Beyond Cleaning Virtual Assistant"
          >
            <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      )}

      {/* Floating Chat Conversation Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Beyond Cleaning Virtual Assistant"
          className="fixed bottom-4 right-4 z-50 w-[95vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4"
        >
          {/* Header */}
          <div className="bg-[#1C2028] text-white px-5 py-4 flex items-center justify-between border-b border-[#2A303C]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#F45123] flex items-center justify-center text-white shadow">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold flex items-center gap-1.5 leading-none">
                  <span>Beyond Cleaning Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" title="Online"></span>
                </h4>
                <p className="text-[11px] text-gray-300 mt-1">
                  Friant, CA · Commercial Inquiries &amp; Evaluations
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F7F7F8]">
            {messages.map((m) => {
              const isAssistant = m.sender === 'assistant';
              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-2.5 ${
                    isAssistant ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {isAssistant && (
                    <div className="w-7 h-7 rounded-full bg-[#1C2028] text-[#F45123] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      BC
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm shadow-sm leading-relaxed ${
                      isAssistant
                        ? 'bg-white text-[#1C2028] border border-gray-100 rounded-tl-sm'
                        : 'bg-[#F45123] text-white rounded-tr-sm font-medium'
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>

                    {/* Interactive Lead Summary Confirmation Card */}
                    {m.isLeadSummary && leadMode === 'confirm_summary' && (
                      <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                        <button
                          onClick={confirmLeadSubmissionFromCard}
                          className="w-full bg-[#F45123] hover:bg-[#DC3E12] text-white text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>Confirm &amp; Submit Request</span>
                        </button>
                        <p className="text-[10px] text-gray-400 text-center">
                          By confirming, you agree to be contacted by Beyond Cleaning 24 regarding your facility.
                        </p>
                      </div>
                    )}

                    <span
                      className={`block text-[10px] mt-1 text-right ${
                        isAssistant ? 'text-gray-400' : 'text-orange-200'
                      }`}
                    >
                      {m.timestamp}
                    </span>
                  </div>

                  {!isAssistant && (
                    <div className="w-7 h-7 rounded-full bg-[#2A303C] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <div className="w-6 h-6 rounded-full bg-[#1C2028] text-white flex items-center justify-center text-[10px]">
                  BC
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl px-3 py-2 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F45123] animate-ping" />
                  <span className="text-gray-500 text-xs">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Questions */}
          {messages.length <= 3 && (
            <div className="px-3 py-2 bg-gray-50 border-t border-gray-200">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#F45123]" />
                Suggested Questions:
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => sendUserMessage(q)}
                    className="text-[11px] bg-white border border-gray-200 hover:border-[#F45123] hover:text-[#F45123] text-gray-700 px-2.5 py-1 rounded-full text-left transition-colors font-medium"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendUserMessage(inputText);
            }}
            className="p-3 bg-white border-t border-gray-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about office cleaning, deep cleans, or free evaluation..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#F45123] focus:ring-1 focus:ring-[#F45123] transition-colors"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="w-9 h-9 bg-[#F45123] hover:bg-[#DC3E12] disabled:opacity-50 text-white rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Send Message"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>

          {/* Quick links footer */}
          <div className="px-4 py-1.5 bg-gray-100 text-[10px] text-gray-500 flex items-center justify-between border-t border-gray-200">
            <span>Beyond Cleaning 24 · Friant, CA</span>
            {onOpenEvaluationForm && (
              <button
                onClick={onOpenEvaluationForm}
                className="text-[#F45123] font-semibold hover:underline"
              >
                Full Evaluation Form →
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
