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
      text: 'Adam first came to our rescue when we needed a very poor job rectifying. He promptly returned our call and was able to complete the job quickly and to an excellent standard. He has since returned and carried out additional plastering jobs for us, working effectively alongside other tradespeople.',
      rating: 5,
    },
    {
      name: 'Carla Powell',
      text: "Adam has just finished plastering my entire home and I couldn't be happier with the results. From the moment he started, Adam worked tirelessly and demonstrated an incredible work ethic. His attention to detail is impressive, and the finish on my walls is absolutely flawless.",
      rating: 5,
    },
    {
      name: 'Nazim Zahir',
      text: "I contacted Adam after reading the reviews on Google. Must say, he does live up to the 5 star reputation. Great in communication, punctual with the timeline, fair price and quality of work was excellent. Really soft spoken and pays extra attention to customer's request. He tidied up after himself too.",
      rating: 5,
    },
  ]

  const placeholderReviews = Array(3).fill(null)

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-terracotta-500/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-plaster-700 leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-plaster-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta-400 to-terracotta-600 flex items-center justify-center text-white font-semibold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-plaster-900">{review.name}</p>
                  <p className="text-sm text-plaster-600">Google Review</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Placeholder reviews */}
          {placeholderReviews.map((_, index) => (
            <motion.div
              key={`placeholder-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (reviews.length + index) * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg border-2 border-dashed border-plaster-200 flex items-center justify-center text-center"
            >
              <div>
                <Star className="w-12 h-12 text-plaster-300 mx-auto mb-4" />
                <p className="text-plaster-500 text-sm">
                  {/* ADD MORE REVIEWS: Pull from Google reviews — Adam has 64 to choose from */}
                  More reviews coming soon
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
