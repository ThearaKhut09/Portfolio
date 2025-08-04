export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: 'web' | 'mobile' | 'ai' | 'fullstack' | 'other'
  technologies: string[]
  images: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  completedAt: string
}

export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate?: string
  technologies: string[]
  achievements: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  gpa?: string
  achievements?: string[]
}

export interface Skill {
  name: string
  level: number // 1-100
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'devops' | 'design' | 'other'
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  bio: string
  resumeUrl: string
  profileImage: string
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
  }
}

export interface Certificate {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialUrl?: string
}

export type ProjectCategory = Project['category']
export type SkillCategory = Skill['category']
