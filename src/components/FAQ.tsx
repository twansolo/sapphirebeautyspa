import { faq } from '../data/faq';

/**
 * FAQ accordion.
 *
 * PLACEHOLDER STUB (FEAT-001): renders questions/answers using native
 * <details>/<summary> so it is accessible out of the box. A custom, animated
 * accessible accordion can replace this in a later feature.
 */
function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <span className="eyebrow">FAQ</span>
        <h2>Before your appointment.</h2>
        <div className="faq__list">
          {faq.map((item) => (
            <details key={item.id} className="faq__item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
