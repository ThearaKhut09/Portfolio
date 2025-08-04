import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, ExternalLink } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal'
import { personalInfo, projects } from '../data/portfolio'
import { fadeInUp, slideInFromLeft } from '../utils/animations'
import profileImage from '../assets/img/image.png'

export function Home() {
  const featuredProjects = projects.filter(project => project.featured)

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-preview')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-blue-500/20 shadow-2xl">
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100">
                Hi, I'm{' '}
                <span className="gradient-text">
                  {personalInfo.name}
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
                {personalInfo.title}
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg text-gray-600 dark:text-gray-500 max-w-2xl mx-auto leading-relaxed">
                {personalInfo.bio}
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Button
                  size="lg"
                  onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                  className="min-w-[200px]"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(personalInfo.socialLinks.github, '_blank')}
                  className="min-w-[200px]"
                >
                  <Github size={20} className="mr-2" />
                  View GitHub
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <motion.button
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 1.2 }}
            onClick={scrollToAbout}
            className="mt-16 p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </motion.button>
        </div>
      </section>

      {/* About Preview */}
      <section id="about-preview" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
                Passionate developer with expertise in modern web technologies
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Creating Digital Experiences
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I specialize in building modern, responsive web applications using cutting-edge
                  technologies. With a focus on user experience and clean code, I turn ideas into
                  digital reality.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" onClick={() => window.location.href = '/about'}>
                  Learn More About Me
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A showcase of my recent work and creative solutions
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div
                  className="glass p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer group"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-semibold">Project Image</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-blue-500 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/projects'}
            >
              View All Projects
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
            </p>
            <Button
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="min-w-[200px]"
            >
              Get In Touch
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
