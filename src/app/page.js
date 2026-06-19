import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import QualitiesSection from '@/components/QualitiesSection';
import ProductSection from '@/components/ProductSection';
import TestimonialSection from '@/components/TestimonialSection';
import OrderStepsSection from '@/components/OrderStepsSection';
import ContactSection from '@/components/ContactSection';
import SiteHeader, { whatsappNumber } from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main id="main" className="flex-1">
        <HeroSection />
        <AboutSection />
        <QualitiesSection />
        <ProductSection whatsappNumber={whatsappNumber} />
        <TestimonialSection />
        <OrderStepsSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
