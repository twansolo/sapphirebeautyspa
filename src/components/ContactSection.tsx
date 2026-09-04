import BookButton from './BookButton';
import { STUDIO } from '../data/constants';

/**
 * Visit / contact section with the final booking CTA.
 *
 * PLACEHOLDER STUB (FEAT-001): correct copy, location and CTAs are in place.
 * The studio image and refined layout arrive in a later feature.
 *
 * TODO: replace the studio image with real interior photography.
 */
const STUDIO_IMAGE =
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1000&q=80';

function ContactSection() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container contact__inner">
        <div className="contact__media">
          <img
            src={STUDIO_IMAGE}
            alt="Interior of Sapphire Beauty Studio"
            loading="lazy"
          />
        </div>
        <div className="contact__content">
          <span className="eyebrow">Visit Sapphire</span>
          <h2>A beauty experience designed for you.</h2>
          <address className="contact__address">
            {STUDIO.addressLine}
            <br />
            {STUDIO.city}
          </address>

          <p className="contact__final-headline">
            Your next appointment starts here.
          </p>
          <BookButton>Book at Sapphire</BookButton>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
