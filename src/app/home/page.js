import SiteHeader, { whatsappUrl } from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function HomePage() {
  return (
    <div className="flex-1">
      <SiteHeader />

      <main id="main">
        <section id="beranda" className="mimitha-section relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255, 255, 255, 0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(139,94,60,0.18),transparent_36%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-5 lg:grid-cols-2 lg:px-5 lg:py-5">
            <div>
              <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-mimitha-text sm:text-6xl lg:text-7xl">
                Satu Gigitan {' '}
                <span className="mimitha-gradient-text">Banyak</span> Momen Spesial.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-mimitha-muted sm:text-xl">
                Jajanan Mimitha menghadirkan croissant, andish, dan pastry handmade dengan cita rasa hangat,
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
          </div>
        </section>

        <section id="produk" className="mimitha-section py-16">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="text-3xl font-bold text-mimitha-text">Menu Kami</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-mimitha-muted">
              Temukan pilihan croissant, andish, dan pastry handmade kami.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
  
