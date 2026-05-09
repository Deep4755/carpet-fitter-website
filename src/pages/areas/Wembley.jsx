import AreaPageTemplate from '../../components/areas/AreaPageTemplate'

const faqs = [
  { q: 'Do you cover all of Wembley?', a: 'Yes — we cover Wembley, Harrow, Sudbury, Alperton, Tokyngton and surrounding areas. Call us if you are unsure about your postcode.' },
  { q: 'How quickly can you fit flooring in Wembley?', a: 'We offer same-week and next-day fitting slots in Wembley depending on availability. Get in touch and we will arrange a convenient time.' },
  { q: 'Do you offer a free quote in Wembley?', a: 'Yes — we visit your home in Wembley, measure up accurately and provide a clear, itemised quote at no charge. No obligation to proceed.' },
  { q: 'What flooring types do you fit in Wembley?', a: 'We fit carpet, LVT, laminate, vinyl, carpet tiles and stair runners throughout Wembley. Supply and fit or fit-only service available.' },
  { q: 'Are you fully insured for work in Wembley?', a: 'Yes — all our fitters carry full public liability insurance. Every job in Wembley is fully covered from start to finish.' },
]

export default function Wembley() {
  return (
    <AreaPageTemplate
      areaName="Wembley"
      intro="Professional carpet fitting and flooring installation across Wembley and surrounding areas. We cover Harrow, Sudbury, Alperton and beyond. Free measuring visit, same-week fitting available."
      paragraphs={[
        'We provide professional carpet fitting and flooring installation services throughout Wembley and the surrounding area. Whether you need carpet, LVT, laminate, vinyl or a stair runner, we fit all flooring types to a consistently high standard.',
        'Our free measuring service covers the whole of Wembley. We visit your home, take accurate measurements and provide a clear, itemised quote within 24 hours. No obligation, no pressure.',
        'We are a small, dedicated team and we take pride in every job we complete. We work cleanly, arrive on time and do not leave until you are completely satisfied.',
        'Get in touch today to arrange your free measuring visit anywhere in Wembley.',
      ]}
      subAreas={['Wembley Central', 'Wembley Park', 'Harrow', 'Sudbury', 'Alperton', 'Tokyngton', 'Preston', 'Kenton']}
      faqs={faqs}
    />
  )
}
