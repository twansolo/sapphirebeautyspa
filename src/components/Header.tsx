import BookButton from './BookButton';

/**
 * Site header / navigation.
 *
 * PLACEHOLDER STUB (FEAT-001): renders the brand, anchor nav and a BOOK NOW
 * CTA so the app is structurally complete. Sticky behaviour, the mobile
 * hamburger menu and polished styling are added in a later feature.
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

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#home" className="site-header__brand">
          Sapphire Beauty Studio
        </a>
        <nav aria-label="Primary">
          <ul className="site-header__nav">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <BookButton className="btn--sm">Book Now</BookButton>
      </div>
    </header>
  );
}

export default Header;
