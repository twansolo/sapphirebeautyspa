import { testimonials } from '../data/testimonials';

/**
 * Testimonials section.
 *
 * Renders three cards from src/data/testimonials.ts. Each star rating exposes
 * an accessible label ("Rated N out of 5 stars") while the star glyphs are
 * hidden from assistive tech. Attributions are intentionally generic — see the
 * TODO in the data file before replacing with real, permissioned reviews.
 */
function Testimonials() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="testimonials__head">
          <span className="eyebrow">Kind Words</span>
          <h2>Trusted by our clients.</h2>
        </div>

        <ul className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="testimonials__card">
              <p
                className="testimonials__rating"
                role="img"
                aria-label={`Rated ${testimonial.rating} out of 5 stars`}
              >
                <span aria-hidden="true">{'★'.repeat(testimonial.rating)}</span>
              </p>
              <blockquote className="testimonials__quote">
                {testimonial.quote}
              </blockquote>
              <p className="testimonials__attribution">
                {testimonial.attribution}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
