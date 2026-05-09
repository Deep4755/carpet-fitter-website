import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const areas = [
  { name: 'Hounslow',    to: '/areas/hounslow',  desc: 'Carpet fitting Hounslow, Chiswick, Brentford and Isleworth.' },
  { name: 'Ealing',      to: '/areas/ealing',    desc: 'Flooring installation across Ealing, Hanwell, Southall and Acton.' },
  { name: 'Uxbridge',    to: '/areas/uxbridge',  desc: 'Serving Uxbridge, Hillingdon, Hayes and West Drayton.' },
  { name: 'Slough',      to: '/areas/slough',    desc: 'Professional flooring services in Slough, Langley and Burnham.' },
  { name: 'Wembley',     to: '/areas/wembley',   desc: 'Covering Wembley, Harrow, Sudbury and surrounding areas.' },
  { name: 'West London', to: '/areas/ealing',    desc: 'Flooring services across all of West London and beyond.' },
]

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3">
            <span className="w-6 h-px bg-[var(--color-gold)]" />
            Service Coverage
            <span className="w-6 h-px bg-[var(--color-gold)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mt-2">
            Areas We Cover
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)] text-base max-w-xl mx-auto leading-relaxed">
            We provide flooring installation services across West London and surrounding areas. Not sure if we cover your postcode? Just give us a call.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={area.to}
                className="group flex items-start gap-4 bg-white rounded-2xl p-5 border border-[var(--color-border)]
                           hover:border-[var(--color-gold)]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[var(--color-gold)]/8 flex items-center justify-center text-[var(--color-gold)]
                                group-hover:bg-[var(--color-gold)] group-hover:text-white transition-all duration-300 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-navy)] mb-1">{area.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{area.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
