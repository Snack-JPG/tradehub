'use client';

import { motion } from 'framer-motion';
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Paintbrush,
  Home as HomeIcon,
  Wallpaper,
  Sparkles,
  Hammer,
  Building2,
  CheckCircle2,
  Award,
  Clock,
  Shield,
} from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center gradient-sage grain">
        {/* HERO IMAGE: Replace with client's best project photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage-700/30 to-sage-900/60" />

        <motion.div
          className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:px-8"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          {/* Logo/Wordmark */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h1 className="text-7xl font-bold tracking-tight text-cream-50 sm:text-8xl lg:text-9xl mb-2">
              EKH
            </h1>
            <p className="text-xl tracking-[0.3em] text-cream-200 uppercase font-sans sm:text-2xl">
              Painting & Decorating
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="mx-auto max-w-3xl text-3xl font-semibold text-cream-50 sm:text-4xl lg:text-5xl mb-6 text-balance"
          >
            Professional Painters & Decorators in Sutton Coldfield
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-lg text-cream-100 sm:text-xl mb-8"
          >
            Transforming homes across Birmingham and the West Midlands — rated 5 stars by every customer
          </motion.p>

          {/* Star Rating Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-10 flex items-center justify-center gap-2"
          >
            <div className="flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm px-6 py-3 border border-cream-200/20">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-cream-400 text-cream-400" />
                ))}
              </div>
              <span className="ml-2 text-cream-50 font-semibold">5.0</span>
              <span className="ml-1 text-cream-200">on Google · 50+ Reviews</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+447380906902"
              className="group inline-flex items-center gap-2 rounded-full bg-cream-500 px-8 py-4 text-lg font-semibold text-sage-900 shadow-lg transition-all hover:bg-cream-400 hover:shadow-xl hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call Glen — 07380 906902
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-cream-50 border-2 border-cream-200/30 transition-all hover:bg-white/20 hover:border-cream-200/50"
            >
              Get a Free Quote
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative paint brush stroke */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-24 px-6 lg:px-8 bg-cream-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* ABOUT IMAGE: Team photo or mid-project shot */}
              <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center overflow-hidden border-4 border-sage-600/10">
                <div className="text-center p-12">
                  <Paintbrush className="h-24 w-24 text-sage-600/20 mx-auto mb-4" />
                  <p className="text-sage-600/60 font-serif text-lg">
                    Team Photo Coming Soon
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="border-accent">
                <h2 className="text-4xl font-bold text-sage-900 sm:text-5xl mb-6">
                  A personal touch to every project
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Glen and Nina at EKH Painting & Decorating bring a personal touch to every project. Based in Sutton Coldfield, they've built a reputation for meticulous attention to detail, respect for your home, and flawless finishes — backed by 50 five-star reviews from happy customers.
              </p>

              {/* Trust Points */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage-600 mb-3">
                    <Star className="h-8 w-8 text-cream-50 fill-cream-50" />
                  </div>
                  <h3 className="font-semibold text-sage-900 mb-1">5★ Every Review</h3>
                  <p className="text-sm text-gray-600">Perfect rating from every customer</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage-600 mb-3">
                    <Clock className="h-8 w-8 text-cream-50" />
                  </div>
                  <h3 className="font-semibold text-sage-900 mb-1">Prompt & Reliable</h3>
                  <p className="text-sm text-gray-600">On time, every time</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage-600 mb-3">
                    <Shield className="h-8 w-8 text-cream-50" />
                  </div>
                  <h3 className="font-semibold text-sage-900 mb-1">Spotless & Tidy</h3>
                  <p className="text-sm text-gray-600">Respect for your home</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-8 bg-white paint-texture">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-sage-900 sm:text-5xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a single room refresh to complete home transformations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border-2 border-sage-100 bg-gradient-cream p-8 transition-all hover:border-sage-600 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-sage-600 text-cream-50 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-sage-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-24 px-6 lg:px-8 bg-cream-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-sage-900 sm:text-5xl mb-4">
              Recent Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every project tells a story. Here's some of our recent work across Sutton Coldfield and Birmingham.
            </p>
          </motion.div>

          {/* GALLERY: Replace placeholders with client project photos. Before/after pairs work great */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-sage-100 to-cream-200 overflow-hidden border-2 border-sage-200/30 hover:border-sage-600 transition-all cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <Sparkles className="h-12 w-12 text-sage-600/30 mb-3" />
                  <p className="text-sage-700/60 font-serif">
                    Project Photo Coming Soon
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-sage-50 px-6 py-2 mb-4">
              <Award className="h-5 w-5 text-sage-600" />
              <span className="text-sm font-semibold text-sage-900">Reviews from Google</span>
            </div>
            <h2 className="text-4xl font-bold text-sage-900 sm:text-5xl mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-cream-500 text-cream-500" />
                ))}
              </div>
              <span className="font-semibold">5.0 average from 50+ reviews on Google</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-cream-50 border-2 border-sage-100 p-8 transition-all hover:border-sage-600 hover:shadow-lg"
              >
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-cream-500 text-cream-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-semibold text-sage-900">{review.name}</p>
              </motion.div>
            ))}

            {/* Placeholder review cards */}
            {/* ADD MORE REVIEWS: Pull from Google reviews */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`placeholder-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (reviews.length + i) * 0.1 }}
                className="rounded-2xl bg-cream-50/50 border-2 border-dashed border-sage-200 p-8 flex items-center justify-center"
              >
                <p className="text-sage-600/60 font-serif text-center">
                  More reviews<br />coming soon
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-24 px-6 lg:px-8 bg-sage-900 grain">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-cream-50 sm:text-5xl mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-cream-200">
              Proudly serving Birmingham and the West Midlands
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {areas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-2 text-cream-100 group"
              >
                <MapPin className="h-4 w-4 text-cream-500 flex-shrink-0 group-hover:text-cream-400 transition-colors" />
                <span className="text-sm group-hover:text-cream-50 transition-colors">
                  {area}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-cream-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-accent mb-8">
                <h2 className="text-4xl font-bold text-sage-900 sm:text-5xl mb-4">
                  Get a Free Quote
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                We aim to respond the same day. Call Glen directly for immediate assistance or fill out the form below.
              </p>

              <div className="space-y-6 mb-10">
                <a
                  href="tel:+447380906902"
                  className="group flex items-center gap-4 rounded-xl bg-sage-600 p-6 text-cream-50 transition-all hover:bg-sage-700 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-500">
                    <Phone className="h-6 w-6 text-sage-900" />
                  </div>
                  <div>
                    <p className="text-sm text-cream-200">Call Glen</p>
                    <p className="text-xl font-semibold">07380 906902</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/447380906902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl bg-[#25D366] p-6 text-white transition-all hover:bg-[#1fb355] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Message on WhatsApp</p>
                    <p className="text-xl font-semibold">Chat with Glen</p>
                  </div>
                </a>
              </div>

              {/* CONTACT IMAGE: Finished project photo or Glen at work */}
              <div className="hidden lg:block relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-sage-100 to-sage-200 overflow-hidden border-4 border-sage-600/10">
                <div className="flex items-center justify-center h-full p-12 text-center">
                  <div>
                    <HomeIcon className="h-24 w-24 text-sage-600/20 mx-auto mb-4" />
                    <p className="text-sage-600/60 font-serif text-lg">
                      Project Photo Coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-6 rounded-2xl bg-white p-8 shadow-xl border-2 border-sage-100">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-sage-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border-2 border-sage-200 px-4 py-3 focus:border-sage-600 focus:outline-none focus:ring-2 focus:ring-sage-600/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-sage-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full rounded-lg border-2 border-sage-200 px-4 py-3 focus:border-sage-600 focus:outline-none focus:ring-2 focus:ring-sage-600/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-sage-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border-2 border-sage-200 px-4 py-3 focus:border-sage-600 focus:outline-none focus:ring-2 focus:ring-sage-600/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="postcode" className="block text-sm font-semibold text-sage-900 mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    required
                    className="w-full rounded-lg border-2 border-sage-200 px-4 py-3 focus:border-sage-600 focus:outline-none focus:ring-2 focus:ring-sage-600/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-sage-900 mb-2">
                    Type of Work *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-lg border-2 border-sage-200 px-4 py-3 focus:border-sage-600 focus:outline-none focus:ring-2 focus:ring-sage-600/20 transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="wallpapering">Wallpapering</option>
                    <option value="redecoration">Full Redecoration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-sage-900 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border-2 border-sage-200 px-4 py-3 focus:border-sage-600 focus:outline-none focus:ring-2 focus:ring-sage-600/20 transition-colors resize-none"
                    placeholder="Brief description of the work you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-sage-600 px-8 py-4 text-lg font-semibold text-cream-50 shadow-lg transition-all hover:bg-sage-700 hover:shadow-xl hover:scale-[1.02]"
                >
                  Send Enquiry
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We aim to respond the same day
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-cream-100 py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-cream-50 mb-4 font-serif">EKH</h3>
              <p className="text-sm text-cream-200 mb-4">
                Professional painting and decorating services in Sutton Coldfield and Birmingham.
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:+447380906902"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream-500 text-sage-900 transition-all hover:bg-cream-400"
                  aria-label="Call us"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/447380906902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-all hover:bg-[#1fb355]"
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-cream-50 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:+447380906902" className="hover:text-cream-50 transition-colors">
                    07380 906902
                  </a>
                </li>
                <li className="text-cream-200">Sutton Coldfield</li>
                <li className="text-cream-200">Birmingham B73 5AP</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cream-50 mb-4">Areas Served</h4>
              <ul className="space-y-2 text-sm text-cream-200">
                <li>Sutton Coldfield</li>
                <li>Birmingham</li>
                <li>Erdington</li>
                <li>Four Oaks</li>
                <li>Lichfield & Tamworth</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cream-50 mb-4">Reviews</h4>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cream-400 text-cream-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold">5.0 / 5.0</span>
              </div>
              <p className="text-sm text-cream-200 mb-4">50+ Google Reviews</p>
              <a
                href="#"
                className="text-sm text-cream-400 hover:text-cream-300 transition-colors underline"
              >
                Read our reviews →
              </a>
            </div>
          </div>

          <div className="border-t border-cream-200/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream-200">
            <p>© 2026 EKH Painting & Decorating. All rights reserved.</p>
            <p>
              Listed on{' '}
              <a href="#" className="text-cream-400 hover:text-cream-300 transition-colors">
                TradeHub
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}

const services = [
  {
    title: 'Interior Painting',
    icon: <HomeIcon className="h-7 w-7" />,
    items: [
      'Living rooms, bedrooms, kitchens',
      'Feature walls & accent colours',
      'Ceilings & coving',
    ],
  },
  {
    title: 'Exterior Painting',
    icon: <Building2 className="h-7 w-7" />,
    items: [
      'Fascias, soffits & guttering',
      'Front doors & window frames',
      'Garden walls & fences',
    ],
  },
  {
    title: 'Wallpapering',
    icon: <Wallpaper className="h-7 w-7" />,
    items: [
      'Feature walls',
      'Full room wallpapering',
      'Wallpaper stripping & prep',
    ],
  },
  {
    title: 'Decorating',
    icon: <Paintbrush className="h-7 w-7" />,
    items: [
      'Hallways, stairs & landings',
      'Full house redecorations',
      'New build finishing',
    ],
  },
  {
    title: 'Preparation Work',
    icon: <Hammer className="h-7 w-7" />,
    items: [
      'Surface preparation & filling',
      'Plastering touch-ups',
      'Sanding & priming',
    ],
  },
  {
    title: 'Commercial',
    icon: <Building2 className="h-7 w-7" />,
    items: [
      'Office redecorations',
      'Shop fronts',
      'Rental property turnarounds',
    ],
  },
];

const reviews = [
  {
    name: 'Alpa Burke',
    text: 'Glen and Nina did a wonderful job painting various areas of our house. Swift response and so respectful of our home, we couldn\'t be happier with the finished result. If you ever need a decorator, Glen\'s your man! Already forwarded his details to a friend.',
  },
  {
    name: 'Natasha A',
    text: 'I would give more than 5 stars if I could! Absolute perfection by Glen and Nina who have recently redecorated our hallway stairs and landing. Glen and Nina are extremely hard working, their standard of work is honestly best of the best! They are polite, respectful, friendly and arrive promptly.',
  },
  {
    name: 'Leeanne Minto',
    text: 'Contacted EKH and had a swift response, quote sent out detailing everything. Was able to fit me in a very reasonable timeframe. Very satisfied with the finish and would recommend again. Thanks to Glen and co!',
  },
];

const areas = [
  'Sutton Coldfield',
  'Birmingham',
  'Erdington',
  'Four Oaks',
  'Mere Green',
  'Wylde Green',
  'Boldmere',
  'Walmley',
  'Streetly',
  'Great Barr',
  'Kingstanding',
  'Perry Barr',
  'Lichfield',
  'Tamworth',
  'Solihull',
];
