'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, MapPin, Star, Shield, Clock, Zap, CheckCircle, ChevronRight } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mjb-dark via-mjb-slate to-mjb-dark text-white overflow-hidden grain-texture">
        <div className="absolute inset-0 circuit-pattern opacity-30"></div>

        {/* Emergency Banner */}
        <div className="relative z-10 bg-mjb-amber/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-center gap-2 text-mjb-dark font-medium text-sm sm:text-base">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>24/7 Emergency Callouts Available</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
              <Image
                src="/logo.webp"
                alt="MJB Electrical Services"
                width={320}
                height={120}
                className="w-auto h-20 sm:h-28"
                priority
              />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight"
            >
              Trusted Electricians in <br />
              <span className="text-mjb-green">Halesowen & the West Midlands</span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-mjb-amber text-mjb-amber" />
                ))}
                <span className="ml-2 text-sm font-semibold">9.93/10 on Checkatrade · 105 Reviews</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <a
                href="tel:07941746878"
                className="group w-full sm:w-auto bg-mjb-green hover:bg-mjb-green/90 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all glow-green"
              >
                <Phone className="w-5 h-5" />
                Call Now — 07941 746878
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border border-white/20 transition-all"
              >
                Get a Free Quote
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative circuit lines */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mjb-green to-transparent opacity-50"></div>
      </section>

      {/* Trust Strip */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Professional, reliable, local electricians serving Halesowen and surrounding areas.
            Known for <span className="font-semibold text-mjb-green">clear communication</span>,
            <span className="font-semibold text-mjb-green"> fair pricing</span>, and leaving every job spotless.
          </motion.p>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Shield, title: 'Checkatrade Approved', desc: '9.93/10 rating' },
              { icon: Star, title: '400+ Combined Reviews', desc: 'Checkatrade & Google' },
              { icon: Clock, title: '24/7 Emergency Service', desc: 'Always available' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4 bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="bg-mjb-green/10 p-3 rounded-lg">
                  <item.icon className="w-6 h-6 text-mjb-green" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="text-mjb-green">Services</span>
            </h2>
            <p className="text-xl text-gray-600">Expert electrical solutions for your home and business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Home Electrics */}
            <ServiceCard
              title="Home Electrics"
              icon="🏠"
              services={[
                'Full Rewiring / House Rewiring',
                'Fuseboard / Consumer Unit Installation & Repair',
                'Socket & Switch Installation',
                'Fault Finding',
                'Smoke Alarms'
              ]}
            />

            {/* Lighting */}
            <ServiceCard
              title="Lighting"
              icon="💡"
              services={[
                'LED Lighting',
                'Lighting Design',
                'Garden Lighting',
                'Emergency Lighting',
                'Energy Efficient Lighting'
              ]}
            />

            {/* Appliance & Specialist */}
            <ServiceCard
              title="Appliance & Specialist"
              icon="⚡"
              services={[
                'Electric Cooker / Range Cooker Connection',
                'Electric Shower Installation',
                'Hot Tub Wiring',
                'Electric Vehicle Charger Installation',
                'Electric Heating / Radiators / Stoves',
                'Electric Gate Wiring'
              ]}
            />

            {/* Testing & Certification */}
            <ServiceCard
              title="Testing & Certification"
              icon="✓"
              services={[
                'EICR (Electrical Installation Condition Reports)',
                'Safety Checks',
                'Full Electrical Testing',
                'Landlord Certificates'
              ]}
            />
          </div>

          {/* Emergency Service Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-mjb-amber/10 to-mjb-green/10 border-2 border-mjb-green/20 rounded-xl p-8 text-center"
          >
            <Zap className="w-12 h-12 text-mjb-amber mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">24/7 Emergency Electrician Service</h3>
            <p className="text-gray-700 mb-4">Rapid response when you need it most. Available day or night.</p>
            <a href="tel:07941746878" className="inline-flex items-center gap-2 bg-mjb-amber hover:bg-mjb-amber/90 text-white px-6 py-3 rounded-lg font-bold transition-all">
              <Phone className="w-5 h-5" />
              Emergency Callout: 07941 746878
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              What Our <span className="text-mjb-green">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600">Reviews from Checkatrade</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-gray-200">
              <Star className="w-5 h-5 fill-mjb-amber text-mjb-amber" />
              <span className="font-semibold">9.93/10 average rating from 105 reviews on Checkatrade</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Areas We <span className="text-mjb-green">Serve</span>
            </h2>
            <p className="text-xl text-gray-600">Covering Halesowen and the wider West Midlands</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto"
          >
            {areas.map((area, i) => (
              <div key={i} className="text-center py-3 px-2 bg-gray-50 rounded-lg border border-gray-200 hover:border-mjb-green transition-colors">
                <MapPin className="w-4 h-4 text-mjb-green mx-auto mb-1" />
                <p className="text-sm font-medium text-gray-700">{area}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-mjb-dark via-mjb-slate to-mjb-dark text-white grain-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Get a <span className="text-mjb-green">Free Quote</span>
            </h2>
            <p className="text-xl text-gray-300">We aim to respond within 1 hour</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="font-display text-2xl font-bold mb-6">Contact Us Directly</h3>

                <a href="tel:07941746878" className="flex items-center gap-3 mb-6 group">
                  <div className="bg-mjb-green p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call or Text</p>
                    <p className="text-lg font-bold">07941 746878</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-mjb-green/20 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-mjb-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Based in</p>
                    <p className="text-lg font-bold">Halesowen, West Midlands</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Emergency?</p>
                  <a href="tel:07941746878" className="inline-flex items-center gap-2 bg-mjb-amber hover:bg-mjb-amber/90 text-white px-6 py-3 rounded-lg font-bold transition-all">
                    <Clock className="w-5 h-5" />
                    24/7 Emergency Callout
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjb-green text-white placeholder-gray-400"
                    placeholder="John Smith"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjb-green text-white placeholder-gray-400"
                    placeholder="07941 746878"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="postcode" className="block text-sm font-medium mb-2">Postcode</label>
                  <input
                    type="text"
                    id="postcode"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjb-green text-white placeholder-gray-400"
                    placeholder="B63 3AB"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Job Description</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mjb-green text-white placeholder-gray-400 resize-none"
                    placeholder="Tell us about your electrical needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-mjb-green hover:bg-mjb-green/90 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all glow-green flex items-center justify-center gap-2"
                >
                  Send Enquiry
                  <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mjb-dark text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/logo.webp"
                alt="MJB Electrical Services"
                width={240}
                height={90}
                className="w-auto h-16 mb-4"
              />
              <p className="text-gray-400">Professional electrical services in Halesowen and the West Midlands</p>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
              <a href="tel:07941746878" className="flex items-center gap-2 text-gray-400 hover:text-mjb-green transition-colors mb-2">
                <Phone className="w-4 h-4" />
                07941 746878
              </a>
              <p className="text-gray-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Halesowen, West Midlands
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-4">Find Us On</h4>
              <a
                href="https://www.checkatrade.com/trades/MJBElectricalServicesLtd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-mjb-green transition-colors mb-2"
              >
                <CheckCircle className="w-4 h-4" />
                Checkatrade
              </a>
              <br />
              <a
                href={process.env.NEXT_PUBLIC_TRADEHUB_URL || "https://tradehub.com/electricians/mjb-electrical-services"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-mjb-green transition-colors"
              >
                TradeHub Listing
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} MJB Electrical Services Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Service Card Component
function ServiceCard({ title, icon, services }: { title: string; icon: string; services: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-mjb-green transition-all hover:shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="font-display text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {services.map((service, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-700">
            <CheckCircle className="w-5 h-5 text-mjb-green flex-shrink-0 mt-0.5" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// Review Card Component
function ReviewCard({ name, review, location }: { name: string; review: string; location: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
    >
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-mjb-amber text-mjb-amber" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">&ldquo;{review}&rdquo;</p>
      <div className="pt-4 border-t border-gray-100">
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </motion.div>
  )
}

// Data
const reviews = [
  {
    name: 'John B',
    review: 'Kept us informed about what he was doing throughout the fault finding process. Very professional service.',
    location: 'B63'
  },
  {
    name: 'Sue C',
    review: 'Went above and beyond to do an unexpected job outside on a cold dark and rainy afternoon installing security lights and video doorbell.',
    location: 'B26'
  },
  {
    name: 'Customer',
    review: 'Very efficient... turned out to be a burned out box on fuse box. Job took about 20 mins... explained everything as he went along.',
    location: 'B63'
  },
  {
    name: 'Philip T',
    review: 'Clear explanation of what was needed and very polite manner. Prompt response to the call out and reasonable cost.',
    location: 'B62'
  },
  {
    name: 'Emergency Customer',
    review: 'Phoned them on Saturday night at 19.00, at my house in less than 30 minutes, job completed within the hour. Excellent service!',
    location: 'B62'
  },
  {
    name: 'Repeat Customer',
    review: 'Third time I have used MJB... I wouldn\'t use anyone else now. Brilliant communication, punctual and professional every time.',
    location: 'B74 / B32'
  },
  {
    name: 'Customer',
    review: 'Laid down dust covers... very professional and cleaned up after himself. Will definitely use again.',
    location: 'B64'
  }
]

const areas = [
  'Halesowen', 'Birmingham', 'Dudley', 'Stourbridge',
  'Oldbury', 'Blackheath', 'Quinton', 'Bartley Green',
  'Cradley Heath', 'Rowley Regis', 'Smethwick', 'West Bromwich',
  'Solihull', 'Harborne', 'Edgbaston', 'Selly Oak'
]
