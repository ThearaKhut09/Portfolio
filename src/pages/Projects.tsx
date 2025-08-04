import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Filter, Calendar } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Modal, ModalContent, ModalHeader } from '../components/ui/Modal'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal'
import { projects } from '../data/portfolio'
import type { Project, ProjectCategory } from '../types'

const categories: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'ai', label: 'AI/ML Projects' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'other', label: 'Other' }
]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
              A collection of projects I've worked on, showcasing my skills and passion for development.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Filter size={20} className="mr-2 text-gray-600 dark:text-gray-500" />
              <span className="text-gray-600 dark:text-gray-500">Filter by category:</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <Card
                    variant="glass"
                    hover
                    className="h-full cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardHeader className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-xl flex items-center justify-center relative overflow-hidden">
                        <span className="text-white font-semibold text-lg">
                          {project.title}
                        </span>
                        {project.featured && (
                          <div className="absolute top-3 right-3 bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                            Featured
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <CardTitle className="text-xl text-gray-900 dark:text-gray-500 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                        <Calendar size={14} className="mr-1" />
                        {new Date(project.completedAt).toLocaleDateString()}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-500 rounded"
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
                      
                      <div className="flex gap-3 pt-2">
                        {project.githubUrl && (
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(project.githubUrl, '_blank')
                            }}
                            className="flex-1"
                          >
                            <Github size={16} className="mr-1" />
                            Code
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(project.liveUrl, '_blank')
                            }}
                            className="flex-1"
                          >
                            <ExternalLink size={16} className="mr-1" />
                            Live
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <ScrollReveal>
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No projects found in this category.
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Project Detail Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          className="max-w-4xl"
        >
          {selectedProject && (
            <>
              <ModalHeader>
                <div className="flex items-start justify-between pr-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h2>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {categories.find(cat => cat.value === selectedProject.category)?.label}
                    </p>
                  </div>
                  {selectedProject.featured && (
                    <div className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                      Featured Project
                    </div>
                  )}
                </div>
              </ModalHeader>
              
              <ModalContent className="space-y-6">
                {/* Project Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.images.map((_, index) => (
                    <div
                      key={index}
                      className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-white font-semibold">
                        Image {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    About This Project
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
                
                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Completion Date
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {new Date(selectedProject.completedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Category
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {categories.find(cat => cat.value === selectedProject.category)?.label}
                    </p>
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  {selectedProject.githubUrl && (
                    <Button
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      className="flex-1"
                    >
                      <Github size={18} className="mr-2" />
                      View Source Code
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      View Live Demo
                    </Button>
                  )}
                </div>
              </ModalContent>
            </>
          )}
        </Modal>
      </div>
    </div>
  )
}
