import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { TechStack } from './components/TechStack';
import { Process } from './components/Process';
import { BudgetEstimator } from './components/BudgetEstimator';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceOrPlan, setSelectedServiceOrPlan] = useState<string | undefined>();
  const [estimatedSummary, setEstimatedSummary] = useState<string | undefined>();

  const scrollToContact = (serviceOrPlan?: string) => {
    if (serviceOrPlan) {
      setSelectedServiceOrPlan(serviceOrPlan);
    }
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProjects = () => {
    const elem = document.getElementById('proyectos');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEstimator = () => {
    const elem = document.getElementById('calculadora');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (summary: string) => {
    setEstimatedSummary(summary);
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenContact={() => scrollToContact()}
          onExploreProjects={handleExploreProjects}
          onOpenEstimator={handleOpenEstimator}
        />

        {/* 2. Services Section */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* 3. Portfolio & Projects Section */}
        <Portfolio onQuoteProject={(proj) => scrollToContact(proj)} />

        {/* 4. Tech Stack & Advantages */}
        <TechStack />

        {/* 5. Process & Methodology */}
        <Process />

        {/* 6. Interactive Budget Calculator */}
        <BudgetEstimator onApplyEstimate={handleApplyEstimate} />

        {/* 7. Pricing & Packages */}
        <Pricing onSelectPlan={(plan) => scrollToContact(`Plan ${plan}`)} />

        {/* 8. Client Testimonials */}
        <Testimonials />

        {/* 9. FAQ */}
        <Faq />

        {/* 10. Contact & Proposal Request */}
        <Contact
          initialServiceOrPlan={selectedServiceOrPlan}
          initialEstimate={estimatedSummary}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Action Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
