'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUpVariants } from '@/lib/animations'

const PROGRAM_GRADIENTS = [
  'linear-gradient(135deg, #2a1520 0%, #5a2030 50%, #7a2e3b 100%)',
  'linear-gradient(135deg, #1a1520 0%, #2d2040 50%, #4a3560 100%)',
  'linear-gradient(135deg, #1a1a14 0%, #3a2e18 50%, #5a4520 100%)',
  'linear-gradient(135deg, #0f1a18 0%, #1a3028 50%, #2a4a38 100%)',
]

const PROGRAM_ICONS = [
  <svg key="kavu" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>,
  <svg key="skola" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>,
  <svg key="vino" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15A5 5 0 0 0 17 10V3H7v7a5 5 0 0 0 5 5z"/></svg>,
  <svg key="sveti" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="5" rx="2" ry="3"/><ellipse cx="12" cy="19" rx="2" ry="3"/><ellipse cx="5" cy="12" rx="3" ry="2"/><ellipse cx="19" cy="12" rx="3" ry="2"/></svg>,
]

const PROGRAM_IMAGES: Record<string, string[]> = {
  kavu: [
    '/img/kavu/kavu.jpeg',
    '/img/kavu/13b4939b-a9e1-4939-a9b8-91b5140b198e.JPG',
    '/img/kavu/IMG-20230526-WA0015.jpg',
    '/img/kavu/IMG-20231216-WA0026.jpg',
    '/img/kavu/IMG-20240806-WA0182.jpg',
    '/img/kavu/IMG-20240806-WA0183.jpg',
    '/img/kavu/IMG_9618.JPG',
  ],
  skola: [
    '/img/skola/mala_skola.png',
    '/img/skola/IMG_2406.jpg',
    '/img/skola/MALASKOLA(1).jpg',
    '/img/skola/MALASKOLA(2).jpg',
    '/img/skola/MALASKOLA(3).jpg',
    '/img/skola/MALASKOLA.jpeg',
    '/img/skola/MALASKOLA.jpg',
  ],
  vino: [
    '/img/vino/Rujnovino.jpg',
    '/img/vino/DSC_3032.JPG',
    '/img/vino/F0A09D4B-D997-405A-A4E3-EE7883196AA8.JPG',
    '/img/vino/IMG-20250309-WA0013.jpg',
    '/img/vino/WEB%20IMG-20241019-WA0000.jpg',
    '/img/vino/WEB%20IMG-20241019-WA0005.jpg',
    '/img/vino/WEB%20IMG-20241019-WA0008.jpg',
    '/img/vino/WEB%20IMG-20241019-WA0018.jpg',
    '/img/vino/WEB%20Rujnovino.jpg',
  ],
  sveti: [
    '/img/sveti/Svisveti.jpg',
    '/img/sveti/IMG-20241027-WA0011.jpg',
    '/img/sveti/IMG-20241027-WA0022.jpg',
    '/img/sveti/IMG-20241027-WA0026.jpg',
    '/img/sveti/IMG-20251104-WA0012.jpg',
    '/img/sveti/WEB%20IMG-20241027-WA0020.jpg',
    '/img/sveti/e9f4c63f-4252-48f3-91c7-397a0fdcb1ce.JPG',
  ],
}

const fadeUp = fadeUpVariants()

type Card = { id: string; name: string; text: string }

function ProgramCard({ card, index }: { card: Card; index: number }) {
  const images = PROGRAM_IMAGES[card.id] || []
  const slides: (string | null)[] = [null, ...images]
  const total = slides.length
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(p => (p - 1 + total) % total)
  const next = () => setCurrent(p => (p + 1) % total)

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -40) next()
    else if (info.offset.x > 40) prev()
  }

  return (
    <motion.article
      className="group relative rounded-2xl overflow-hidden cursor-default"
      style={{ minHeight: '380px' }}
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      drag={total > 1 ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.15}
      onDragEnd={handleDragEnd}
    >
      {/* Gradient (always behind) */}
      <div className="absolute inset-0" style={{ background: PROGRAM_GRADIENTS[index] }} />

      {/* Image slides */}
      <AnimatePresence mode="wait">
        {current > 0 && slides[current] && (
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={slides[current] as string} alt="" fill className="object-cover object-center" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)' }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover overlay — only on content slide */}
      {current === 0 && (
        <div className="absolute inset-0 bg-bordo/0 group-hover:bg-bordo/10 transition-colors duration-500" />
      )}

      {/* Content — slide 0 only */}
      {current === 0 && (
        <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-10" style={{ minHeight: '380px' }}>
          <div className="mb-5 w-10 h-10 rounded-full bg-bordo/80 flex items-center justify-center text-white">
            {PROGRAM_ICONS[index]}
          </div>
          <h3 className="font-serif text-white mb-2 leading-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            {card.name}
          </h3>
          <p className="font-sans text-sm text-white/70 leading-relaxed md:max-h-0 md:overflow-hidden md:group-hover:max-h-40 transition-all duration-500">
            {card.text}
          </p>
          <p className="font-sans text-sm text-white/70 leading-relaxed md:hidden mt-3">
            {card.text}
          </p>
        </div>
      )}

      {/* Arrows */}
      {total > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors duration-200"
            aria-label="anterior"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors duration-200"
            aria-label="siguiente"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {total > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); setCurrent(i) }}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'}`}
            />
          ))}
        </div>
      )}
    </motion.article>
  )
}

export default function Programs() {
  const { t } = useLanguage()

  return (
    <section id="programas" className="bg-warm-gray py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 lg:mb-16">
          <div>
            <motion.h2
              className="font-serif font-light text-text leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t.programs.title}
            </motion.h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {t.programs.cards.map((card, i) => (
            <ProgramCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
