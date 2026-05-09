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
    title: '100% Waterproof',
    desc: 'LVT is completely waterproof, making it ideal for kitchens, bathrooms, utility rooms and anywhere else moisture is a concern.',
    icon: <Icon d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  },
  {
    title: 'Realistic Wood & Stone Look',
    desc: 'Modern LVT is remarkably convincing. The embossed textures and detailed print layers replicate real wood and stone in a way that is hard to tell apart.',
    icon: <Icon d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
  },
  {
    title: 'Scratch & Dent Resistant',
    desc: 'The wear layer on quality LVT handles everyday life well — pets, children, furniture legs and heavy foot traffic all leave it looking good.',
    icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
  {
    title: 'Comfortable Underfoot',
    desc: 'Unlike ceramic tiles, LVT has a slight give to it and stays warmer underfoot. It is much more comfortable to stand on for long periods.',
    icon: <Icon d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
  },
  {
    title: 'Easy to Clean',
    desc: 'A quick sweep and mop is all it takes. LVT does not harbour dust or allergens the way carpet can, which is a real benefit for allergy sufferers.',
    icon: <Icon d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
  },
  {
    title: 'Precision Installation',
    desc: 'LVT needs to be laid on a perfectly flat, clean subfloor. We prepare the surface properly and install with tight, invisible joins for a flawless result.',
    icon: <Icon d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />,
  },
]

const faqs = [
  {
    q: 'What is LVT flooring?',
    a: 'LVT stands for Luxury Vinyl Tile. It is a multi-layer synthetic flooring product designed to replicate the look of real wood or stone. It is 100% waterproof, durable and much easier to maintain than natural materials.',
  },
  {
    q: 'How long does LVT installation take?',
    a: 'A typical room takes around half a day. Larger areas or rooms that need significant subfloor preparation may take longer. We will give you a clear timeframe when we visit.',
  },
  {
    q: 'Can LVT be fitted over existing flooring?',
    a: 'Sometimes, yes — but it depends on the condition and height of the existing floor. We assess this during our free measuring visit and advise you honestly on the best approach.',
  },
  {
    q: 'Is LVT suitable for underfloor heating?',
    a: 'Most LVT products are compatible with underfloor heating systems. We will confirm compatibility for the specific product you choose before installation.',
  },
  {
    q: 'How do I maintain LVT flooring?',
    a: 'Regular sweeping and occasional mopping with a damp mop is all that is needed. Avoid harsh chemical cleaners and use felt pads under furniture legs to prevent scratching.',
  },
  {
    q: 'Do you offer free quotes for LVT fitting?',
    a: 'Yes — we visit your home, measure up and provide a clear, itemised quote at no charge. There is no obligation to proceed.',
  },
]

export default function LVTFlooring() {
  return (
    <>
      <ServiceHero
        tagline="LVT Flooring Specialists"
        title="LVT Flooring Installation Services"
        intro="Professional luxury vinyl tile installation across London and West London. Waterproof, durable and beautifully realistic — LVT is one of the most practical flooring choices available today."
        serviceLabel="LVT Flooring"
      />
      <ServiceIntro
        heading="Why LVT Flooring Is Worth Considering"
        paragraphs={[
          'Luxury vinyl tile has come a long way in recent years. The quality of modern LVT — particularly the embossed textures and layered print technology — means it genuinely looks like real wood or stone once it is down. Most visitors cannot tell the difference.',
          'What makes LVT particularly popular is how practical it is. It is completely waterproof, which makes it suitable for kitchens, bathrooms and utility rooms where other flooring types would struggle. It handles pets, children and heavy foot traffic without showing the wear.',
          'Installation matters a great deal with LVT. The subfloor needs to be clean, dry and perfectly flat — any imperfections will show through over time. We prepare the surface properly and take care with every join to ensure a finish that looks good and lasts.',
          'We install LVT flooring across Hounslow, Ealing, Slough, Uxbridge, Wembley and throughout West London. Get in touch for a free measuring visit and quote.',
        ]}
        highlights={[
          { icon: '✓', label: '100% waterproof' },
          { icon: '✓', label: 'Wood & stone effects' },
          { icon: '✓', label: 'Underfloor heating compatible' },
          { icon: '✓', label: 'Scratch resistant' },
          { icon: '✓', label: 'Easy maintenance' },
        ]}
      />
      <ServiceBenefits benefits={benefits} />
      <ServiceWhyUs />
      <ServiceProcess />
      <ServiceGallery serviceName="LVT Flooring" />
      <ServiceAreas />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA
        heading="Interested in LVT Flooring?"
        subtext="LVT flooring installation across London and West London. Free measuring visit, honest advice and a clear quote with no obligation."
      />
    </>
  )
}
