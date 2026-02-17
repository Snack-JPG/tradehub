"use client";


import {
  Wrench,
  Flame,
  Droplets,
  AlertTriangle,
  Thermometer,
  ShowerHead,
  Waves,
  Zap,
  CheckCircle,
  Home,
  Timer,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  const emergencyServices = [
    {
      icon: AlertTriangle,
      title: "Emergency Plumbing",
      description: "Burst pipes, major leaks, flooding — 24/7 emergency callouts",
      urgent: true,
    },
    {
      icon: Flame,
      title: "Emergency Heating Repairs",
      description: "No heating or hot water? Boiler breakdowns sorted fast",
      urgent: true,
    },
    {
      icon: Droplets,
      title: "Burst Pipe Repairs",
      description: "Fast response to burst pipes and water emergencies",
      urgent: true,
    },
    {
      icon: Timer,
      title: "Weekend Service",
      description: "Available Saturday and Sunday when others aren't",
      urgent: true,
    },
  ];

  const plumbingServices = [
    {
      icon: Wrench,
      title: "Leak Detection & Repair",
      description: "Find and fix leaks before they cause damage",
    },
    {
      icon: ShowerHead,
      title: "Bathroom Plumbing",
      description: "Toilets, taps, showers, and bathroom installations",
    },
    {
      icon: Waves,
      title: "Drain Unblocking",
      description: "Blocked drains and sinks cleared quickly",
    },
    {
      icon: Droplets,
      title: "Tap & Valve Repairs",
      description: "Dripping taps and faulty valves fixed",
    },
  ];

  const heatingServices = [
    {
      icon: Flame,
      title: "Boiler Repairs & Servicing",
      description: "Keep your boiler running efficiently and safely",
    },
    {
      icon: Thermometer,
      title: "Central Heating",
      description: "Installation, repairs, and maintenance",
    },
    {
      icon: Zap,
      title: "Radiator Services",
      description: "Installation, repairs, and power flushing",
    },
    {
      icon: ShieldCheck,
      title: "Gas Safety Certificates",
      description: "Landlord gas safety inspections and certificates",
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
            Plumbing & Heating Services
          </h2>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto">
            From emergency callouts to planned installations, we handle all your
            plumbing and heating needs in Solihull and surrounding areas
          </p>
        </div>

        {/* Emergency Services */}
        <div
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-emergency-500 rounded-full animate-pulse"></div>
            <h3 className="text-3xl font-bold text-navy-800">Emergency Services</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-emergency-50 to-emergency-100 border-2 border-emergency-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 bg-emergency-500 rounded-full animate-pulse"></div>
                </div>
                <div className="w-14 h-14 bg-emergency-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-navy-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Plumbing Services */}
        <div
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="w-8 h-8 text-navy-600" />
            <h3 className="text-3xl font-bold text-navy-800">Plumbing Services</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plumbingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-navy-200 rounded-xl p-6 hover:border-navy-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-navy-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy-600 transition-colors">
                  <service.icon className="w-7 h-7 text-navy-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-navy-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Heating Services */}
        <div
        >
          <div className="flex items-center gap-3 mb-8">
            <Flame className="w-8 h-8 text-emergency-500" />
            <h3 className="text-3xl font-bold text-navy-800">Heating Services</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heatingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-navy-200 rounded-xl p-6 hover:border-navy-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-navy-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy-600 transition-colors">
                  <service.icon className="w-7 h-7 text-navy-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-navy-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 text-center"
        >
          <div className="bg-navy-50 border-2 border-navy-200 rounded-2xl p-8">
            <Home className="w-12 h-12 text-navy-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-navy-800 mb-3">
              Not Sure What You Need?
            </h3>
            <p className="text-navy-600 mb-6 max-w-2xl mx-auto">
              Call Chris and describe the problem. He'll give you honest advice and
              a fair price — no call-out charge for quotes.
            </p>
            <a
              href="tel:07592507043"
              className="inline-flex items-center gap-2 bg-emergency-500 hover:bg-emergency-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-colors"
            >
              <CheckCircle className="w-5 h-5" />
              Call 07592 507043
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
