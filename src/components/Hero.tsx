import BookButton from './BookButton';
import { SERVICES_URL } from '../data/constants';

/**
 * Split-screen hero.
 *
 * PLACEHOLDER STUB (FEAT-001): correct copy, anchor id and CTAs are in place;
 * the split-screen layout and imagery are polished in a later feature.
 *
 * TODO: replace the hero image with real luxury beauty photography.
 */
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Beauty, Refined.</span>
          <h1>Elevated lash, brow, skin &amp; permanent beauty services.</h1>
          <p className="hero__location">Cedar Rapids, Iowa</p>
          <div className="hero__actions">
            <BookButton>Book an Appointment</BookButton>
            <BookButton href={SERVICES_URL} variant="outline">
              Explore Services
            </BookButton>
          </div>
        </div>
        <div className="hero__media">
          <img
            src={HERO_IMAGE}
            alt="Close-up of a professional lash application at Sapphire Beauty Studio"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
