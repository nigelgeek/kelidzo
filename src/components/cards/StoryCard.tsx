import { Link } from 'react-router-dom'
import type { Story } from '../../data/types'
import PillTag from '../layout/PillTag'

interface StoryCardProps {
  story: Story
  /** Full-width feed variant (Marmalade-style) vs stacked cover block */
  variant?: 'feed' | 'cover'
}

/**
 * Story card, image, byline (avatar+name), pill tag, Fraunces title,
 * excerpt (Section 5). 'cover' = stacked cover-story block for the
 * homepage; 'feed' = full-width single-column feed card.
 */
export default function StoryCard({ story, variant = 'feed' }: StoryCardProps) {
  if (variant === 'cover') {
    return (
      <Link
        to={`/stories/${story.slug}`}
        className="group relative block overflow-hidden border border-brown/20 bg-brown-deep"
      >
        <img
          src={story.image}
          alt={story.imageAlt}
          className="h-72 w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-70 sm:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-3">
            <PillTag className="border-cream/40 text-cream">{story.pillar}</PillTag>
            <span className="font-label text-xs uppercase tracking-wider text-cream/70">
              {story.readTime}
            </span>
          </div>
          <h3 className="font-display text-2xl font-semibold leading-tight text-cream sm:text-3xl">
            {story.title}
          </h3>
          <p className="mt-2 max-w-xl font-body text-sm text-cream/80">{story.dek}</p>
          <div className="mt-4 flex items-center gap-3">
            <img
              src={story.author.avatar}
              alt={story.author.name}
              className="byline-avatar border-cream/30"
            />
            <span className="font-label text-xs uppercase tracking-wider text-cream/80">
              {story.author.name}
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <article className="border-b border-brown/15 py-10 first:pt-0 last:border-b-0">
      <Link to={`/stories/${story.slug}`} className="group block">
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <img
              src={story.image}
              alt={story.imageAlt}
              className="aspect-[4/3] w-full border border-brown/20 object-cover"
            />
          </div>
          <div className="md:col-span-8">
            <div className="mb-3 flex items-center gap-3">
              <PillTag>{story.pillar}</PillTag>
              <span className="font-label text-xs uppercase tracking-wider text-brown">
                {story.publishedAt}
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-gold sm:text-3xl">
              {story.title}
            </h3>
            <p className="mt-2 font-body text-sm text-brown">{story.dek}</p>
            <p className="mt-3 max-w-2xl font-body text-base text-ink/80">
              {story.excerpt}
            </p>
            <div className="byline mt-5">
              <img src={story.author.avatar} alt={story.author.name} className="byline-avatar" />
              <span>{story.author.name}</span>
              <span className="text-brown/50">·</span>
              <span className="text-brown/70">{story.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}