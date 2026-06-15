import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Proses Produksi | Jajanan Mimitha Banyuwangi',
  description: 'Proses produksi Jajanan Mimitha dari pemilihan bahan, laminasi, fermentasi, pemanggangan, hingga pengemasan.',
};

const journey = [
  { step: '01', title: 'Pemilihan Bahan', text: 'Bahan baku pilihan disortir untuk memastikan kualitas rasa dan tekstur.' },
  { step: '02', title: 'Pembuatan Adonan', text: 'Adonan dicampur dengan takaran presisi agar hasilnya konsisten.' },
  { step: '03', title: 'Laminasi Adonan', text: 'Adonan dilipat berlapis untuk menghasilkan tekstur pastry yang renyah.' },
  { step: '04', title: 'Fermentasi', text: 'Proses fermentasi membantu pastry mengembang dan aromanya lebih harum.' },
  { step: '05', title: 'Pemanggangan', text: 'Pastry dipanggang dengan suhu terkontrol hingga berwarna keemasan.' },
  { step: '06', title: 'Pengemasan', text: 'Produk dikemas aman dan higienis sebelum siap dipesan pelanggan.' },
];

export default function ProsesPage() {
  return (
    <>
      <SiteHeader />
      <main id='main' className='flex-1'>
        <section className='mx-auto max-w-7xl px-5 py-20 lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent'>Production Journey</p>
            <h1 className='mt-4 text-4xl font-black tracking-tight text-mimitha-text sm:text-5xl'>
              Dari bahan pilihan hingga pastry siap disajikan.
            </h1>
            <p className='mt-6 text-lg leading-8 text-mimitha-muted'>
              Setiap tahapan dibuat untuk menjaga konsistensi rasa, tekstur berlapis, dan kualitas higienis
              produk Jajanan Mimitha.
            </p>
          </div>
          <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {journey.map((item) => (
              <article key={item.step} className='rounded-[2rem] border border-mimitha-primary/10 bg-white p-6 shadow-sm'>
                <p className='text-sm font-black text-mimitha-accent'>{item.step}</p>
                <h2 className='mt-3 text-xl font-bold text-mimitha-text'>{item.title}</h2>
                <p className='mt-3 leading-7 text-mimitha-muted'>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
