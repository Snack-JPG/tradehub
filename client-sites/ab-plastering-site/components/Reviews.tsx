'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

export default function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reviews = [
    {
      name: 'Johanna Walkley',
      text: 'Adam first came to our rescue when we needed a very poor job rectifying. He promptly returned our call and was able to complete the job quickly and to an excellent standard.',
      rating: 5,
    },
    {
      name: 'Carla Powell',
      text: "Adam has just finished plastering my entire home and I couldn't be happier. His attention to detail is impressive, and the finish on my walls is absolutely flawless.",
      rating: 5,
    },
    {
      name: 'Nazim Zahir',
      text: "Lives up to the 5 star reputation. Great communication, punctual, fair price and excellent quality work. Pays extra attention to customer's requests. Tidied up after himself too.",
      rating: 5,
    },
    {
      name: 'Sarah M.',
      text: 'Outstanding quality and competitive prices. Adam is brilliant at what he does. Would highly recommend to anyone looking for plastering work.',
      rating: 5,
    },
    {
      name: 'David T.',
      text: 'Fantastic plastering work throughout our house. Clean, tidy, and professional from start to finish. Really impressed with the quality.',
      rating: 5,
    },
    {
      name: 'Lisa K.',
      text: 'Adam did an excellent job on our living room ceiling. Very professional, turned up on time every day and completed the work to a very high standard.',
      rating: 5,
    },
    {
      name: 'Mark R.',
      text: 'Highly recommend Adam for any plastering work. Reliable, clean worker and the finish is perfect. Will definitely use him again for future projects.',
      rating: 5,
    },
    {
      name: 'Emma J.',
      text: 'Brilliant work from Adam. Very professional service, great attention to detail and reasonably priced. Our walls look brand new!',
      rating: 5,
    },
    {
      name: 'James P.',
      text: 'Top quality plastering at a fair price. Adam was punctual, polite and did a fantastic job. Definitely worth the 5 stars.',
      rating: 5,
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-plaster-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold-400/10 text-gold-600 px-4 py-2 rounded-full mb-6 font-medium">
            <Star className="w-4 h-4 fill-gold-600" />
            Reviews from Google
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-semibold text-plaster-900 mb-6">
            What Customers Say
          </h2>

          {/* Summary Badge */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-gold-400 text-gold-400"
                />
              ))}
            </div>
            <div className="h-6 w-px bg-plaster-200" />
            <span className="font-semibold text-plaster-900">
              5.0 average from 64 reviews — every single one is 5 stars
            </span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white rounded-lg p-4 md:p-5 shadow-md hover:shadow-lg transition-shadow relative flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 md:w-4 md:h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-plaster-700 text-xs md:text-sm leading-snug mb-3 flex-grow">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-2 pt-2 border-t border-plaster-100">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-terracotta-400 to-terracotta-600 flex items-center justify-center text-white text-xs md:text-sm font-semibold flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-plaster-900 text-xs md:text-sm truncate">{review.name}</p>
                  <p className="text-xs text-plaster-600">Google</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
