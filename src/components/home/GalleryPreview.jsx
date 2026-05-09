import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTittle'

const items = [
  { id: 1, label: 'Bedroom Carpet Fitting', large: true  },
  { id: 2, label: 'LVT Kitchen Floor',      large: false },
  { id: 3, label: 'Stair Runner Install',   large: false },
  { id: 4, label: 'Laminate Living Room',   large: false },
  { id: 5, label: 'Vinyl Hallway',          large: false },
  { id: 6, label: 'Carpet Tiles Office',    large: false },
]

// Warm neutral tones — no cold grays
const bgShades = [
  'bg-stone-200',
  'bg-amber-100',
  'bg-stone-300',
  'bg-amber-200',
  'bg-stone-200',
  'bg-amber-100',
]

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionTitle
            label="Our Work"
            title="Recent Installations"
            subtitle="A selection of our latest carpet fitting and flooring projects across London."
          />
          <Link
            to="/gallery"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold
                       text-[var(--color-gold)] hover:text-[var(--color-text-dark)] transition-colors mb-12"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ gridAutoRows: '200px' }}>
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl overflow-hidden ${bgShades[i]} group cursor-pointer ${item.large ? 'col-span-2 row-span-2' : ''}`}
            >
              {/* ↓ Replace with: <img src="..." alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> */}
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-9 h-9 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--color-navy)]/0 group-hover:bg-[var(--color-navy)]/60
                              transition-all duration-350 flex items-end p-5">
                <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-semibold">{item.label}</p>
                  <div className="flex items-center gap-1 mt-1 text-[var(--color-gold)] text-xs font-medium">
                    View project
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
