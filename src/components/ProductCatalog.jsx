'use client';

import { useMemo, useState } from 'react';
import { useCart } from '@/context/CartContext';

const categories = ['Semua', 'Bollendutt', 'Banana', 'Lilit', 'Brownies', 'Banana Bread'];

const products = [
  {
    name: 'Bollendutt Pisang Cokelat Keju',
    price: 'Rp 6.000',
    category: 'Bollendutt',
    description: 'pastry manis dengan isian pisang dan cokelat keju lumer.',
  },
  {
    name: 'Bollendutt Pisang Coklat',
    price: 'Rp 6.000',
    category: 'Bollendutt',
    description: 'pastry manis dengan isian pisang dan cokelat lumer.',
  },
  {
    name: 'Bollendutt Pisang Keju susu',
    price: 'Rp 6.000',
    category: 'Bollendutt',
    description: 'Pastry manis dengan isian pisang dan keju vanila lumer.',
  },
  {
    name: 'Bollendutt Cokelat Keju',
    price: 'Rp 6.000',
    category: 'Bollendutt',
    description: 'pastry manis dengan isian cokelat dan keju lumer.',
  },
  {
    name: 'Banana Cheese Milk',
    price: 'Rp 10.000',
    category: 'Banana',
    description: 'Ekstra toping keju dengan isian pisang dan keju vanila.',
  },
  {
    name: 'Banana Chocolate Milk',
    price: 'Rp 10.000',
    category: 'Banana',
    description: 'Ekstra toping keju coklat dengan isian pisang dan cokelat lumer.',
  },
  {
    name: 'Lilit Cokelat Keju',
    price: 'Rp 6.000',
    category: 'Lilit',
    description: 'Pastry manis  dan renyah dengan isian cokelat stick dan keju .',
  },
  {
    name: 'Lilit Cokelat',
    price: 'Rp 6.000',
    category: 'Lilit',
    description: 'Pastry manis  dan renyah dengan isian cokelat stick .',
  },
  {
    name: 'Lilit Keju',
    price: 'Rp 6.000',
    category: 'Lilit',
    description: 'Pastry manis  dan renyah dengan isian keju .',
  },
  {
    name: 'Lilit sosis',
    price: 'Rp 7.000',
    category: 'Lilit',
    description: 'Pastry manis, asin, gurih  dan renyah dengan isian sosis .',
  },
  {
    name: 'Fudgy Brownies',
    price: 'Rp 35.000',
    category: 'Brownies',
    description: 'Brownies lembut dengan rasa cokelat  yang kaya dan toping bervariasi.',
  },
  {
    name: 'Brownies Bites',
    price: 'Rp 30.000',
    category: 'Brownies',
    description: 'Brownies lembut dengan rasa cokelat yang kaya.',
  },
  {
    name: 'Banana Bread',
    price: 'Rp 35.000',
    category: 'Banana Bread',
    description: 'Roti pisang lembut dengan rasa manis dan kaya akan isian pisang.',
  },
];

function productMessage(product) {
  return encodeURIComponent(
    `Halo Jajanan Mimitha, saya ingin memesan ${product.name} (${product.category}). Mohon info ketersediaan dan total harga.`
  );
}

function whatsappProductUrl(product, whatsappNumber) {
  return `https://wa.me/${whatsappNumber}?text=${productMessage(product)}`;
}

export default function ProductCatalog({ whatsappNumber }) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Semua') {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3" aria-label="Filter kategori produk">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={[
              'rounded-full px-5 py-2 text-sm font-semibold transition',
              activeCategory === category
                ? 'bg-mimitha-primary text-white shadow-lg shadow-mimitha-primary/25'
                : 'border border-mimitha-primary/20 bg-white text-mimitha-text hover:border-mimitha-primary hover:bg-mimitha-cream',
            ].join(' ')}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <article
            key={product.name}
            className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-mimitha-warm via-mimitha-cream to-amber-100 p-6">
              <span className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-white/50" />
              <span className="absolute -bottom-12 right-8 h-40 w-40 rounded-full bg-mimitha-primary/20" />
              <span className="pastry-illustration relative mx-auto mt-6 flex h-28 w-44 items-center justify-center rounded-[2rem] shadow-sm rotate-[-8deg]" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mimitha-accent">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-mimitha-text">{product.name}</h3>
                </div>
                <p className="rounded-full bg-mimitha-cream px-3 py-1 text-sm font-bold text-mimitha-primary">
                  {product.price}
                </p>
              </div>

              <p className="text-base leading-7 text-mimitha-muted">{product.description}</p>

              <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                <a
                  href="#kontak"
                  className="inline-flex items-center justify-center rounded-full border border-mimitha-primary/25 px-5 py-3 text-sm font-bold text-mimitha-primary transition hover:bg-mimitha-primary hover:text-white"
                >
                  Lihat Detail
                </a>
                <button
                  onClick={() => addToCart(product)}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-mimitha-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-mimitha-text"
                >
                  Tambah Keranjang
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
