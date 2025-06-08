export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  role?: 'frontend' | 'backend' | 'fullstack' | 'devops';
  skills: string[];
  interests: string[];
  joinedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  contributors: User[];
  maxContributors: number;
  createdBy: User;
  createdAt: Date;
  tags: string[];
  isOpen: boolean;
}

export interface Message {
  id: string;
  content: string;
  sender: User;
  timestamp: Date;
  projectId: string;
}

export interface OnboardingData {
  role?: string;
  skills: string[];
  interests: string[];
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}