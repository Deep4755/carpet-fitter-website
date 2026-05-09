import { motion } from 'framer-motion'
import ReviewCard from '../components/common/ReviewCard'
import ServiceCTA from '../components/services/ServiceCTA'

const reviews = [
  { name: 'Sarah M.',    location: 'Ealing',    rating: 5, text: 'Really pleased with the carpet fitting. Arrived on time, worked cleanly and the finish looks great. Would definitely recommend and will use again for the bedrooms.',                                                                                date: 'April 2025' },
  { name: 'James O.',    location: 'Hounslow',  rating: 5, text: 'Had LVT fitted in the kitchen and hallway. Very neat job — you cannot see a single join. Competitive price and the fitter clearly knew what he was doing.',                                                                                           date: 'March 2025' },
  { name: 'Priya S.',    location: 'Slough',    rating: 5, text: 'Booked for a stair runner and could not be happier. Free measuring visit was helpful, the quote was fair and the fitting was done quickly with no mess left behind.',                                                                                  date: 'February 2025' },
  { name: 'David T.',    location: 'Uxbridge',  rating: 5, text: 'Had laminate fitted in the living room and dining room. The team were professional, tidy and finished ahead of schedule. Very happy with the result.',                                                                                                date: 'January 2025' },
  { name: 'Emma C.',     location: 'Wembley',   rating: 5, text: 'Used Prestige Carpets for our whole downstairs — vinyl in the kitchen and carpet in the lounge. Both look brilliant. Great communication throughout.',                                                                                               date: 'December 2024' },
  { name: 'Mohammed A.', location: 'Ealing',    rating: 5, text: 'Fitted carpet tiles in my home office. Quick, clean and exactly what I needed. Very reasonable price and the fitter was friendly and professional.',                                                                                                 date: 'November 2024' },
]

export default function Reviews() {
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
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Customer Feedback</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              What Our Customers Say
            </h1>
            <p className="mt-6 text-[15px] text-slate-300 leading-relaxed max-w-2xl">
              We are a growing business and proud of every job we complete. Here is what our customers have said about our carpet fitting and flooring services.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full"><path d="M0 40L1440 40L1440 12C1200 40 960 0 720 12C480 24 240 0 0 12L0 40Z" fill="#FAFAF9" /></svg>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 bg-[var(--color-warm-white)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name + i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ReviewCard {...r} />
              </motion.div>
            ))}
          </div>

          {/* Honest nudge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-white rounded-2xl border border-[var(--color-border)] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)] flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-[var(--color-text-dark)] mb-1">Had work done by us?</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                We are a growing business and every review genuinely helps. If we fitted your flooring, we would love to hear your feedback — it helps other customers and helps us improve.
              </p>
            </div>
            <a
              href="tel:02012345678"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-navy)] text-white text-sm font-semibold hover:bg-[#1E293B] transition-colors"
            >
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call Us
            </a>
          </motion.div>
        </div>
      </section>

      <ServiceCTA heading="Ready to Experience the Same Quality?" subtext="Book a free measuring visit and see why our customers keep coming back. Covering Hounslow, Ealing, Slough, Uxbridge, Wembley and surrounding areas." />
    </>
  )
}
