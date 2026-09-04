/**
 * Gallery / results grid items.
 *
 * `category` powers the filter chips (All / Lashes / Brows / Skin / PMU).
 *
 * TODO: replace every `imageUrl` with real client before/after and results
 * photography, and keep the `alt` text descriptive for accessibility.
 */
export type GalleryCategory = 'Lashes' | 'Brows' | 'Skin' | 'PMU';

export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  category: GalleryCategory;
}

export const gallery: GalleryItem[] = [
  {
    id: 'g-1',
    imageUrl:
      'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80',
    alt: 'Close-up of freshly applied volume lash extensions',
    category: 'Lashes',
  },
  {
    id: 'g-2',
    imageUrl:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    alt: 'Sculpted, defined eyebrows after shaping and tinting',
    category: 'Brows',
  },
  {
    id: 'g-3',
    imageUrl:
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
    alt: 'Radiant, hydrated skin after a Korean-inspired facial',
    category: 'Skin',
  },
  {
    id: 'g-4',
    imageUrl:
      'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
    alt: 'Natural-looking permanent makeup brows',
    category: 'PMU',
  },
  {
    id: 'g-5',
    imageUrl:
      'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80',
    alt: 'Wispy lash lift and tint result on natural lashes',
    category: 'Lashes',
  },
  {
    id: 'g-6',
    imageUrl:
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80',
    alt: 'Laminated, brushed-up brows with a glossy finish',
    category: 'Brows',
  },
  {
    id: 'g-7',
    imageUrl:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80',
    alt: 'Relaxing facial treatment in a calm studio setting',
    category: 'Skin',
  },
  {
    id: 'g-8',
    imageUrl:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
    alt: 'Soft lip blush permanent makeup result',
    category: 'PMU',
  },
];
