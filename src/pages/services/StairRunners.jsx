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
    title: 'Adds Warmth & Character',
    desc: 'A well-chosen stair runner transforms a staircase from a functional necessity into a design feature. It adds warmth, texture and personality to your hallway.',
    icon: <Icon d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
  },
  {
    title: 'Safer Underfoot',
    desc: 'Carpet on stairs provides grip that bare wood or hard flooring cannot. This is particularly important in homes with young children or elderly family members.',
    icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: 'Reduces Noise',
    desc: 'Stairs can be surprisingly noisy in a house. A runner absorbs the sound of footsteps considerably, which makes a real difference in a busy household.',
    icon: <Icon d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />,
  },
  {
    title: 'Protects Your Staircase',
    desc: 'A runner protects the treads from wear and scratching, which is particularly valuable if you have hardwood stairs you want to preserve.',
    icon: <Icon d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  },
  {
    title: 'Bespoke to Your Staircase',
    desc: 'Every staircase is different. We measure and cut the runner to fit your specific staircase — whether it is straight, curved, winding or has a landing.',
    icon: <Icon d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />,
  },
  {
    title: 'Wide Choice of Styles',
    desc: 'From classic herringbone and traditional patterns to contemporary plains and bold designs — we can help you find a runner that works with your interior.',
    icon: <Icon d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />,
  },
]

const faqs = [
  {
    q: 'What is a stair runner?',
    a: 'A stair runner is a length of carpet fitted down the centre of a staircase, leaving the edges of the treads exposed. It is a popular choice for homes with wooden stairs, adding warmth and grip while showing off the staircase itself.',
  },
  {
    q: 'How long does stair runner installation take?',
    a: 'A standard straight staircase typically takes three to five hours. Curved or winding staircases, or those with a landing, may take longer. We will give you a clear timeframe when we visit.',
  },
  {
    q: 'Can a runner be fitted on any staircase?',
    a: 'We can fit runners on most staircase types — straight, curved, winding and those with landings. We assess the staircase during our free measuring visit and advise on the best approach.',
  },
  {
    q: 'Do I need to supply the carpet?',
    a: 'No — we can supply and fit the runner, or fit a runner you have already purchased. We are happy to advise on suitable materials and widths if you would like our input.',
  },
  {
    q: 'How is a stair runner fixed in place?',
    a: 'Runners are typically fixed using stair rods or by being tacked or stapled at each riser. We discuss the options with you and use the method that suits your staircase and your preference.',
  },
  {
    q: 'Do you offer free quotes for stair runner fitting?',
    a: 'Yes — we visit your home, measure the staircase and provide a clear, itemised quote at no charge. No obligation to proceed.',
  },
]

export default function StairRunners() {
  return (
    <>
      <ServiceHero
        tagline="Stair Runner Installation"
        title="Stair Runner Fitting Services"
        intro="Professional stair runner installation across London and West London. Transform your staircase with a bespoke runner — fitted precisely to your staircase, whatever the shape."
        serviceLabel="Stair Runners"
      />
      <ServiceIntro
        heading="Bespoke Stair Runner Fitting"
        paragraphs={[
          'A stair runner is one of those finishing touches that makes a real difference to how a hallway feels. Done well, it adds warmth, character and a sense of quality that is hard to achieve any other way.',
          'We fit runners on all types of staircase — straight, curved, winding and those with landings. Every staircase is measured individually and the runner is cut and fitted to suit the specific dimensions and shape.',
          'The fixing method matters too. We discuss the options with you — stair rods, tacking or stapling — and use the approach that works best for your staircase and your aesthetic preference.',
          'We fit stair runners across Hounslow, Ealing, Slough, Uxbridge, Wembley and throughout West London. Get in touch for a free measuring visit and quote.',
        ]}
        highlights={[
          { icon: '✓', label: 'All staircase types' },
          { icon: '✓', label: 'Supply & fit or fit only' },
          { icon: '✓', label: 'Stair rods available' },
          { icon: '✓', label: 'Bespoke cutting & fitting' },
          { icon: '✓', label: 'Same week available' },
        ]}
      />
      <ServiceBenefits benefits={benefits} />
      <ServiceWhyUs />
      <ServiceProcess />
      <ServiceGallery serviceName="Stair Runners" />
      <ServiceAreas />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA
        heading="Ready to Transform Your Staircase?"
        subtext="Stair runner installation across London and West London. Free measuring visit, honest advice and a clear quote — no obligation."
      />
    </>
  )
}
