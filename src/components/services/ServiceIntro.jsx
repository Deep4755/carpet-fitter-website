import { motion } from 'framer-motion'

/**
 * ServiceIntro
 * @param {string}   heading   — section h2
 * @param {string[]} paragraphs — array of paragraph strings
 * @param {object[]} highlights — [{icon, label}] small feature pills
 */
export default function ServiceIntro({ heading, paragraphs, highlights = [] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
              <span className="w-6 h-px bg-[var(--color-gold)]" />
              About This Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] leading-tight mb-6">
              {heading}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {highlights.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-full px-4 py-2 text-xs font-semibold text-[var(--color-navy)]"
                  >
                    <span className="text-[var(--color-gold)]">{h.icon}</span>
                    {h.label}
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right — image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-[var(--color-gold)]/20 pointer-events-none" />
            <div
              className="relative rounded-3xl overflow-hidden h-[420px] flex flex-col items-center justify-center bg-[var(--color-border)]"
            >
              {/* ↓ Replace with: <img src="..." alt="..." className="w-full h-full object-cover" /> */}
              <svg className="w-14 h-14 text-[var(--color-gold)]/25 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-[var(--color-gold)]/30 text-xs tracking-widest uppercase">Image</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
