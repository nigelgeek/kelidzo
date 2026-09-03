import PageShell from '@/components/layout/PageShell'
import FlowChain from '@/components/modules/FlowChain'
import StampButton from '@/components/layout/StampButton'

/**
 * Community, dark punctuation section + flow chain of ways to
 * participate (Section 3 / 5).
 */
export default function Community() {
  return (
    <PageShell
      folio={1}
      total={3}
      eyebrow="Community"
      title="Stop Reading. Start Showing Up."
      dek="Kelidzo is a gathering place as much as a publication. Here's how to be part of it."
    >
      <section className="border-b border-brown/20 bg-ink-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
            How to Show Up
          </h2>
          <div className="mt-8">
            <FlowChain
              steps={[
                'Find a gathering near you',
                'Bring a story or a skill',
                'Take part in the work',
                'Carry it forward',
              ]}
            />
          </div>
          <div className="mt-10">
            <StampButton to="/contact" variant="primary">
              Show Up
            </StampButton>
          </div>
        </div>
      </section>

      <section className="border-b border-brown/20">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Ways to Participate
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'Join a community kitchen',
              'Volunteer at an archive day',
              'Host a listening circle',
              'Mentor a young maker',
              'Bring a story to the table',
              'Show up for the people',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border border-brown/20 p-4 font-body text-ink"
              >
                <span className="font-display text-gold">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  )
}