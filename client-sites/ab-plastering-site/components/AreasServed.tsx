'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

export default function AreasServed() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const areas = [
    'Kings Heath',
    'Birmingham',
    'Hall Green',
    'Moseley',
    'Sparkhill',
    'Stirchley',
    'Bournville',
    'Selly Oak',
    'Harborne',
    'Edgbaston',
    'Acocks Green',
    'Solihull',
    'Shirley',
    'Billesley',
    'Brandwood',
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-plaster-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-terracotta-500/10 text-terracotta-600 px-4 py-2 rounded-full mb-6 font-medium">
            <MapPin className="w-4 h-4" />
            Service Areas
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-semibold text-plaster-900 mb-4">
            Areas Served
          </h2>
          <p className="text-xl text-plaster-700">
            Based in Kings Heath, covering Birmingham and surrounding areas
          </p>
        </motion.div>

        {/* Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                className="flex items-center gap-2 group"
              >
                <MapPin className="w-4 h-4 text-terracotta-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-plaster-800 font-medium group-hover:text-terracotta-600 transition-colors">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-plaster-100 text-center"
          >
            <p className="text-plaster-700 mb-4">
              Don't see your area? Get in touch — Adam may still be able to help
            </p>
            <a
              href="tel:07864670314"
              className="inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              Call Adam — 07864 670314
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
