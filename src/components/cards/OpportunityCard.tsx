import Link from 'next/link'
import type { Opportunity } from '../../data/types'
import PillTag from '../layout/PillTag'

interface OpportunityCardProps {
  opportunity: Opportunity
}

/**
 * Opportunity card, title, type pill, deadline (prominent,
 * monospace), org (Section 5).
 */
export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <Link
      href={`/opportunities/${opportunity.slug}`}
      className="group flex flex-col border border-brown/20 bg-cream p-6 transition-colors hover:border-gold"
    >
      <div className="flex items-center justify-between">
        <PillTag>{opportunity.type}</PillTag>
        <span className="font-label text-xs uppercase tracking-wider text-brown">
          {opportunity.org}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-gold">
        {opportunity.title}
      </h3>

      <p className="mt-3 font-body text-sm text-brown">{opportunity.description}</p>

      <div className="mt-6 border-t border-brown/10 pt-4">
        <span className="font-label text-xs uppercase tracking-widest text-brown">
          Deadline
        </span>
        <p className="mt-1 font-label text-lg text-gold">{opportunity.deadline}</p>
      </div>
    </Link>
  )
}