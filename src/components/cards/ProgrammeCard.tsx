import { Link } from 'react-router-dom'
import type { Programme } from '../../data/types'
import PillTag from '../layout/PillTag'

interface ProgrammeCardProps {
  programme: Programme
}

/**
 * Programme card, title, type pill, date/time, format (Section 5).
 */
export default function ProgrammeCard({ programme }: ProgrammeCardProps) {
  return (
    <Link
      to={`/programmes/${programme.slug}`}
      className="group flex flex-col border border-brown/20 bg-cream p-6 transition-colors hover:border-gold"
    >
      <div className="flex items-center justify-between">
        <PillTag>{programme.type}</PillTag>
        <span className="font-label text-xs uppercase tracking-wider text-brown">
          {programme.format}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-gold">
        {programme.title}
      </h3>

      <p className="mt-3 font-body text-sm text-brown">{programme.description}</p>

      <div className="mt-6 border-t border-brown/10 pt-4">
        <span className="font-label text-xs uppercase tracking-widest text-brown">
          Date
        </span>
        <p className="mt-1 font-label text-lg text-gold">{programme.date}</p>
      </div>
    </Link>
  )
}