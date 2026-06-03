'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUpVariants } from '@/lib/animations'

const fadeUp = fadeUpVariants()

export default function IntroDictionary() {
  const { t, lang } = useLanguage()

  if (lang !== 'es') return null

  return (
    <section id="croatizar" className="relative bg-warm-white overflow-hidden">

      {/* Circle image — desktop right side */}
      <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full overflow-hidden opacity-30 z-0">
        <Image
          src="/img/Croatizar.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Dictionary block */}
      <div className="relative z-10 border-t border-warm-gray-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div>

            {/* Spanish entry */}
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

          {/* Closing quote */}
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
    </section>
  )
}
