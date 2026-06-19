'use client';

const stats = [
  { value: '12+', label: 'Produk' },
  { value: '1.000+', label: 'Pelanggan' },
  { value: 'Brand lokal', label: 'Banyuwangi' },
];

export default function AboutSection() {
  return (
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
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[2rem] bg-white p-7 shadow-sm">
              <p className="text-4xl font-black text-mimitha-primary">{stat.value}</p>
              <p className="mt-2 font-semibold text-mimitha-text">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
