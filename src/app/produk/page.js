import ProductCatalog from '@/components/ProductCatalog';
import SiteHeader, { whatsappNumber } from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Produk | Jajanan Mimitha Banyuwangi',
  description: 'Katalog produk Jajanan Mimitha Banyuwangi: croissant, danish, pastry manis, pastry gurih, dan menu musiman.',
};

const categories = [
  {
    title: 'Croissant',
    text: 'Renyah, buttery, dan berlapis sempurna untuk camilan premium.',
  },
  {
    title: 'Danish',
    text: 'Manis lembut dengan topping buah, cokelat, atau keju creamy.',
  },
  {
    title: 'Pastry Manis',
    text: 'Pilihan pastry manis untuk menemani kopi dan momen santai.',
  },
  {
    title: 'Pastry Gurih',
    text: 'Isian gurih yang cocok untuk sarapan, bekal, atau acara keluarga.',
  },
];

export default function ProdukPage() {
  return (
    <>
      <SiteHeader />
      <main id='main' className='flex-1'>
        <section className='mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent'>Produk Terlaris</p>
            <h1 className='mt-4 text-3xl font-black tracking-tight text-mimitha-text sm:text-4xl lg:text-5xl'>
              Pilihan pastry favorit anda.
            </h1>
            <p className='mt-5 max-w-2xl mx-auto text-base leading-7 text-mimitha-muted sm:text-lg sm:leading-8'>
              Katalog produk dapat difilter berdasarkan kategori, lalu langsung terhubung ke WhatsApp admin untuk
              konfirmasi pesanan.
            </p>
          </div>
          <div className='mt-10'>
            <ProductCatalog whatsappNumber={whatsappNumber} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
