'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import FolioLabel from '@/components/layout/FolioLabel'
import PillTag from '@/components/layout/PillTag'
import StampButton from '@/components/layout/StampButton'
import StoryCard from '@/components/cards/StoryCard'
import RecommendedRail from '@/components/modules/RecommendedRail'
import { stories } from '@/data/stories'
import { pillars } from '@/data/pillars'
import type { PillarName } from '@/data/types'

const TOTAL_SECTIONS = 4

/**
 * Stories index, Marmalade-style single-column feed (Section 4):
 * full-width StoryCards with byline, pill filter row for the 5
 * pillars, a "Recommended" thumbnail rail, and a stamp-styled
 * "Load More" button instead of numbered pagination.
 */
export default function Stories() {
  return (
    <Suspense fallback={null}>
      <StoriesContent />
    </Suspense>
  )
}

function StoriesContent() {
  const searchParams = useSearchParams()
  const activePillar = (searchParams.get('pillar') ?? '') as PillarName | ''
  const [visibleCount, setVisibleCount] = useState(5)

  const filtered = activePillar
    ? stories.filter((s) => s.pillar.toLowerCase() === activePillar.toLowerCase())
    : stories

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const setPillar = (pillar: PillarName | '') => {
    setVisibleCount(5)
    const url = pillar
      ? `/stories?pillar=${pillar.toLowerCase()}`
      : '/stories'
    window.location.href = url
  }

  return (
    <main>
      {/* Feed header */}
      <section className="border-b border-brown/20">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <FolioLabel current={1} total={TOTAL_SECTIONS} label="Stories" />
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            The Stories
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-brown">
            A single-column feed of the stories we're telling, one after another, with
            room to breathe.
          </p>

          {/* Pill filter row for the 5 pillars */}
          <div className="mt-8 flex flex-wrap gap-2">
            <PillTag active={!activePillar} onClick={() => setPillar('')}>
              All
            </PillTag>
            {pillars.map((p) => (
              <PillTag
                key={p.name}
                active={activePillar === p.name.toLowerCase()}
                onClick={() => setPillar(p.name)}
              >
                {p.name}
              </PillTag>
            ))}
          </div>
        </div>
      </section>

      {/* Feed */}
      <section className="border-b border-brown/20 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <FolioLabel current={2} total={TOTAL_SECTIONS} />
          <div className="mt-4">
            {visible.map((story) => (
              <StoryCard key={story.id} story={story} variant="feed" />
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 flex justify-center">
              <StampButton
                variant="secondary"
                onClick={() => setVisibleCount((c) => c + 5)}
              >
                Load More
              </StampButton>
            </div>
          )}
        </div>
      </section>

      {/* Recommended rail */}
      <section className="border-b border-brown/20">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <FolioLabel current={3} total={TOTAL_SECTIONS} label="Recommended" />
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Worth Your Time
          </h2>
          <div className="mt-6">
            <RecommendedRail stories={stories.slice(0, 3)} />
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section className="border-b border-brown/20 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <FolioLabel current={4} total={TOTAL_SECTIONS} label="Contributors" />
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Meet the Contributors
          </h2>
          <div className="mt-6 flex flex-wrap gap-6">
            {stories
              .map((s) => s.author)
              .filter((a, i, arr) => arr.findIndex((x) => x.name === a.name) === i)
              .map((author) => (
                <div key={author.name} className="flex items-center gap-3">
                  <img src={author.avatar} alt={author.name} className="byline-avatar" />
                  <div>
                    <p className="font-label text-sm uppercase tracking-wider text-ink">
                      {author.name}
                    </p>
                    <p className="font-label text-xs uppercase tracking-wider text-brown">
                      {author.role}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}