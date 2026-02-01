'use client'

import WhatsAppButton from '@/components/WhatsAppButton'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import WhyPerfect from '@/components/WhyPerfect'
import AreasServed from '@/components/AreasServed'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <WhyPerfect />
      <AreasServed />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
