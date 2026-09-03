import { Link } from 'react-router-dom'
import type { ArchiveItem } from '../../data/types'
import PillTag from '../layout/PillTag'

interface ArchiveCardProps {
  item: ArchiveItem
}

/**
 * Archive card, mixed type (interview/photo/story/event),
 * place/year/topic tags (Section 5).
 */
export default function ArchiveCard({ item }: ArchiveCardProps) {
  return (
    <Link
      to={`/archive/${item.slug}`}
      className="group block border border-brown/20 bg-cream transition-colors hover:border-gold"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2">
          <PillTag>{item.kind}</PillTag>
          <span className="font-label text-xs uppercase tracking-wider text-brown">
            {item.year}
          </span>
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-gold">
          {item.title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-2 font-label text-xs uppercase tracking-wider text-brown">
          <span className="border border-brown/20 px-2 py-0.5">{item.place}</span>
          <span className="border border-brown/20 px-2 py-0.5">{item.topic}</span>
        </div>
      </div>
    </Link>
  )
}