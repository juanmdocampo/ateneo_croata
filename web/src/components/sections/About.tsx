'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUpVariants } from '@/lib/animations'

const fadeUp = fadeUpVariants(0.12)

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="comunidad" className="bg-warm-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-start">

          {/* Left: eyebrow + title */}
          <div className="lg:col-span-4 lg:pr-12">
            <motion.p
              className="font-sans text-xs tracking-[0.2em] uppercase text-bordo mb-6"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t.about.eyebrow}
            </motion.p>
            <motion.h2
              className="font-serif font-light text-text leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t.about.title}
            </motion.h2>
          </div>

          {/* Right: text content */}
          <div className="lg:col-span-8 lg:border-l lg:border-warm-gray-2 lg:pl-16">
            <div className="flex flex-col gap-6">
              <motion.p
                className="font-sans text-base text-text-soft leading-relaxed"
                variants={fadeUp}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {t.about.text1}
              </motion.p>
              <motion.p
                className="font-sans text-base text-text-soft leading-relaxed"
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {t.about.text2}
              </motion.p>

              {/* Highlighted quote */}
              <motion.div
                className="my-4 border-l-4 border-bordo pl-6"
                variants={fadeUp}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p
                  className="font-serif text-text leading-tight"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                >
                  {t.about.highlight}
                </p>
              </motion.div>

              <motion.p
                className="font-sans text-base text-text-soft leading-relaxed"
                variants={fadeUp}
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {t.about.text3}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
