import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FolioLabel from '@/components/layout/FolioLabel'
import PillTag from '@/components/layout/PillTag'
import StampButton from '@/components/layout/StampButton'
import { programmes } from '@/data/programmes'

// ISR: regenerate these pages at most every 60 seconds.
export const revalidate = 60

export function generateStaticParams() {
  return programmes.map((prog) => ({ slug: prog.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const prog = programmes.find((p) => p.slug === params.slug)
  return {
    title: prog ? `${prog.title} | Kelidzo` : 'Kelidzo',
    description: prog?.description,
  }
}

/**
 * Programme detail, single programme with date/time and format.
 */
export default function ProgrammeDetail({ params }: { params: { slug: string } }) {
  const prog = programmes.find((p) => p.slug === params.slug)

  if (!prog) {
    notFound()
  }

  return (
    <main>
      <section className="border-b border-brown/20">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <FolioLabel current={1} total={2} label="Programme" />
          <div className="mt-4 flex items-center gap-3">
            <PillTag>{prog.type}</PillTag>
            <span className="font-label text-xs uppercase tracking-wider text-brown">
              {prog.format}
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            {prog.title}
          </h1>
          <p className="mt-4 font-body text-lg text-brown">{prog.description}</p>
          <div className="mt-6 border border-brown/20 bg-cream-deep p-5">
            <span className="font-label text-xs uppercase tracking-widest text-brown">
              Date
            </span>
            <p className="mt-1 font-label text-2xl text-gold">{prog.date}</p>
            <span className="mt-4 block font-label text-xs uppercase tracking-widest text-brown">
              Format
            </span>
            <p className="mt-1 font-label text-lg text-ink">{prog.format}</p>
          </div>
          <div className="mt-8">
            <StampButton to="/contact" variant="primary">
              Save Your Seat
            </StampButton>
          </div>
        </div>
      </section>
    </main>
  )
}