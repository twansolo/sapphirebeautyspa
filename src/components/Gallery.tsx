import { gallery } from '../data/gallery';

/**
 * Results gallery.
 *
 * PLACEHOLDER STUB (FEAT-001): renders the responsive grid from data. The
 * filterable chips (All / Lashes / Brows / Skin / PMU) and filtering animation
 * arrive in a later feature.
 */
function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <span className="eyebrow">Real Results</span>
        <h2>See the artistry.</h2>
        <ul className="gallery__grid">
          {gallery.map((item) => (
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
