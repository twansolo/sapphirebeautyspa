import { artists } from '../data/artists';
import ArtistCard from './ArtistCard';

/**
 * Artists section.
 *
 * PLACEHOLDER STUB (FEAT-001): maps the artists data to ArtistCard. Prominent
 * editorial styling and layout arrive in a later feature.
 */
function ArtistsSection() {
  return (
    <section id="artists" className="section section--alt">
      <div className="container">
        <span className="eyebrow">The Artists</span>
        <h2>
          Different specialties.
          <br />
          One beautiful space.
        </h2>
        <div className="artists__grid">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArtistsSection;
