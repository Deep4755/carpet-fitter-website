import { motion } from 'framer-motion'
import ReviewCard from '../common/ReviewCard'
import SectionTitle from '../common/SectionTittle'
import { Link } from 'react-router-dom'

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Ealing',
    rating: 5,
    text: 'Really pleased with the carpet fitting. Arrived on time, worked cleanly and the finish looks great. Would definitely recommend and will use again for the bedrooms.',
    date: 'April 2025',
  },
  {
    name: 'James O.',
    location: 'Hounslow',
    rating: 5,
    text: 'Had LVT fitted in the kitchen and hallway. Very neat job — you cannot see a single join. Competitive price and the fitter clearly knew what he was doing.',
    date: 'March 2025',
  },
  {
    name: 'Priya S.',
    location: 'Slough',
    rating: 5,
    text: 'Booked for a stair runner and could not be happier. Free measuring visit was helpful, the quote was fair and the fitting was done quickly with no mess left behind.',
    date: 'February 2025',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <SectionTitle
            label="Early Customer Feedback"
            title="What Our Customers Say"
            subtitle="We are a growing business and proud of every job we complete. Here is what our first customers had to say."
          />
          <Link
            to="/reviews"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold
                       text-[var(--color-gold)] hover:text-[var(--color-text-dark)] transition-colors mb-12"
          >
            See all reviews
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ReviewCard {...r} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <div className="inline-flex items-center gap-4 bg-[var(--color-warm-white)] rounded-2xl px-7 py-5 border border-[var(--color-border)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-dark)]">Had work done by us?</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">We would love to hear your feedback</p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[var(--color-navy)] text-white text-sm font-semibold
                       hover:bg-[#1E293B] transition-colors shadow-[0_4px_16px_rgba(15,23,42,0.25)]"
          >
            Get Your Free Quote
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
