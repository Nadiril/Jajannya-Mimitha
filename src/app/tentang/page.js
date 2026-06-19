import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import AboutSection from '@/components/AboutSection';
import QualitiesSection from '@/components/QualitiesSection';

export const metadata = {
  title: 'Tentang Kami | Jajanan Mimitha Banyuwangi',
  description: 'Tentang Jajanan Mimitha Banyuwangi, UMKM pastry lokal dengan proses handmade dan bahan pilihan.',
};

export default function TentangPage() {
  return (
    <>
      <SiteHeader />
      <main id='main' className='flex-1'>
        <AboutSection />
        <QualitiesSection />
      </main>
      <SiteFooter />
    </>
  );
}
