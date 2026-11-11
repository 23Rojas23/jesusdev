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
import type { ProjectInquiry } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const DEFAULT_PROJECT_INQUIRY: ProjectInquiry = {
  projectType: 'Landing Express ($120)',
  budget: 'Menos de $150 USD',
  message: '',
};

export default function App() {
  const [projectInquiry, setProjectInquiry] = useState<ProjectInquiry>(DEFAULT_PROJECT_INQUIRY);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (serviceOrPlan?: string, budgetTier?: string) => {
    if (serviceOrPlan || budgetTier) {
      setProjectInquiry((prev) => {
        const isAutoServiceMessage =
          !prev.message.trim() ||
          prev.message.startsWith('Hola, me interesa solicitar información sobre el paquete/servicio:');

        return {
          projectType: serviceOrPlan ?? prev.projectType,
          budget: budgetTier ?? prev.budget,
          message:
            serviceOrPlan && isAutoServiceMessage
              ? `Hola, me interesa solicitar información sobre el paquete/servicio: ${serviceOrPlan}.`
              : prev.message,
        };
      });
      setIsContactSubmitted(false);
    }
    scrollToSection('contacto');
  };

  const handleOpenEstimator = () => {
    scrollToSection('calculadora');
  };

  const handleApplyEstimate = (summary: string, serviceName?: string, budgetTier?: string) => {
    setProjectInquiry((prev) => ({
      projectType: serviceName ?? prev.projectType,
      budget: budgetTier ?? prev.budget,
      message: `Hola, coticé en tu calculadora web la siguiente configuración:\n${summary}\n\nMe gustaría revisar detalles.`,
    }));
    setIsContactSubmitted(false);
    scrollToSection('contacto');
  };

  const handleProjectInquiryChange = (updates: Partial<ProjectInquiry>) => {
    setProjectInquiry((prev) => ({ ...prev, ...updates }));
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
        <Pricing onSelectPlan={(service, budgetTier) => scrollToContact(service, budgetTier)} />

        {/* 7. FAQ */}
        <Faq />

        {/* 10. Contact & Proposal Request */}
        <Contact
          projectInquiry={projectInquiry}
          onProjectInquiryChange={handleProjectInquiryChange}
          isSubmitted={isContactSubmitted}
          onSubmittedChange={setIsContactSubmitted}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Action Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
