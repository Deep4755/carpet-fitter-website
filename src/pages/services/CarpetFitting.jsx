import ServiceHero     from '../../components/services/ServiceHero'
import ServiceIntro    from '../../components/services/ServiceIntro'
import ServiceBenefits from '../../components/services/ServiceBenefits'
import ServiceWhyUs    from '../../components/services/ServiceWhyUs'
import ServiceProcess  from '../../components/services/ServiceProcess'
import ServiceGallery  from '../../components/services/ServiceGallery'
import ServiceAreas    from '../../components/services/ServiceAreas'
import ServiceFAQ      from '../../components/services/ServiceFAQ'
import ServiceCTA      from '../../components/services/ServiceCTA'

/* ── Icons ── */
const Icon = ({ d }) => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
)

const benefits = [
  {
    title: 'Precision Installation',
    desc: 'Every carpet is cut and fitted to the exact shape of your room — no gaps, no bumps, no lifting edges. We take the time to get it right.',
    icon: <Icon d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />,
  },
  {
    title: 'Durable, Long-Lasting Finish',
    desc: 'Properly fitted carpet lasts significantly longer than a rushed job. Good stretching and secure fixing prevents rippling and premature wear.',
    icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: 'Expert Material Advice',
    desc: 'Not sure which carpet is right for your room? We help you choose the right pile, weight and fibre for your lifestyle — whether that is a busy family home or a quiet bedroom.',
    icon: <Icon d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
  },
  {
    title: 'Premium Underlay Included',
    desc: 'We include quality underlay with every carpet fitting job. Good underlay makes your carpet feel softer underfoot and extends its lifespan considerably.',
    icon: <Icon d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  },
  {
    title: 'Warm & Comfortable Rooms',
    desc: 'Carpet adds real warmth to a room — both visually and thermally. It also reduces noise between floors, which makes a noticeable difference in busy households.',
    icon: <Icon d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
  },
  {
    title: 'Supply & Fit or Fit Only',
    desc: 'Already bought your carpet? We are happy to fit it for you. Or we can supply and fit everything — whichever works best for you.',
    icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
  },
]

const faqs = [
  {
    q: 'How long does carpet fitting take?',
    a: 'A single room typically takes two to three hours. A full house with multiple rooms and a staircase can usually be completed in one day. We will give you a realistic timeframe when we visit.',
  },
  {
    q: 'Is underlay included in the price?',
    a: 'Yes — we include quality underlay with every carpet fitting job at no extra cost. Good underlay makes a real difference to how the carpet feels and how long it lasts.',
  },
  {
    q: 'Which rooms are suitable for carpet?',
    a: 'Carpet works well in bedrooms, living rooms, hallways, stairs and landings. We generally advise against carpet in bathrooms or kitchens where moisture is a concern, but we are happy to discuss your specific situation.',
  },
  {
    q: 'How do I look after my new carpet?',
    a: 'Regular vacuuming is the most important thing. Deal with spills quickly by blotting rather than rubbing. We will give you specific care advice for the type of carpet fitted.',
  },
  {
    q: 'Do you offer free quotes?',
    a: 'Yes — all quotes are completely free. We visit your home, measure up and provide a clear, itemised price. There is no obligation to go ahead.',
  },
  {
    q: 'Can you fit carpet I have already bought?',
    a: 'Absolutely. We offer a fit-only service for customers who have already purchased their carpet. Just let us know when you get in touch and we will arrange everything.',
  },
]

export default function CarpetFitting() {
  return (
    <>
      <ServiceHero
        tagline="Professional Carpet Fitting London"
        title="Professional Carpet Fitting Services"
        intro="Expert carpet fitting across London, Hounslow, Ealing, Slough, Uxbridge and Wembley. We supply and fit all carpet types, or fit carpets you have already purchased — with free measuring and a clear quote."
        serviceLabel="Carpet Fitting"
      />
      <ServiceIntro
        heading="What Our Carpet Fitting Service Includes"
        paragraphs={[
          'Getting a carpet fitted properly makes a bigger difference than most people realise. A well-fitted carpet lies flat, wears evenly and looks good for years. A poorly fitted one starts lifting at the edges, develops ripples and needs replacing far sooner.',
          'We fit all types of carpet — from thick wool and twist pile to practical loop and berber styles. Whether you need a single bedroom done or a whole house including stairs and landing, we handle it all.',
          'Our service includes a free home visit to measure up, honest advice on the right carpet for your needs, quality underlay as standard and a tidy, professional installation. We move furniture, fit the carpet and put everything back before we leave.',
          'We cover carpet fitting in Hounslow, Ealing, Slough, Uxbridge, Wembley and across West London. If you are not sure whether we cover your area, just give us a call.',
        ]}
        highlights={[
          { icon: '✓', label: 'All carpet types' },
          { icon: '✓', label: 'Supply & fit or fit only' },
          { icon: '✓', label: 'Underlay included' },
          { icon: '✓', label: 'Furniture moved' },
          { icon: '✓', label: 'Same week available' },
        ]}
      />
      <ServiceBenefits benefits={benefits} />
      <ServiceWhyUs />
      <ServiceProcess />
      <ServiceGallery serviceName="Carpet Fitting" />
      <ServiceAreas />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA
        heading="Ready to Get Your Carpet Fitted?"
        subtext="Professional carpet fitting across London and West London. Free measuring visit, honest advice and a clear quote — no obligation."
      />
    </>
  )
}
