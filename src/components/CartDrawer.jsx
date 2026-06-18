'use client';

import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen } = useCart();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className="fixed right-0 top-0 z-[100] flex h-screen w-full max-w-sm flex-col bg-mimitha-cream shadow-2xl lg:w-[420px]"
        role="dialog"
        aria-modal="true"
        aria-label="Keranjang Belanja"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-mimitha-primary/10 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mimitha-primary">
              Keranjang Belanja
            </p>
            <h2 className="text-2xl font-black text-mimitha-text">
              Ringkasan Pesanan
            </h2>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-mimitha-text shadow-sm transition hover:bg-mimitha-warm hover:text-mimitha-primary"
            aria-label="Tutup keranjang belanja"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer body - empty state */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-mimitha-warm/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-mimitha-primary"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
          <p className="text-lg font-bold text-mimitha-text">
            Keranjang belanja masih kosong
          </p>
          <p className="mt-2 text-sm leading-relaxed text-mimitha-muted">
            Tambahkan produk favorit Anda ke dalam keranjang
          </p>
        </div>
      </aside>
    </>
  );
}
