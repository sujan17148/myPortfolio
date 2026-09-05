export type ProjectCategory = 'built' | 'broken' | 'fixed';
export type ProjectStatus = 'shipped' | 'actively-building' | 'archived';

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
  experienceStart: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface Experience {
  version: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  tags: string[];
}

export interface ProjectContentSection {
  heading: string;
  content: string;
  bulletPoints?: string[];
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  codeUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  sections: ProjectContentSection[];
}

export interface TechItem {
  name: string;
  description: string;
}
