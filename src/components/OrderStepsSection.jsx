'use client';

import InteractiveMap from '@/components/InteractiveMap';

const orderSteps = [
  { number: '1', title: 'Pilih Produk', text: 'Lihat katalog dan tentukan pastry favoritmu.' },
  { number: '2', title: 'Klik Pesan', text: 'Tombol pesan akan membuka percakapan WhatsApp.' },
  { number: '3', title: 'Konfirmasi Pesanan', text: 'Admin membantu memastikan jumlah dan varian produk.' },
  { number: '4', title: 'Pembayaran', text: 'Lakukan pembayaran sesuai instruksi admin.' },
  { number: '5', title: 'Pesanan Diproses', text: 'Produk dibuat fresh sesuai jadwal pemesanan.' },
  { number: '6', title: 'Pesanan Dikirim', text: 'Ambil di lokasi atau koordinasikan pengiriman dengan admin.' },
];

export default function OrderStepsSection() {
  return (
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
                    style ={{ color: '#ffffff' }}
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
  );
}
