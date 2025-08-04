# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Modern Portfolio Website

A modern, fully animated personal portfolio website built with React, TypeScript, Framer Motion, and Tailwind CSS.

## Features

- 🏠 **Landing Page** - Smooth animations, minimal navbar, animated background
- 👤 **About Section** - Timeline animations, skill bars, downloadable CV
- 💼 **Projects Section** - Responsive grid, hover effects, category filters, project modals
- 📄 **Resume Page** - Printable PDF version with professional layout
- 📞 **Contact Page** - Interactive form with validation and social links
- 🌙 **Dark/Light Mode** - Persistent theme toggle
- 📱 **Responsive Design** - Optimized for all screen sizes
- ⚡ **Performance** - Optimized with Vite and modern React patterns

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth transitions
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Form Handling**: React Hot Toast for notifications

## Design Features

- **2025 Web Trends**: Glassmorphism, subtle neumorphism, futuristic minimalism
- **Accessibility**: WCAG compliant, keyboard navigation, screen reader support
- **Performance**: Lazy loading, optimized animations, minimal bundle size
- **SEO**: Meta tags, semantic HTML, structured data

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Customization

### Personal Information

Update your personal information in `src/data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... other details
}
```

### Projects

Add your projects to the `projects` array in `src/data/portfolio.ts`.

### Assets

Replace placeholder images and add your resume PDF to the `public` directory.

## Build & Deployment

```bash
npm run build
npm run preview
```

---

Built with ❤️ using React, TypeScript, and modern web technologies.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
