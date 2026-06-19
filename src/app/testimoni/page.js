import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Testimoni | Jajanan Mimitha Banyuwangi',
  description: 'Apa Kata Mereka Tentang Jajannya Mimitha?',
};

const testimonials = [
  {
    name: 'Ayu Pratama',
    role: 'Pelanggan Banyuwangi',
    rating: '5.0',
    text: 'Croissant-nya renyah di luar dan lembut di dalam. Rasanya premium dan cocok untuk oleh-oleh keluarga. Pengemasan juga sangat rapi.',
    date: 'Senin, 16 Juni 2026',
    time: '10:24 WIB',
  },
  {
    name: 'Raka Wijaya',
    role: 'Wisatawan',
    rating: '5.0',
    text: 'Pain Au Chocolat favorit saya. Teksturnya buttery dan tidak terlalu manis. Sangat cocok dinikmati bersama kopi pagi.',
    date: 'Rabu, 18 Juni 2026',
    time: '15:42 WIB',
  },
  {
    name: 'Sinta Maharani',
    role: 'Ibu Rumah Tangga',
    rating: '4.9',
    text: 'Pemesanan lewat WhatsApp sangat mudah. Admin responsif dan produk datang tepat waktu dalam kondisi baik.',
    date: 'Jumat, 19 Juni 2026',
    time: '09:11 WIB',
  },
];

export default function TestimoniPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-mimitha-primary py-12 lg:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-200">
              TESTIMONI
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Apa Kata Mereka Tentang Jajannya Mimitha?
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-[900px] px-5 lg:px-8">
            <div className="flex flex-col gap-4">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="flex flex-col gap-3 rounded-[2rem] bg-white p-7 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-1" aria-label={`Rating ${testimonial.rating} dari 5`}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className="text-amber-400">
                          ★
                        </span>
                      ))}
                      <span className="ml-2 text-sm font-bold text-mimitha-muted">
                        {testimonial.rating}
                      </span>
                    </div>
                    <p className="leading-7 text-mimitha-muted">"{testimonial.text}"</p>
                    <div className="mt-4">
                      <p className="font-bold text-mimitha-text">{testimonial.name}</p>
                      <p className="text-sm font-semibold text-mimitha-accent">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="text-right text-xs font-medium text-mimitha-muted sm:w-36">
                    <p>{testimonial.date}</p>
                    <p>{testimonial.time}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
