import type { ReactNode } from 'react';
import { BOOKING_URL } from '../data/constants';

/**
 * Reusable booking CTA.
 *
 * Renders an anchor that always opens the target in a new tab with safe rel
 * attributes. Defaults to the main GlossGenius booking URL, so every booking
 * CTA across the site can reuse this.
 */
export interface BookButtonProps {
  /** Destination URL. Defaults to the main GlossGenius booking page. */
  href?: string;
  /** Visible label. */
  children: ReactNode;
  /** Style variant, mapped to the shared .btn-* classes. */
  variant?: 'primary' | 'outline';
  /** Extra classes for layout tweaks. */
  className?: string;
  /** Optional accessible label override (useful for "Book with {Name}"). */
  ariaLabel?: string;
}

function BookButton({
  href = BOOKING_URL,
  children,
  variant = 'primary',
  className = '',
  ariaLabel,
}: BookButtonProps) {
  const variantClass = variant === 'outline' ? 'btn-outline' : 'btn-primary';

  return (
    <a
      className={`btn ${variantClass} ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export default BookButton;
