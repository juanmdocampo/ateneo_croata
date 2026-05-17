import type { Variants } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

export const fadeUpVariants = (staggerDelay = 0.1, duration = 0.7): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * staggerDelay, duration, ease },
  }),
})

export const fadeUpVariantsLarge = (): Variants => ({
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease },
  }),
})

export const defaultEase = ease
