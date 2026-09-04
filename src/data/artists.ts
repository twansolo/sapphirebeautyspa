import { BOOKING_URL } from './constants';

/**
 * Studio artists.
 *
 * Colby Jordan is the founder (`isFounder: true`) and should read as the lead
 * professional. Emi and Reegan are INDEPENDENT beauty professionals working
 * from the space — present them as peers, not employees.
 *
 * `bookingUrl` defaults to the main GlossGenius URL. TODO: if an artist has
 * their own booking link, replace their `bookingUrl` here.
 *
 * TODO: replace `portrait` Unsplash URLs with real client portrait photography.
 */
export interface Artist {
  id: string;
  name: string;
  role: string;
  bio: string;
  portrait: string;
  bookingUrl: string;
  isFounder: boolean;
}

export const artists: Artist[] = [
  {
    id: 'colby-jordan',
    name: 'Colby Jordan',
    role: 'Founder · Esthetician · PMU Artist · Educator',
    bio: 'Customized lash artistry, permanent beauty and advanced esthetics.',
    // TODO: replace with real portrait of Colby.
    portrait:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80',
    bookingUrl: BOOKING_URL,
    isFounder: true,
  },
  {
    id: 'emi-abney',
    name: 'Emi Abney',
    role: 'Independent Beauty Artist · Mirror Mirror',
    bio: 'Soft, polished beauty services with a personalized approach.',
    // TODO: replace with real portrait of Emi.
    portrait:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80',
    bookingUrl: BOOKING_URL,
    isFounder: false,
  },
  {
    id: 'reegan-flugge',
    name: 'Reegan Flugge',
    role: 'Independent Lash & Brow Artist',
    bio: 'Detail-focused services designed for flattering, lasting results.',
    // TODO: replace with real portrait of Reegan.
    portrait:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
    bookingUrl: BOOKING_URL,
    isFounder: false,
  },
];
