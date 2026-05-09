import AreaPageTemplate from '../../components/areas/AreaPageTemplate'

const faqs = [
  { q: 'Do you cover all of Uxbridge?', a: 'Yes — we cover Uxbridge town centre, Hillingdon, Hayes, West Drayton, Yiewsley and surrounding areas. Call us if you are unsure about your postcode.' },
  { q: 'How quickly can you fit flooring in Uxbridge?', a: 'We offer same-week and next-day fitting slots in Uxbridge depending on availability. Contact us and we will find a time that suits you.' },
  { q: 'Do you offer a free quote in Uxbridge?', a: 'Yes — we visit your home in Uxbridge, measure up and provide a clear, itemised quote at no charge. No obligation to proceed.' },
  { q: 'What flooring types do you fit in Uxbridge?', a: 'We fit carpet, LVT, laminate, vinyl, carpet tiles and stair runners throughout Uxbridge. Supply and fit or fit-only service available.' },
  { q: 'Are you fully insured for work in Uxbridge?', a: 'Yes — all our fitters carry full public liability insurance. Every job in Uxbridge is fully covered.' },
]

export default function Uxbridge() {
  return (
    <AreaPageTemplate
      areaName="Uxbridge"
      intro="Expert carpet fitting and flooring installation across Uxbridge and the surrounding area. We cover Hillingdon, Hayes, West Drayton and beyond. Free measuring, same-week fitting available."
      paragraphs={[
        'We provide professional carpet fitting and flooring installation services throughout Uxbridge and the wider Hillingdon area. From carpet and LVT to laminate, vinyl and stair runners — we fit all flooring types to a high standard.',
        'Our free measuring service covers the whole of Uxbridge. We visit your home, take accurate measurements and provide a clear, itemised quote within 24 hours. No obligation, no pressure.',
        'We are a small, local team who take pride in every job. We work cleanly, arrive on time and do not leave until you are completely satisfied with the result.',
        'Contact us today to arrange your free measuring visit anywhere in Uxbridge.',
      ]}
      subAreas={['Uxbridge Town Centre', 'Hillingdon', 'Hayes', 'West Drayton', 'Yiewsley', 'Cowley', 'Ickenham', 'Ruislip']}
      faqs={faqs}
    />
  )
}
