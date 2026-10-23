import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { AiChatbot } from './components/AiChatbot';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { EvaluationPage } from './pages/EvaluationPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { AccessibilityPage } from './pages/AccessibilityPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [currentLang, setCurrentLang] = useState<'en' | 'es'>('en');

  // Parse route from hash on initial load & popstate (browser back/forward)
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (route: string) => {
    window.location.hash = `#/${route}`;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  // Render active page component based on route
  const renderPage = () => {
    if (currentRoute === 'home' || currentRoute === '') {
      return <HomePage onNavigate={handleNavigate} currentLang={currentLang} />;
    }
    if (currentRoute === 'about') {
      return <AboutPage onNavigate={handleNavigate} currentLang={currentLang} />;
    }
    if (currentRoute === 'services') {
      return <ServicesOverviewPage onNavigate={handleNavigate} currentLang={currentLang} />;
    }
    if (currentRoute.startsWith('service/')) {
      const slug = currentRoute.replace('service/', '');
      return (
        <ServiceDetailPage
          serviceSlug={slug}
          onNavigate={handleNavigate}
          currentLang={currentLang}
        />
      );
    }
    if (currentRoute === 'industries') {
      return <IndustriesPage onNavigate={handleNavigate} currentLang={currentLang} />;
    }
    if (currentRoute === 'service-areas') {
      return <ServiceAreasPage onNavigate={handleNavigate} currentLang={currentLang} />;
    }
    if (currentRoute === 'projects') {
      return <ProjectsPage onNavigate={handleNavigate} currentLang={currentLang} />;
    }
    if (currentRoute === 'reviews') {
      return <ReviewsPage onNavigate={handleNavigate} currentLang={currentLang} />;
    }
    if (currentRoute === 'faq') {
      return <FaqPage onNavigate={handleNavigate} currentLang={currentLang} />;
    }
    if (currentRoute === 'request-evaluation') {
      return <EvaluationPage onNavigate={handleNavigate} currentLang={currentLang} />;
    }
    if (currentRoute === 'contact') {
      return <ContactPage onNavigate={handleNavigate} currentLang={currentLang} />;
    }
    if (currentRoute === 'privacy-policy') {
      return <PrivacyPolicyPage onNavigate={handleNavigate} currentLang={currentLang} />;
    }
    if (currentRoute === 'accessibility') {
      return <AccessibilityPage onNavigate={handleNavigate} currentLang={currentLang} />;
    }

    // Default fallback to home
    return <HomePage onNavigate={handleNavigate} currentLang={currentLang} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F8] text-[#1C2028]">
      {/* WCAG AA Accessibility Toolbar & Language Switcher */}
      <AccessibilityToolbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
      />

      {/* Primary Brand Header & Navigation */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        currentLang={currentLang}
      />

      {/* Main Content Landmark with Skip Anchor */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {renderPage()}
      </main>

      {/* Comprehensive Brand Footer */}
      <Footer onNavigate={handleNavigate} currentLang={currentLang} />

      {/* AI-Powered Beyond Cleaning Virtual Assistant */}
      <AiChatbot
        onNavigateToService={(slug) => handleNavigate(`service/${slug}`)}
        onOpenEvaluationForm={() => handleNavigate('request-evaluation')}
        currentLang={currentLang}
      />
    </div>
  );
}
