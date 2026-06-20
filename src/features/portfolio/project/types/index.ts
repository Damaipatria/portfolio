export interface Projects {
  id: number;
  title: string; //Max 70 characters
  company?: string;
  role?: string;
  description: string; // Max 125 characters
  technologies: string[];
  category: string;
  image: string;
  status: "Production" | "Development";
  featured: boolean;
  confidential?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  contribution?: string[];
  responsibilities?: string[];
}