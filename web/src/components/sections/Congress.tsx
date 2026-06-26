'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const IMAGES = [
  '/img/cultura/IMG_9721.JPG',
]
const slides: (string | null)[] = [null, ...IMAGES]
const total = slides.length

export default function Congress() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(p => (p - 1 + total) % total)
  const next = () => setCurrent(p => (p + 1) % total)
  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -40) next()
    else if (info.offset.x > 40) prev()
  }

  const dotActive = current > 0 ? 'w-4 h-1.5 bg-white' : 'w-4 h-1.5 bg-bordo'
  const dotInactive = current > 0 ? 'w-1.5 h-1.5 bg-white/40' : 'w-1.5 h-1.5 bg-bordo/30'

  return (
    <motion.section
      className="relative bg-warm-white overflow-hidden min-h-[60vh]"
      drag={current > 0 ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
    >
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

      {/* Content — slide 0 only */}
      {current === 0 && (
        <div className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">

              {/* Decorative number */}
              <div className="hidden lg:flex lg:col-span-2 items-center justify-start">
                <span
                  className="font-serif text-warm-gray-2 select-none leading-none"
                  style={{ fontSize: 'clamp(6rem, 12vw, 10rem)' }}
                >
                  ∞
                </span>
              </div>

              {/* Content */}
              <div className="lg:col-span-10 lg:pl-12 lg:border-l lg:border-warm-gray-2">
                <motion.p
                  className="font-sans text-xs tracking-[0.2em] uppercase text-bordo mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {t.congress.eyebrow}
                </motion.p>

                <motion.h2
                  className="font-serif font-light text-text leading-[1.1] mb-8"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {t.congress.title}
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.p
                    className="font-sans text-base text-text-soft leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {t.congress.text1}
                  </motion.p>
                  <motion.p
                    className="font-sans text-base text-text-soft leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {t.congress.text2}
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? dotActive : dotInactive}`}
          />
        ))}
      </div>
    </motion.section>
  )
}
