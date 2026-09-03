'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageShell from '@/components/layout/PageShell'
import StampButton from '@/components/layout/StampButton'
import { stories } from '@/data/stories'

/**
 * Search, simple client-side search over story titles/excerpts.
 * Inputs get the monospace-label, bordered treatment (Section 2).
 */
export default function Search() {
  const [query, setQuery] = useState('')

  const results = query.trim()
    ? stories.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          s.pillar.toLowerCase().includes(query.toLowerCase()),
      )
    : []

  return (
    <PageShell
      folio={1}
      total={2}
      eyebrow="Search"
      title="Search the Archive"
      dek="Find a story, a name, or a place."
    >
      <section className="border-b border-brown/20 bg-cream-deep">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search stories, pillars, places…"
              className="flex-1"
              aria-label="Search"
            />
            <StampButton type="button" variant="primary">
              Search
            </StampButton>
          </div>

          {query.trim() && (
            <div className="mt-8">
              {results.length === 0 ? (
                <p className="font-body text-brown">No results for "{query}".</p>
              ) : (
                <ul className="divide-y divide-brown/15 border border-brown/20">
                  {results.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/stories/${s.slug}`}
                        className="block p-4 transition-colors hover:bg-cream"
                      >
                        <span className="font-label text-xs uppercase tracking-wider text-gold">
                          {s.pillar}
                        </span>
                        <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                          {s.title}
                        </h3>
                        <p className="mt-1 font-body text-sm text-brown">{s.excerpt}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  )
}