import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import BookingForm from "@/app/components/BookingForm";
import GallerySection from '@/app/components/GallerySection';
import TestimonialsSection from "@/app/components/TestimonialsSection";
import AboutSection from '@/app/components/AboutSection';
import ContactSection from '@/app/components/ContactSection';


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection /> 
      <BookingForm />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
