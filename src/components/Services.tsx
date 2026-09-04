import { services } from '../data/services';

/**
 * Service categories grid.
 *
 * PLACEHOLDER STUB (FEAT-001): renders the 5 categories from data with their
 * explore links. Minimal icons and refined grid styling arrive in a later
 * feature.
 */
function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <span className="eyebrow">Our Services</span>
        <h2>Curated beauty services.</h2>
        <ul className="services__grid">
          {services.map((service) => (
            <li key={service.id} className="services__card">
              <h3>{service.name}</h3>
              <p>{service.descriptor}</p>
              <a
                className="link-arrow"
                href={service.exploreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore &rarr;
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
