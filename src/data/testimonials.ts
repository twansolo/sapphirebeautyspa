/**
 * Client testimonials.
 *
 * Placeholder copy only. `attribution` uses a GENERIC label — do not fabricate
 * specific named client identities.
 *
 * TODO: replace with real, permissioned client reviews. Once you have consent,
 * you may update `attribution` to a first name + last initial (e.g. "Sarah M.").
 */
export interface Testimonial {
  id: string;
  quote: string;
  rating: number; // 1-5
  attribution: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    quote:
      'A truly elevated experience from start to finish. The studio feels calm and luxurious, and my results looked natural and beautiful.',
    rating: 5,
    attribution: 'Verified Client',
  },
  {
    id: 't-2',
    quote:
      'The attention to detail is unmatched. I felt genuinely listened to, and the finished look was exactly what I hoped for.',
    rating: 5,
    attribution: 'Verified Client',
  },
  {
    id: 't-3',
    quote:
      'Professional, welcoming and so talented. Booking was simple and the whole visit felt effortless and refined.',
    rating: 5,
    attribution: 'Verified Client',
  },
];
