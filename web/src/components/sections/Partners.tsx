'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { fadeUpVariants } from '@/lib/animations'

const fadeUp = fadeUpVariants(0.04, 0.5)

const PARTNERS = [
  { file: 'srednisnji-drzavni-ured.jpg', name: 'Središnji državni ured za Hrvate izvan RH' },
  { file: 'hrvatska-matica-iseljenika.jpg', name: 'Hrvatska Matica Iseljenika' },
  { file: 'jadran-asociacion.png', name: 'JADRAN Asociación Croata' },
  { file: 'croactivas.jpg', name: 'CROactivas' },
  { file: 'provincia-santa-fe.jpg', name: 'Provincia de Santa Fe' },
  { file: 'municipalidad-rosario.png', name: 'Municipalidad de Rosario' },
  { file: 'centro-cultural-croata-rosario.jpg', name: 'Centro Cultural Croata Rosario' },
  { file: 'studia-croatica.jpg', name: 'Studia Croatica' },
  { file: 'cacic.jpg', name: 'CACIC' },
  { file: 'imin.webp', name: 'Institut za Migracije i Narodnosti' },
  { file: 'sociedad-croata-villa-mugueta.jpg', name: 'Soc. Croata de Socorros Mutuos Villa Mugueta' },
  { file: 'asociacion-croata-venado-tuerto.jpg', name: 'Asoc. Croata Venado Tuerto y Sur de Santa Fe' },
  { file: 'car-venado-tuerto.png', name: 'C.A.R. Venado Tuerto' },
  { file: 'dom-restaurante.jpg', name: 'DOM Restaurante Croata' },
  { file: 'estudio-jerkovic.jpg', name: 'Estudio Jerkovic' },
  { file: 'udruga-solinjani.png', name: 'Udruga Solinjani Solin' },
  { file: 'croatas-los-arroyos.jpg', name: 'Croatas de Los Arroyos' },
  { file: 'croacia-shop.jpg', name: 'Croacia Shop' },
]

export default function Partners() {
  const { t } = useLanguage()

  return (
    <section className="bg-warm-white py-20 lg:py-28 border-t border-warm-gray-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            className="font-sans text-xs tracking-[0.2em] uppercase text-bordo mb-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.partners.eyebrow}
          </motion.p>
          <motion.h2
            className="font-serif font-light text-text"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t.partners.title}
          </motion.h2>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.file}
              className="flex items-center justify-center p-3 grayscale hover:grayscale-0 transition-all duration-400 opacity-60 hover:opacity-100"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              title={partner.name}
            >
              <Image
                src={`/partners/${partner.file}`}
                alt={partner.name}
                width={120}
                height={60}
                className="w-full h-12 object-contain"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
