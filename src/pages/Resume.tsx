import { motion } from 'framer-motion'
import { Download, Printer, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal'
import { personalInfo, experiences, education, skills, certificates } from '../data/portfolio'
import type { SkillCategory } from '../types'
import profileImage from '../assets/img/image.png'

export function Resume() {
  const handleDownload = () => {
    window.open(personalInfo.resumeUrl, '_blank')
  }

  const handlePrint = () => {
    window.print()
  }

  const skillCategories: Record<SkillCategory, string> = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    mobile: 'Mobile Development',
    database: 'Database Management',
    devops: 'DevOps & Cloud',
    design: 'Design & UX',
    other: 'Other Technologies'
  }

  const getSkillsByCategory = (category: SkillCategory) => {
    return skills.filter(skill => skill.category === category)
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-500 max-w-3xl mx-auto mb-8">
              My professional experience, education, and skills in a comprehensive overview.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleDownload}>
                <Download size={20} className="mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="lg" onClick={handlePrint} className="print:hidden">
                <Printer size={20} className="mr-2" />
                Print Resume
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Resume Content */}
        <div className="print:text-black print:bg-white" id="resume-content">
          {/* Personal Information */}
          <ScrollReveal>
            <Card variant="glass" className="mb-8 print:shadow-none print:border print:border-gray-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-500/20 shadow-lg print:ring-gray-300 flex-shrink-0">
                    <img
                      src={profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-500 print:text-black mb-2">
                      {personalInfo.name}
                    </h2>
                    <p className="text-xl text-blue-600 dark:text-blue-400 print:text-gray-700 mb-4">
                      {personalInfo.title}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600 dark:text-gray-400 print:text-gray-550">
                      <div className="flex items-center justify-center md:justify-start">
                        <Mail size={16} className="mr-2" />
                        {personalInfo.email}
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                        <Phone size={16} className="mr-2" />
                        {personalInfo.phone}
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                        <MapPin size={16} className="mr-2" />
                        {personalInfo.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 print:border-gray-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500 print:text-black mb-3">
                    Professional Summary
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 print:text-gray-600 leading-relaxed">
                    {personalInfo.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Professional Experience */}
          <section className="mb-8">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-500 print:text-black mb-6 border-b-2 border-blue-500 print:border-gray-400 pb-2">
                Professional Experience
              </h2>
            </ScrollReveal>

            <StaggerContainer className="space-y-6">
              {experiences.map((experience) => (
                <StaggerItem key={experience.id}>
                  <Card variant="glass" className="print:shadow-none print:border print:border-gray-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 print:text-black">
                            {experience.position}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 print:text-gray-700 font-semibold">
                            {experience.company}
                          </p>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 print:text-gray-600 text-sm mt-2 md:mt-0">
                          <Calendar size={14} className="mr-1" />
                          {new Date(experience.startDate).toLocaleDateString()} - {' '}
                          {experience.endDate ? new Date(experience.endDate).toLocaleDateString() : 'Present'}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 print:text-gray-700 mb-4">
                        {experience.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-500 print:text-black mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-600 dark:text-gray-400 print:text-gray-700 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-500 print:bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-500 print:text-black mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 print:bg-gray-100 text-blue-800 dark:text-blue-500 print:text-gray-700 rounded border print:border-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* Education */}
          <section className="mb-8">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-500 print:text-black mb-6 border-b-2 border-blue-500 print:border-gray-400 pb-2">
                Education
              </h2>
            </ScrollReveal>

            <StaggerContainer className="space-y-6">
              {education.map((edu) => (
                <StaggerItem key={edu.id}>
                  <Card variant="glass" className="print:shadow-none print:border print:border-gray-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 print:text-black">
                            {edu.degree} in {edu.field}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 print:text-gray-700 font-semibold">
                            {edu.institution}
                          </p>
                          {edu.gpa && (
                            <p className="text-gray-600 dark:text-gray-400 print:text-gray-600 text-sm">
                              GPA: {edu.gpa}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 print:text-gray-600 text-sm mt-2 md:mt-0">
                          <Calendar size={14} className="mr-1" />
                          {new Date(edu.startDate).getFullYear()} - {' '}
                          {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}
                        </div>
                      </div>
                      
                      {edu.achievements && (
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-500 print:text-black mb-2">
                            Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-gray-600 dark:text-gray-400 print:text-gray-700 text-sm flex items-start">
                                <span className="w-1.5 h-1.5 bg-blue-500 print:bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-500 print:text-black mb-6 border-b-2 border-blue-500 print:border-gray-400 pb-2">
                Technical Skills
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skillCategories).map(([category, title]) => {
                const categorySkills = getSkillsByCategory(category as SkillCategory)
                if (categorySkills.length === 0) return null

                return (
                  <StaggerItem key={category}>
                    <Card variant="glass" className="print:shadow-none print:border print:border-gray-300">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-gray-900 dark:text-gray-500 print:text-black">
                          {title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {categorySkills.map((skill) => (
                            <div key={skill.name} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-gray-700 dark:text-gray-500 print:text-gray-700 text-sm font-medium">
                                  {skill.name}
                                </span>
                                <span className="text-blue-600 dark:text-blue-400 print:text-gray-600 text-xs">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 print:bg-gray-200 rounded-full h-1.5">
                                <motion.div
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 print:bg-gray-600 h-1.5 rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  viewport={{ once: true }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </section>

          {/* Certifications */}
          <section>
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-500 print:text-black mb-6 border-b-2 border-blue-500 print:border-gray-400 pb-2">
                Certifications
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <StaggerItem key={cert.id}>
                  <Card variant="glass" className="print:shadow-none print:border print:border-gray-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 print:text-gray-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white print:text-black mb-1">
                            {cert.name}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 print:text-gray-700 text-sm font-medium mb-2">
                            {cert.issuer}
                          </p>
                          <div className="text-gray-600 dark:text-gray-400 print:text-gray-600 text-xs">
                            <p>Issued: {new Date(cert.issueDate).toLocaleDateString()}</p>
                            {cert.expiryDate && (
                              <p>Expires: {new Date(cert.expiryDate).toLocaleDateString()}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </div>
      </div>
    </div>
  )
}
