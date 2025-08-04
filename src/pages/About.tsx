import { motion } from 'framer-motion'
import { Download, Calendar, Award, MapPin } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal'
import { personalInfo, experiences, education, skills, certificates } from '../data/portfolio'
import type { SkillCategory } from '../types'
import profileImage from '../assets/img/image.png'

export function About() {
  const skillCategories: Record<SkillCategory, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    database: 'Database',
    devops: 'DevOps',
    design: 'Design',
    other: 'Other'
  }

  const getSkillsByCategory = (category: SkillCategory) => {
    return skills.filter(skill => skill.category === category)
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
              Get to know more about my journey, skills, and passion for creating amazing digital experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* Personal Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <ScrollReveal direction="left" className="lg:col-span-1">
            <Card variant="glass" className="text-center">
              <CardContent className="pt-6">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-500/20 shadow-2xl">
                  <img
                    src={profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-500 mb-2">
                  {personalInfo.name}
                </h2>
                <p className="text-blue-600 dark:text-blue-400 mb-4">
                  {personalInfo.title}
                </p>
                <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-6">
                  <MapPin size={16} className="mr-2" />
                  {personalInfo.location}
                </div>
                <Button
                  onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                  className="w-full"
                >
                  <Download size={16} className="mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-blue-500  mb-4">
                  My Story
                </h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-500 leading-relaxed mb-4">
                    {personalInfo.bio}
                  </p>
                  <p className="text-gray-600 dark:text-gray-500 leading-relaxed">
                    I believe in continuous learning and staying up-to-date with the latest
                    technologies. My goal is to create solutions that not only meet technical
                    requirements but also provide exceptional user experiences.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="glass" className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {experiences.length}+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Years Experience
                    </div>
                  </CardContent>
                </Card>
                <Card variant="glass" className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      50+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Projects Completed
                    </div>
                  </CardContent>
                </Card>
                <Card variant="glass" className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {certificates.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Certifications
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Experience Timeline */}
        <section className="mb-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-500 mb-12 text-center">
              Professional Experience
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-500/30"></div>

            <StaggerContainer className="space-y-12">
              {experiences.map((experience, index) => (
                <StaggerItem key={experience.id}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card variant="glass" hover>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl text-gray-900 dark:text-gray-500">
                                {experience.position}
                              </CardTitle>
                              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                                {experience.company}
                              </p>
                            </div>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                              <Calendar size={14} className="mr-1" />
                              {new Date(experience.startDate).getFullYear()} - {' '}
                              {experience.endDate ? new Date(experience.endDate).getFullYear() : 'Present'}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 dark:text-gray-500 mb-4">
                            {experience.description}
                          </p>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-500 mb-2">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-1">
                              {experience.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-600 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline node */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                    <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-500 mb-12 text-center">
              Education
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <StaggerItem key={edu.id}>
                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-gray-500">
                      {edu.degree} in {edu.field}
                    </CardTitle>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {new Date(edu.startDate).getFullYear()} - {' '}
                      {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {edu.gpa && (
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        GPA: {edu.gpa}
                      </p>
                    )}
                    {edu.achievements && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-500 mb-2">
                          Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
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
        <section className="mb-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-500 mb-12 text-center">
              Skills & Technologies
            </h2>
          </ScrollReveal>

          <StaggerContainer className="space-y-8">
            {Object.entries(skillCategories).map(([category, title]) => {
              const categorySkills = getSkillsByCategory(category as SkillCategory)
              if (categorySkills.length === 0) return null

              return (
                <StaggerItem key={category}>
                  <Card variant="glass">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 dark:text-gray-500">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {categorySkills.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 dark:text-gray-450 font-medium">
                                {skill.name}
                              </span>
                              <span className="text-blue-600 dark:text-blue-400 text-sm">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-500 mb-12 text-center">
              Certifications
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <StaggerItem key={cert.id}>
                <Card variant="glass" hover>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                      {cert.credentialUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(cert.credentialUrl, '_blank')}
                        >
                          View
                        </Button>
                      )}
                    </div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-500">
                      {cert.name}
                    </CardTitle>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {cert.issuer}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      <p>Issued: {new Date(cert.issueDate).toLocaleDateString()}</p>
                      {cert.expiryDate && (
                        <p>Expires: {new Date(cert.expiryDate).toLocaleDateString()}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>
    </div>
  )
}
