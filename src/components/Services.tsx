import type { ServiceIcon } from '../data/services';
import { services } from '../data/services';

/**
 * Service categories grid.
 *
 * Renders the five high-level categories from src/data/services.ts. Each card
 * pairs a minimal stroke-based inline SVG (chosen by the data `icon` key) with
 * the category name, a short descriptor, and an "Explore" link that opens the
 * GlossGenius services list in a new tab. Individual bookable services are not
 * listed here by design.
 */

const iconProps = {
  width: 32,
  height: 32,
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};

const ICONS: Record<ServiceIcon, JSX.Element> = {
  // Lashes — an eye with radiating lashes.
  lashes: (
    <svg {...iconProps}>
      <path d="M4 18c3.5-5 20.5-5 24 0" />
      <path d="M16 21.5a4.5 4.5 0 0 0 4.5-4.5" />
      <path d="M6 12l1.5 3M12 9l1 3.4M20 9l-1 3.4M26 12l-1.5 3" />
    </svg>
  ),
  // Brows — a single arched brow stroke.
  brows: (
    <svg {...iconProps}>
      <path d="M4 19c5-8 19-8 24-2" />
      <path d="M9 14.5l-1.5-2.5M15 12.7l-.8-2.7M21 13l1-2.6" />
    </svg>
  ),
  // Skin — a radiant droplet / glow motif.
  skin: (
    <svg {...iconProps}>
      <path d="M16 4c4 5 7 8.5 7 13a7 7 0 1 1-14 0c0-4.5 3-8 7-13Z" />
      <path d="M13 18a3 3 0 0 0 3 3" />
    </svg>
  ),
  // Permanent beauty — a fine liner pen.
  pmu: (
    <svg {...iconProps}>
      <path d="M22 5l5 5-15 15-6 1 1-6L22 5Z" />
      <path d="M19 8l5 5" />
    </svg>
  ),
  // Waxing + beauty — a soft blossom / bloom.
  waxing: (
    <svg {...iconProps}>
      <circle cx="16" cy="16" r="3.2" />
      <path d="M16 4a4 4 0 0 1 0 8M16 20a4 4 0 0 1 0 8M4 16a4 4 0 0 1 8 0M20 16a4 4 0 0 1 8 0" />
    </svg>
  ),
};

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <header className="services__head">
          <span className="eyebrow">Our Services</span>
          <h2>Curated beauty services.</h2>
        </header>
        <ul className="services__grid">
          {services.map((service) => (
            <li key={service.id} className="services__card">
              <span className="services__icon">{ICONS[service.icon]}</span>
              <h3 className="services__name">{service.name}</h3>
              <p className="services__descriptor">{service.descriptor}</p>
              <a
                className="link-arrow services__link"
                href={service.exploreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Explore ${service.name} services`}
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
