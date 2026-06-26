'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUpVariantsLarge } from '@/lib/animations'

const fadeUp = fadeUpVariantsLarge()

const IMAGES = [
  '/img/sobre_nosotros/2-IMG-20231123-WA0009.jpg',
  '/img/sobre_nosotros/3-IMG-20240407-WA0001.jpg',
  '/img/sobre_nosotros/4-MALASKOLA.jpg',
]
const slides: (string | null)[] = [null, ...IMAGES]
const total = slides.length

export default function Hero() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(p => (p - 1 + total) % total)
  const next = () => setCurrent(p => (p + 1) % total)
  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -40) next()
    else if (info.offset.x > 40) prev()
  }

  return (
    <motion.section
      id="inicio"
      className="relative min-h-[45vh] md:min-h-[75vh] flex items-end pt-24 pb-20 md:pt-0 md:pb-28 overflow-hidden"
      drag={current > 0 ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, #1a0f12 0%, #2a1520 30%, #3d2030 55%, #7a2e3b 100%)' }}
      />

      {/* Image slides */}
      <AnimatePresence mode="wait">
        {current > 0 && slides[current] && (
          <motion.div
            key={current}
            className="absolute inset-0 z-[5]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={slides[current] as string} alt="" fill className="object-contain object-center" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 z-[2]"
        style={{ background: 'linear-gradient(to top, rgba(26,15,18,0.6) 0%, transparent 100%)' }}
      />

      {/* Subtle texture noise */}
      <div
        className="absolute inset-0 opacity-[0.03] z-[8]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Content — slide 0 only */}
      {current === 0 && (
        <>
          {/* Circle image — desktop */}
          <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full overflow-hidden opacity-60 ring-1 ring-white/20 z-10">
            <Image src="/img/monumento_rosario_gente.jpg" alt="" fill className="object-cover object-center" priority />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <motion.div className="flex items-center gap-4 mb-10" custom={0} variants={fadeUp} initial="hidden" animate="visible">
                <h1
                  className="font-serif font-light text-white leading-[0.95]"
                  style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
                >
                  {t.hero.title.split('\n').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h1>
                <div className="md:hidden shrink-0 w-20 h-20 rounded-full overflow-hidden opacity-70 ring-1 ring-white/20">
                  <Image src="/img/monumento_rosario_gente.jpg" alt="" width={80} height={80} className="object-cover w-full h-full" />
                </div>
              </motion.div>

              <motion.div
                className="font-sans text-sm text-white/55 leading-relaxed mb-10 max-w-md space-y-4"
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                {t.hero.text.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                custom={2}
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
            className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 z-10"
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
        </>
      )}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors duration-200"
        aria-label="anterior"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors duration-200"
        aria-label="siguiente"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'}`}
          />
        ))}
      </div>
    </motion.section>
  )
}
