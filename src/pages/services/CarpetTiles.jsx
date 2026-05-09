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
    title: 'Easy to Replace',
    desc: 'If a tile gets stained or damaged, you can replace just that tile rather than the entire floor. Keep a few spares and you are covered for years.',
    icon: <Icon d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />,
  },
  {
    title: 'Ideal for Offices & Commercial Spaces',
    desc: 'Carpet tiles are the standard choice for offices and commercial environments. They handle heavy foot traffic well and can be lifted to access underfloor cabling.',
    icon: <Icon d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
  },
  {
    title: 'Design Flexibility',
    desc: 'Mix and match colours and patterns to create a bespoke look. Carpet tiles allow for creative layouts that would be impossible with broadloom carpet.',
    icon: <Icon d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />,
  },
  {
    title: 'Practical for High-Traffic Areas',
    desc: 'Commercial-grade carpet tiles are built to withstand constant use. They maintain their appearance far longer than standard carpet in busy environments.',
    icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: 'Acoustic Benefits',
    desc: 'Carpet tiles absorb sound effectively, which makes a real difference in open-plan offices and busy commercial spaces.',
    icon: <Icon d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />,
  },
  {
    title: 'Neat Professional Finish',
    desc: 'Properly laid carpet tiles look clean and intentional. We ensure every tile is aligned, the pattern is consistent and the edges are finished neatly.',
    icon: <Icon d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />,
  },
]

const faqs = [
  {
    q: 'What are carpet tiles suitable for?',
    a: 'Carpet tiles work well in offices, commercial spaces, playrooms, home offices and any area where practicality matters. They are particularly useful where access to underfloor services is needed.',
  },
  {
    q: 'How long does carpet tile installation take?',
    a: 'A standard office or room can usually be completed in a day. Larger commercial spaces may take longer. We will give you a clear timeframe when we visit.',
  },
  {
    q: 'Can carpet tiles be fitted over existing flooring?',
    a: 'In many cases, yes — provided the existing floor is clean, flat and in good condition. We assess this during our free measuring visit.',
  },
  {
    q: 'How do I clean carpet tiles?',
    a: 'Regular vacuuming keeps them looking good. Individual tiles can be removed for deep cleaning or replaced if they become stained. This is one of the main practical advantages of tiles over broadloom carpet.',
  },
  {
    q: 'Can I mix different colours or patterns?',
    a: 'Yes — carpet tiles are well suited to creative layouts. We can help you plan a design that works for your space.',
  },
  {
    q: 'Do you offer free quotes for carpet tile fitting?',
    a: 'Yes — we visit your space, measure up and provide a clear, itemised quote at no charge. No obligation to proceed.',
  },
]

export default function CarpetTiles() {
  return (
    <>
      <ServiceHero
        tagline="Carpet Tile Installation"
        title="Carpet Tile Fitting Services"
        intro="Professional carpet tile installation for offices, commercial spaces and homes across London and West London. Practical, versatile and easy to maintain."
        serviceLabel="Carpet Tiles"
      />
      <ServiceIntro
        heading="Carpet Tiles: Practical Flooring That Works Hard"
        paragraphs={[
          'Carpet tiles are the go-to flooring choice for offices and commercial spaces for good reason. They handle heavy foot traffic, they are easy to maintain and — crucially — individual tiles can be replaced if they get damaged or stained, without having to redo the entire floor.',
          'They are also increasingly popular in homes, particularly in playrooms, home offices and basements. The ability to mix colours and create patterns gives you a level of design flexibility that broadloom carpet simply cannot match.',
          'Installation needs to be done carefully to ensure the tiles are properly aligned and the pattern is consistent throughout. We take the time to plan the layout before we start, which makes a noticeable difference to the finished result.',
          'We fit carpet tiles across Hounslow, Ealing, Slough, Uxbridge, Wembley and throughout West London. Get in touch for a free measuring visit and quote.',
        ]}
        highlights={[
          { icon: '✓', label: 'Domestic & commercial' },
          { icon: '✓', label: 'Mix & match designs' },
          { icon: '✓', label: 'Easy individual replacement' },
          { icon: '✓', label: 'High-traffic grades available' },
          { icon: '✓', label: 'Same week available' },
        ]}
      />
      <ServiceBenefits benefits={benefits} />
      <ServiceWhyUs />
      <ServiceProcess />
      <ServiceGallery serviceName="Carpet Tiles" />
      <ServiceAreas />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA
        heading="Need Carpet Tiles Fitted?"
        subtext="Carpet tile installation for offices and homes across London and West London. Free measuring, honest advice and a clear quote — no obligation."
      />
    </>
  )
}
