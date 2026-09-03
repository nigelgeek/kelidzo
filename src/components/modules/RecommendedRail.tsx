import { Link } from 'react-router-dom'
import type { Story } from '../../data/types'
import PillTag from '../layout/PillTag'

interface RecommendedRailProps {
  stories: Story[]
}

/**
 * Recommended rail, smaller thumbnail cards (Section 4,
 * Marmalade-style "Recommended" module).
 */
export default function RecommendedRail({ stories }: RecommendedRailProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <Link
          key={story.id}
          to={`/stories/${story.slug}`}
          className="group flex gap-4 border border-brown/20 bg-cream p-3 transition-colors hover:border-gold"
        >
          <img
            src={story.image}
            alt={story.imageAlt}
            className="h-20 w-20 shrink-0 border border-brown/20 object-cover"
          />
          <div className="min-w-0">
            <PillTag className="mb-2">{story.pillar}</PillTag>
            <h4 className="font-display text-base font-semibold leading-snug text-ink transition-colors group-hover:text-gold">
              {story.title}
            </h4>
          </div>
        </Link>
      ))}
    </div>
  )
}