import ProductCatalog from '@/components/ProductCatalog';
import SiteHeader, { whatsappNumber } from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Produk | Jajanan Mimitha Banyuwangi',
  description: 'Katalog produk Jajanan Mimitha Banyuwangi: croissant, danish, sweet pastry, savory pastry, dan seasonal menu.',
};

export default function ProdukPage() {
  return (
    <>
      <SiteHeader />
      <main id='main' className='flex-1'>
        <section className='mx-auto max-w-7xl px-5 py-20 lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent'>Best Seller Products</p>
            <h1 className='mt-4 text-4xl font-black tracking-tight text-mimitha-text sm:text-5xl'>
              Pilihan pastry favorit anda.
            </h1>
            <p className='mt-5 text-lg leading-8 text-mimitha-muted'>
              Katalog produk dapat difilter berdasarkan kategori, lalu langsung terhubung ke WhatsApp admin untuk
              konfirmasi pesanan.
            </p>
          </div>
          <div className='mt-12'>
            <ProductCatalog whatsappNumber={whatsappNumber} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
