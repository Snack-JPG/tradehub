"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import EmergencyBanner from "@/components/EmergencyBanner";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import AreasServed from "@/components/AreasServed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <EmergencyBanner />
      <Services />
      <Reviews />
      <About />
      <AreasServed />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
