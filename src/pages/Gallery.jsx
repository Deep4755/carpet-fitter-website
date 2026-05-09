import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ServiceCTA from '../components/services/ServiceCTA'

const categories = ['All', 'Carpet Fitting', 'LVT Flooring', 'Laminate', 'Vinyl', 'Stair Runners', 'Carpet Tiles']

const items = [
  { id: 1,  cat: 'Carpet Fitting',  label: 'Master Bedroom Carpet',    large: true,  shade: 'bg-stone-200' },
  { id: 2,  cat: 'LVT Flooring',    label: 'Kitchen LVT Installation', large: false, shade: 'bg-amber-100' },
  { id: 3,  cat: 'Stair Runners',   label: 'Hallway Stair Runner',     large: false, shade: 'bg-stone-300' },
  { id: 4,  cat: 'Laminate',        label: 'Living Room Laminate',     large: false, shade: 'bg-amber-200' },
  { id: 5,  cat: 'Vinyl',           label: 'Bathroom Vinyl',           large: false, shade: 'bg-stone-200' },
  { id: 6,  cat: 'Carpet Fitting',  label: 'Lounge Carpet',            large: false, shade: 'bg-amber-100' },
  { id: 7,  cat: 'Carpet Tiles',    label: 'Office Carpet Tiles',      large: true,  shade: 'bg-stone-300' },
  { id: 8,  cat: 'LVT Flooring',    label: 'Hallway LVT',              large: false, shade: 'bg-amber-200' },
  { id: 9,  cat: 'Laminate',        label: 'Dining Room Laminate',     large: false, shade: 'bg-stone-200' },
  { id: 10, cat: 'Stair Runners',   label: 'Curved Staircase Runner',  large: false, shade: 'bg-amber-100' },
  { id: 11, cat: 'Carpet Fitting',  label: 'Children\'s Bedroom',      large: false, shade: 'bg-stone-300' },
  { id: 12, cat: 'Vinyl',           label: 'Kitchen Vinyl Planks',     large: false, shade: 'bg-amber-200' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? items : items.filter(i => i.cat === active)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-navy)] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 16px)' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)]/5 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-px bg-[var(--color-gold)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Our Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              Flooring Installation Gallery
            </h1>
            <p className="mt-6 text-[15px] text-slate-300 leading-relaxed max-w-2xl">
              A selection of our recent carpet fitting and flooring projects across London and West London. Every job is completed to the same high standard.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full"><path d="M0 40L1440 40L1440 12C1200 40 960 0 720 12C480 24 240 0 0 12L0 40Z" fill="#FAFAF9" /></svg>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-[var(--color-warm-white)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'bg-[var(--color-gold)] text-white shadow-[0_2px_8px_rgba(201,162,39,0.35)]'
                    : 'bg-white border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ gridAutoRows: '200px' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative rounded-2xl overflow-hidden ${item.shade} group cursor-pointer ${item.large ? 'col-span-2 row-span-2' : ''}`}
                >
                  {/* ↓ Replace with: <img src="..." alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> */}
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-9 h-9 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-[var(--color-navy)]/0 group-hover:bg-[var(--color-navy)]/60 transition-all duration-300 flex items-end p-5">
                    <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-gold)] mb-1 block">{item.cat}</span>
                      <p className="text-white text-sm font-semibold">{item.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[var(--color-text-muted)]">No projects in this category yet.</div>
          )}
        </div>
      </section>

      <ServiceCTA heading="Like What You See?" subtext="Get in touch for a free measuring visit and quote. We cover Hounslow, Ealing, Slough, Uxbridge, Wembley and all surrounding areas." />
    </>
  )
}
