import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const placeholders = [
  { id: 1, label: 'Installation 1', large: true },
  { id: 2, label: 'Installation 2', large: false },
  { id: 3, label: 'Installation 3', large: false },
  { id: 4, label: 'Installation 4', large: false },
  { id: 5, label: 'Installation 5', large: false },
]

const shades = [
  'from-stone-200 to-stone-300',
  'from-amber-100 to-stone-200',
  'from-neutral-200 to-neutral-300',
  'from-stone-100 to-amber-100',
  'from-gray-100 to-stone-200',
]

/**
 * ServiceGallery
 * @param {string} serviceName — used in alt text
 */
export default function ServiceGallery({ serviceName = 'Flooring' }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3">
              <span className="w-6 h-px bg-[var(--color-gold)]" />
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">
              Recent {serviceName} Projects
            </h2>
          </div>
          <Link
            to="/gallery"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-gold)] hover:text-[var(--color-navy)] transition-colors"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ gridAutoRows: '190px' }}>
          {placeholders.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${shades[i]} group cursor-pointer ${item.large ? 'col-span-2 row-span-2' : ''}`}
            >
              {/* ↓ Replace with: <img src="..." alt={`${serviceName} - ${item.label}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> */}
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-9 h-9 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--color-navy)]/0 group-hover:bg-[var(--color-navy)]/55 transition-all duration-350 flex items-end p-5">
                <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-semibold">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
