'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import es from '@/locales/es.json'
import hr from '@/locales/hr.json'

type Lang = 'es' | 'hr'
type Translations = typeof es

interface LanguageContextType {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const translations: Record<Lang, Translations> = { es, hr }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const toggleLang = () => setLang((l) => (l === 'es' ? 'hr' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
