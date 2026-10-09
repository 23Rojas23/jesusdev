import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Process } from './components/Process';
import { BudgetEstimator } from './components/BudgetEstimator';
import { Pricing } from './components/Pricing';
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
          onOpenEstimator={handleOpenEstimator}
        />

        {/* 2. Services Section */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* 3. Tech Stack & Advantages */}
        <TechStack />

        {/* 4. Process & Methodology */}
        <Process />

        {/* 5. Interactive Budget Calculator */}
        <BudgetEstimator onApplyEstimate={handleApplyEstimate} />

        {/* 6. Pricing & Packages */}
        <Pricing onSelectPlan={(plan) => scrollToContact(`Plan ${plan}`)} />

        {/* 7. FAQ */}
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
