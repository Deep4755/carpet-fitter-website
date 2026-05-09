import { motion } from 'framer-motion'

export default function ServiceBenefits({ benefits }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[var(--color-gold)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">Key Benefits</span>
            <span className="w-6 h-px bg-[var(--color-gold)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
            Why It Makes a Difference
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[var(--color-warm-white)] rounded-2xl p-7 border border-[var(--color-border)]
                         hover:shadow-[0_10px_35px_rgba(0,0,0,0.09)] hover:-translate-y-1.5
                         hover:border-[var(--color-gold)]/35 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gold top line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--color-gold)]
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              <div className="w-12 h-12 rounded-xl bg-white border border-[var(--color-border)]
                              flex items-center justify-center text-[var(--color-gold)] mb-5
                              group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:border-[var(--color-gold)]
                              transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                {b.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-[var(--color-text-dark)] mb-2">{b.title}</h3>
              <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
