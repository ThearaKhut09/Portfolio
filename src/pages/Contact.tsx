import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/animations/ScrollReveal'
import { personalInfo } from '../data/portfolio'
import type { ContactForm } from '../types'
import { validateEmail } from '../utils'
import toast from 'react-hot-toast'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

export function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real application, you would send the form data to your backend
      console.log('Form submitted:', formData)
      
      toast.success('Message sent successfully! I\'ll get back to you soon.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you.
              Let's create something amazing together!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-500 leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with talented people.
                  Whether you have a question about my work, want to discuss a potential project,
                  or just want to say hi, feel free to reach out!
                </p>
              </div>

              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <Card variant="glass" hover>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-gray-500">Email</h3>
                          <a 
                            href={`mailto:${personalInfo.email}`}
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {personalInfo.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card variant="glass" hover>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-gray-500">Phone</h3>
                          <a 
                            href={`tel:${personalInfo.phone}`}
                            className="text-green-600 dark:text-green-500 hover:underline"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card variant="glass" hover>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-gray-500">Location</h3>
                          <p className="text-purple-600 dark:text-purple-500">
                            {personalInfo.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </StaggerContainer>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h3>
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
                        className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={20} />
                        <span className="sr-only">{platform}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-gray-500">
                  Send a Message
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-500">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      error={errors.name}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                      required
                    />
                  </div>
                  
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    error={errors.subject}
                    required
                  />
                  
                  <Textarea
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    error={errors.message}
                    required
                  />
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    <Send size={18} className="mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Map Section (Optional) */}
        <ScrollReveal>
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-500 mb-8 text-center">
              Where I'm Located
            </h2>
            <Card variant="glass" className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">Interactive Map</h3>
                  <p className="text-blue-100">
                    {personalInfo.location}
                  </p>
                  <p className="text-sm text-blue-200 mt-2">
                    Google Maps integration would go here
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal>
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-500 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="glass">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-500 mb-3">
                    What's your typical response time?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-500 text-sm">
                    I usually respond to emails within 24-48 hours during business days.
                    For urgent matters, feel free to give me a call.
                  </p>
                </CardContent>
              </Card>

              <Card variant="glass">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-500 mb-3">
                    Do you work on freelance projects?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-500 text-sm">
                    Yes! I'm always open to discussing interesting freelance opportunities
                    that align with my skills and schedule.
                  </p>
                </CardContent>
              </Card>

              <Card variant="glass">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-500 mb-3">
                    What technologies do you specialize in?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-500 text-sm">
                    I specialize in React, TypeScript, Node.js, and modern web technologies.
                    Check out my skills section for a complete list.
                  </p>
                </CardContent>
              </Card>

              <Card variant="glass">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-500 mb-3">
                    Are you available for full-time positions?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-500 text-sm">
                    I'm always interested in hearing about new opportunities.
                    Feel free to reach out to discuss potential collaborations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
