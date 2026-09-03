import PageShell from '../components/layout/PageShell'
import ArchiveCard from '../components/cards/ArchiveCard'
import { archive } from '../data/archive'

/**
 * Archive index, Marmalade-style feed of mixed-type ArchiveCards.
 */
export default function Archive() {
  return (
    <PageShell
      folio={1}
      total={2}
      eyebrow="Archive"
      title="History Doesn't Expire Here."
      dek="Interviews, photographs, stories, and events, the record we're keeping."
    >
      <section className="border-b border-brown/20 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((item) => (
              <ArchiveCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}