import { BOOKING_URL, SOCIAL_LINKS, STUDIO } from '../data/constants';

/**
 * Site footer (dark sapphire navy).
 *
 * Contains the brand, social placeholders, grouped quick links and a dynamic
 * current-year copyright. Cream text on navy meets accessible contrast.
 *
 * TODO: replace the "#" social links in src/data/constants.ts with the real
 * Instagram / Facebook / TikTok profile URLs.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer section--navy">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{STUDIO.name}</p>
          <p className="site-footer__address">
            {STUDIO.addressLine}, {STUDIO.city}
          </p>
        </div>

        <nav aria-label="Social media" className="site-footer__col">
          <h2 className="site-footer__heading">Follow</h2>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sapphire Beauty Studio on Instagram"
          >
            Instagram
          </a>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sapphire Beauty Studio on Facebook"
          >
            Facebook
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sapphire Beauty Studio on TikTok"
          >
            TikTok
          </a>
        </nav>

        <nav aria-label="Footer" className="site-footer__col">
          <h2 className="site-footer__heading">Explore</h2>
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
