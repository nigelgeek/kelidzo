import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface StampButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  to?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
}

/**
 * Stamp button, short, all-caps, --font-label, styled like a rubber
 * stamp. Primary = solid fill, Secondary = outline (Section 3 / 5).
 */
export default function StampButton({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  onClick,
  className = '',
}: StampButtonProps) {
  const classes =
    variant === 'primary'
      ? 'stamp-btn-primary'
      : 'stamp-btn-secondary'

  const combined = `${classes} ${className}`

  if (to) {
    return (
      <Link to={to} className={combined}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  )
}