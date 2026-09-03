import { useState } from 'react'
import PageShell from '../components/layout/PageShell'
import StampButton from '../components/layout/StampButton'

/**
 * Contact, simple form. Inputs get the monospace-label, bordered
 * treatment (Section 2). No generic agency phrasing (Section 6).
 */
export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <PageShell
      folio={1}
      total={2}
      eyebrow="Contact"
      title="Let's Talk"
      dek="A story to pitch, a seat to save, or a partnership to explore, write to us."
    >
      <section className="border-b border-brown/20 bg-cream-deep">
        <div className="mx-auto max-w-3xl px-4 py-12">
          {sent ? (
            <p className="font-label text-sm uppercase tracking-wider text-gold">
              Message received. We'll be in touch.
            </p>
          ) : (
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-label text-xs uppercase tracking-widest text-brown">
                    Name
                  </label>
                  <input id="name" type="text" required placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-label text-xs uppercase tracking-widest text-brown">
                    Email
                  </label>
                  <input id="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-label text-xs uppercase tracking-widest text-brown">
                  Subject
                </label>
                <input id="subject" type="text" placeholder="What's this about?" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-label text-xs uppercase tracking-widest text-brown">
                  Message
                </label>
                <textarea id="message" rows={5} required placeholder="Tell us more…" />
              </div>
              <div>
                <StampButton type="submit" variant="primary">
                  Send
                </StampButton>
              </div>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  )
}