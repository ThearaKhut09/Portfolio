import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo } from '../../data/portfolio'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  website: Mail
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {personalInfo.title}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                About
              </a>
              <a
                href="/projects"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="/resume"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Resume
              </a>
              <a
                href="/contact"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Connect
            </h4>
            <div className="flex space-x-4">
              {Object.entries(personalInfo.socialLinks).map(([platform, url]) => {
                if (!url) return null
                const Icon = socialIcons[platform as keyof typeof socialIcons]
                if (!Icon) return null

                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                    <span className="sr-only">{platform}</span>
                  </motion.a>
                )
              })}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-1">
            © {currentYear} {personalInfo.name}. Made with{' '}
            <Heart size={14} className="text-red-500 fill-current" />{' '}
            using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
