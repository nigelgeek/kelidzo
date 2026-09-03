import PageShell from '../components/layout/PageShell'
import ProgrammeCard from '../components/cards/ProgrammeCard'
import { programmes } from '../data/programmes'

/**
 * Programmes index, rail of ProgrammeCards.
 */
export default function Programmes() {
  return (
    <PageShell
      folio={1}
      total={2}
      eyebrow="Programmes"
      title="You Already Have the Story. We'll Help You Say It."
      dek="Workshops, residencies, and series that turn lived experience into published work."
    >
      <section className="border-b border-brown/20 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((prog) => (
              <ProgrammeCard key={prog.id} programme={prog} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}