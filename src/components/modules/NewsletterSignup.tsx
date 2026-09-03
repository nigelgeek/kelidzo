import { useState } from 'react'
import StampButton from '../layout/StampButton'

interface NewsletterSignupProps {
  variant?: 'full' | 'compact'
}

/**
 * Newsletter signup, full variant (homepage) + compact variant
 * (footer) (Section 5). Inputs get the monospace-label, bordered
 * treatment (Section 2 ban on unstyled form inputs).
 */
export default function NewsletterSignup({ variant = 'full' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <p className="font-label text-sm uppercase tracking-wider text-gold">
        You're in. Welcome to the real thing.
      </p>
    )
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="footer-email" className="font-label text-xs uppercase tracking-widest text-brown">
          Newsletter
        </label>
        <div className="flex">
          <input
            id="footer-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border-r-0"
          />
          <StampButton type="submit" variant="primary" className="px-4">
            Join
          </StampButton>
        </div>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1"
        aria-label="Email address"
      />
      <StampButton type="submit" variant="primary">
        Get the Real Thing
      </StampButton>
    </form>
  )
}