import { BOOKING_URL, SOCIAL_LINKS, STUDIO } from '../data/constants';

/**
 * Site footer (dark sapphire navy).
 *
 * PLACEHOLDER STUB (FEAT-001): brand, social placeholders, quick links and
 * copyright. Polished layout arrives in a later feature.
 *
 * TODO: replace the "#" social links in src/data/constants.ts with real URLs.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer section--navy">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{STUDIO.name}</p>
          <p>
            {STUDIO.addressLine}, {STUDIO.city}
          </p>
        </div>

        <nav aria-label="Social" className="site-footer__col">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
        </nav>

        <nav aria-label="Footer" className="site-footer__col">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Booking
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Policies
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="container site-footer__legal">
        <p>
          &copy; {year} {STUDIO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
