'use client';

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

export default function QualitiesSection() {
  return (
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
  );
}
