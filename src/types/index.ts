export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  techs: string[];
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'landing' | 'webapp' | 'ecommerce' | 'corporate';
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  metrics: string;
  techs: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'database';
  level: string;
  iconColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period?: string;
  popular?: boolean;
  deliveryTime: string;
  features: string[];
  nonFeatures?: string[];
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
