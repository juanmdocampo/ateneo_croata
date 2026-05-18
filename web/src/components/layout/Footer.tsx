'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const NAV_LINKS = [
  { key: 'inicio' as const, href: '#inicio' },
  { key: 'croatizar' as const, href: '#croatizar' },
  { key: 'programas' as const, href: '#programas' },
  { key: 'recursos' as const, href: '#recursos' },
  { key: 'contacto' as const, href: '#contacto' },
]

export default function Footer() {
  const { t, lang } = useLanguage()

  return (
    <footer id="contacto" className="bg-[#1a1a1a] text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Image
              src="/logos/logo_oficial.png"
              alt="Ateneo Croata"
              width={180}
              height={70}
              className="h-30 w-auto object-contain opacity-90"
            />
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/ateneocroata"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @ateneocroata
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white/30 mb-5">
              {t.footer.nav_title}
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.filter(({ key }) => !(key === 'croatizar' && lang === 'hr')).map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white/30 mb-5">
              {t.footer.contact_title}
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-white/60">
              <li>
                <a
                  href="mailto:ateneocroata@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  ateneocroata@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5493412021771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  +54 9 341 2021771
                </a>
              </li>
              <li className="text-white/40">{t.footer.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30 leading-relaxed max-w-sm">
            {t.footer.institutional}
          </p>
          <p className="font-sans text-xs text-white/25 whitespace-nowrap">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
