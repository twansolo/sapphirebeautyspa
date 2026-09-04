import { artists } from '../data/artists';
import ArtistCard from './ArtistCard';

/**
 * Artists section.
 *
 * Visually prominent block that maps the artists data to ArtistCard. The
 * founder (Colby) is rendered first and gains subtle emphasis inside
 * ArtistCard; Emi and Reegan present as equal, clearly-independent peers.
 * Layout is 3-up on desktop and stacks on mobile.
 */
function ArtistsSection() {
  return (
    <section id="artists" className="section section--alt artists">
      <div className="container">
        <header className="artists__head">
          <span className="eyebrow">The Artists</span>
          <h2 className="artists__headline">
            Different specialties.
            <br />
            One beautiful space.
          </h2>
        </header>
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
