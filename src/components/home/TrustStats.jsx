import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const trustCards = [
  {
    id: 'experience',
    countUp: true,
    end: 5,
    suffix: '+',
    badge: null,
    label: 'Years Experience',
    desc: 'Hands-on expertise fitting carpets, LVT, laminate and vinyl across West London.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'insured',
    countUp: false,
    badge: 'Fully',
    label: 'Insured Service',
    desc: 'Full public liability insurance on every job. Your home and belongings are always protected.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'fitting',
    countUp: false,
    badge: 'Same Week',
    label: 'Fitting Available',
    desc: 'Fast turnaround with same-week and next-day slots available across all our service areas.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'quote',
    countUp: false,
    badge: 'Free',
    label: 'Measuring & Quote',
    desc: 'We visit your home, measure every room and provide a clear itemised quote — at no cost.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

function useCountUp(end, duration = 1400, enabled = true) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView || !enabled) return
    let raf
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
      else setCount(end)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration, enabled])

  return { count, ref }
}

function TrustCard({ card, index }) {
  const { count, ref } = useCountUp(card.end ?? 0, 1400, card.countUp)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl p-7 border border-[var(--color-border)]
                 shadow-[0_2px_12px_rgba(0,0,0,0.05)]
                 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1
                 hover:border-[var(--color-gold)]/40 transition-all duration-300 overflow-hidden cursor-default"
    >
      {/* Gold top line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--color-gold)]
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[var(--color-warm-white)] border border-[var(--color-border)]
                      flex items-center justify-center text-[var(--color-gold)] mb-6
                      group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:border-[var(--color-gold)]
                      transition-all duration-300">
        {card.icon}
      </div>

      {/* Value */}
      <div className="mb-1.5 leading-none">
        {card.countUp ? (
          <span ref={ref} className="text-4xl lg:text-5xl font-bold text-[var(--color-text-dark)] tabular-nums">
            {count}{card.suffix}
          </span>
        ) : (
          <span className="text-2xl lg:text-3xl font-bold text-[var(--color-gold)]">
            {card.badge}
          </span>
        )}
      </div>

      <p className="text-sm font-semibold text-[var(--color-text-dark)] mb-2">{card.label}</p>
      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{card.desc}</p>
    </motion.div>
  )
}

export default function TrustStats() {
  return (
    <section className="py-20 bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
            <span className="w-6 h-px bg-[var(--color-gold)]" />
            Why Customers Choose Us
            <span className="w-6 h-px bg-[var(--color-gold)]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustCards.map((card, i) => (
            <TrustCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
