'use client'

import { Phone, MapPin, Star } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const areas = [
    'Kings Heath',
    'Birmingham',
    'Hall Green',
    'Moseley',
    'Solihull',
    'Stirchley',
    'Harborne',
    'Edgbaston',
  ]

  return (
    <footer className="bg-plaster-900 text-plaster-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h3 className="font-display text-3xl font-bold text-plaster-50 mb-1">A.B</h3>
              <p className="font-display text-lg text-plaster-300">Plastering & Rendering</p>
            </div>
            <p className="text-plaster-400 text-sm leading-relaxed">
              Expert plastering and rendering services in Birmingham. Perfect 5-star rating across 64 Google reviews.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-plaster-50 mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:07864670314"
                className="flex items-center gap-2 text-plaster-300 hover:text-terracotta-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                07864 670314
              </a>
              <a
                href="https://wa.me/447864670314"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-plaster-300 hover:text-green-400 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <div className="flex items-start gap-2 text-plaster-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Kings Heath, Birmingham B14</span>
              </div>
            </div>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="font-semibold text-plaster-50 mb-4">Areas Served</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {areas.map((area) => (
                <div key={area} className="text-plaster-400">
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Reviews & TradeHub */}
          <div>
            <h4 className="font-semibold text-plaster-50 mb-4">Trusted Quality</h4>
            <div className="space-y-4">
              {/* Google Reviews Badge */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-plaster-50 font-semibold text-sm mb-1">5.0/5.0 on Google</p>
                <p className="text-plaster-400 text-xs">64 Reviews</p>
              </div>

              {/* TradeHub Link */}
              <a
                href="https://tradehub.example.com"
                className="inline-flex items-center gap-2 text-sm text-plaster-300 hover:text-terracotta-400 transition-colors"
              >
                Listed on TradeHub →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-plaster-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-plaster-400">
          <p>
            © {currentYear} A.B Plastering & Rendering. All rights reserved.
          </p>
          <p>
            Proudly serving Birmingham and surrounding areas
          </p>
        </div>
      </div>
    </footer>
  )
}
