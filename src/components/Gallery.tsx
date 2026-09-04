import { useMemo, useState } from 'react';
import { gallery } from '../data/gallery';
import type { GalleryCategory } from '../data/gallery';

/**
 * Results gallery with category filtering.
 *
 * Filter chips (All / Lashes / Brows / Skin / PMU) expose their active state
 * via aria-pressed and are fully keyboard operable (native <button>). The grid
 * is rendered from src/data/gallery.ts and re-filtered client-side. A subtle
 * fade animation runs on the grid when the filter changes; it is disabled for
 * users who prefer reduced motion (handled in global.css).
 *
 * TODO: swap the Unsplash placeholders in src/data/gallery.ts for real client
 * results photography (keep the descriptive `alt` text up to date).
 */
type Filter = 'All' | GalleryCategory;

const FILTERS: Filter[] = ['All', 'Lashes', 'Brows', 'Skin', 'PMU'];

function Gallery() {
  const [active, setActive] = useState<Filter>('All');

  const items = useMemo(
    () =>
      active === 'All'
        ? gallery
        : gallery.filter((item) => item.category === active),
    [active],
  );

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="gallery__head">
          <span className="eyebrow">Real Results</span>
          <h2>See the artistry.</h2>
        </div>

        <div className="gallery__filters" role="group" aria-label="Filter gallery by category">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className="gallery__filter"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* `key` forces a remount per filter so the fade-in transition replays. */}
        <ul key={active} className="gallery__grid" aria-live="polite">
          {items.map((item) => (
            <li key={item.id} className="gallery__item">
              <img src={item.imageUrl} alt={item.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
