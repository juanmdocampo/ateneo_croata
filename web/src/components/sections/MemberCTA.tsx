'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function MemberCTA() {
  const { t } = useLanguage()

  return (
    <section
      id="socio"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #5a1a26 0%, #7a2e3b 50%, #6e2d3b 100%)' }} />

      {/* Circle image — desktop right side */}
      <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full overflow-hidden opacity-50 ring-1 ring-white/20 z-10">
        <Image
          src="/img/monumento_rosario_bandera.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
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

          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="font-serif font-light text-white leading-[1.05]"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              {t.member.title}
            </h2>
            <div className="md:hidden shrink-0 w-20 h-20 rounded-full overflow-hidden opacity-60 ring-1 ring-white/20">
              <Image src="/img/monumento_rosario_bandera.png" alt="" width={80} height={80} className="object-cover w-full h-full" />
            </div>
          </motion.div>

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
              href="https://docs.google.com/forms/d/e/1FAIpQLSdByHO-gEr2UfLfnX3y-vWhGoGhmaX_Dh_Y4rG1C1yaUsQKEQ/viewform"
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
