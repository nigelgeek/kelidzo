import type { ReactNode } from 'react'
import FolioLabel from './FolioLabel'
import StampButton from './StampButton'

interface PageShellProps {
  folio: number
  total: number
  eyebrow: string
  title: string
  dek?: string
  cta?: { label: string; to: string }
  children?: ReactNode
}

/**
 * Shared page shell for the simpler listing/static pages so they
 * follow the same folio-numbered, bordered rail pattern as the
 * homepage instead of inventing new layouts.
 */
export default function PageShell({
  folio,
  total,
  eyebrow,
  title,
  dek,
  cta,
  children,
}: PageShellProps) {
  return (
    <main>
      <section className="border-b border-brown/20">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <FolioLabel current={folio} total={total} label={eyebrow} />
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            {title}
          </h1>
          {dek && <p className="mt-4 max-w-2xl font-body text-lg text-brown">{dek}</p>}
          {cta && (
            <div className="mt-8">
              <StampButton to={cta.to} variant="secondary">
                {cta.label}
              </StampButton>
            </div>
          )}
        </div>
      </section>
      {children}
    </main>
  )
}