import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FolioLabel from '@/components/layout/FolioLabel'
import PillTag from '@/components/layout/PillTag'
import StampButton from '@/components/layout/StampButton'
import RecommendedRail from '@/components/modules/RecommendedRail'
import { stories } from '@/data/stories'

// ISR: regenerate these pages at most every 60 seconds.
export const revalidate = 60

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const story = stories.find((s) => s.slug === params.slug)
  return {
    title: story ? `${story.title} | Kelidzo` : 'Kelidzo',
    description: story?.dek,
  }
}

/**
 * Story detail, single story. Uses the same tokens/motifs as the
 * feed cards (byline, pill tag, Fraunces title).
 */
export default function StoryDetail({ params }: { params: { slug: string } }) {
  const story = stories.find((s) => s.slug === params.slug)

  if (!story) {
    notFound()
  }

  const recommended = stories.filter((s) => s.id !== story.id).slice(0, 3)

  return (
    <main>
      <article>
        <header className="border-b border-brown/20">
          <div className="mx-auto max-w-3xl px-4 py-12">
            <FolioLabel current={1} total={3} label="Story" />
            <div className="mt-4 flex items-center gap-3">
              <PillTag>{story.pillar}</PillTag>
              <span className="font-label text-xs uppercase tracking-wider text-brown">
                {story.publishedAt}
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {story.title}
            </h1>
            <p className="mt-4 font-body text-lg text-brown">{story.dek}</p>
            <div className="byline mt-6">
              <img src={story.author.avatar} alt={story.author.name} className="byline-avatar" />
              <span>{story.author.name}</span>
              <span className="text-brown/50">·</span>
              <span className="text-brown/70">{story.author.role}</span>
            </div>
          </div>
        </header>

        <div className="border-b border-brown/20">
          <div className="mx-auto max-w-3xl px-4 py-8">
            <img
              src={story.image}
              alt={story.imageAlt}
              className="w-full border border-brown/20 object-cover"
            />
          </div>
        </div>

        <div className="border-b border-brown/20 bg-cream-deep">
          <div className="mx-auto max-w-3xl px-4 py-10">
            <p className="font-body text-lg leading-relaxed text-ink">{story.excerpt}</p>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink">
              {/* PLACEHOLDER BODY, replace with real editorial content before launch. */}
              This is placeholder body copy. The full story will live here once the
              editorial team files the piece. For now, the excerpt above stands in for the
              complete narrative.
            </p>
            <div className="mt-8">
              <StampButton to="/stories" variant="secondary">
                Back to Stories
              </StampButton>
            </div>
          </div>
        </div>
      </article>

      <section className="border-b border-brown/20">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <FolioLabel current={2} total={3} label="Recommended" />
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
            Keep Reading
          </h2>
          <div className="mt-6">
            <RecommendedRail stories={recommended} />
          </div>
        </div>
      </section>
    </main>
  )
}