'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { key: 'inicio' as const, href: '#inicio' },
  { key: 'croatizar' as const, href: '#croatizar' },
  { key: 'programas' as const, href: '#programas' },
  { key: 'recursos' as const, href: '#recursos' },
  { key: 'contacto' as const, href: '#contacto' },
]

export default function Navbar() {
  const { t, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 h-18 md:h-20 overflow-hidden transition-all duration-500 ${
          scrolled
            ? 'bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(61,61,61,0.08)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-18 md:h-20 overflow-hidden">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 shrink-0">
              <Image
                src="/logos/logo_oficial.png"
                alt="Ateneo Croata"
                width={160}
                height={60}
                className="h-32 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  className={`text-sm font-sans font-normal tracking-wide transition-colors duration-200 hover:text-bordo ${
                    scrolled ? 'text-text' : 'text-white/90'
                  }`}
                >
                  {t.nav[key]}
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className={`hidden md:flex items-center text-xs font-sans font-medium tracking-widest uppercase px-3 py-1.5 border rounded-full transition-all duration-200 ${
                  scrolled
                    ? 'border-text/20 text-text hover:border-bordo hover:text-bordo'
                    : 'border-white/40 text-white/80 hover:border-white hover:text-white'
                }`}
              >
                {t.nav.lang}
              </button>

              {/* CTA */}
              <a
                href="#socio"
                className="hidden md:inline-flex items-center gap-2 bg-bordo text-white text-sm font-sans font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-bordo-dark hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.nav.cta}
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden flex flex-col gap-1.5 p-2 ${
                  scrolled ? 'text-text' : 'text-white'
                }`}
                aria-label="Menú"
              >
                <motion.span
                  className="block w-6 h-px bg-current"
                  animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="block w-6 h-px bg-current"
                  animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="block w-6 h-px bg-current"
                  animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-warm-white flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="flex items-center justify-between h-18 px-6">
              <Image
                src="/logos/logo_oficial.png"
                alt="Ateneo Croata"
                width={160}
                height={60}
                className="h-16 w-auto object-contain"
              />
                            <button
                onClick={() => setMenuOpen(false)}
                className="flex flex-col gap-1.5 p-2 text-text"
                aria-label="Cerrar menú"
              >
                <motion.span className="block w-6 h-px bg-current" animate={{ rotate: 45, y: 5 }} />
                <motion.span className="block w-6 h-px bg-current" animate={{ opacity: 0 }} />
                <motion.span className="block w-6 h-px bg-current" animate={{ rotate: -45, y: -5 }} />
              </button>

            </div>
            <nav className="flex flex-col px-8 pt-8 gap-1 flex-1">
              {NAV_LINKS.map(({ key, href }, i) => (
                <motion.a
                  key={key}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl text-text py-3 border-b border-warm-gray-2 hover:text-bordo transition-colors"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: 'easeOut' }}
                >
                  {t.nav[key]}
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={() => { toggleLang(); setMenuOpen(false) }}
                  className="w-full text-center border border-text/20 text-text text-sm font-sans font-medium px-5 py-3 rounded-full hover:border-bordo hover:text-bordo transition-all"
                >
                  Cambiar a {t.nav.lang}
                </button>
                <a
                  href="#socio"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center bg-bordo text-white text-sm font-sans font-medium px-5 py-3 rounded-full hover:bg-bordo-dark transition-colors"
                >
                  {t.nav.cta}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
