import { testimonials } from '../data/testimonials';

/**
 * Testimonials section.
 *
 * PLACEHOLDER STUB (FEAT-001): renders 3 testimonial cards with star ratings
 * from data. Card styling is refined in a later feature.
 */
function Testimonials() {
  return (
    <section className="section section--alt">
      <div className="container">
        <span className="eyebrow">Kind Words</span>
        <h2>Trusted by our clients.</h2>
        <ul className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="testimonials__card">
              <p
                className="testimonials__rating"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                <span aria-hidden="true">{'★'.repeat(testimonial.rating)}</span>
              </p>
              <blockquote>{testimonial.quote}</blockquote>
              <p className="testimonials__attribution">{testimonial.attribution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
