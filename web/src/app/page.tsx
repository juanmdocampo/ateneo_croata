import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import IntroDictionary from '@/components/sections/IntroDictionary'
import Programs from '@/components/sections/Programs'
import Support from '@/components/sections/Support'
import Congress from '@/components/sections/Congress'
import MemberCTA from '@/components/sections/MemberCTA'
import Partners from '@/components/sections/Partners'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroDictionary />
        <Programs />
        <Support />
        <Congress />
        <MemberCTA />
        <Partners />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
