import type { Artist } from '../data/artists';
import BookButton from './BookButton';

/**
 * Single artist card.
 *
 * Renders portrait, name, role, bio and a "Book with {firstName}" CTA that
 * opens the artist's GlossGenius booking URL in a new tab.
 *
 * When `artist.isFounder` is true the card gains a subtle "Founder" badge and
 * a `--founder` modifier for gentle visual emphasis. This preserves Colby's
 * hierarchy without diminishing the independent artists, who read as equal
 * peers (their independence is conveyed through their role text).
 *
 * TODO: portrait images come from src/data/artists.ts — swap the Unsplash
 * placeholders for real client portrait photography there.
 */
export interface ArtistCardProps {
  artist: Artist;
}

function ArtistCard({ artist }: ArtistCardProps) {
  const firstName = artist.name.split(' ')[0];

  return (
    <article
      className={`artist-card${artist.isFounder ? ' artist-card--founder' : ''}`}
    >
      <div className="artist-card__media">
        <img
          src={artist.portrait}
          alt={`Portrait of ${artist.name}`}
          loading="lazy"
        />
        {artist.isFounder && (
          <span className="artist-card__badge">Founder</span>
        )}
      </div>
      <div className="artist-card__body">
        <h3 className="artist-card__name">{artist.name}</h3>
        <p className="artist-card__role">{artist.role}</p>
        <p className="artist-card__bio">{artist.bio}</p>
        <BookButton
          href={artist.bookingUrl}
          variant="outline"
          className="artist-card__cta"
          ariaLabel={`Book with ${artist.name}`}
        >
          Book with {firstName}
        </BookButton>
      </div>
    </article>
  );
}

export default ArtistCard;
