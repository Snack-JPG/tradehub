'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, MapPin, Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    workType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-plaster-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-plaster-900 mb-4">
            Get a Free Quote
          </h2>
          <p className="text-xl text-plaster-700">
            Adam aims to respond the same day
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
              <h3 className="font-display text-2xl font-semibold text-plaster-900 mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:07864670314"
                  className="flex items-start gap-4 group hover:bg-plaster-50 p-4 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-terracotta-500/10 flex items-center justify-center text-terracotta-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-plaster-900 mb-1">Call Adam</p>
                    <p className="text-terracotta-600 font-medium">07864 670314</p>
                    <p className="text-sm text-plaster-600">Click to call</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/447864670314?text=Hi%20Adam%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20looking%20for%20a%20quote%20for%20plastering%20work."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group hover:bg-plaster-50 p-4 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-plaster-900 mb-1">Message on WhatsApp</p>
                    <p className="text-green-600 font-medium">Quick response</p>
                    <p className="text-sm text-plaster-600">Usually replies within hours</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4">
                  <div className="w-12 h-12 rounded-full bg-plaster-800/10 flex items-center justify-center text-plaster-800 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-plaster-900 mb-1">Location</p>
                    <p className="text-plaster-700">Kings Heath, Birmingham</p>
                    <p className="text-sm text-plaster-600">B14 4AH</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-plaster-200 to-plaster-300 rounded-2xl overflow-hidden shadow-lg">
              {/* CONTACT IMAGE: Finished plastering job or Adam at work */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <Phone className="w-16 h-16 text-plaster-400 mx-auto mb-4" />
                  <p className="text-plaster-600 font-medium">Contact image placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-plaster-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-plaster-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-plaster-900 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-plaster-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-plaster-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-plaster-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Postcode */}
                <div>
                  <label htmlFor="postcode" className="block text-sm font-semibold text-plaster-900 mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-plaster-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent outline-none transition-all"
                    placeholder="B14 4AH"
                  />
                </div>

                {/* Type of Work */}
                <div>
                  <label htmlFor="workType" className="block text-sm font-semibold text-plaster-900 mb-2">
                    Type of Work *
                  </label>
                  <select
                    id="workType"
                    name="workType"
                    required
                    value={formData.workType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-plaster-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select type of work</option>
                    <option value="plastering">Plastering</option>
                    <option value="rendering">Rendering</option>
                    <option value="dry-lining">Dry Lining</option>
                    <option value="patch-repair">Patch Repair</option>
                    <option value="artex-removal">Artex Removal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-plaster-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-plaster-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell Adam about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-sm text-plaster-600 text-center">
                  Adam aims to respond the same day
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
