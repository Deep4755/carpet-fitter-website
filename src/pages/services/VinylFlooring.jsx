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
    title: 'Seamless, Clean Finish',
    desc: 'Sheet vinyl covers the entire floor in one piece with no joins, which means no dirt traps and a clean, uninterrupted look across the room.',
    icon: <Icon d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
  },
  {
    title: 'Water Resistant',
    desc: 'Vinyl is highly water resistant, making it a practical choice for kitchens, bathrooms, utility rooms and anywhere spills are likely.',
    icon: <Icon d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  },
  {
    title: 'Comfortable Underfoot',
    desc: 'Vinyl has a natural cushioning quality that makes it comfortable to stand on — noticeably softer than ceramic tiles or stone.',
    icon: <Icon d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
  },
  {
    title: 'Hundreds of Designs',
    desc: 'From wood and stone effects to bold geometric patterns — vinyl comes in an enormous range of designs to suit any room and any budget.',
    icon: <Icon d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />,
  },
  {
    title: 'Great Value',
    desc: 'Vinyl flooring offers excellent value for money, particularly for larger areas. It is a popular choice for rental properties and commercial spaces for this reason.',
    icon: <Icon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Professional Installation',
    desc: 'Vinyl needs to be laid on a smooth, clean subfloor. We prepare the surface properly and ensure a tight, neat fit around every edge and obstacle.',
    icon: <Icon d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />,
  },
]

const faqs = [
  {
    q: 'What is the difference between sheet vinyl and vinyl planks?',
    a: 'Sheet vinyl comes in a single roll and covers the floor with no joins. Vinyl planks (LVT) are individual tiles or planks that click together. Sheet vinyl is often better value for smaller rooms; LVT gives a more realistic wood or stone look.',
  },
  {
    q: 'How long does vinyl flooring installation take?',
    a: 'A standard kitchen or bathroom typically takes two to four hours. Larger areas take longer. We will give you a clear timeframe when we visit.',
  },
  {
    q: 'Can vinyl be fitted over existing flooring?',
    a: 'Sometimes, yes — but the existing floor needs to be smooth and in good condition. Any bumps or imperfections will show through. We assess this during our free measuring visit.',
  },
  {
    q: 'Is vinyl flooring suitable for bathrooms?',
    a: 'Yes — vinyl is one of the best choices for bathrooms. It is water resistant, easy to clean and comfortable underfoot. We ensure all edges are properly sealed during installation.',
  },
  {
    q: 'How do I maintain vinyl flooring?',
    a: 'Regular sweeping and mopping with a damp mop is all that is needed. Avoid abrasive cleaners and use felt pads under furniture to prevent scratching.',
  },
  {
    q: 'Do you offer free quotes for vinyl fitting?',
    a: 'Yes — we visit your home, measure up and provide a clear, itemised quote at no charge. No obligation to proceed.',
  },
]

export default function VinylFlooring() {
  return (
    <>
      <ServiceHero
        tagline="Vinyl Flooring Installation"
        title="Vinyl Flooring Installation Services"
        intro="Professional vinyl flooring installation across London and West London. Practical, water resistant and available in hundreds of designs — a reliable choice for kitchens, bathrooms and beyond."
        serviceLabel="Vinyl Flooring"
      />
      <ServiceIntro
        heading="Vinyl Flooring: Practical, Stylish and Affordable"
        paragraphs={[
          'Vinyl flooring has been a staple of UK homes for decades, and modern vinyl is a significant step up from what most people remember. The designs are more realistic, the wear layers are tougher and the installation methods have improved considerably.',
          'Sheet vinyl remains one of the best options for kitchens and bathrooms. A single sheet with no joins means no water can get underneath, and the surface is easy to keep clean. It is also one of the most cost-effective flooring options available.',
          'Vinyl planks and tiles offer a more premium look, with realistic wood and stone effects that are hard to distinguish from the real thing. They are also fully waterproof and much more forgiving than natural materials.',
          'We install vinyl flooring across Hounslow, Ealing, Slough, Uxbridge, Wembley and throughout West London. Get in touch for a free measuring visit and quote.',
        ]}
        highlights={[
          { icon: '✓', label: 'Sheet vinyl & vinyl planks' },
          { icon: '✓', label: 'Water resistant' },
          { icon: '✓', label: 'Subfloor preparation included' },
          { icon: '✓', label: 'Hundreds of designs' },
          { icon: '✓', label: 'Same week available' },
        ]}
      />
      <ServiceBenefits benefits={benefits} />
      <ServiceWhyUs />
      <ServiceProcess />
      <ServiceGallery serviceName="Vinyl Flooring" />
      <ServiceAreas />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA
        heading="Ready to Get Vinyl Flooring Fitted?"
        subtext="Vinyl flooring installation across London and West London. Free measuring, honest advice and a clear quote — no obligation."
      />
    </>
  )
}
