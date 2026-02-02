'use client';

import { Phone, Clock, MapPin, Star, CheckCircle, Shield, Wrench, Flame, AlertCircle, ThermometerSun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { name: "Boiler Installation & Replacement", icon: ThermometerSun },
    { name: "Boiler Repairs & Servicing", icon: Wrench },
    { name: "Central Heating Systems", icon: Flame },
    { name: "Gas Safety Certificates (CP12)", icon: Shield },
    { name: "Emergency Boiler Breakdowns", icon: AlertCircle },
    { name: "Radiator Installation & Repairs", icon: ThermometerSun },
    { name: "Power Flushing", icon: Wrench },
    { name: "Landlord Gas Safety Checks", icon: CheckCircle },
  ];

  const areas = [
    "Solihull", "Birmingham South", "Shirley", "Knowle",
    "Dorridge", "Hall Green", "Moseley", "Dickens Heath"
  ];

  const reviews = [
    {
      name: "R Kaur",
      rating: 5,
      text: "Outstanding service from CHM Heating. When our old boiler broke down, Craig came out immediately. His quote and thorough system check were paired with a detailed explanation of our options, which was far beyond the service offered by other companies. His expertise was impressive from the start.",
      date: "December 2025"
    },
    {
      name: "Jenna Hall",
      rating: 5,
      text: "Very impressed with the service provided by Craig. The work required was clearly explained and completed efficiently, with everything left very clean after! Wouldn't hesitate to recommend to anyone.",
      date: "December 2025"
    },
    {
      name: "Terry Clayson",
      rating: 5,
      text: "A brilliant job done, we were in a terrible mess and CHM Heating rushed out changed my boiler sorted out pipes to the radiator, came back and checked cleaned the initial setup. Very impressed with the emergency work completed with days of the problem arising 👍 CHM come highly recommended 👏👏👏",
      date: "December 2025"
    }
  ];

  return (
    <main className="min-h-screen bg-warmth-50">
      {/* Emergency Bar */}
      <div className="bg-warmth-500 text-white py-3 px-4 relative overflow-hidden">
        <div className="absolute inset-0 animate-pulse-glow bg-warmth-600 opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <p className="text-sm md:text-base font-semibold flex items-center justify-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <span>24/7 EMERGENCY CALLOUTS AVAILABLE</span>
            <AlertCircle className="w-5 h-5" />
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 warmth-gradient opacity-60"></div>
        <div className="absolute inset-0 radiator-lines"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className={`text-center space-y-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-block animate-fade-in-up">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Flame className="w-8 h-8 text-warmth-500" />
                <h1 className="text-5xl md:text-7xl font-display font-bold text-navy-900">
                  CHM Heating Services
                </h1>
              </div>
              <div className="flex items-center justify-center gap-2 text-warmth-600 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warmth-500 text-warmth-500" />
                ))}
                <span className="ml-2 text-navy-700 font-semibold">5.0 (35 reviews)</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-navy-700 font-medium max-w-3xl mx-auto animate-fade-in-up delay-200">
              Your trusted Gas Safe registered heating engineer in Solihull
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up delay-300">
              <a
                href="tel:07971131515"
                className="group bg-warmth-500 hover:bg-warmth-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                <span>07971 131515</span>
              </a>
              <a
                href="#contact"
                className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get a Quote
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-fade-in-up delay-400">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-warmth-200">
                <Clock className="w-10 h-10 text-warmth-500 mx-auto mb-3" />
                <h3 className="font-bold text-navy-900 mb-2">24/7 Emergency</h3>
                <p className="text-navy-700 text-sm">Immediate response for heating emergencies</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-warmth-200">
                <Shield className="w-10 h-10 text-warmth-500 mx-auto mb-3" />
                <h3 className="font-bold text-navy-900 mb-2">Gas Safe Registered</h3>
                <p className="text-navy-700 text-sm">Fully qualified and certified engineer</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-warmth-200">
                <Star className="w-10 h-10 text-warmth-500 mx-auto mb-3" />
                <h3 className="font-bold text-navy-900 mb-2">5★ Rated Service</h3>
                <p className="text-navy-700 text-sm">Trusted by 35+ happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              From routine maintenance to emergency repairs, Craig provides expert heating solutions across Solihull
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-warmth-50 hover:bg-warmth-100 p-6 rounded-lg border-2 border-warmth-200 hover:border-warmth-400 transition-all duration-300 hover:shadow-lg"
                >
                  <Icon className="w-8 h-8 text-warmth-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-navy-900">{service.name}</h3>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-warmth-500 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">Need Emergency Heating Repair?</h3>
            <p className="mb-6 text-warmth-50">Craig responds immediately to heating emergencies across Solihull</p>
            <a
              href="tel:07971131515"
              className="inline-flex items-center gap-2 bg-white text-warmth-600 px-8 py-3 rounded-lg font-bold hover:bg-warmth-50 transition-all duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now: 07971 131515
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 px-4 bg-warmth-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-warmth-500 text-warmth-500" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-navy-700">
              5.0 rating from 35+ reviews on Google
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-warmth-500 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warmth-500 text-warmth-500" />
                  ))}
                </div>
                <p className="text-navy-700 mb-4 leading-relaxed">"{review.text}"</p>
                <div className="border-t border-warmth-200 pt-4">
                  <p className="font-bold text-navy-900">{review.name}</p>
                  <p className="text-sm text-navy-600">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://maps.google.com/?cid=15642609012078738081"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-warmth-600 hover:text-warmth-700 font-semibold underline"
            >
              Read all 35 reviews on Google
              <Star className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 bg-navy-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Meet Craig
            </h2>
            <p className="text-lg text-warmth-100 leading-relaxed mb-8">
              As a Gas Safe registered engineer with years of experience, Craig takes pride in delivering thorough,
              professional heating services across Solihull and surrounding areas. Known for immediate emergency response,
              clear explanations, and leaving every job spotlessly clean, Craig has built a reputation for reliability
              and expertise that customers trust.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-warmth-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-warmth-400" />
                <span>Gas Safe Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-warmth-400" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-warmth-400" />
                <span>Clean & Tidy Work</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-warmth-400" />
                <span>No Hidden Costs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-warmth-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-4">
              Areas We Cover
            </h2>
            <p className="text-lg text-navy-700">
              Serving Solihull and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-warmth-50 border-2 border-warmth-200 p-4 rounded-lg text-center font-semibold text-navy-900 hover:bg-warmth-100 hover:border-warmth-400 transition-all duration-300"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 bg-warmth-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-navy-700 mb-8">
            Need a heating engineer in Solihull? Call Craig for immediate assistance or a free quote
          </p>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-navy-900 text-xl mb-3">Call or Text</h3>
                <a
                  href="tel:07971131515"
                  className="text-3xl font-bold text-warmth-600 hover:text-warmth-700 transition-colors"
                >
                  07971 131515
                </a>
              </div>

              <div className="border-t border-warmth-200 pt-6">
                <h3 className="font-bold text-navy-900 text-xl mb-3">Business Hours</h3>
                <p className="text-navy-700">
                  <span className="font-semibold">Regular Hours:</span> Monday - Friday, 8am - 6pm<br />
                  <span className="font-semibold text-warmth-600">Emergency Callouts:</span> Available 24/7
                </p>
              </div>

              <div className="border-t border-warmth-200 pt-6">
                <h3 className="font-bold text-navy-900 text-xl mb-3">Location</h3>
                <p className="text-navy-700">
                  Solihull B90 2RB<br />
                  Serving Solihull & Surrounding Areas
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-navy-900 text-white rounded-lg">
            <p className="text-lg">
              <strong>Emergency?</strong> Don't wait - Craig responds immediately to heating breakdowns
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                <Flame className="w-6 h-6 text-warmth-500" />
                CHM Heating Services
              </h3>
              <p className="text-warmth-100 text-sm">
                Your trusted Gas Safe registered heating engineer in Solihull
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-warmth-100 text-sm">
                <li><a href="#services" className="hover:text-warmth-400 transition-colors">Services</a></li>
                <li><a href="#reviews" className="hover:text-warmth-400 transition-colors">Reviews</a></li>
                <li><a href="#about" className="hover:text-warmth-400 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-warmth-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-warmth-100 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:07971131515" className="hover:text-warmth-400 transition-colors">07971 131515</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Solihull B90 2RB</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Gas Safe Registered</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-navy-700 pt-8 text-center text-warmth-200 text-sm">
            <p>&copy; {new Date().getFullYear()} CHM Heating Services Ltd. All rights reserved.</p>
            <p className="mt-2">
              Gas Safe Registered | Fully Insured | Trading Standards Approved
            </p>
          </div>
        </div>
      </footer>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "CHM Heating Services Ltd",
            "image": "https://chmheating.co.uk/logo.webp",
            "description": "24/7 Emergency Gas Engineer in Solihull. Boiler installation, repairs, servicing & Gas Safety Certificates.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Solihull",
              "addressLocality": "Solihull",
              "postalCode": "B90 2RB",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.4117",
              "longitude": "-1.7778"
            },
            "telephone": "+447971131515",
            "priceRange": "££",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "35"
            },
            "sameAs": [
              "https://maps.google.com/?cid=15642609012078738081"
            ]
          })
        }}
      />
    </main>
  );
}
