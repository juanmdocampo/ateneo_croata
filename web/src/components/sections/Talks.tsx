'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUpVariants } from '@/lib/animations'

const fadeUp = fadeUpVariants()

export default function Talks() {
  const { t } = useLanguage()

  return (
    <section className="bg-warm-gray py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left: text */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-bordo mb-6">
              {t.talks.eyebrow}
            </p>
            <h2
              className="font-serif font-light text-text leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
            >
              {t.talks.title}
            </h2>
            <p className="font-sans text-base text-text-soft leading-relaxed">
              {t.talks.text}
            </p>
          </motion.div>

          {/* Right: topic list */}
          <motion.div
            className="flex flex-col"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t.talks.list.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-5 py-5 border-b border-warm-gray-2 group"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="font-serif text-3xl text-warm-gray-2 group-hover:text-bordo transition-colors duration-300 shrink-0 w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-sans text-sm text-text leading-relaxed">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
