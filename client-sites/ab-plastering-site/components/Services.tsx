'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Building2, Grid3x3, Sparkles } from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Home,
      title: 'Plastering',
      color: 'from-terracotta-400 to-terracotta-600',
      items: [
        'Full room plastering',
        'Ceiling plastering',
        'Skim coating over artex',
        'Plaster repairs & patch work',
        'New plaster on bare brick/block',
      ],
    },
    {
      icon: Building2,
      title: 'Rendering',
      color: 'from-slate-600 to-slate-800',
      items: [
        'External house rendering',
        'Monocouche rendering',
        'Silicone rendering',
        'Pebbledash removal & re-render',
        'Garden wall rendering',
      ],
    },
    {
      icon: Grid3x3,
      title: 'Dry Lining',
      color: 'from-terracotta-500 to-plaster-800',
      items: [
        'Dot and dab plasterboard',
        'Stud wall construction',
        'Insulated dry lining',
        'Sound insulation boarding',
      ],
    },
    {
      icon: Sparkles,
      title: 'Specialist Work',
      color: 'from-gold-400 to-terracotta-500',
      items: [
        'Artex removal / covering',
        'Coving & cornice fitting',
        'Skimming over old plaster',
        'New build plastering',
        'Extensions & conversions',
      ],
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-plaster-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-plaster-900 mb-4">
            Services
          </h2>
          <p className="text-xl text-plaster-700 max-w-2xl mx-auto">
            From small repairs to full house re-plasters, Adam delivers the same flawless standard
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-semibold text-plaster-900 mb-4">
                {service.title}
              </h3>

              {/* Service Items */}
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-plaster-700 flex items-start gap-2 text-sm leading-relaxed"
                  >
                    <span className="text-terracotta-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-terracotta-500/10 to-transparent rounded-bl-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
