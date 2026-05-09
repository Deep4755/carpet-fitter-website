import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function FAQItem({ q, a, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className="border-b border-[var(--color-border)] last:border-0"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className={`text-sm font-semibold transition-colors duration-200 ${isOpen ? 'text-[var(--color-gold)]' : 'text-[var(--color-navy)] group-hover:text-[var(--color-gold)]'}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200
          ${isOpen ? 'bg-[var(--color-gold)] text-white rotate-180' : 'bg-[var(--color-border)] text-[var(--color-text-muted)] group-hover:bg-[var(--color-gold)]/10 group-hover:text-[var(--color-gold)]'}`}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[var(--color-text-muted)] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/**
 * ServiceFAQ
 * @param {object[]} faqs — [{ q, a }]
 */
export default function ServiceFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* Left */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
                <span className="w-6 h-px bg-[var(--color-gold)]" />
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] leading-tight mb-4">
                Common Questions
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-8">
                Can't find what you're looking for? Give us a call and we'll be happy to help.
              </p>

              {/* Contact card */}
              <div className="bg-[var(--color-warm-white)] rounded-2xl p-6 border border-[var(--color-border)]">
                <p className="text-sm font-semibold text-[var(--color-navy)] mb-1">Still have a question?</p>
                <p className="text-xs text-[var(--color-text-muted)] mb-5 leading-relaxed">
                  We are happy to answer any questions before you book.
                </p>
                <a
                  href="tel:02012345678"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-gold)] hover:text-[var(--color-navy)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  020 1234 5678
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="lg:col-span-3 bg-[var(--color-warm-white)] rounded-2xl px-6 border border-[var(--color-border)]">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
