import ProductCatalog from '@/components/ProductCatalog';
import SiteHeader, { whatsappNumber, whatsappUrl } from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import InteractiveMap from '@/components/InteractiveMap';
import Image from 'next/image';

const qualities = [
  {
    title: 'Segar Setiap Hari',
    text: 'Produk dipanggang setiap hari untuk menjaga kualitas, aroma, dan tekstur terbaik.',
  },
  {
    title: 'Bahan Premium',
    text: 'Menggunakan bahan baku pilihan dengan rasa yang konsisten dan premium.',
  },
  {
    title: 'Proses Handmade',
    text: 'Dibuat secara manual dengan perhatian terhadap detail pada setiap lapisan pastry.',
  },
  {
    title: 'Produksi Higienis',
    text: 'Proses produksi mengutamakan kebersihan, kerapian, dan keamanan pangan.',
  },
  {
    title: 'Pengiriman Cepat',
    text: 'Pemesanan mudah melalui WhatsApp untuk diproses lebih cepat oleh admin.',
  },
];

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

const orderSteps = [
  { number: '1', title: 'Pilih Produk', text: 'Lihat katalog dan tentukan pastry favoritmu.' },
  { number: '2', title: 'Klik Pesan', text: 'Tombol pesan akan membuka percakapan WhatsApp.' },
  { number: '3', title: 'Konfirmasi Pesanan', text: 'Admin membantu memastikan jumlah dan varian produk.' },
  { number: '4', title: 'Pembayaran', text: 'Lakukan pembayaran sesuai instruksi admin.' },
  { number: '5', title: 'Pesanan Diproses', text: 'Produk dibuat fresh sesuai jadwal pemesanan.' },
  { number: '6', title: 'Pesanan Dikirim', text: 'Ambil di lokasi atau koordinasikan pengiriman dengan admin.' },
];

export default function Home() {
  return (
    <div className="flex-1">
      <SiteHeader />

      <main id="main">
        <section id="beranda" className="mimitha-section relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(139,94,60,0.18),transparent_36%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-12">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-mimitha-text sm:text-4xl lg:text-5xl">
                Satu Gigitan {' '}
                <span className="mimitha-gradient-text">Banyak</span> Momen Spesial.
              </h1>
              <p className="mt-5 max-w-prose text-base leading-7 text-mimitha-muted sm:text-lg sm:leading-8">
                Jajanan Mimitha menghadirkan pastry, brownies, dan Banana Bread handmade dengan cita rasa hangat,
                elegan, dan autentik khas UMKM lokal Banyuwangi.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#produk"
                  className="inline-flex items-center justify-center rounded-full border border-mimitha-primary/25 bg-mimitha-primary px-7 py-3.5 text-base font-bold shadow-lg shadow-mimitha-primary/20 sm:py-4"
                  style={{ color: '#ffffff' }}
                >
                  Lihat Menu
                </a>

              </div>
            </div>

            <div className="relative flex items-center">
              <Image
                src="/ProdukPage.webp"
                alt="Produk Jajanan Mimitha"
                width={400}
                height={500}
                className="h-auto w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md rounded-3xl object-cover shadow-2xl lg:mx-auto"
                priority
              />
            </div>
          </div>
        </section>

        <section id="tentang" className="mimitha-section mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent">Tentang Kami</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-mimitha-text sm:text-4xl lg:text-5xl">
                Dari dapur untuk pelanggan yang loyal akan kualitas.
              </h2>
              <p className="mt-6 text-lg leading-8 text-mimitha-muted">
                Jajanan Mimitha hadir sebagai UMKM pastry Banyuwangi yang mengutamakan proses handmade,
                bahan pilihan, dan cita rasa premium. Setiap produk dibuat dengan ketelitian agar cocok untuk
                camilan harian, hadiah, hingga suguhan spesial.
              </p>
              <p className="mt-4 text-lg leading-8 text-mimitha-muted">
                Visi kami sederhana: memperkenalkan pastry lokal yang tidak hanya enak, tetapi juga rapi,
                higienis, dan mudah dipesan melalui WhatsApp.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { value: '12+', label: 'Produk' },
                { value: '1.000+', label: 'Pelanggan' },
                { value: 'Brand lokal', label: 'Banyuwangi' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[2rem] bg-white p-7 shadow-sm">
                  <p className="text-4xl font-black text-mimitha-primary">{stat.value}</p>
                  <p className="mt-2 font-semibold text-mimitha-text">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mimitha-primary text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-5 lg:px-8">
            {qualities.map((quality) => (
              <article key={quality.title} className="rounded-[2rem] bg-white/10 p-6 backdrop-blur">
                <h3 className="text-xl font-bold">{quality.title}</h3>
                <p className="mt-3 leading-7 text-white/78">{quality.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="produk" className="mimitha-section mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent">Produk Terlaris</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-mimitha-text sm:text-4xl lg:text-5xl">
              Pilih pastry favorit Anda.
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-base leading-7 text-mimitha-muted sm:text-lg sm:leading-8">
              Katalog produk dapat difilter berdasarkan kategori, lalu langsung terhubung ke WhatsApp admin untuk
              konfirmasi pesanan.
            </p>
          </div>

          <div className="mt-10">
            <ProductCatalog whatsappNumber={whatsappNumber} />
          </div>
        </section>




        <section id="testimoni" className="mimitha-section bg-mimitha-primary">
          <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center text-white">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-200">Testimoni</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">Apa Kata Mereka Tentang Jajannya Mimitha?</h2>
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
                      <p className="leading-7 text-mimitha-muted">&ldquo;{testimonial.text}&rdquo;</p>
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
          </div>
        </section>

       <section className="bg-mimitha-cream/50">
  <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-14">
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      <div className="lg:pt-20">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent">
          Bagaimana cara memesan?
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-mimitha-text sm:text-5xl">
          Pesan lebih mudah tanpa ribet.
        </h2>
        <p className="mt-5 text-lg leading-8 text-mimitha-muted">
          Alur pemesanan dibuat sesederhana mungkin agar pelanggan bisa langsung terhubung dengan admin
          melalui WhatsApp.
        </p>
                <div className="mt-8">
                  <a
                    href="#produk"
                    className="inline-flex items-center justify-center rounded-full bg-mimitha-primary px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-mimitha-primary/20 sm:py-4"
                  >
                    Lihat Menu
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {orderSteps.map((step) => (
                  <article key={step.number} className="flex gap-4 rounded-[2rem] bg-white p-6 shadow-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mimitha-warm text-sm font-black text-mimitha-primary">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-mimitha-text">{step.title}</h3>
                      <p className="mt-2 leading-7 text-mimitha-muted">{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="kontak" className="mimitha-section bg-mimitha-cream/70">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="overflow-hidden rounded-[2.5rem] bg-mimitha-primary text-white shadow-2xl shadow-mimitha-primary/20">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <div className="p-8 sm:p-10 lg:p-14">
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-200">Location & Contact</p>
                  <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                    Kunjungi atau hubungi Jajanan Mimitha.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-white/78">
                    Untuk alamat lengkap, jam operasional terbaru, dan ketersediaan produk, hubungi admin melalui
                    WhatsApp.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-white/10 p-5">
                      <p className="text-sm text-white/60">Lokasi</p>
                      <p className="mt-2 font-bold">Banyuwangi, Jawa Timur</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-white/10 p-5">
                      <p className="text-sm text-white/60">WhatsApp</p>
                      <p className="mt-2 font-bold">+62 083848922906</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-white/10 p-5">
                      <p className="text-sm text-white/60">Jam Operasional</p>
                      <p className="mt-2 font-bold">jam 07:00 - 21:00 WIB</p>
                      <p className="text-xs text-white/60">Setiap Hari</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-white/10 p-5">
                      <p className="text-sm text-white/60">Pemesanan</p>
                      <p className="mt-2 font-bold">Via WhatsApp</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Hubungi Kami
                  </a>
                    <a
                      href="https://www.google.com/maps/place/Playwithmii+X+Jajannyamimitha/@-8.2243917,114.3573971,17z/data=!4m15!1m8!3m7!1s0x2dd145000d227e0f:0x43670086506b6d1e!2sPlaywithmii+X+Jajannyamimitha!8m2!3d-8.224397!4d114.3622627!10e1!16s%2Fg%2F11mm6lzmgp!3m5!1s0x2dd145000d227e0f:0x43670086506b6d1e!8m2!3d-8.224397!4d114.3622627!16s%2Fg%2F11mm6lzmgp?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white"
                    >
                      Buka Google Maps
                    </a>


                  </div>
                </div>

                <div className="relative min-h-[500px] bg-mimitha-primary">
                  <div className="flex h-full flex-col justify-between p-6">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-200">Google Maps</p>
                      <h3 className="mt-3 text-2xl font-black text-white">Peta Lokasi</h3>
                    </div>
                    <div className="relative h-[400px] overflow-hidden rounded-[1.5rem] bg-mimitha-cream">
                      <InteractiveMap />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
