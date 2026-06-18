'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from './navItems';
import { useCart } from '@/context/CartContext';

export const whatsappNumber = '6283848922906';
export const whatsappMessage = encodeURIComponent(
  'Halo Jajanan Mimitha, saya ingin memesan pastry dari website. Mohon dibantu informasinya.'
);
export const whatsappUrl =
  'https://wa.me/' + whatsappNumber + '?text=' + whatsappMessage;

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCartOpen, setIsCartOpen, cartItems } = useCart();

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-mimitha-cream/90 shadow-sm backdrop-blur-xl">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-12">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-3 lg:flex-none"
          aria-label="Jajanan Mimitha Beranda"
        >
          <Image
            src="/logoumkm1.webp"
            alt="Logo Jajanan Mimitha"
            width={48}
            height={48}
            className="h-10 w-10 flex-none rounded-2xl object-cover shadow-lg shadow-mimitha-primary/20 sm:h-12 sm:w-12"
          />

          <div className="min-w-0">
            <span className="block max-w-[10rem] truncate text-xs font-bold uppercase tracking-[0.15em] text-mimitha-accent lg:max-w-none lg:text-sm lg:tracking-[0.22em]">
              Jajannya Mimitha
            </span>
            <span className="block truncate text-[10px] font-semibold text-mimitha-muted lg:text-xs">
              Banyuwangi Pastry
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-4 lg:flex">
          <nav
            className="flex items-center gap-1"
            aria-label="Navigasi utama"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-mimitha-text transition hover:bg-white hover:text-mimitha-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Cart Button */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-mimitha-primary/15 bg-white text-mimitha-text shadow-sm transition hover:bg-mimitha-cream hover:text-mimitha-primary"
            aria-label="Buka keranjang belanja"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-mimitha-primary text-xs font-bold text-white shadow-md animate-pulse">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Cart Button */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-mimitha-primary/15 bg-white text-mimitha-text shadow-sm transition hover:bg-mimitha-cream hover:text-mimitha-primary"
            aria-label="Buka keranjang belanja"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-mimitha-primary text-[11px] font-bold text-white shadow-md animate-pulse">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-mimitha-primary/15 bg-white text-mimitha-text shadow-sm transition hover:bg-mimitha-cream"
          >
            <span className="relative h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition ${
                  isMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-6 bg-current transition ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-5 h-0.5 w-6 bg-current transition ${
                  isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="bg-mimitha-cream/95 px-5 py-4 lg:hidden"
        >
          <nav
            className="flex flex-col gap-2"
            aria-label="Navigasi mobile"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full px-4 py-3 text-sm font-semibold text-mimitha-text transition hover:bg-white hover:text-mimitha-primary"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-mimitha-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-mimitha-text"
            >
              Pesan Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}