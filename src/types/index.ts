export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  badge: string;
  accentColor: 'purple' | 'cyan' | 'violet';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: '3D Web' | 'AI Platforms' | 'Creative Tech' | 'Brand Systems';
  year: string;
  description: string;
  metrics: string;
  technologies: string[];
  image: string;
  accent: string;
  demoUrl?: string;
  isDemo: true;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}
