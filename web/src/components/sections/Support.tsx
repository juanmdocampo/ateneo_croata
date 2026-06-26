'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUpVariants } from '@/lib/animations'

const fadeUp = fadeUpVariants()

const IMAGES = [
  '/img/red_de_apoyo/5b552aab-3648-4d6a-81ae-a0adbf06daa6.JPG',
  '/img/red_de_apoyo/Copia%20de%204-vlcsnap-2025-10-15-11h28m50s855.png',
  '/img/red_de_apoyo/IMG-20231216-WA0015.jpg',
  '/img/red_de_apoyo/ba06532c-e546-45b2-a314-f76e324bedfb.JPG',
]
const slides: (string | null)[] = [null, ...IMAGES]
const total = slides.length

export default function Support() {
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
      id="recursos"
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
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 lg:items-center">

              {/* Left */}
              <div className="lg:col-span-5 lg:pr-16">
                <motion.p
                  className="font-sans text-xs tracking-[0.2em] uppercase text-bordo mb-6"
                  variants={fadeUp}
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {t.support.eyebrow}
                </motion.p>
                <motion.h2
                  className="font-serif font-light text-text leading-[1.1] mb-6"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}
                  variants={fadeUp}
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {t.support.title}
                </motion.h2>
                <motion.p
                  className="font-sans text-base text-text-soft leading-relaxed"
                  variants={fadeUp}
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {t.support.text}
                </motion.p>
              </div>

              {/* Right */}
              <div className="lg:col-span-7 lg:border-l lg:border-warm-gray-2 lg:pl-16">
                <motion.div
                  className="flex flex-col gap-4"
                  variants={fadeUp}
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="font-sans text-sm text-text-soft leading-relaxed">
                    {t.support.extra}
                  </p>
                  <div className="flex items-start gap-3 bg-warm-gray rounded-xl p-5">
                    <span className="w-1 h-full min-h-full bg-bordo rounded-full shrink-0 self-stretch" style={{ minWidth: '4px', maxWidth: '4px' }} />
                    <p className="font-sans text-sm text-text leading-relaxed">
                      {t.support.translations}
                    </p>
                  </div>
                </motion.div>
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
