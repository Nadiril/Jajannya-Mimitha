import ProductCatalog from '@/components/ProductCatalog';
import SiteHeader, { whatsappNumber, whatsappUrl } from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import InteractiveMap from '@/components/InteractiveMap';


const qualities = [
  {
    title: 'Fresh Daily',
    text: 'Produk dipanggang setiap hari untuk menjaga kualitas, aroma, dan tekstur terbaik.',
  },
  {
    title: 'Premium Ingredients',
    text: 'Menggunakan bahan baku pilihan dengan rasa yang konsisten dan premium.',
  },
  {
    title: 'Handmade Process',
    text: 'Dibuat secara manual dengan perhatian terhadap detail pada setiap lapisan pastry.',
  },
  {
    title: 'Hygienic Production',
    text: 'Proses produksi mengutamakan kebersihan, kerapian, dan keamanan pangan.',
  },
  {
    title: 'Fast Delivery',
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
    title: 'Sweet Pastry',
    text: 'Pilihan pastry manis untuk menemani kopi dan momen santai.',
  },
  {
    title: 'Savory Pastry',
    text: 'Isian gurih yang cocok untuk sarapan, bekal, atau acara keluarga.',
  },
  {
    title: 'Seasonal Menu',
    text: 'Menu spesial musiman dengan cita rasa lokal Banyuwangi.',
  },
];

const journey = [
  {
    step: '01',
    title: 'Pemilihan Bahan',
    text: 'Bahan baku pilihan disortir untuk memastikan kualitas rasa dan tekstur.',
  },
  {
    step: '02',
    title: 'Pembuatan Adonan',
    text: 'Adonan dicampur dengan takaran presisi agar hasilnya konsisten.',
  },
  {
    step: '03',
    title: 'Laminasi Adonan',
    text: 'Adonan dilipat berlapis untuk menghasilkan tekstur pastry yang renyah.',
  },
  {
    step: '04',
    title: 'Fermentasi',
    text: 'Proses fermentasi membantu pastry mengembang dan aromanya lebih harum.',
  },
  {
    step: '05',
    title: 'Pemanggangan',
    text: 'Pastry dipanggang dengan suhu terkontrol hingga berwarna keemasan.',
  },
  {
    step: '06',
    title: 'Pengemasan',
    text: 'Produk dikemas aman dan higienis sebelum siap dipesan pelanggan.',
  },
];

const testimonials = [
  {
    name: 'Ayu Pratama',
    role: 'Pelanggan Banyuwangi',
    rating: '5.0',
    text: 'Croissant-nya renyah di luar dan lembut di dalam. Cocok untuk oleh-oleh keluarga.',
  },
  {
    name: 'Raka Wijaya',
    role: 'Wisatawan',
    rating: '5.0',
    text: 'Pain Au Chocolat terasa premium. Rasanya hangat, buttery, dan tidak terlalu manis.',
  },
  {
    name: 'Sinta Maharani',
    role: 'Ibu Rumah Tangga',
    rating: '4.9',
    text: 'Pemesanan lewat WhatsApp mudah, admin responsif, dan produk datang dalam kondisi rapi.',
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
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(201,130,74,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(139,94,60,0.18),transparent_36%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-32">
            <div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-mimitha-text sm:text-6xl lg:text-7xl">
                Satu Gigitan {' '}
                <span className="mimitha-gradient-text">Banyak</span>momen spesial.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-mimitha-muted sm:text-xl">
                Jajanan Mimitha menghadirkan croissant, danish, dan pastry handmade dengan cita rasa hangat,
                elegan, dan autentik khas UMKM lokal Banyuwangi.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-mimitha-primary px-7 py-4 text-base font-bold text-white shadow-lg shadow-mimitha-primary/25 transition hover:-translate-y-0.5 hover:bg-mimitha-text"
                >
                  Pesan Sekarang
                </a>
                <a
                  href="#produk"
                  className="inline-flex items-center justify-center rounded-full border border-mimitha-primary/25 bg-white px-7 py-4 text-base font-bold text-mimitha-primary transition hover:-translate-y-0.5 hover:border-mimitha-primary hover:bg-mimitha-cream"
                >
                  Lihat Menu
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-mimitha-warm/60 blur-2xl" />
              <div className="absolute -bottom-10 right-6 h-44 w-44 rounded-full bg-mimitha-accent/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-5 shadow-2xl shadow-mimitha-primary/20">
                <div className="pastry-hero-art relative h-[34rem] rounded-[2rem]">
                  <span className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] rounded-[3rem] bg-gradient-to-br from-amber-100 via-amber-300 to-mimitha-primary shadow-2xl shadow-mimitha-primary/30" />
                  <span className="absolute left-[22%] top-[20%] h-20 w-20 rounded-full bg-white/70" />
                  <span className="absolute right-[18%] top-[24%] h-28 w-28 rounded-full bg-mimitha-cream/75" />
                  <span className="absolute bottom-[18%] left-[18%] h-24 w-32 rounded-full bg-mimitha-primary/25" />
                  <span className="absolute bottom-[20%] right-[16%] h-28 w-28 rounded-full bg-white/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tentang" className="mimitha-section mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent">About Us</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-mimitha-text sm:text-5xl">
                Dari dapur lokal untuk pelanggan yang menyukai kualitas.
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
                { value: '6+', label: 'Produk unggulan' },
                { value: '1.000+', label: 'Pelanggan puas' },
                { value: 'Banyuwangi', label: 'Brand lokal' },
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

        <section id="produk" className="mimitha-section mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent">Best Seller Products</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-mimitha-text sm:text-5xl">
              Pilihan pastry favorit pelanggan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-mimitha-muted">
              Katalog produk dapat difilter berdasarkan kategori, lalu langsung terhubung ke WhatsApp admin untuk
              konfirmasi pesanan.
            </p>
          </div>

          <div className="mt-12">
            <ProductCatalog whatsappNumber={whatsappNumber} />
          </div>
        </section>

        <section className="bg-mimitha-cream/70">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent">Product Categories</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-mimitha-text sm:text-5xl">
                Temukan kategori sesuai kebutuhanmu.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <article key={category.title} className="rounded-[2rem] bg-white p-7 shadow-sm">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-mimitha-warm text-2xl font-black text-mimitha-primary">
                    {category.title.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-mimitha-text">{category.title}</h3>
                  <p className="mt-3 leading-7 text-mimitha-muted">{category.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proses" className="mimitha-section mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent">Production Journey</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-mimitha-text sm:text-5xl">
                Dari bahan pilihan hingga pastry siap disajikan.
              </h2>
              <p className="mt-6 text-lg leading-8 text-mimitha-muted">
                Setiap tahapan dibuat untuk menjaga konsistensi rasa, tekstur berlapis, dan kualitas higienis
                produk Jajanan Mimitha.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {journey.map((item) => (
                <article key={item.step} className="rounded-[2rem] border border-mimitha-primary/10 bg-white p-6 shadow-sm">
                  <p className="text-sm font-black text-mimitha-accent">{item.step}</p>
                  <h3 className="mt-3 text-xl font-bold text-mimitha-text">{item.title}</h3>
                  <p className="mt-3 leading-7 text-mimitha-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimoni" className="mimitha-section bg-mimitha-primary">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center text-white">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-200">Testimonials</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Kata pelanggan tentang Mimitha.</h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-[2rem] bg-white p-7">
                  <div className="mb-5 flex items-center gap-1" aria-label={`Rating ${testimonial.rating} dari 5`}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="text-amber-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="leading-7 text-mimitha-muted">“{testimonial.text}”</p>
                  <div className="mt-6">
                    <p className="font-bold text-mimitha-text">{testimonial.name}</p>
                    <p className="text-sm font-semibold text-mimitha-accent">{testimonial.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-mimitha-accent">How To Order</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-mimitha-text sm:text-5xl">
                Pesan mudah tanpa perlu akun.
              </h2>
              <p className="mt-6 text-lg leading-8 text-mimitha-muted">
                Alur pemesanan dibuat sesederhana mungkin agar pelanggan bisa langsung terhubung dengan admin
                melalui WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-mimitha-primary px-7 py-4 text-base font-bold text-white shadow-lg shadow-mimitha-primary/25 transition hover:bg-mimitha-text"
              >
                Hubungi Admin
              </a>
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
                      <p className="mt-2 font-bold">+62 0812345678910</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-white/10 p-5">
                      <p className="text-sm text-white/60">Jam Operasional</p>
                      <p className="mt-2 font-bold">Hubungi admin untuk info terbaru</p>
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
                      className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-mimitha-primary"
                    >
                    
                      Hubungi Kami
                    </a>
                    <a
                      href="https://www.google.com/maps/place/Playwithmii+X+Jajannyamimitha/@-8.2243917,114.3573971,17z/data=!4m15!1m8!3m7!1s0x2dd145000d227e0f:0x43670086506b6d1e!2sPlaywithmii+X+Jajannyamimitha!8m2!3d-8.224397!4d114.3622627!10e1!16s%2Fg%2F11mm6lzmgp!3m5!1s0x2dd145000d227e0f:0x43670086506b6d1e!8m2!3d-8.224397!4d114.3622627!16s%2Fg%2F11mm6lzmgp?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-mimitha-primary"
                    >
                      Buka Google Maps
                    </a>
                  </div>
                </div>

                <div className="relative min-h-[24rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]">
                  <div className="absolute inset-6 rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur">
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-200">Google Maps</p>
                        <h3 className="mt-3 text-2xl font-black">Peta Lokasi</h3>
                        <p className="mt-3 leading-7 text-white/70">Gunakan tombol Google Maps untuk melihat lokasi dan petunjuk arah.</p>
                      </div>
                      <div className="relative h-100 overflow-hidden rounded-[1.5rem] bg-mimitha-cream">
                        <InteractiveMap />
                      </div>
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