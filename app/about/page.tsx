import PageShell from '@/components/layout/PageShell'
import StampButton from '@/components/layout/StampButton'

/**
 * About, brand explainer. No agency/startup phrasing (Section 6).
 */
export default function About() {
  return (
    <PageShell
      folio={1}
      total={2}
      eyebrow="About"
      title="More Than a Publication"
      dek="Kelidzo is a cultural editorial studio documenting, connecting, and creating for African and Black communities across Western Canada and the diaspora."
    >
      <section className="border-b border-brown/20 bg-cream-deep">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <p className="font-body text-lg leading-relaxed text-ink">
            We document the stories that aren't being told. We connect the people who are
            telling them. And we create the opportunities that let those stories reach the
            world.
          </p>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink">
            Kelidzo is a record, a gathering place, and a door, all at once. We are warm,
            thoughtful, and confident-never-superior. We keep a well-kept dossier, not a
            startup landing page.
          </p>
          <div className="mt-8">
            <StampButton to="/stories" variant="secondary">
              Read Our Stories
            </StampButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}