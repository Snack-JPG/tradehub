'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, DollarSign, Clock, Home, MessageSquare } from 'lucide-react'

export default function WhyPerfect() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reasons = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'Flawless finishes on every job, no cutting corners',
    },
    {
      icon: DollarSign,
      title: 'Fair Pricing',
      description: 'Honest quotes with no hidden extras',
    },
    {
      icon: Clock,
      title: 'Reliable',
      description: 'Turns up when he says he will, finishes when he says he will',
    },
    {
      icon: Home,
      title: 'Respectful',
      description: 'Treats your home like his own — dust sheets down, mess cleaned up',
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description: 'Keeps you informed every step of the way',
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-br from-plaster-900 via-plaster-800 to-plaster-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-plaster-50 mb-6">
            Why Every Review is 5 Stars
          </h2>
          <p className="text-xl text-plaster-200 max-w-3xl mx-auto">
            In 64 reviews, not a single customer has given less than 5 stars. Here's why:
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-terracotta-400 to-terracotta-600 text-white mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-semibold text-plaster-50 mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-plaster-200 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta-500/0 to-gold-400/0 group-hover:from-terracotta-500/10 group-hover:to-gold-400/10 rounded-xl transition-all duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}

          {/* Special callout - takes 2 columns on larger screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 rounded-xl p-8 md:p-12 text-center">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
                The Result?
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                A perfect 5.0 rating that isn't luck — it's the standard Adam delivers every single time. No exceptions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
