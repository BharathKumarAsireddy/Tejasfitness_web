import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import About from '@/components/About'
import Results from '@/components/Results'
import InstagramSection from '@/components/InstagramSection'
import Pricing from '@/components/Pricing'
import CTASection from '@/components/CTASection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <About />
        <Results />
        <InstagramSection />
        <Pricing />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
