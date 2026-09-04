import BookButton from './BookButton';
import { SERVICES_URL } from '../data/constants';

/**
 * Korean skincare feature section. Also hosts the `about` anchor so the
 * "About" nav link has a destination in this foundation build.
 *
 * PLACEHOLDER STUB (FEAT-001): correct copy and CTA are in place; the feature
 * layout and imagery are polished in a later feature.
 *
 * TODO: replace the image with sophisticated skincare photography.
 */
const KBEAUTY_IMAGE =
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80';

function KBeautySection() {
  return (
    <section id="about" className="section section--navy">
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
