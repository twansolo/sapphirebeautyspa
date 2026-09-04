/**
 * About band — the studio story.
 *
 * Owns the `#about` anchor. Positions Sapphire Beauty Studio as one cohesive
 * luxury destination founded and led by Colby Jordan, while making clear that
 * Emi Abney and Reegan Flugge are independent beauty professionals who work
 * from the space.
 *
 * TODO: replace this placeholder copy with the studio's finalized story once
 * approved by the client.
 */
function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__head">
          <span className="eyebrow">Our Story</span>
          <h2>One studio. A shared standard of beauty.</h2>
        </div>
        <div className="about__body">
          <p>
            Sapphire Beauty Studio was founded by Colby Jordan as a calm,
            considered space for elevated lash, brow, skin and permanent beauty
            services in the heart of Cedar Rapids, Iowa. Every detail is designed
            to feel refined, personal and unhurried.
          </p>
          <p>
            Alongside Colby, independent beauty professionals Emi Abney of Mirror
            Mirror and Reegan Flugge bring their own specialties to the studio.
            Each artist runs their own services and booking, yet together they
            share one beautiful space and a single, uncompromising standard of
            care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
