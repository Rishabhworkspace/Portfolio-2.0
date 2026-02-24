export type FileId = 'whoami' | 'featured' | 'stack' | 'activity' | 'resume' | 'contact';

export interface PortfolioFile {
  id: FileId;
  name: string;
  extension: string;
  icon: string;
  language: string;
  folder?: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  live_url: string;
  repo_url: string;
  featured?: boolean;
  color: string;
}

export interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
  category: string;
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    commits?: Array<{ message: string }>;
    ref?: string;
    action?: string;
  };
}

export type Theme = 'dark' | 'light';
