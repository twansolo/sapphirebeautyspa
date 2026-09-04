import BookButton from './BookButton';

/**
 * Split-screen hero.
 *
 * Left column carries the editorial headline and the two primary CTAs; the
 * right column holds a full-bleed luxury beauty photograph. On mobile the two
 * columns stack (content first) and stay readable.
 *
 * "Book an Appointment" opens GlossGenius in a new tab via BookButton.
 * "Explore Services" is an in-page anchor that smooth-scrolls to #services.
 *
 * TODO: replace HERO_IMAGE with real luxury beauty photography (an eyelash
 * application or close-up beauty service works best here).
 */
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Beauty, Refined.</span>
          <h1 className="hero__headline">
            Elevated lash, brow, skin &amp; permanent beauty services.
          </h1>
          <p className="hero__location">Cedar Rapids, Iowa</p>
          <div className="hero__actions">
            <BookButton>Book an Appointment</BookButton>
            <a className="btn btn-outline" href="#services">
              Explore Services
            </a>
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
