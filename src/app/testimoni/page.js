import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Testimoni | Jajanan Mimitha Banyuwangi',
  description: 'Testimoni pelanggan Jajanan Mimitha Banyuwangi tentang croissant, danish, dan pastry premium.',
};

const testimonials = [
  { name: 'Ayu Pratama', role: 'Pelanggan Banyuwangi', text: 'Croissant-nya renyah di luar dan lembut di dalam. Cocok untuk oleh-oleh keluarga.' },
  { name: 'Raka Wijaya', role: 'Wisatawan', text: 'Pain Au Chocolat terasa premium. Rasanya hangat, buttery, dan tidak terlalu manis.' },
  { name: 'Sinta Maharani', role: 'Ibu Rumah Tangga', text: 'Pemesanan lewat WhatsApp mudah, admin responsif, dan produk datang dalam kondisi rapi.' },
];

export default function TestimoniPage() {
  return (
    <>
      <SiteHeader />
      <main id='main' className='flex-1'>
        <section className='mx-auto max-w-7xl px-5 py-20 lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent'>Testimonials</p>
            <h1 className='mt-4 text-4xl font-black tracking-tight text-mimitha-text sm:text-5xl'>Kata pelanggan tentang Mimitha.</h1>
          </div>
          <div className='mt-12 grid gap-6 lg:grid-cols-3'>
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className='rounded-[2rem] bg-white p-7 shadow-sm'>
                <div className='mb-5 flex items-center gap-1 text-amber-400' aria-label='Rating 5 dari 5'>
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className='leading-7 text-mimitha-muted'>{testimonial.text}</p>
                <div className='mt-6'>
                  <p className='font-bold text-mimitha-text'>{testimonial.name}</p>
                  <p className='text-sm font-semibold text-mimitha-accent'>{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
