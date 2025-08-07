"use client";
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import React, { useState, useEffect } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null) // 'success', 'error', or null

    // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)

      return () => clearTimeout(timer) // Cleanup timer if component unmounts or status changes
    }
  }, [submitStatus])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS implementation
      const emailData = {
        service_id: 'service_05d4cig', // Replace with your EmailJS service ID
        template_id: 'template_va83fnj', // Replace with your EmailJS template ID
        user_id: 'RG6sClZD97uq5uehx', // Replace with your EmailJS public key
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'nwachukwunnekacathy@gmail.com' // Replace with your email
        }
      }

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Simple icon components
  const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )

  const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )

  const MapPinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )

  const SendIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22,2 15,22 11,13 2,9 22,2"/>
    </svg>
  )

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  )

  const AlertIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Me a Message</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center animate-fade-in">
                <div className="text-green-600 mr-3"><CheckIcon /></div>
                <div className="flex-1">
                  <p className="text-green-800">Message sent successfully! I'll get back to you soon.</p>
                  <div className="w-full bg-green-200 rounded-full h-1 mt-2">
                    <div className="bg-green-600 h-1 rounded-full animate-timer-bar"></div>
                  </div>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center animate-fade-in">
                <div className="text-red-600 mr-3"><AlertIcon /></div>
                <p className="text-red-800">Please fill in all required fields or try again later.</p>
              </div>
            )}
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="Project type or subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-vertical"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="cursor-pointer w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="mr-2"><SendIcon /></span>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-full">
                    <div className="text-indigo-600"><MailIcon /></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <a 
                      href="mailto:nwachukwunnekacathy@gmail.com"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      nwachukwunnekacathy@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-full">
                    <div className="text-indigo-600"><PhoneIcon /></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                    <a 
                      href="tel:+15551234567"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      +2349078796914
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-full">
                    <div className="text-indigo-600"><MapPinIcon /></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">San Francisco, California</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors group"
                >
                  <Instagram
                    size={24}
                    className="text-gray-700 group-hover:text-indigo-600 transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors group"
                >
                  <Twitter
                    size={24}
                    className="text-gray-700 group-hover:text-indigo-600 transition-colors"
                  />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors group"
                >
                  <Linkedin
                    size={24}
                    className="text-gray-700 group-hover:text-indigo-600 transition-colors"
                  />
                </a>
                <a
                  href="https://dribbble.com"
                  className="p-3 bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-700 group-hover:text-indigo-600 transition-colors"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 6.5c-.8 1.2-2.1 2.1-3.6 2.6.2-.7.3-1.4.3-2.1 0-.8-.1-1.5-.3-2.2 1.7.4 3.2 1.2 4.4 2.3-.3-.2-.5-.4-.8-.6zm-11 0c1.2-1.1 2.7-1.9 4.4-2.3-.2.7-.3 1.4-.3 2.2 0 .7.1 1.4.3 2.1-1.5-.5-2.8-1.4-3.6-2.6-.3.2-.5.4-.8.6zm5.5 9.5c-2.8 0-5.3-1.2-7-3.2 1.5-.8 3.1-1.3 4.8-1.3.6 0 1.2.1 1.8.2-.2.6-.4 1.3-.6 1.9-.6 1.8-1.2 3.5-2 5.1.3-.2.7-.5 1-.7zm0-7c-.6 0-1.2-.1-1.8-.2.2-.6.4-1.3.6-1.9.6-1.8 1.2-3.5 2-5.1-.3.2-.7.5-1 .7C9.7 6.2 12.2 5 15 5c2.8 0 5.3 1.2 7 3.2-1.5.8-3.1 1.3-4.8 1.3z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}