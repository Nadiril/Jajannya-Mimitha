import ProductSection from '@/components/ProductSection';
import SiteHeader, { whatsappNumber } from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Produk | Jajanan Mimitha Banyuwangi',
  description: 'Katalog produk Jajanan Mimitha Banyuwangi: croissant, danish, pastry manis, pastry gurih, dan menu musiman.',
};

export default function ProdukPage() {
  return (
    <>
      <SiteHeader />
      <main id='main' className='flex-1'>
        <ProductSection whatsappNumber={whatsappNumber} />
      </main>
      <SiteFooter />
    </>
  );
}
