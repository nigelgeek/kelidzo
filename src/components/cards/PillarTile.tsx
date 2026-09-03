import { Link } from 'react-router-dom'
import type { Pillar } from '../../data/types'
import FolioLabel from '../layout/FolioLabel'

interface PillarTileProps {
  pillar: Pillar
  index: number
  total: number
}

/**
 * Pillar tile, one of Culture / Community / Creativity /
 * Conversation / Opportunity, one-line description (Section 5).
 * Flat, bordered, folio-numbered, not a floating card.
 */
export default function PillarTile({ pillar, index, total }: PillarTileProps) {
  return (
    <Link
      to={`/stories?pillar=${pillar.name.toLowerCase()}`}
      className="group flex flex-col justify-between border border-brown/20 bg-cream p-6 transition-colors hover:border-gold"
    >
      <div className="flex items-start justify-between">
        <FolioLabel current={index + 1} total={total} />
        <span className="font-display text-3xl text-brown/30 transition-colors group-hover:text-gold">
          →
        </span>
      </div>
      <div className="mt-8">
        <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-gold">
          {pillar.name}
        </h3>
        <p className="mt-2 font-body text-sm text-brown">{pillar.description}</p>
      </div>
    </Link>
  )
}