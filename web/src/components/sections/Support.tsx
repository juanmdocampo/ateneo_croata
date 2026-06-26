'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUpVariants } from '@/lib/animations'

const fadeUp = fadeUpVariants()

export default function Support() {
  const { t } = useLanguage()

  return (
    <section id="recursos" className="bg-warm-white py-24 lg:py-32">
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
    </section>
  )
}
