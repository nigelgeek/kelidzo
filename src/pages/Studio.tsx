import PageShell from '../components/layout/PageShell'
import StampButton from '../components/layout/StampButton'
import BrowserChromeFrame from '../components/modules/BrowserChromeFrame'

/**
 * Creative Studio, must feel secondary to the editorial identity
 * (Section 6): less nav weight, no agency-pitch language, appears
 * after cultural sections. Browser-chrome frame is reserved ONLY
 * for Studio/Selected Work screenshots (Section 3).
 */
export default function Studio() {
  return (
    <PageShell
      folio={1}
      total={2}
      eyebrow="Studio"
      title="We Don't Do Culture Washing. We Do the Work."
      dek="Kelidzo Studio partners with organizations that want to fund, commission, and publish real cultural work, not perform it."
    >
      <section className="border-b border-brown/20 bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
            Selected Work
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <BrowserChromeFrame url="kelidzo.studio/work/community-archive">
              <div className="flex aspect-[4/3] items-center justify-center border border-brown/20 bg-cream-deep">
                <span className="font-label text-sm uppercase tracking-widest text-brown">
                  Community Archive Project
                </span>
              </div>
            </BrowserChromeFrame>
            <BrowserChromeFrame url="kelidzo.studio/work/first-voice">
              <div className="flex aspect-[4/3] items-center justify-center border border-brown/20 bg-cream-deep">
                <span className="font-label text-sm uppercase tracking-widest text-brown">
                  First Voice Commission
                </span>
              </div>
            </BrowserChromeFrame>
          </div>
          <div className="mt-10">
            <StampButton to="/contact" variant="secondary">
              Bring Us In
            </StampButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}