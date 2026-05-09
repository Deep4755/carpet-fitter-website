import { motion } from 'framer-motion'

const defaultSteps = [
  {
    number: '01',
    title: 'Free Consultation',
    desc: 'Get in touch and we will arrange a convenient time to visit. We discuss your requirements, look at the space and answer any questions — no charge, no pressure.',
  },
  {
    number: '02',
    title: 'Measuring & Planning',
    desc: 'We measure every room accurately, plan the layout and calculate exact quantities. You receive a clear, itemised quote within 24 hours of the visit.',
  },
  {
    number: '03',
    title: 'Professional Installation',
    desc: 'Our fitter arrives on time, protects your home and carries out the installation with care and precision. We move furniture and leave no mess behind.',
  },
  {
    number: '04',
    title: 'Final Quality Check',
    desc: 'Before we leave, we walk through the finished work with you. Every edge, join and trim is inspected. We are not done until you are completely happy.',
  },
]

/**
 * ServiceProcess
 * @param {object[]} steps — optional override of default steps
 */
export default function ServiceProcess({ steps = defaultSteps }) {
  return (
    <section className="py-20 bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-3">
            <span className="w-6 h-px bg-[var(--color-gold)]" />
            How It Works
            <span className="w-6 h-px bg-[var(--color-gold)]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mt-2">
            Our Installation Process
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)] text-base max-w-xl mx-auto leading-relaxed">
            Simple, transparent and stress-free from start to finish.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-11 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="h-full origin-left"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #C9A227 15%, #C9A227 85%, transparent 100%)',
                opacity: 0.3,
              }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Circle */}
                <div className="relative z-10 w-[88px] h-[88px] rounded-full bg-white border-2 border-[var(--color-border)]
                                flex flex-col items-center justify-center mb-6 shadow-sm
                                group-hover:border-[var(--color-gold)] group-hover:shadow-md
                                transition-all duration-300">
                  <span className="text-[10px] font-bold text-[var(--color-gold)]/50 tracking-widest mb-0.5">{step.number}</span>
                  <span className="text-xs font-semibold text-[var(--color-navy)]">Step</span>
                </div>

                <h3 className="text-sm font-semibold text-[var(--color-navy)] mb-3">{step.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
