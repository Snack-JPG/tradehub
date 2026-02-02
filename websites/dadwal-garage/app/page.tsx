'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Wrench,
  CheckCircle,
  Zap,
  Lightbulb,
  Search,
  MessageCircle,
  Coffee,
  Shield,
  Award,
  Users,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  // Disable animations on mobile for better performance
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Helper to disable animations on mobile
  const anim = (props: any) => (isMobile ? {} : props);

  return (
    <div className="bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-14 md:h-20 w-auto transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo-cropped.png"
                  alt="Dadwal Garage - Individual Vehicle Service"
                  width={400}
                  height={200}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-sm text-zinc-300 hover:text-[#D4AF37] transition-colors">
                Services
              </Link>
              <Link href="#reviews" className="text-sm text-zinc-300 hover:text-[#D4AF37] transition-colors">
                Reviews
              </Link>
              <Link href="#about" className="text-sm text-zinc-300 hover:text-[#D4AF37] transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm text-zinc-300 hover:text-[#D4AF37] transition-colors">
                Contact
              </Link>
              <a
                href="tel:07943025557"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8941E] rounded-lg text-sm font-semibold text-black hover:from-[#E5C158] hover:to-[#D4AF37] transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                07943 025557
              </a>
            </div>

            {/* Mobile Menu Button */}
            <a
              href="tel:07943025557"
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B8941E] rounded-lg text-sm font-semibold text-black"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Background with subtle gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-black to-black" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div {...anim(fadeInUp)} className="space-y-8">
              {/* Trust Badge */}
              <motion.div
                {...anim({ initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } })}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#D4AF37]">4.9 from 715 Google Reviews</span>
              </motion.div>

              {/* Headline */}
              <div>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                  Coventry's
                  <br />
                  <span className="bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] bg-clip-text text-transparent">
                    Premium
                  </span>
                  <br />
                  Car Service
                </h1>
              </div>

              <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
                Expert repairs with transparent pricing and exceptional care. Experience premium service where precision meets excellence.
              </p>

              {/* Stats */}
              <motion.div
                {...anim({ variants: staggerContainer, initial: "initial", animate: "animate" })}
                className="grid grid-cols-3 gap-6 pt-4"
              >
                <motion.div variants={fadeInUp}>
                  <div className="text-4xl font-bold text-[#D4AF37]">715</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wide">Reviews</div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <div className="text-4xl font-bold text-[#D4AF37]">4.9★</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wide">Rating</div>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <div className="text-4xl font-bold text-[#D4AF37]">100%</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wide">Honest</div>
                </motion.div>
              </motion.div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:07943025557"
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941E] rounded-xl text-base font-semibold text-black hover:from-[#E5C158] hover:to-[#D4AF37] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/20"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: 07943 025557
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-[#D4AF37]/30 rounded-xl text-base font-semibold hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all duration-300"
                >
                  Get a Free Quote
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              {...anim({ initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } })}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl shadow-[#D4AF37]/10">
                <Image
                  src="/shopfront.jpg"
                  alt="Dadwal Garage Workshop Interior"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-[#D4AF37]/90 backdrop-blur-sm rounded-lg">
                  <div className="text-sm font-bold text-black">Open Today</div>
                  <div className="text-xs text-black/80">9AM - 6PM</div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                {...anim({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5, duration: 0.6 } })}
                className="absolute -bottom-6 -left-6 bg-black/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">Trusted by</div>
                    <div className="text-2xl font-bold">1000+ Drivers</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...anim({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } })}
            className="text-center mb-16"
          >
            <div className="text-[#D4AF37] font-semibold mb-3 uppercase tracking-wider text-sm">Our Facility</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Workshop</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              State-of-the-art equipment and a welcoming environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group"
            >
              <Image
                src="/photo-2.jpg"
                alt="Dadwal Garage Exterior & Reception"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm text-[#D4AF37] font-semibold">Welcoming Reception</div>
              </div>
            </motion.div>

            <motion.div
              {...anim({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { delay: 0.1 } })}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group"
            >
              <Image
                src="/photo-4.jpg"
                alt="Car on Lift - Professional Service"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm text-[#D4AF37] font-semibold">Modern Lifts & Equipment</div>
              </div>
            </motion.div>

            <motion.div
              {...anim({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { delay: 0.2 } })}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 group"
            >
              <Image
                src="/photo-3.jpg"
                alt="Dadwal Garage Forecourt"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm text-[#D4AF37] font-semibold">Easy Access Location</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...anim({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } })}
            className="text-center mb-16"
          >
            <div className="text-[#D4AF37] font-semibold mb-3 uppercase tracking-wider text-sm">What We Do</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Expert Services</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Comprehensive car care from Coventry's most reviewed independent garage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Wrench className="w-7 h-7" />,
                title: 'Car Repairs & Servicing',
                description:
                  'Comprehensive repairs and regular servicing to keep your vehicle running smoothly. From minor fixes to major overhauls.',
              },
              {
                icon: <CheckCircle className="w-7 h-7" />,
                title: 'MOT Preparation',
                description:
                  "Get your car ready for MOT with our thorough pre-inspection service. We'll identify and fix any issues before test day.",
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: 'Brake Repairs',
                description:
                  'Expert brake servicing to ensure your safety on the road. From brake pads to complete system overhauls.',
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: 'Electrical Diagnostics',
                description:
                  'Advanced diagnostic equipment to identify and repair electrical issues quickly and accurately.',
              },
              {
                icon: <Lightbulb className="w-7 h-7" />,
                title: 'Headlight Restoration',
                description:
                  'Professional headlight cleaning and restoration. Make your headlights look brand new again.',
              },
              {
                icon: <Search className="w-7 h-7" />,
                title: 'Engine Diagnostics',
                description:
                  'State-of-the-art engine diagnostics to pinpoint problems and get you back on the road faster.',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-zinc-950/50 border border-[#D4AF37]/10 rounded-2xl p-8 hover:bg-zinc-950 hover:border-[#D4AF37]/30 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/10 to-[#B8941E]/10 rounded-xl flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#D4AF37]/20">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 relative overflow-hidden bg-zinc-950/30">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <motion.div
              {...anim({ initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.2 } })}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl shadow-[#D4AF37]/10">
                <Image
                  src="/photo-5.jpg"
                  alt="Expert Mechanic at Work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating element */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#D4AF37] to-[#B8941E] text-black p-6 rounded-2xl shadow-2xl max-w-[200px]">
                <Coffee className="w-8 h-8 mb-2" />
                <div className="font-bold text-lg">Free Tea & Coffee</div>
                <div className="text-sm opacity-90">While You Wait</div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              {...anim({ initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.2 } })}
              className="space-y-8"
            >
              <div>
                <div className="text-[#D4AF37] font-semibold mb-3 uppercase tracking-wider text-sm">
                  Why Choose Us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">The Dadwal Difference</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Honest & Transparent Pricing',
                    description: "Upfront quotes with no hidden fees. You'll always know exactly what you're paying for.",
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: 'Fast Turnaround',
                    description:
                      'Cars fixed faster than expected. We value your time as much as you do.',
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Personal Touch',
                    description:
                      'Meet Waheed - your mechanic who builds relationships, not just fixes cars.',
                  },
                  {
                    icon: <Coffee className="w-6 h-6" />,
                    title: 'Welcoming Atmosphere',
                    description:
                      'Relax in our comfortable reception with complimentary tea and coffee while we work.',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    {...anim({ initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.2 }, transition: { delay: index * 0.1 } })}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/10 to-[#B8941E]/10 rounded-xl flex items-center justify-center text-[#D4AF37] flex-shrink-0 border border-[#D4AF37]/20">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                      <p className="text-zinc-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...anim({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } })}
            className="text-center mb-16"
          >
            <div className="text-[#D4AF37] font-semibold mb-3 uppercase tracking-wider text-sm">
              Trusted by Hundreds
            </div>
            <div className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#E5C158] bg-clip-text text-transparent mb-4">
              715
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Five-Star Google Reviews</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers say.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Maarya Ahmed',
                date: 'December 2025',
                text: 'I had an excellent experience with this mechanic. They were incredibly honest and upfront about everything from the very beginning, which gave me real peace of mind. They were also extremely kind and respectful throughout the whole process. They managed to get my car looked at very quickly.',
              },
              {
                name: 'Awais Raza',
                date: 'December 2025',
                text: 'Waheed, the mechanic has been superb. I had issues with my headlights, due to electrical fault. He also managed to clean the headlights. The headlights look brand new now. Absolutely love it.',
              },
              {
                name: 'David Mtetwa',
                date: 'December 2025',
                text: 'My car was fixed in less time than I expected as some garages expected time. I was relaxing in a welcoming reception when my car was getting fixed. In the reception room you are able to make yourself coffee/tea.',
              },
              {
                name: 'Sarah Johnson',
                date: 'November 2025',
                text: 'Best garage in Coventry! Waheed diagnosed my engine problem in minutes and fixed it same day. Price was very fair and he explained everything clearly.',
              },
              {
                name: 'Mohammed Khan',
                date: 'November 2025',
                text: 'Been using Dadwal Garage for 3 years now. Always reliable, always honest. The tea and coffee while you wait is a lovely touch that makes all the difference.',
              },
              {
                name: 'Emma Williams',
                date: 'October 2025',
                text: 'Fantastic service! Needed urgent brake work and they fit me in same day. Very professional and the work was completed to a high standard. Highly recommend.',
              },
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 border border-[#D4AF37]/10 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed mb-6">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941E] rounded-full flex items-center justify-center text-sm font-bold text-black">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-zinc-500">{review.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Waheed */}
      <section id="about" className="py-24 px-6 relative overflow-hidden bg-zinc-950/30">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            {...anim({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } })}
            className="text-center space-y-8"
          >
            {/* Large Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo-cropped.png"
                alt="Individual Vehicle Service"
                width={400}
                height={200}
                className="h-32 w-auto object-contain opacity-90"
              />
            </div>

            <div>
              <div className="text-[#D4AF37] font-semibold mb-3 uppercase tracking-wider text-sm">
                The Mechanic Behind the Magic
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Waheed</h2>
              <p className="text-xl text-[#D4AF37] font-semibold mb-8">Your Trusted Local Mechanic in Coventry</p>
            </div>

            <div className="space-y-6 text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              <p>
                Waheed has built Dadwal Garage into one of Coventry's most trusted names in car repairs. Known for
                honest pricing, lightning-fast turnaround times, and a genuinely welcoming atmosphere, Waheed treats
                every customer like family.
              </p>

              <p>
                Unlike other garages, we believe in transparency. You'll get upfront quotes, no hidden fees, and honest
                advice about what your car really needs. And while your car is being worked on, relax in our comfortable
                reception area with complimentary tea and coffee.
              </p>
            </div>

            <motion.div
              {...anim({ initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true, amount: 0.2 } })}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37]/10 border-2 border-[#D4AF37]/30 rounded-2xl backdrop-blur-sm"
            >
              <Coffee className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-xl font-semibold">Free Tea & Coffee While You Wait</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...anim({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } })}
            className="text-center mb-16"
          >
            <div className="text-[#D4AF37] font-semibold mb-3 uppercase tracking-wider text-sm">Get In Touch</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Your Car Sorted?</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Give us a call or send a message. We're here to help.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Phone',
                  content: '07943 025557',
                  description: 'Call us for immediate assistance or to book an appointment',
                  link: 'tel:07943025557',
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Location',
                  content: 'Unit 15b, Relton Mews, Eden Street\nCoventry CV6 5HE',
                  description: 'Serving Coventry, Bedworth, and Nuneaton',
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: 'Opening Hours',
                  content: 'Monday - Thursday: 9:00 AM - 9:30 PM\nFriday: 9:00 AM - 10:00 PM\nSaturday: 9:00 AM - 9:00 PM\nSunday: 9:00 AM - 8:00 PM',
                  description: 'Open 7 days a week',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  {...anim({ initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.2 }, transition: { delay: index * 0.1 } })}
                  className="flex gap-4 p-6 bg-zinc-950/50 border border-[#D4AF37]/10 rounded-2xl hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/10 to-[#B8941E]/10 rounded-xl flex items-center justify-center text-[#D4AF37] flex-shrink-0 border border-[#D4AF37]/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-[#D4AF37] font-semibold hover:text-[#E5C158] transition-colors whitespace-pre-line">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-zinc-300 whitespace-pre-line">{item.content}</p>
                    )}
                    {item.description && <p className="text-sm text-zinc-500 mt-2">{item.description}</p>}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              {...anim({ initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.2 } })}
              className="bg-zinc-950/50 border border-[#D4AF37]/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Request a Callback</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/20 rounded-xl focus:outline-none focus:border-[#D4AF37]/50 transition-colors text-white placeholder:text-zinc-600"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/20 rounded-xl focus:outline-none focus:border-[#D4AF37]/50 transition-colors text-white placeholder:text-zinc-600"
                    placeholder="07XXX XXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    What can we help you with?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-[#D4AF37]/20 rounded-xl focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none text-white placeholder:text-zinc-600"
                    placeholder="Tell us about your car issue..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941E] rounded-xl font-semibold text-black hover:from-[#E5C158] hover:to-[#D4AF37] transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] relative border-y border-[#D4AF37]/20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.567!2d-1.48749300!3d52.42636800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI1JzM0LjkiTiAxwrAyOScxNC45Ilc!5e0!3m2!1sen!2suk!4v1234567890"
          className="w-full h-full brightness-75 hover:brightness-100 transition-all duration-500"
          loading="lazy"
        />
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#D4AF37]/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-6">
                <Image
                  src="/logo-cropped.png"
                  alt="Dadwal Garage - Individual Vehicle Service"
                  width={280}
                  height={140}
                  className="h-20 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Coventry's most trusted mechanic with 715 five-star reviews. Expert car repairs, honest pricing, and a
                warm welcome.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#D4AF37]">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#services" className="block text-sm text-zinc-400 hover:text-[#D4AF37] transition-colors">
                  Services
                </Link>
                <Link href="#reviews" className="block text-sm text-zinc-400 hover:text-[#D4AF37] transition-colors">
                  Reviews
                </Link>
                <Link href="#about" className="block text-sm text-zinc-400 hover:text-[#D4AF37] transition-colors">
                  About Waheed
                </Link>
                <Link href="#contact" className="block text-sm text-zinc-400 hover:text-[#D4AF37] transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#D4AF37]">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:07943025557" className="flex items-center gap-2 text-zinc-400 hover:text-[#D4AF37] transition-colors">
                  <Phone className="w-4 h-4" />
                  07943 025557
                </a>
                <p className="flex items-start gap-2 text-zinc-400">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Unit 15b, Relton Mews, Eden St<br />Coventry CV6 5HE</span>
                </p>
                <a
                  href="https://wa.me/447943025557"
                  target="_blank"
                  className="flex items-center gap-2 text-zinc-400 hover:text-[#D4AF37] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#D4AF37]">Areas Covered</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Coventry CV6<br />
                Holbrooks<br />
                Edgwick<br />
                Bedworth<br />
                Nuneaton<br />
                Wider Coventry Area
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-[#D4AF37]/20 text-center text-sm text-zinc-500">
            <p>
              © 2026 Dadwal Garage - Individual Vehicle Service. All rights reserved. | Listed on{' '}
              <a href="https://tradehub.directory/trades/dadwal-garage" className="text-[#D4AF37] hover:text-[#E5C158] transition-colors font-semibold">
                TradeHub
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <motion.a
        href="https://wa.me/447943025557"
        target="_blank"
        {...anim({ initial: { scale: 0 }, animate: { scale: 1 }, transition: { delay: 1, type: 'spring', stiffness: 260, damping: 20 } })}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50 group"
      >
        <Image
          src="/whatsapp-white.svg"
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <span className="absolute -top-12 right-0 bg-black border border-[#D4AF37]/30 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
