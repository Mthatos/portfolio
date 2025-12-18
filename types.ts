
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  githubLink?: string;
  image: string;
  features: string[];
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'AI/ML';
  proficiency: number; // 0-100
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Reference {
  name: string;
  role: string;
  company: string;
  email: string;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}