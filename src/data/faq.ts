import { BOOKING_URL } from './constants';

/**
 * Frequently asked questions.
 *
 * Answers intentionally direct users to GlossGenius for live pricing,
 * availability and policy details rather than duplicating them here.
 *
 * TODO: confirm wording (especially cancellation/prep guidance) with the client.
 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    id: 'faq-book',
    question: 'How do I book?',
    answer: `All appointments are booked through our online booking platform. Choose any "Book" button on this site to open GlossGenius (${BOOKING_URL}), select your service and time, and confirm — it only takes a moment.`,
  },
  {
    id: 'faq-choose-artist',
    question: 'How do I choose the right artist?',
    answer:
      'Each artist has their own specialties, described in the Artists section above. Colby leads lash artistry, permanent beauty and advanced esthetics, while Emi and Reegan are independent artists offering their own personalized services. Pick the artist whose focus best matches what you are looking for, then book directly on their availability.',
  },
  {
    id: 'faq-pricing',
    question: 'Where can I see current pricing and availability?',
    answer:
      'Live pricing and real-time availability are always kept up to date in GlossGenius. Open the booking link to view current services, prices and open times.',
  },
  {
    id: 'faq-cancellation',
    question: 'What is the cancellation policy?',
    answer:
      'Our current cancellation and rescheduling policy is shown during checkout in GlossGenius. Please review the policy details there when you book so you have the most up-to-date information.',
  },
  {
    id: 'faq-prepare',
    question: 'How should I prepare for my appointment?',
    answer:
      'Preparation depends on your specific service, and any service-specific instructions are provided when you book in GlossGenius. As a general rule, arrive with a clean face free of makeup around the treatment area and let your artist know of any allergies or sensitivities.',
  },
];
