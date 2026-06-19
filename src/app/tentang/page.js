import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Tentang Kami | Jajanan Mimitha Banyuwangi',
  description: 'Tentang Jajanan Mimitha Banyuwangi, UMKM pastry lokal dengan proses handmade dan bahan pilihan.',
};

const qualities = [
  { title: 'Segar Setiap Hari', text: 'Produk dipanggang setiap hari untuk menjaga kualitas, aroma, dan tekstur terbaik.' },
  { title: 'Bahan Premium', text: 'Menggunakan bahan baku pilihan dengan rasa yang konsisten dan premium.' },
  { title: 'Proses Handmade', text: 'Dibuat secara manual dengan perhatian terhadap detail pada setiap lapisan pastry.' },
  { title: 'Produksi Higienis', text: 'Proses produksi mengutamakan kebersihan, kerapian, dan keamanan pangan.' },
  { title: 'Pengiriman Cepat', text: 'Pemesanan mudah melalui WhatsApp untuk diproses lebih cepat oleh admin.' },
];

const stats = [
  { value: '12+', label: 'Produk unggulan' },
  { value: '1.000+', label: 'Pelanggan' },
  { value: 'Banyuwangi', label: 'Brand lokal' },
];

export default function TentangPage() {
  return (
    <>
      <SiteHeader />
      <main id='main' className='flex-1'>
        <section className='mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20'>
          <div className='grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center'>
            <div>
              <p className='text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent'>Tentang Kami</p>
              <h1 className='mt-4 text-3xl font-black tracking-tight text-mimitha-text sm:text-4xl lg:text-5xl'>
                Dari dapur untuk pelanggan yang loyal akan kualitas.
              </h1>
              <p className='mt-5 max-w-prose text-base leading-7 text-mimitha-muted sm:text-lg sm:leading-8'>
                Jajanan Mimitha hadir sebagai UMKM pastry Banyuwangi yang mengutamakan proses handmade,
                bahan pilihan, dan cita rasa premium. Setiap produk dibuat dengan ketelitian agar cocok untuk
                camilan harian, hadiah, hingga suguhan spesial.
              </p>
              <p className='mt-4 text-base leading-7 text-mimitha-muted sm:text-lg sm:leading-8'>
                Visi kami sederhana: memperkenalkan pastry lokal yang tidak hanya enak, tetapi juga rapi,
                higienis, dan mudah dipesan melalui online maupun offline.
              </p>
            </div>
            <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
              {stats.map((stat) => (
                <div key={stat.label} className='rounded-[2rem] bg-white p-7 shadow-sm'>
                  <p className='text-4xl font-black text-mimitha-primary'>{stat.value}</p>
                  <p className='mt-2 font-semibold text-mimitha-text'>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className='bg-mimitha-primary text-white'>
          <div className='mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-5 lg:px-8'>
            {qualities.map((quality) => (
              <article key={quality.title} className='rounded-[2rem] bg-white/10 p-6 backdrop-blur'>
                <h2 className='text-xl font-bold'>{quality.title}</h2>
                <p className='mt-3 leading-7 text-white/78'>{quality.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
