'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUpVariantsLarge } from '@/lib/animations'

const fadeUp = fadeUpVariantsLarge()

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end pt-24 pb-20 md:pt-0 md:pb-28 overflow-hidden"
    >
      {/* Background: editorial gradient evoking the Adriatic coast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, #1a0f12 0%, #2a1520 30%, #3d2030 55%, #7a2e3b 100%)',
        }}
      />

      {/* Atmospheric overlay layers */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 70% 30%, rgba(255,220,180,0.15) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: 'linear-gradient(to top, rgba(26,15,18,0.6) 0%, transparent 100%)',
        }}
      />

      {/* Subtle texture noise */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            className="font-sans text-xs tracking-[0.25em] uppercase text-white/40 mb-8"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Rosario, Argentina
          </motion.p>

          {/* Title */}
          <motion.h1
            className="font-serif font-light text-white leading-[0.95] mb-10"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {t.hero.title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-serif italic text-white/70 mb-6 leading-relaxed"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Body text */}
          <motion.div
            className="font-sans text-sm text-white/55 leading-relaxed mb-10 max-w-md space-y-4"
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {t.hero.text.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <a
              href="#programas"
              className="inline-flex items-center gap-2 border border-white/40 text-white text-sm font-sans font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/70"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#socio"
              className="inline-flex items-center gap-2 bg-bordo text-white text-sm font-sans font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-bordo-dark hover:scale-[1.02]"
            >
              {t.hero.cta2}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="font-sans text-[10px] tracking-widest uppercase text-white/25 rotate-90 origin-center mb-6">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-white/20"
          animate={{ scaleY: [1, 0.4, 1], originY: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
