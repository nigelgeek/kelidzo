import FolioLabel from '@/components/layout/FolioLabel'
import StampButton from '@/components/layout/StampButton'
import StoryCard from '@/components/cards/StoryCard'
import PillarTile from '@/components/cards/PillarTile'
import OpportunityCard from '@/components/cards/OpportunityCard'
import ProgrammeCard from '@/components/cards/ProgrammeCard'
import NewsletterSignup from '@/components/modules/NewsletterSignup'
import { stories } from '@/data/stories'
import { pillars } from '@/data/pillars'
import { opportunities } from '@/data/opportunities'
import { programmes } from '@/data/programmes'

const TOTAL_SECTIONS = 7

/**
 * Homepage, NATIVE-style layout (Section 4): stacked cover-story
 * hero blocks, then a vertical sequence of distinct rails.
 * Section order follows the brief exactly (01–07).
 */
export default function Home() {
  return (
    <main>
      {/* 01, Hero */}
      <section
        className="relative overflow-hidden border-b border-brown/20 bg-brown-deep bg-cover bg-center"
        style={{ backgroundImage: "url('/images/story-home.jpg')" }}
      >
        <div className="absolute inset-0 bg-ink-deep/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <FolioLabel current={1} total={TOTAL_SECTIONS} label="Kelidzo" className="text-cream/70" />
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-7xl">
            Where Culture Lives.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg text-cream/85">
            Kelidzo documents the people, stories, and culture of African and Black
            communities across Western Canada and the diaspora, a living archive, not a
            headline.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <StampButton
              to="/community"
              variant="primary"
              className="!bg-gold !text-ink hover:!bg-gold-bright"
            >
              Step Into Kelidzo
            </StampButton>
            <StampButton
              to="/stories"
              variant="secondary"
              className="!border-cream !text-cream hover:!bg-cream hover:!text-ink"
            >
              Read Our Stories
            </StampButton>
          </div>
        </div>
      </section>

      {/* 02, Featured Stories */}
      <section className="border-b border-brown/20 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <FolioLabel current={2} total={TOTAL_SECTIONS} />
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Nobody Else Is Telling This.
              </h2>
            </div>
            <StampButton to="/stories" variant="secondary" className="hidden sm:inline-flex">
              Read the Unheard
            </StampButton>
          </div>
          {/* 3-column cover-story blocks */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stories.slice(0, 3).map((story) => (
              <StoryCard key={story.id} story={story} variant="cover" />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <StampButton to="/stories" variant="secondary" className="w-full">
              Read the Unheard
            </StampButton>
          </div>
        </div>
      </section>

      {/* 03, What Is Kelidzo */}
      <section className="border-b border-brown/20">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <FolioLabel current={3} total={TOTAL_SECTIONS} />
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            More Than a Publication
          </h2>
          <p className="mt-6 max-w-3xl font-body text-lg text-brown">
            Kelidzo is a cultural editorial studio. We document the stories that aren't
            being told, connect the people who are telling them, and create the
            opportunities that let those stories reach the world.
          </p>
          <p className="mt-4 max-w-3xl font-body text-lg text-brown">
            We are a record, a gathering place, and a door, all at once.
          </p>
          <div className="mt-8">
            <StampButton to="/about" variant="secondary">
              Discover Kelidzo
            </StampButton>
          </div>
        </div>
      </section>

      {/* 04, Explore Culture (merged with Community) */}
      <section className="border-b border-brown/20 bg-ink-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <FolioLabel current={4} total={TOTAL_SECTIONS} className="text-cream/60" />
          <h2 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
            Explore Culture
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <PillarTile key={pillar.name} pillar={pillar} index={i} total={pillars.length} />
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-cream/15 pt-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold text-cream">
                Stop Reading. Start Showing Up.
              </h3>
              <p className="mt-2 max-w-xl font-body text-sm text-cream/80">
                Join a kitchen, host a listening circle, mentor a young maker. Culture is
                something you do.
              </p>
            </div>
            <StampButton to="/community" variant="primary">
              Show Up
            </StampButton>
          </div>
        </div>
      </section>

      {/* 05, Opportunities */}
      <section className="border-b border-brown/20">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <FolioLabel current={5} total={TOTAL_SECTIONS} />
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-ink sm:text-4xl">
                Somebody Needs to Fund This. Let It Be Us.
              </h2>
            </div>
            <StampButton to="/opportunities" variant="secondary" className="hidden sm:inline-flex">
              Go After It
            </StampButton>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.slice(0, 3).map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <StampButton to="/opportunities" variant="secondary" className="w-full">
              Go After It
            </StampButton>
          </div>

          {/* Studio callout (merged with Opportunities) */}
          <div className="mt-10 border border-brown/20 bg-ink p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-display text-xl font-semibold text-cream sm:text-2xl">
                  We Don't Do Culture Washing. We Do the Work.
                </h3>
                <p className="mt-2 max-w-2xl font-body text-sm text-cream/80">
                  Kelidzo Studio partners with organizations that want to fund, commission,
                  and publish real cultural work, not perform it.
                </p>
              </div>
              <StampButton to="/studio" variant="secondary">
                Bring Us In
              </StampButton>
            </div>
          </div>
        </div>
      </section>

      {/* 06, Programmes */}
      <section className="border-b border-brown/20 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <FolioLabel current={6} total={TOTAL_SECTIONS} />
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-ink sm:text-4xl">
                You Already Have the Story. We'll Help You Say It.
              </h2>
            </div>
            <StampButton to="/programmes" variant="secondary" className="hidden sm:inline-flex">
              Save Your Seat
            </StampButton>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.slice(0, 3).map((prog) => (
              <ProgrammeCard key={prog.id} programme={prog} />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <StampButton to="/programmes" variant="secondary" className="w-full">
              Save Your Seat
            </StampButton>
          </div>
        </div>
      </section>

      {/* 07, Newsletter */}
      <section id="newsletter" className="border-b border-brown/20 bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <FolioLabel current={7} total={TOTAL_SECTIONS} />
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            We're Not Sending You Noise.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-lg text-brown">
            One considered letter, when there's something worth saying. No spam, no
            filler, no noise.
          </p>
          <div className="mt-8 max-w-xl">
            <NewsletterSignup variant="full" />
          </div>
        </div>
      </section>
    </main>
  )
}