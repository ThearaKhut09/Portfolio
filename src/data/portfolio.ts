import type { PersonalInfo, Project, Experience, Education, Skill, Certificate } from '../types'

export const personalInfo: PersonalInfo = {
  name: 'Theara Khut',
  title: 'Full Stack Developer & AI Enthusiast',
  email: 'khuttheara1887@gmail.com',
  phone: '092843959',
  location: 'Kampot, Cambodia',
  bio: 'Passionate full-stack developer with 5+ years of experience creating innovative web applications. Specialized in React, Node.js, and AI integration. Love turning complex problems into simple, beautiful solutions.',
  resumeUrl: '/resume.pdf',
  profileImage: '/src/assets/img/image.png',
  socialLinks: {
    github: 'https://github.com/alexjohnson',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    twitter: 'https://twitter.com/alexjohnson',
    website: 'https://alexjohnson.dev'
  }
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Task Manager',
    description: 'Smart task management app with AI-driven prioritization and scheduling.',
    longDescription: 'A comprehensive task management application that uses machine learning to automatically prioritize tasks based on deadlines, importance, and user behavior patterns. Features include natural language processing for task creation, intelligent scheduling suggestions, and productivity analytics.',
    category: 'ai',
    technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Redis'],
    images: ['/projects/task-manager-1.jpg', '/projects/task-manager-2.jpg'],
    githubUrl: 'https://github.com/alexjohnson/ai-task-manager',
    liveUrl: 'https://ai-tasks.example.com',
    featured: true,
    completedAt: '2024-11-15'
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory and payment processing.',
    longDescription: 'A full-featured e-commerce platform built with modern web technologies. Includes features like real-time inventory management, secure payment processing, order tracking, admin dashboard, and mobile-responsive design.',
    category: 'fullstack',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    images: ['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg'],
    githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
    liveUrl: 'https://shop.example.com',
    featured: true,
    completedAt: '2024-09-20'
  },
  {
    id: '3',
    title: 'React Native Fitness App',
    description: 'Cross-platform mobile app for workout tracking and nutrition planning.',
    longDescription: 'A comprehensive fitness application that helps users track workouts, plan nutrition, and monitor progress. Features include exercise libraries, custom workout creation, nutrition tracking, progress photos, and social sharing.',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux Toolkit', 'Expo'],
    images: ['/projects/fitness-1.jpg', '/projects/fitness-2.jpg'],
    githubUrl: 'https://github.com/alexjohnson/fitness-app',
    featured: false,
    completedAt: '2024-07-10'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'Modern, animated portfolio website with dark mode and responsive design.',
    longDescription: 'A sleek, modern portfolio website showcasing projects and skills. Built with cutting-edge technologies and featuring smooth animations, dark mode toggle, responsive design, and optimized performance.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    images: ['/projects/portfolio-1.jpg', '/projects/portfolio-2.jpg'],
    githubUrl: 'https://github.com/alexjohnson/portfolio',
    liveUrl: 'https://alexjohnson.dev',
    featured: false,
    completedAt: '2024-12-01'
  }
]

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    description: 'Lead development of customer-facing applications serving 100k+ users.',
    startDate: '2022-03-01',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led team of 4 developers on major platform redesign',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ]
  },
  {
    id: '2',
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    description: 'Built scalable web applications from conception to deployment.',
    startDate: '2020-06-01',
    endDate: '2022-02-28',
    technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'GCP'],
    achievements: [
      'Developed MVP that secured $2M in Series A funding',
      'Built real-time chat system handling 10k+ concurrent users',
      'Implemented automated testing increasing code coverage to 95%'
    ]
  },
  {
    id: '3',
    company: 'Digital Agency Pro',
    position: 'Frontend Developer',
    description: 'Created responsive websites and web applications for various clients.',
    startDate: '2019-01-01',
    endDate: '2020-05-31',
    technologies: ['React', 'SCSS', 'WordPress', 'jQuery'],
    achievements: [
      'Delivered 20+ client projects on time and budget',
      'Improved website performance scores by average of 30%',
      'Established component library used across all projects'
    ]
  }
]

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of California, Berkeley',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2015-09-01',
    endDate: '2019-05-31',
    gpa: '3.8',
    achievements: [
      'Magna Cum Laude',
      'Dean\'s List for 6 semesters',
      'Computer Science Student Association President'
    ]
  },
  {
    id: '2',
    institution: 'Coursera',
    degree: 'Professional Certificate',
    field: 'Machine Learning',
    startDate: '2023-01-01',
    endDate: '2023-06-30',
    achievements: [
      'Completed with Distinction',
      'Capstone project on NLP applications'
    ]
  }
]

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Vue.js', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'SCSS/Sass', level: 85, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'Express.js', level: 85, category: 'backend' },
  { name: 'Django', level: 75, category: 'backend' },
  { name: 'GraphQL', level: 80, category: 'backend' },
  { name: 'REST APIs', level: 95, category: 'backend' },
  
  // Database
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'Redis', level: 75, category: 'database' },
  { name: 'Prisma', level: 85, category: 'database' },
  
  // DevOps
  { name: 'Docker', level: 80, category: 'devops' },
  { name: 'AWS', level: 85, category: 'devops' },
  { name: 'CI/CD', level: 85, category: 'devops' },
  { name: 'Git', level: 95, category: 'devops' },
  
  // Mobile
  { name: 'React Native', level: 80, category: 'mobile' },
  { name: 'Expo', level: 75, category: 'mobile' },
  
  // Design
  { name: 'Figma', level: 70, category: 'design' },
  { name: 'UI/UX Design', level: 75, category: 'design' }
]

export const certificates: Certificate[] = [
  {
    id: '1',
    name: 'AWS Certified Developer Associate',
    issuer: 'Amazon Web Services',
    issueDate: '2023-08-15',
    expiryDate: '2026-08-15',
    credentialUrl: 'https://aws.amazon.com/verification'
  },
  {
    id: '2',
    name: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta',
    issueDate: '2022-12-10',
    credentialUrl: 'https://coursera.org/verify/professional-cert'
  },
  {
    id: '3',
    name: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    issueDate: '2023-03-20',
    expiryDate: '2025-03-20',
    credentialUrl: 'https://cloud.google.com/certification'
  }
]
