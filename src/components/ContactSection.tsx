import BookButton from './BookButton';
import { BOOKING_URL, STUDIO } from '../data/constants';

/**
 * Visit / contact section with the final booking CTA.
 *
 * Shows the studio location, a booking-availability link into GlossGenius, and
 * a distinct final CTA band. All booking links open GlossGenius in a new tab.
 *
 * TODO: replace the studio image with real interior photography of the space.
 */
const STUDIO_IMAGE =
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1000&q=80';

function ContactSection() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__media">
            <img
              src={STUDIO_IMAGE}
              alt="Interior of Sapphire Beauty Studio in Cedar Rapids, Iowa"
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
            <p className="contact__note">
              Availability is updated in real time on our booking platform.
            </p>
            <a
              className="link-arrow"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check booking availability
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="contact__cta">
          <h3 className="contact__cta-headline">
            Your next appointment starts here.
          </h3>
          <BookButton>Book at Sapphire</BookButton>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
