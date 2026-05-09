import AreaPageTemplate from '../../components/areas/AreaPageTemplate'

const faqs = [
  { q: 'Do you cover all of Ealing?', a: 'Yes — we cover the whole of the Ealing borough including Hanwell, Southall, Acton, Greenford, Perivale and surrounding areas. If you are unsure, just give us a call.' },
  { q: 'How quickly can you fit flooring in Ealing?', a: 'We offer same-week and next-day fitting slots in Ealing depending on availability. Contact us and we will find a time that suits you.' },
  { q: 'Do you offer a free quote in Ealing?', a: 'Yes — we visit your home in Ealing, measure up accurately and provide a clear, itemised quote at no charge. No obligation to proceed.' },
  { q: 'What flooring types do you fit in Ealing?', a: 'We fit all types of flooring in Ealing — carpet, LVT, laminate, vinyl, carpet tiles and stair runners. We can supply and fit, or fit flooring you have already purchased.' },
  { q: 'Are you fully insured for work in Ealing?', a: 'Yes — all our fitters carry full public liability insurance. Every job in Ealing is fully covered from start to finish.' },
]

export default function Ealing() {
  return (
    <AreaPageTemplate
      areaName="Ealing"
      intro="Professional carpet fitting and flooring installation across Ealing and the surrounding area. We cover the whole borough — from Hanwell and Southall to Acton and Greenford. Free measuring, honest advice and same-week fitting available."
      paragraphs={[
        'We provide professional carpet fitting and flooring installation services throughout Ealing. Whether you need a single bedroom carpeted or a full house fitted with LVT, laminate or vinyl, we handle every job with the same care and attention to detail.',
        'Our free measuring service means we visit your home in Ealing, take accurate measurements and provide a clear, itemised quote — usually within 24 hours. There is no obligation to proceed and no pressure to make a decision on the day.',
        'We are a small, local team and we take pride in every job we complete. We work cleanly, arrive on time and do not leave until you are completely satisfied with the result.',
        'Get in touch today to arrange your free measuring visit anywhere in Ealing.',
      ]}
      subAreas={['Ealing Broadway', 'Hanwell', 'Southall', 'Acton', 'Greenford', 'Perivale', 'Northolt', 'West Ealing']}
      faqs={faqs}
    />
  )
}
