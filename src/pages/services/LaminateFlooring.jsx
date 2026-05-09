import ServiceHero     from '../../components/services/ServiceHero'
import ServiceIntro    from '../../components/services/ServiceIntro'
import ServiceBenefits from '../../components/services/ServiceBenefits'
import ServiceWhyUs    from '../../components/services/ServiceWhyUs'
import ServiceProcess  from '../../components/services/ServiceProcess'
import ServiceGallery  from '../../components/services/ServiceGallery'
import ServiceAreas    from '../../components/services/ServiceAreas'
import ServiceFAQ      from '../../components/services/ServiceFAQ'
import ServiceCTA      from '../../components/services/ServiceCTA'

const Icon = ({ d }) => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
)

const benefits = [
  {
    title: 'Wide Range of Styles',
    desc: 'From light Scandinavian oak to dark walnut and stone effects — laminate comes in hundreds of designs to suit any interior.',
    icon: <Icon d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
  },
  {
    title: 'Hard-Wearing Surface',
    desc: 'The AC rating system grades laminate for durability. We help you choose the right grade for your room — higher traffic areas need a tougher wear layer.',
    icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: 'Quick Installation',
    desc: 'Most laminate uses a click-lock system that goes down quickly. A room can often be completed in a morning, with minimal disruption to your day.',
    icon: <Icon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Easy to Clean',
    desc: 'Laminate is straightforward to maintain — sweep regularly and mop with a slightly damp cloth. Avoid soaking it with water, which can cause swelling over time.',
    icon: <Icon d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
  },
  {
    title: 'Good Value for Money',
    desc: 'Laminate gives you the look of real wood at a fraction of the cost. For large areas or rental properties, it is often the most sensible choice.',
    icon: <Icon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Neat, Professional Finish',
    desc: 'The difference between a DIY laminate job and a professionally fitted one is noticeable. We ensure tight joins, straight lines and properly fitted skirting and beading.',
    icon: <Icon d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />,
  },
]

const faqs = [
  {
    q: 'How long does laminate flooring installation take?',
    a: 'A standard room typically takes three to five hours. Larger areas or rooms with complex layouts may take longer. We will give you a clear estimate when we visit.',
  },
  {
    q: 'Can laminate be fitted over existing flooring?',
    a: 'In some cases, yes. It depends on the height and condition of the existing floor. We assess this during our free measuring visit and advise you on the best approach.',
  },
  {
    q: 'Is laminate suitable for kitchens and bathrooms?',
    a: 'Standard laminate is not ideal for wet areas as it can swell if water gets into the joins. There are moisture-resistant options available — we can advise on the best choice for your room.',
  },
  {
    q: 'What is the difference between laminate and LVT?',
    a: 'Laminate has a wood-fibre core with a photographic layer on top. LVT is fully synthetic and 100% waterproof. LVT is generally better for wet areas; laminate is often better value for dry living spaces.',
  },
  {
    q: 'Do you move furniture before fitting?',
    a: 'Yes — we move standard furniture as part of the service and put it back once the fitting is complete. We ask that you remove fragile items and anything very heavy beforehand.',
  },
  {
    q: 'Do you offer free quotes for laminate fitting?',
    a: 'Yes — we visit your home, measure up and provide a clear, itemised quote at no charge. No obligation to proceed.',
  },
]

export default function LaminateFlooring() {
  return (
    <>
      <ServiceHero
        tagline="Laminate Flooring Fitters"
        title="Laminate Flooring Installation Services"
        intro="Professional laminate flooring fitting across London and West London. A practical, stylish choice for living rooms, hallways and bedrooms — fitted to a high standard with minimal disruption."
        serviceLabel="Laminate Flooring"
      />
      <ServiceIntro
        heading="Professional Laminate Flooring Fitting"
        paragraphs={[
          'Laminate flooring is one of the most popular choices for UK homes, and it is easy to see why. It gives you the look of real wood at a much more accessible price point, it is durable enough for busy households and it is straightforward to keep clean.',
          'The quality of laminate has improved significantly over the years. Modern boards have better embossing, more realistic finishes and improved click-lock systems that, when fitted properly, produce a floor that looks genuinely impressive.',
          'Fitting laminate well requires proper subfloor preparation, accurate cutting around doorframes and architraves, and careful attention to expansion gaps. We take all of this seriously — a floor that is rushed will show it within a year.',
          'We fit laminate flooring across Hounslow, Ealing, Slough, Uxbridge, Wembley and throughout West London. Get in touch for a free measuring visit.',
        ]}
        highlights={[
          { icon: '✓', label: 'All board widths & styles' },
          { icon: '✓', label: 'Subfloor preparation included' },
          { icon: '✓', label: 'Underlay included' },
          { icon: '✓', label: 'Beading & finishing included' },
          { icon: '✓', label: 'Same week available' },
        ]}
      />
      <ServiceBenefits benefits={benefits} />
      <ServiceWhyUs />
      <ServiceProcess />
      <ServiceGallery serviceName="Laminate Flooring" />
      <ServiceAreas />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA
        heading="Ready to Get Laminate Flooring Fitted?"
        subtext="Laminate flooring installation across London and West London. Free measuring, honest advice and a clear quote — no obligation."
      />
    </>
  )
}
