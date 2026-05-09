import AreaPageTemplate from '../../components/areas/AreaPageTemplate'

const faqs = [
  { q: 'Do you cover all of Hounslow?', a: 'Yes — we cover the whole of Hounslow including Chiswick, Brentford, Isleworth, Feltham, Heston and surrounding areas. Call us if you are unsure about your postcode.' },
  { q: 'How quickly can you fit flooring in Hounslow?', a: 'We offer same-week and next-day fitting slots in Hounslow depending on availability. Get in touch and we will find a convenient time.' },
  { q: 'Do you offer a free quote in Hounslow?', a: 'Yes — we visit your home in Hounslow, measure up and provide a clear, itemised quote at no charge. No obligation to proceed.' },
  { q: 'What flooring types do you fit in Hounslow?', a: 'We fit carpet, LVT, laminate, vinyl, carpet tiles and stair runners throughout Hounslow. Supply and fit or fit-only service available.' },
  { q: 'Are you fully insured for work in Hounslow?', a: 'Yes — all our fitters carry full public liability insurance. Every job in Hounslow is fully covered.' },
]

export default function Hounslow() {
  return (
    <AreaPageTemplate
      areaName="Hounslow"
      intro="Expert carpet fitting and flooring installation across Hounslow and the surrounding area. We cover Chiswick, Brentford, Isleworth, Feltham and beyond. Free measuring, same-week fitting available."
      paragraphs={[
        'We provide professional carpet fitting and flooring installation services throughout Hounslow. From a single room to a full house, we fit all types of flooring — carpet, LVT, laminate, vinyl, carpet tiles and stair runners.',
        'Our free measuring service covers the whole of Hounslow. We visit your home, take accurate measurements and provide a clear, itemised quote within 24 hours. No obligation, no pressure.',
        'We are based locally and know the area well. We work cleanly, arrive on time and take care of your home throughout the fitting process.',
        'Contact us today to arrange your free measuring visit anywhere in Hounslow.',
      ]}
      subAreas={['Hounslow Central', 'Chiswick', 'Brentford', 'Isleworth', 'Feltham', 'Heston', 'Cranford', 'Bedfont']}
      faqs={faqs}
    />
  )
}
