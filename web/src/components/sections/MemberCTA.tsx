'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function MemberCTA() {
  const { t } = useLanguage()

  return (
    <section
      id="socio"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #5a1a26 0%, #7a2e3b 50%, #6e2d3b 100%)',
      }}
    >
      {/* Decorative background element */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.p
            className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.member.eyebrow}
          </motion.p>

          <motion.h2
            className="font-serif font-light text-white leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t.member.title}
          </motion.h2>

          <motion.p
            className="font-sans text-base text-white/60 leading-relaxed mb-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.member.text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href={`https://wa.me/5493412021771?text=${encodeURIComponent('Hola, quiero sumarme a Ateneo Croata')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-bordo text-sm font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
            >
              {t.member.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
