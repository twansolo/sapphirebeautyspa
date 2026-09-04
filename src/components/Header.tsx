import { useEffect, useRef, useState } from 'react';
import BookButton from './BookButton';

/**
 * Site header / navigation.
 *
 * Sticky on all viewports with a subtle translucent cream background and a
 * thin bottom border. Desktop shows the full anchor nav inline; below the
 * breakpoint the links collapse into an accessible hamburger menu.
 *
 * Accessibility:
 *  - The toggle exposes aria-expanded / aria-controls / aria-label.
 *  - Escape closes the menu and returns focus to the toggle.
 *  - Selecting any link closes the menu.
 *  - All controls are keyboard operable with visible focus states.
 *
 * Anchor links rely on the global `scroll-behavior: smooth` +
 * `scroll-padding-top` so they clear the sticky header when navigating.
 */
const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#artists', label: 'Artists' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const MENU_ID = 'primary-navigation';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setMenuOpen(false);

  // Close on Escape and return focus to the toggle.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#home" className="site-header__brand" onClick={closeMenu}>
          Sapphire Beauty Studio
        </a>

        <nav
          id={MENU_ID}
          className={`site-header__nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="site-header__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <BookButton className="site-header__mobile-cta" onClick={closeMenu}>
            Book Now
          </BookButton>
        </nav>

        <div className="site-header__actions">
          <BookButton className="btn--sm site-header__desktop-cta">
            Book Now
          </BookButton>
          <button
            ref={toggleRef}
            type="button"
            className="site-header__toggle"
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="site-header__toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
