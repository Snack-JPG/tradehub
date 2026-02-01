'use client'

import { motion } from 'framer-motion'
import { Phone, Star, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-plaster-900 via-plaster-800 to-plaster-900">
      {/* Texture overlay - like plaster finish */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Wordmark Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block">
            <h1 className="font-display font-bold text-plaster-50 mb-1">
              <span className="text-7xl md:text-9xl tracking-tight block">A.B</span>
            </h1>
            <p className="font-display text-2xl md:text-3xl text-plaster-200 tracking-wide">
              Plastering & Rendering
            </p>
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-transparent via-terracotta-500 to-transparent mt-4"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-semibold text-plaster-50 mb-6 text-balance"
        >
          Expert Plastering & Rendering in Birmingham
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-plaster-200 mb-8 max-w-3xl mx-auto text-balance leading-relaxed"
        >
          64 five-star reviews. Not a single one below 5. That's the standard Adam works to — every wall, every time.
        </motion.p>

        {/* Star Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="inline-flex items-center gap-3 bg-plaster-50/10 backdrop-blur-sm border border-gold-400/30 rounded-full px-8 py-4 mb-12"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-gold-400 text-gold-400 star-shimmer"
              />
            ))}
          </div>
          <div className="h-6 w-px bg-plaster-50/20" />
          <span className="text-plaster-50 font-semibold text-lg">
            5.0 on Google
          </span>
          <div className="h-6 w-px bg-plaster-50/20" />
          <span className="text-plaster-200">
            64 Reviews — Every Single One 5 Stars
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="tel:07864670314"
            className="group inline-flex items-center gap-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold px-8 py-5 rounded-lg transition-all hover:scale-105 hover:shadow-2xl shadow-lg text-lg"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Call Adam — 07864 670314
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-plaster-50/10 backdrop-blur-sm hover:bg-plaster-50/20 text-plaster-50 font-semibold px-8 py-5 rounded-lg border border-plaster-50/20 hover:border-plaster-50/40 transition-all text-lg"
          >
            Get a Free Quote
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-plaster-300/50" />
          </motion.div>
        </motion.div>
      </div>

      {/* HERO IMAGE PLACEHOLDER */}
      {/* Replace with client's best plastering finish photo — a smooth wall catches the light beautifully */}
    </section>
  )
}
