'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUpVariants } from '@/lib/animations'

const fadeUp = fadeUpVariants()

const IMAGES = [
  '/img/croatizar/Croatizar.jpg',
]
const slides: (string | null)[] = [null, ...IMAGES]
const total = slides.length

export default function IntroDictionary() {
  const { t, lang } = useLanguage()
  const [current, setCurrent] = useState(0)

  if (lang !== 'es') return null

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
      id="croatizar"
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
        <>
          {/* Circle image — desktop */}
          <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full overflow-hidden opacity-30 z-0">
            <Image src="/img/Croatizar.jpg" alt="" fill className="object-cover object-center" />
          </div>

          <div className="relative z-10 border-t border-warm-gray-2">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
              <div>
                <motion.div
                  className="py-10 md:py-0"
                  variants={fadeUp}
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span
                      className="font-serif text-text"
                      style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                    >
                      {t.dict.word1}
                    </span>
                    <div className="md:hidden shrink-0 w-20 h-20 rounded-full overflow-hidden opacity-60">
                      <Image src="/img/Croatizar.jpg" alt="" width={80} height={80} className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <p className="font-sans text-xs tracking-widest uppercase text-bordo mb-6">
                    {t.dict.pos1}
                  </p>
                  <p className="font-sans text-base text-text leading-relaxed mb-6">
                    {t.dict.def1}
                  </p>
                  <div className="border-l-2 border-bordo pl-4">
                    <p className="font-sans text-xs text-text-muted uppercase tracking-wider mb-1">
                      {t.dict.etym1_label}
                    </p>
                    <p className="font-sans text-sm text-text-soft italic leading-relaxed">
                      {t.dict.etym1}
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-16 pt-12 border-t border-warm-gray-2 max-w-2xl"
                variants={fadeUp}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="font-serif italic text-xl text-text-soft leading-relaxed">
                  &ldquo;{t.dict.closing}&rdquo;
                </p>
              </motion.div>
            </div>
          </div>
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
