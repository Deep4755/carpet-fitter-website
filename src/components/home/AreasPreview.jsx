import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTittle'

const areas = [
  { name: 'Hounslow',    to: '/areas/hounslow', desc: 'Expert carpet fitters Hounslow — serving Chiswick, Brentford, Isleworth and all surrounding areas.' },
  { name: 'Ealing',      to: '/areas/ealing',   desc: 'Professional carpet fitting and flooring installation across Ealing, Hanwell, Southall and Acton.' },
  { name: 'Uxbridge',    to: '/areas/uxbridge', desc: 'Flooring specialists covering Uxbridge, Hillingdon, Hayes and West Drayton.' },
  { name: 'Slough',      to: '/areas/slough',   desc: 'Carpet and LVT flooring installation throughout Slough, Langley, Burnham and Cippenham.' },
  { name: 'Wembley',     to: '/areas/wembley',  desc: 'Serving Wembley, Harrow, Sudbury and surrounding North West London areas.' },
  { name: 'West London', to: '/areas/ealing',   desc: 'Luxury flooring solutions across all of West London — carpet fitting, LVT, laminate and vinyl.' },
]

export default function AreasPreview() {
  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          label="Areas We Cover"
          title="Local Flooring Experts Near You"
          subtitle="Based in West London, we provide professional carpet fitting and flooring installation services across a wide area. Find your location below."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={area.to}
                className="group flex items-start gap-4 bg-white rounded-2xl p-6
                           border border-[var(--color-border)]
                           hover:border-[var(--color-gold)]/40
                           hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                           transition-all duration-300 h-full"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-warm-white)] border border-[var(--color-border)]
                                flex items-center justify-center text-[var(--color-gold)]
                                group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:border-[var(--color-gold)]
                                transition-all duration-300 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-semibold text-[var(--color-text-dark)] mb-1.5">{area.name}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{area.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[var(--color-gold)] group-hover:gap-2 transition-all duration-200">
                    View local service
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
