import BookButton from './BookButton';
import { SERVICES_URL } from '../data/constants';

/**
 * Korean skincare feature section.
 *
 * The `#about` anchor now lives on the dedicated About band (see About.tsx),
 * so this section is purely the K-Beauty feature.
 *
 * TODO: replace the image with sophisticated skincare photography.
 */
const KBEAUTY_IMAGE =
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80';

function KBeautySection() {
  return (
    <section className="section section--navy">
      <div className="container kbeauty__inner">
        <div className="kbeauty__media">
          <img
            src={KBEAUTY_IMAGE}
            alt="Calm, luxurious skincare treatment setting"
            loading="lazy"
          />
        </div>
        <div className="kbeauty__content">
          <span className="eyebrow">The K-Beauty Edit</span>
          <h2>Advanced Korean-inspired facials for healthy, radiant skin.</h2>
          <p>
            From deep hydration to skin renewal, Sapphire treatments combine
            innovation with a calm, luxury experience.
          </p>
          <BookButton href={SERVICES_URL} variant="outline">
            Explore Skin Services
          </BookButton>
        </div>
      </div>
    </section>
  );
}

export default KBeautySection;
