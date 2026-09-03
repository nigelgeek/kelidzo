import PageShell from '../components/layout/PageShell'
import OpportunityCard from '../components/cards/OpportunityCard'
import { opportunities } from '../data/opportunities'

/**
 * Opportunities index, rail of OpportunityCards.
 */
export default function Opportunities() {
  return (
    <PageShell
      folio={1}
      total={2}
      eyebrow="Opportunities"
      title="Somebody Needs to Fund This. Let It Be Us."
      dek="Grants, commissions, residencies, and calls, the doors we're holding open."
    >
      <section className="border-b border-brown/20 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}