'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const whatsappNumber = '6283848922906';
export const whatsappMessage = encodeURIComponent('Halo Jajanan Mimitha, saya ingin memesan pastry dari website. Mohon dibantu informasinya.');
export const whatsappUrl = 'https://wa.me/' + whatsappNumber + '?text=' + whatsappMessage;

import { navItems } from './navItems';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-40 border-b border-mimitha-primary/10 bg-mimitha-cream/85 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8'>
        <Link href='/' className='flex items-center gap-3' aria-label='Jajanan Mimitha Beranda'>
          <Image
            src='/logoumkm1.webp'
            alt='Logo Jajanan Mimitha'
            width={44}
            height={44}
            className='h-11 w-11 rounded-2xl object-cover shadow-lg shadow-mimitha-primary/20'
          />
          <span>
            <span className='block text-sm font-bold uppercase tracking-[0.22em] text-mimitha-accent'>Jajannya Mimitha</span>
            <span className='block text-xs font-semibold text-mimitha-muted'>Banyuwangi Pastry</span>
          </span>
        </Link>
        <nav className='hidden items-center gap-1 lg:flex' aria-label='Navigasi utama'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='rounded-full px-4 py-2 text-sm font-semibold text-mimitha-text transition hover:bg-white hover:text-mimitha-primary'
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-3 lg:hidden'>
          <a
            href={whatsappUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='hidden rounded-full bg-mimitha-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-mimitha-text lg:inline-flex'
          >
            Tentang Kami
          </a>
          <button
            type='button'
            aria-controls='mobile-menu'
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
            className='inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-mimitha-primary/15 bg-white text-mimitha-text shadow-sm transition hover:bg-mimitha-cream'
          >
            <span className='relative h-5 w-6'>
              <span className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-2.5 h-0.5 w-6 bg-current transition ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 top-5 h-0.5 w-6 bg-current transition ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div id='mobile-menu' className='border-t border-mimitha-primary/10 bg-mimitha-cream/95 px-5 py-4 lg:hidden'>
          <nav className='mx-auto flex max-w-7xl flex-col gap-2' aria-label='Navigasi mobile'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className='rounded-full px-4 py-3 text-sm font-semibold text-mimitha-text transition hover:bg-white hover:text-mimitha-primary'
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => setIsMenuOpen(false)}
              className='mt-2 inline-flex items-center justify-center rounded-full bg-mimitha-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-mimitha-text'
            >
              Pesan Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}