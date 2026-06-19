'use client';

import SiteHeader, { whatsappUrl } from '@/components/SiteHeader';
import InteractiveMap from '@/components/InteractiveMap';

export default function ContactSection() {
  return (
    <section id="kontak" className="mimitha-section bg-mimitha-cream/70">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-mimitha-primary text-white shadow-2xl shadow-mimitha-primary/20">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-200">Lokasi & Kontak</p>
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
                  <p className="mt-2 font-bold">+62 838-4892-2906 </p>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 p-5">
                  <p className="text-sm text-white/60">Jam Operasional</p>
                  <p className="mt-2 font-bold">07:00 - 21:00 WIB</p>
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
              <div className="flex h-full flex-col p-6">
                <div className="pt-0">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-200">Google Maps</p>
                  <h3 className="mt-2 text-2xl font-black text-white">Peta Lokasi</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Temukan lokasi Jajanan Mimitha dengan mudah melalui Google Maps.
                  </p>
                </div>
                <div className="mt-4 relative h-[500px] overflow-hidden rounded-[1.5rem] bg-mimitha-cream">
                  <InteractiveMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
