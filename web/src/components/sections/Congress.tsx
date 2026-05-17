'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Congress() {
  const { t } = useLanguage()

  return (
    <section className="bg-warm-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">

          {/* Decorative number */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-start">
            <span
              className="font-serif text-warm-gray-2 select-none leading-none"
              style={{ fontSize: 'clamp(6rem, 12vw, 10rem)' }}
            >
              ∞
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-10 lg:pl-12 lg:border-l lg:border-warm-gray-2">
            <motion.p
              className="font-sans text-xs tracking-[0.2em] uppercase text-bordo mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t.congress.eyebrow}
            </motion.p>

            <motion.h2
              className="font-serif font-light text-text leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.congress.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.p
                className="font-sans text-base text-text-soft leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.congress.text1}
              </motion.p>
              <motion.p
                className="font-sans text-base text-text-soft leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t.congress.text2}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
