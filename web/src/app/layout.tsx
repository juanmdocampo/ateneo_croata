import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#7A2E3B',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ateneocroata.com.ar'),
  title: {
    default: 'Ateneo Croata | Cultura, comunidad y conexión',
    template: '%s | Ateneo Croata',
  },
  description:
    'Asociación civil y plataforma cultural contemporánea de Rosario, Argentina. Conectamos personas con la cultura croata desde un lugar abierto, contemporáneo y humano.',
  keywords: [
    'Ateneo Croata',
    'cultura croata',
    'Rosario',
    'Argentina',
    'Croacia',
    'diáspora croata',
    'croatizar',
    'comunidad croata',
    'inmigración croata',
    'Idemo na kavu',
    'Mala škola',
    'Svi Sveti',
  ],
  authors: [{ name: 'Ateneo Croata', url: 'https://ateneocroata.com.ar' }],
  creator: 'Ateneo Croata',
  publisher: 'Ateneo Croata',
  category: 'culture',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    alternateLocale: ['hr_HR'],
    url: 'https://ateneocroata.com.ar',
    siteName: 'Ateneo Croata',
    title: 'Ateneo Croata | Cultura, comunidad y conexión',
    description:
      'Plataforma cultural contemporánea de Rosario que conecta personas con la cultura croata.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ateneo Croata — Cultura, comunidad y conexión entre Argentina y Croacia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ateneo Croata | Cultura, comunidad y conexión',
    description:
      'Plataforma cultural contemporánea de Rosario que conecta personas con la cultura croata.',
    images: ['/og-image.jpg'],
    site: '@ateneocroata',
    creator: '@ateneocroata',
  },
  alternates: {
    canonical: 'https://ateneocroata.com.ar',
    languages: {
      'es-AR': 'https://ateneocroata.com.ar',
      'hr-HR': 'https://ateneocroata.com.ar?lang=hr',
    },
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/logos/logo-icon-bordo.jpeg', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://ateneocroata.com.ar/#organization',
      name: 'Ateneo Croata',
      url: 'https://ateneocroata.com.ar',
      logo: 'https://ateneocroata.com.ar/logos/logo-bordo-text.jpeg',
      description:
        'Asociación civil y plataforma cultural contemporánea de Rosario, Argentina.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rosario',
        addressRegion: 'Santa Fe',
        addressCountry: 'AR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+54-9-341-2021771',
        contactType: 'customer service',
        availableLanguage: ['Spanish', 'Croatian'],
      },
      sameAs: ['https://www.instagram.com/ateneocroata'],
      email: 'ateneocroata@gmail.com',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://ateneocroata.com.ar/#website',
      url: 'https://ateneocroata.com.ar',
      name: 'Ateneo Croata',
      publisher: { '@id': 'https://ateneocroata.com.ar/#organization' },
      inLanguage: ['es-AR', 'hr-HR'],
    },
    {
      '@type': 'CulturalOrganization',
      '@id': 'https://ateneocroata.com.ar/#cultural-org',
      name: 'Ateneo Croata',
      foundingLocation: { '@type': 'Place', name: 'Rosario, Argentina' },
      knowsLanguage: ['es', 'hr'],
      areaServed: { '@type': 'Place', name: 'Sudamérica' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
