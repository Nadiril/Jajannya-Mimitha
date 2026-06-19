'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="mimitha-section relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 -z-10 " />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24 xl:py-28">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-mimitha-text sm:text-5xl lg:text-6xl xl:text-7xl">
            Satu Gigitan{' '}
            <span className="mimitha-gradient-text">Banyak</span> Momen
            Spesial.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-mimitha-muted sm:text-lg sm:leading-8 lg:mx-0 lg:text-xl lg:leading-9">
            Jajanan Mimitha menghadirkan pastry, brownies, dan Banana Bread
            handmade dengan cita rasa hangat, elegan, dan autentik khas UMKM
            lokal Banyuwangi.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#produk"
                className="inline-flex w-full items-center justify-center rounded-full border border-mimitha-primary/25 bg-mimitha-primary px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-mimitha-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4"
               style ={{ color: '#ffffff' }}
              >
                Lihat Menu
              </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:justify-end">
          <Image
            src="/ProdukPage.webp"
            alt="Produk Jajanan Mimitha"
            width={720}
            height={520}
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl sm:aspect-[16/10] lg:aspect-[4/3]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
