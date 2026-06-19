import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Kontak | Jajanan Mimitha Banyuwangi',
  description: 'Kontak Jajanan Mimitha Banyuwangi untuk pemesanan pastry melalui WhatsApp dan informasi lokasi.',
};

export default function KontakPage() {
  return (
    <>
      <SiteHeader />
      <main id='main' className='flex-1'>
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
