import TestimonialSection from '@/components/TestimonialSection';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Testimoni | Jajanan Mimitha Banyuwangi',
  description: 'Apa Kata Mereka Tentang Jajannya Mimitha?',
};

export default function TestimoniPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <TestimonialSection />
      </main>
      <SiteFooter />
    </>
  );
}
