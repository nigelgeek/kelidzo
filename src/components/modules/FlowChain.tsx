interface FlowChainProps {
  steps: string[]
}

/**
 * Flow chain, arrow-connected labeled steps for journeys
 * (Section 3). Horizontal on desktop, vertical on mobile.
 */
export default function FlowChain({ steps }: FlowChainProps) {
  return (
    <ol className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
      {steps.map((step, i) => (
        <li key={step} className="flex flex-1 flex-col md:flex-row md:items-center">
          <div className="flex flex-1 flex-col border border-brown/20 bg-cream p-5">
            <span className="font-label text-xs uppercase tracking-widest text-gold">
              Step {String(i + 1).padStart(2, '0')}
            </span>
            <span className="mt-2 font-body text-sm text-ink">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="mx-auto my-2 font-display text-2xl text-gold md:mx-2 md:my-0"
            >
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}