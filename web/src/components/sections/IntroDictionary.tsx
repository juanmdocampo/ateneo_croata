'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUpVariants } from '@/lib/animations'

const fadeUp = fadeUpVariants()

export default function IntroDictionary() {
  const { t } = useLanguage()

  return (
    <section id="croatizar" className="bg-warm-white">
      {/* Dictionary block */}
      <div className="bg-warm-white border-t border-warm-gray-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid md:grid-cols-2 gap-0 md:gap-12 lg:gap-20">

            {/* Spanish entry */}
            <motion.div
              className="py-10 md:py-0 border-b md:border-b-0 md:border-r border-warm-gray-2 md:pr-12 lg:pr-20"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-2">
                <span
                  className="font-serif text-text"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {t.dict.word1}
                </span>
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

            {/* Croatian entry */}
            <motion.div
              className="py-10 md:py-0 md:pl-0"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-2">
                <span
                  className="font-serif text-text"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {t.dict.word2}
                </span>
              </div>
              <p className="font-sans text-xs tracking-widest uppercase text-bordo mb-6">
                {t.dict.pos2}
              </p>
              <p className="font-sans text-base text-text leading-relaxed mb-6">
                {t.dict.def2}
              </p>
              <div className="border-l-2 border-bordo pl-4">
                <p className="font-sans text-xs text-text-muted uppercase tracking-wider mb-1">
                  {t.dict.etym2_label}
                </p>
                <p className="font-sans text-sm text-text-soft italic leading-relaxed">
                  {t.dict.etym2}
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
