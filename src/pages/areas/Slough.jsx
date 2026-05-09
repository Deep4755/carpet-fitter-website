import AreaPageTemplate from '../../components/areas/AreaPageTemplate'

const faqs = [
  { q: 'Do you cover all of Slough?', a: 'Yes — we cover Slough town centre, Langley, Burnham, Cippenham, Colnbrook and surrounding areas. Call us if you are unsure about your postcode.' },
  { q: 'How quickly can you fit flooring in Slough?', a: 'We offer same-week and next-day fitting slots in Slough depending on availability. Get in touch and we will arrange a convenient time.' },
  { q: 'Do you offer a free quote in Slough?', a: 'Yes — we visit your home in Slough, measure up accurately and provide a clear, itemised quote at no charge. No obligation to proceed.' },
  { q: 'What flooring types do you fit in Slough?', a: 'We fit carpet, LVT, laminate, vinyl, carpet tiles and stair runners throughout Slough. Supply and fit or fit-only service available.' },
  { q: 'Are you fully insured for work in Slough?', a: 'Yes — all our fitters carry full public liability insurance. Every job in Slough is fully covered from start to finish.' },
]

export default function Slough() {
  return (
    <AreaPageTemplate
      areaName="Slough"
      intro="Professional carpet fitting and flooring installation across Slough and surrounding areas. We cover Langley, Burnham, Cippenham and beyond. Free measuring visit, same-week fitting available."
      paragraphs={[
        'We provide professional carpet fitting and flooring installation services throughout Slough. Whether you need carpet in a bedroom, LVT in a kitchen or laminate throughout your living areas, we handle every job to a high standard.',
        'Our free measuring service covers the whole of Slough. We visit your home, take accurate measurements and provide a clear, itemised quote within 24 hours. No obligation, no pressure.',
        'We are a small, dedicated team and we take pride in every job. We work cleanly, arrive on time and do not leave until you are completely satisfied.',
        'Get in touch today to arrange your free measuring visit anywhere in Slough.',
      ]}
      subAreas={['Slough Town Centre', 'Langley', 'Burnham', 'Cippenham', 'Colnbrook', 'Britwell', 'Chalvey', 'Farnham Royal']}
      faqs={faqs}
    />
  )
}
