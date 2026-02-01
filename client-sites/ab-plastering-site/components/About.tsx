'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Award, DollarSign, Sparkles } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const trustPoints = [
    {
      icon: Star,
      title: 'Perfect 5★ Record',
      description: '64 reviews, all 5 stars',
    },
    {
      icon: DollarSign,
      title: 'Honest & Fair Pricing',
      description: 'No hidden extras',
    },
    {
      icon: Sparkles,
      title: 'Clean & Tidy',
      description: 'Workspace left spotless',
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-plaster-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-terracotta-500/10 text-terracotta-600 px-4 py-2 rounded-full mb-6 font-medium">
              <Award className="w-4 h-4" />
              About A.B Plastering
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-semibold text-plaster-900 mb-6 leading-tight">
              A rare perfect record
            </h2>

            <div className="prose prose-lg text-plaster-800 leading-relaxed space-y-4">
              <p>
                Adam at A.B Plastering & Rendering has built something rare — a perfect 5-star record across 64 Google reviews. Based in Kings Heath, he works across Birmingham and Solihull, bringing meticulous attention to detail to every job.
              </p>
              <p>
                Whether it's a single wall patch or a full house re-plaster, you'll get the same standard: flawless finishes, honest pricing, and a clean workspace when he leaves.
              </p>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta-500/10 text-terracotta-600 mb-3">
                    <point.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-plaster-900 mb-1 text-sm">
                    {point.title}
                  </h3>
                  <p className="text-xs text-plaster-700">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-plaster-200 to-plaster-300 rounded-2xl overflow-hidden shadow-2xl">
              {/* ABOUT IMAGE: Photo of Adam working or a beautifully smooth plastered wall */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles className="w-16 h-16 text-plaster-400 mx-auto mb-4" />
                  <p className="text-plaster-600 font-medium">
                    Adam at work
                  </p>
                  <p className="text-sm text-plaster-500 mt-2">
                    Photo placeholder
                  </p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta-500 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-400 rounded-full opacity-20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
