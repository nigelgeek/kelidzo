import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FolioLabel from '@/components/layout/FolioLabel'
import PillTag from '@/components/layout/PillTag'
import StampButton from '@/components/layout/StampButton'
import { opportunities } from '@/data/opportunities'

// ISR: regenerate these pages at most every 60 seconds.
export const revalidate = 60

export function generateStaticParams() {
  return opportunities.map((opp) => ({ slug: opp.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const opp = opportunities.find((o) => o.slug === params.slug)
  return {
    title: opp ? `${opp.title} | Kelidzo` : 'Kelidzo',
    description: opp?.description,
  }
}

/**
 * Opportunity detail, single opportunity with prominent deadline.
 */
export default function OpportunityDetail({ params }: { params: { slug: string } }) {
  const opp = opportunities.find((o) => o.slug === params.slug)

  if (!opp) {
    notFound()
  }

  return (
    <main>
      <section className="border-b border-brown/20">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <FolioLabel current={1} total={2} label="Opportunity" />
          <div className="mt-4 flex items-center gap-3">
            <PillTag>{opp.type}</PillTag>
            <span className="font-label text-xs uppercase tracking-wider text-brown">
              {opp.org}
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            {opp.title}
          </h1>
          <p className="mt-4 font-body text-lg text-brown">{opp.description}</p>
          <div className="mt-6 border border-brown/20 bg-cream-deep p-5">
            <span className="font-label text-xs uppercase tracking-widest text-brown">
              Deadline
            </span>
            <p className="mt-1 font-label text-2xl text-gold">{opp.deadline}</p>
          </div>
          <div className="mt-8">
            <StampButton to="/contact" variant="primary">
              Apply
            </StampButton>
          </div>
        </div>
      </section>
    </main>
  )
}