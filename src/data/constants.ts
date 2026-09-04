/**
 * Central booking / external links.
 *
 * All booking CTAs across the site route to GlossGenius. If individual
 * artist booking URLs or a different platform are provided later, update
 * them here (and in src/data/artists.ts for per-artist links).
 */

// Main GlossGenius booking landing page.
export const BOOKING_URL = 'https://sapphirebeautyia.glossgenius.com/';

// GlossGenius services list (used by "Explore services" style CTAs).
export const SERVICES_URL = 'https://sapphirebeautyia.glossgenius.com/services';

// Studio contact / location details. TODO: confirm phone + email with client.
export const STUDIO = {
  name: 'Sapphire Beauty Studio',
  addressLine: '346 2nd Ave SW',
  city: 'Cedar Rapids, Iowa',
} as const;

// TODO: replace "#" placeholders with the studio's real social profile URLs.
export const SOCIAL_LINKS = {
  instagram: '#',
  facebook: '#',
  tiktok: '#',
} as const;
