# ATENEO CROATA — Plan de Desarrollo Web

## Resumen del Proyecto

Landing page cultural premium para **Ateneo Croata**, asociación civil y plataforma cultural contemporánea de Rosario, Argentina.

- **Stack:** Next.js 15 (App Router) + TailwindCSS 4 + Framer Motion
- **Deploy:** Railway (con `output: standalone`)
- **Idioma base:** Español con elementos en croata, opcion cambiar idioma croata.
- **Estética:** Editorial europea, minimalismo mediterráneo, revista cultural contemporánea

---

## Paleta de Colores

| Rol         | Hex       | Descripción              |
|-------------|-----------|--------------------------|
| Principal   | `#7A2E3B` | Bordó profundo elegante  |
| Principal 2 | `#6E2D3B` | Bordó oscuro             |
| Fondo 1     | `#F4F2F1` | Blanco roto              |
| Fondo 2     | `#EFECEA` | Gris cálido claro        |
| Texto       | `#3D3D3D` | Gris oscuro suave        |
| Texto suave | `#6B6B6B` | Gris medio               |

---

## Tipografía

- **Títulos / Display:** Cormorant Garamond (serif elegante — Google Fonts)
- **Cuerpo / UI:** Inter (sans-serif limpia — Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700

---

## Estructura del Proyecto

```
ateneo-croata/                   ← carpeta del proyecto Next.js
├── public/
│   ├── images/                  ← imágenes copiadas de imagenes_web/
│   ├── logos/                   ← logos de partners copiados de logos/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← metadata SEO, fuentes, globals
│   │   ├── page.tsx             ← composición de todas las secciones
│   │   └── globals.css          ← estilos base, variables CSS
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx       ← navegación sticky minimalista
│       │   └── Footer.tsx       ← pie con contacto e info institucional
│       ├── sections/
│       │   ├── Hero.tsx         ← imagen full-screen + overlay + CTA
│       │   ├── Intro.tsx        ← editorial "Croatizar es acercar"
│       │   ├── Dictionary.tsx   ← bloque diccionario bilingüe
│       │   ├── About.tsx        ← qué es Ateneo Croata
│       │   ├── Programs.tsx     ← 4 programas en cards editoriales
│       │   ├── Support.tsx      ← red de apoyo
│       │   ├── Talks.tsx        ← charlas y difusión
│       │   ├── Congress.tsx     ← congresos e investigación
│       │   ├── MemberCTA.tsx    ← hacete socio
│       │   └── Partners.tsx     ← logos de acompañantes
│       └── ui/
│           ├── ProgramCard.tsx  ← card editorial reutilizable
│           └── SectionWrapper.tsx ← wrapper con espaciado editorial
├── tailwind.config.ts
├── next.config.ts               ← output: standalone para Railway
├── package.json
└── railway.toml                 ← config de deploy Railway
```

---

## Secciones — Detalle

### 1. NAVBAR
- Logo Ateneo Croata (`logo6.jpeg`) a la izquierda
- Links: Inicio · Sobre Ateneo · Programas · Comunidad · Recursos · Contacto
- Switch de idioma **ES / HR** (español ↔ croata) — texto de toda la página
- CTA button bordó: "Hacete Socio"
- Sticky con fondo translúcido (blur) al hacer scroll
- Mobile: hamburger menu
- Transparente sobre el Hero, blanco/blur en el resto

### 2. HERO
- Imagen cinematográfica a pantalla completa (de `imagenes_web/`)
- Overlay suave en bordó muy tenue
- Título: **ATENEO CROATA** (Cormorant Garamond, display size)
- Subtítulo: *Cultura, comunidad y conexión entre Argentina y Croacia*
- Texto introductorio
- 2 CTAs: "Explorar programas" (borde) + "Hacete socio" (bordó sólido)
- Scroll indicator animado
- Animación de entrada con fade-in staggered (Framer Motion)

### 3. INTRO — "Croatizar es acercar"
- Layout editorial 2 columnas (desktop) / 1 columna (mobile)
- Tipografía grande, mucho espacio
- Fondo `#EFECEA`
- Texto en serif con peso ligero

### 4. DICCIONARIO
- Diseño tipo entrada de diccionario tipográfico
- Bilingüe: español + croata
- Separador decorativo sutil (línea fina bordó)
- Fondo blanco roto
- Tipografía mixta: serif para la palabra, sans para definición

### 5. QUÉ ES ATENEO
- Columna central con texto amplio
- Frase destacada: *"No hace falta ser croata para ser parte."*
- Imagen lateral o de fondo tenue (opcional)

### 6. PROGRAMAS
- Grid 2×2 en desktop / stack en mobile
- Cada card: imagen de fondo, nombre en croata, subtítulo en español, descripción
- Hover: overlay suave + scale sutil
- Programas: IDEMO NA KAVU · MALA ŠKOLA · RUJNO VINO · SVI SVETI
- Imágenes asignadas desde `imagenes_web/`

### 7. RED DE APOYO
- Layout de lista elegante con ícono mínimo (guión o punto bordó)
- Beneficiarios: migrantes, estudiantes, becarios, asociaciones...
- Mención especial: traducciones oficiales gratuitas
- Fondo `#EFECEA`

### 8. CHARLAS Y DIFUSIÓN
- Lista de temáticas con diseño editorial
- Énfasis en Sudamérica como alcance

### 9. CONGRESOS E INVESTIGACIÓN
- Texto centrado, elegante
- Posibilidad de imagen editorial de fondo (baja opacidad)

### 10. HACETE SOCIO (CTA)
- Sección full-width en bordó `#7A2E3B`
- Texto en blanco
- CTA prominente: "Quiero sumarme"
- Link a formulario / WhatsApp

### 11. NOS ACOMPAÑAN
- Grid de logos minimalista con mucho aire
- Máx. 3-4 por fila en desktop
- Logos en escala de grises con hover a color
- Placeholders para logos sin imagen

### 12. FOOTER
- 3 columnas: Info · Contacto · Redes
- Texto institucional Središnji državni ured
- Copyright

---

## Assets a Usar

### logos/ → Variantes del logo de Ateneo Croata

Todos son variantes del mismo ícono (ventana gótica/arco adriático). Se usan según contexto:

| Archivo | Descripción | Uso |
|---------|-------------|-----|
| `logo.jpeg` | Ícono bordó solo, fondo blanco | Favicon |
| `logo1.jpeg` | Ícono outline negro, fondo blanco | — |
| `logo2.jpeg` | Ícono negro + texto, fondo blanco | Alternativa navbar |
| `logo3.jpeg` | Ícono negro sólido, fondo blanco | — |
| `logo4.jpeg` | Ícono bordó + texto, fondo negro | — |
| `logo5.jpeg` | Ícono blanco + texto, fondo oscuro | Footer dark |
| `logo6.jpeg` | Ícono bordó + texto, fondo blanco | **Navbar principal** |

### imagenes_web/ → Logos de partners "Nos Acompañan"

| Archivo | Organización |
|---------|-------------|
| `Copia de IMG_2288.JPG` | Središnji državni ured za Hrvate izvan RH |
| `Copia de IMG_2287.JPG` | Hrvatska Matica Iseljenika |
| `Copia de IMG_2289.PNG` | JADRAN Asociación Croata |
| `IMG_3432.JPG` | CROactivas — Red de Mujeres Croatas de Latinoamérica |
| `IMG_3431.JPG` | Provincia de Santa Fe |
| `1000160148.png` | Municipalidad de Rosario |
| `LOGO CCCROSARIO 6.jpg` | Centro Cultural Croata Rosario |
| `PHOTO-2025-07-24-11-47-40.jpg` | Sociedad Croata de Socorros Mutuos — Villa Mugueta |
| `PHOTO-2025-10-23-14-38-36.jpg` | DOM Restaurante Croata (Lo de Mirko) |
| `bef0ee81-f116-4fd1-8879-840705dced18.JPG` | Croacia Shop |
| `IMG-20231204-WA0021.jpg` | Studia Croatica |
| `1000071237.jpg` | Estudio Jerkovic |
| `1000163657.jpg` | CACIC — Cámara Argentino Croata de Industria y Comercio |
| `IMG_3433.PNG` | C.A.R. Venado Tuerto |
| `IMG_3299.JPG` | Asociación Croata Venado Tuerto y Sur de Santa Fe |
| `IMG_3297.PNG` | Udruga Solinjani Solin |
| `IMG_3434.WEBP` | IMIN — Institut za Migracije i Narodnosti |
| `1911823d-8d27-4cff-97cd-ac1376aacd11.jpg` | Croatas de Los Arroyos |
| `LOGO 1a.jpg` | Ateneo Croata (backup logo) |

### Fotos Hero y Secciones

No hay fotos documentales propias disponibles aún. Se usarán imágenes de **Unsplash** como placeholders editoriales (adriático, café, arquitectura, gastronomía) para ser reemplazadas con fotografías reales en el futuro.

---

## Dependencias

```json
{
  "next": "^15.x",
  "react": "^19.x",
  "tailwindcss": "^4.x",
  "framer-motion": "^12.x",
  "@next/font": "incluido en Next 15"
}
```

Fuentes vía `next/font/google`:
- `Cormorant_Garamond`
- `Inter`

### Switch de idioma ES / HR
- Sin librería externa (i18n simple con Context + JSON)
- Dos archivos: `locales/es.json` y `locales/hr.json`
- Todo el contenido de la página es traducible
- Switch visible en navbar: flag/texto "ES | HR"

---

## Animaciones (Framer Motion)

- **Hero:** fade-in staggered para título, subtítulo y CTAs
- **Secciones:** fade-up on scroll (IntersectionObserver / `whileInView`)
- **Program Cards:** scale sutil en hover
- **Navbar:** background blur al hacer scroll
- **CTA buttons:** scale micro en hover/press
- **Diccionario:** fade-in secuencial de cada entrada

Principio: *todas las animaciones deben ser sutiles, nunca llamativas.*

---

## SEO Avanzado

### 1. Metadata API completa (`app/layout.tsx`)
```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://ateneocroata.com.ar'),
  title: {
    default: 'Ateneo Croata | Cultura, comunidad y conexión',
    template: '%s | Ateneo Croata',
  },
  description: 'Asociación civil y plataforma cultural contemporánea de Rosario. Conectamos personas con la cultura croata desde un lugar abierto, contemporáneo y humano.',
  keywords: ['Ateneo Croata', 'cultura croata', 'Rosario', 'Argentina', 'Croacia', 'diáspora croata', 'croatizar', 'comunidad croata', 'inmigración croata'],
  authors: [{ name: 'Ateneo Croata' }],
  creator: 'Ateneo Croata',
  publisher: 'Ateneo Croata',
  category: 'culture',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  // Open Graph completo
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    alternateLocale: 'hr_HR',
    url: 'https://ateneocroata.com.ar',
    siteName: 'Ateneo Croata',
    title: 'Ateneo Croata | Cultura, comunidad y conexión',
    description: 'Plataforma cultural contemporánea de Rosario que conecta personas con la cultura croata.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ateneo Croata' }],
  },
  // Twitter / X Card
  twitter: {
    card: 'summary_large_image',
    title: 'Ateneo Croata | Cultura, comunidad y conexión',
    description: 'Plataforma cultural contemporánea de Rosario que conecta personas con la cultura croata.',
    images: ['/og-image.jpg'],
    site: '@ateneocroata',
    creator: '@ateneocroata',
  },
  // Canonicals e idiomas alternativos
  alternates: {
    canonical: 'https://ateneocroata.com.ar',
    languages: {
      'es-AR': 'https://ateneocroata.com.ar',
      'hr-HR': 'https://ateneocroata.com.ar?lang=hr',
    },
  },
  // Favicons / icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  themeColor: '#7A2E3B',
}
```

### 2. JSON-LD Structured Data
Tres schemas embebidos como `<script type="application/ld+json">`:

**Organization**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ateneo Croata",
  "url": "https://ateneocroata.com.ar",
  "logo": "https://ateneocroata.com.ar/logos/logo6.jpeg",
  "description": "Asociación civil y plataforma cultural contemporánea de Rosario...",
  "address": { "@type": "PostalAddress", "addressLocality": "Rosario", "addressCountry": "AR" },
  "contactPoint": { "@type": "ContactPoint", "telephone": "+54-9-341-2021771", "contactType": "customer service" },
  "sameAs": ["https://www.instagram.com/ateneocroata"]
}
```

**WebSite** (habilita SearchBox en Google)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ateneo Croata",
  "url": "https://ateneocroata.com.ar"
}
```

**CulturalOrganization** (schema específico para organizaciones culturales)
```json
{
  "@context": "https://schema.org",
  "@type": "CulturalOrganization",
  "name": "Ateneo Croata",
  "foundingLocation": { "@type": "Place", "name": "Rosario, Argentina" },
  "knowsLanguage": ["es", "hr"],
  "event": [/* programas como Events */]
}
```

### 3. `sitemap.ts` (auto-generado por Next.js)
```ts
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://ateneocroata.com.ar', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://ateneocroata.com.ar#programas', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://ateneocroata.com.ar#comunidad', changeFrequency: 'monthly', priority: 0.7 },
  ]
}
```

### 4. `robots.ts`
```ts
// app/robots.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://ateneocroata.com.ar/sitemap.xml',
  }
}
```

### 5. `manifest.json` (PWA básico)
```json
{
  "name": "Ateneo Croata",
  "short_name": "Ateneo Croata",
  "description": "Cultura, comunidad y conexión entre Argentina y Croacia.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F4F2F1",
  "theme_color": "#7A2E3B",
  "icons": [...]
}
```

### 6. Performance SEO
- `next/image` con `priority` en imagen Hero (LCP optimizado)
- `preconnect` a fonts.googleapis.com y fonts.gstatic.com
- Fuentes con `display: swap`
- Headers de caché configurados en `next.config.ts`
- OG image (`/og-image.jpg`) de 1200×630px generada estáticamente

---

## Deploy en Railway

```toml
# railway.toml
[build]
builder = "nixpacks"

[deploy]
startCommand = "node .next/standalone/server.js"
```

```js
// next.config.ts
const nextConfig = {
  output: 'standalone',
}
```

---

## Fases de Desarrollo

### Fase 1 — Setup y estructura base
- [ ] Inicializar proyecto Next.js con TailwindCSS
- [ ] Configurar fuentes Google (Cormorant + Inter)
- [ ] Definir tokens de color en Tailwind config
- [ ] Copiar assets a `public/`
- [ ] Crear `SectionWrapper` y layout base

### Fase 2 — Secciones principales
- [ ] Navbar
- [ ] Hero
- [ ] Intro (Croatizar)
- [ ] Diccionario
- [ ] Qué es Ateneo

### Fase 3 — Programas y comunidad
- [ ] Componente ProgramCard
- [ ] Sección Programas (4 cards)
- [ ] Red de Apoyo
- [ ] Charlas y Difusión
- [ ] Congresos e Investigación

### Fase 4 — Cierre y footer
- [ ] Sección Hacete Socio (CTA)
- [ ] Nos Acompañan (logos grid)
- [ ] Footer completo

### Fase 5 — Polish y deploy
- [ ] Animaciones Framer Motion
- [ ] Responsive final (mobile/tablet/desktop)
- [ ] SEO metadata
- [ ] Optimización imágenes (next/image)
- [ ] railway.toml + next.config standalone
- [ ] Test de performance

---

## Convenciones de Código

- Componentes: PascalCase, un archivo por componente
- No comentarios obvios, solo donde el WHY no es evidente
- Tailwind clases: mobile-first (`sm:` `md:` `lg:`)
- Imágenes: siempre con `next/image` para optimización
- Sin estados globales innecesarios (todo es estático/presentacional)

---

*Plan creado: 2026-05-17*
*Proyecto: Ateneo Croata Landing Page v1.0*
