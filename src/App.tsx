import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ArtistsSection from './components/ArtistsSection';
import KBeautySection from './components/KBeautySection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

/**
 * App shell — composes every marketing section in order.
 *
 * Anchor ids live on the individual sections:
 *   home (Hero), services (Services), artists (ArtistsSection),
 *   about (KBeautySection), gallery (Gallery), faq (FAQ), contact (ContactSection).
 */
function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <ArtistsSection />
        <KBeautySection />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
