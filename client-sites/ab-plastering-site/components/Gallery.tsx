'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Hammer } from 'lucide-react'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const placeholders = Array(6).fill(null)

  return (
    <section ref={ref} className="py-24 md:py-32 bg-plaster-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-plaster-900 mb-4">
            Recent Work
          </h2>
          <p className="text-xl text-plaster-700 max-w-3xl mx-auto">
            From rough to flawless. Here's some of our recent work across Birmingham.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative aspect-[4/3] bg-gradient-to-br from-plaster-200 to-plaster-300 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* GALLERY: Before/after pairs work brilliantly for plastering. Rough wall → smooth finish tells the story instantly */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Hammer className="w-8 h-8 text-terracotta-500" />
                </div>
                <p className="font-semibold text-plaster-700 mb-1">
                  Project Photo Coming Soon
                </p>
                <p className="text-sm text-plaster-600">
                  Before/After {index + 1}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-plaster-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Corner number badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-terracotta-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-plaster-700 mb-4">
            Want to see your project transformed?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
