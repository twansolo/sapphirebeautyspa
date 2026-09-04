import type { Artist } from '../data/artists';
import BookButton from './BookButton';

/**
 * Single artist card.
 *
 * PLACEHOLDER STUB (FEAT-001): renders portrait, name, role, bio and a
 * "Book with {Name}" CTA. The founder is flagged via `artist.isFounder` so
 * later styling can give Colby appropriate hierarchy without diminishing the
 * independent artists.
 */
export interface ArtistCardProps {
  artist: Artist;
}

function ArtistCard({ artist }: ArtistCardProps) {
  const firstName = artist.name.split(' ')[0];

  return (
    <article className={`artist-card${artist.isFounder ? ' artist-card--founder' : ''}`}>
      <div className="artist-card__media">
        <img src={artist.portrait} alt={`Portrait of ${artist.name}`} loading="lazy" />
      </div>
      <h3 className="artist-card__name">{artist.name}</h3>
      <p className="artist-card__role">{artist.role}</p>
      <p className="artist-card__bio">{artist.bio}</p>
      <BookButton
        href={artist.bookingUrl}
        variant="outline"
        ariaLabel={`Book with ${artist.name}`}
      >
        Book with {firstName}
      </BookButton>
    </article>
  );
}

export default ArtistCard;
