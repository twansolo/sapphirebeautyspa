import { useState } from 'react';
import { faq } from '../data/faq';

/**
 * FAQ accordion.
 *
 * Each item is a heading-wrapped <button> controlling a region:
 *   - the button carries aria-expanded and aria-controls
 *   - the panel region carries a matching id and aria-labelledby
 * Only the triggered panel toggles. Buttons are native <button> elements, so
 * they are operable with Enter/Space and show the global focus-visible ring.
 * The expand/collapse height animation is disabled under prefers-reduced-motion
 * (handled in global.css).
 *
 * Answers direct users to GlossGenius for live pricing, availability and
 * policy details (see src/data/faq.ts).
 */
function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="faq__head">
          <span className="eyebrow">FAQ</span>
          <h2>Before your appointment.</h2>
        </div>

        <dl className="faq__list">
          {faq.map((item) => {
            const isOpen = openId === item.id;
            const buttonId = `${item.id}-trigger`;
            const panelId = `${item.id}-panel`;

            return (
              <div key={item.id} className="faq__item">
                <dt className="faq__question">
                  <button
                    type="button"
                    id={buttonId}
                    className="faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{item.question}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq__panel${isOpen ? ' is-open' : ''}`}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

export default FAQ;
