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
    date: '15 Juni 2026',
    text: 'Croissant-nya renyah di luar dan lembut di dalam. Rasanya premium dan cocok untuk oleh-oleh keluarga. Pengemasan juga sangat rapi.',
  },
  {
    name: 'Raka Wijaya',
    role: 'Wisatawan',
    rating: '5.0',
    date: '10 Juni 2026',
    text: 'Pain Au Chocolat favorit saya. Teksturnya buttery dan tidak terlalu manis. Sangat cocok dinikmati bersama kopi pagi.',
  },
  {
    name: 'Sinta Maharani',
    role: 'Ibu Rumah Tangga',
    rating: '4.9',
    date: '2 Juni 2026',
    text: 'Pemesanan lewat WhatsApp sangat mudah. Admin responsif dan produk datang tepat waktu dalam kondisi baik.',
  },
];

export default function TestimoniPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className="bg-mimitha-primary py-20">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-200">
              TESTIMONIALS
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Apa Kata Mereka Tentang Jajannya Mimitha?
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-[900px] px-5 lg:px-8">
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-10">
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=f6d7ad&color=8b5e3c&size=128&bold=true&font-size=0.35`}
                        alt={testimonial.name}
                        className="h-14 w-14 shrink-0 rounded-full object-cover shadow-md ring-2 ring-white sm:h-16 sm:w-16"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-lg font-bold text-mimitha-text">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-mimitha-muted">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-xl">
                          ★
                        </span>
                      ))}
                      <span className="ml-2 text-sm font-bold text-mimitha-muted">
                        {testimonial.rating}
                      </span>
                    </div>

                    <p className="mt-5 text-base leading-7 text-mimitha-muted">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    <p className="mt-5 text-sm font-semibold text-mimitha-muted">
                      {testimonial.date}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
