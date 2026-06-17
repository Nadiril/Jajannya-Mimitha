import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';



export const metadata = {
  title: 'Testimoni | Jajanan Mimitha Banyuwangi',
  description: 'Apa Kata Mereka Tentang Jajannya Mimitha?',
};

const testimonials = [
  { name: 'Ayu Pratama', role: 'Pelanggan Banyuwangi', rating: '5.0', text: 'Croissant-nya renyah di luar dan lembut di dalam. Cocok untuk oleh-oleh keluarga.' },
  { name: 'Raka Wijaya', role: 'Wisatawan', rating: '5.0', text: 'Pain Au Chocolat terasa premium. Rasanya hangat, buttery, dan tidak terlalu manis.' },
  { name: 'Sinta Maharani', role: 'Ibu Rumah Tangga', rating: '4.9', text: 'Pemesanan lewat WhatsApp mudah, admin responsif, dan produk datang dalam kondisi rapi.' },
];

export default function TestimoniPage() {
  return (
    <>
      <SiteHeader />
      <main id='main' className='flex-1'>
        <section className='mx-auto max-w-7xl px-5 py-20 lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent'>Testimonials</p>
            <h2 className='mt-4 text-4xl font-black tracking-tight text-mimitha-text sm:text-5xl'>Apa Kata Mereka Tentang Jajannya Mimitha?</h2>
          </div>

          <div className='mt-12 grid gap-6 lg:grid-cols-3'>
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className='rounded-[2rem] bg-white p-7'>
                <div className='mb-5 flex items-center gap-1' aria-label={`Rating ${testimonial.rating} dari 5`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className='text-amber-400'>★</span>
                  ))}
                </div>
                
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
