import Hero           from '../components/home/Hero'
import TrustStats     from '../components/home/TrustStats'
import ServicesPreview from '../components/home/ServicesPreview'
import WhyChooseUs    from '../components/home/WhyChooseUs'
import GalleryPreview from '../components/home/GalleryPreview'
import Testimonials   from '../components/home/Testimonials'
import AreasPreview   from '../components/home/AreasPreview'
import OurProcess     from '../components/home/OurProcess'
import FAQ            from '../components/home/FAQ'
import CTASection     from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero />

      {/* 2 — Animated trust stats */}
      <TrustStats />

      {/* 3 — Services */}
      <ServicesPreview />

      {/* 4 — Why Choose Us */}
      <WhyChooseUs />

      {/* 5 — Gallery preview */}
      <GalleryPreview />

      {/* 6 — Customer reviews */}
      <Testimonials />

      {/* 7 — Areas we cover */}
      <AreasPreview />

      {/* 8 — Our process */}
      <OurProcess />

      {/* 9 — FAQ */}
      <FAQ />

      {/* 10 — Final CTA */}
      <CTASection />
    </>
  )
}
