import Image from 'next/image';
import Link from 'next/link';
import { navItems } from './navItems';

export default function SiteFooter() {
  return (
    <footer className='border-t border-mimitha-primary/10 bg-white'>
      <div className='mx-auto max-w-7xl px-5 py-10 lg:px-8'>
        <div className='grid gap-8 md:grid-cols-[1fr_auto] md:items-center'>
          <div>
            <Link href='/' className='flex items-center gap-3'>
              <Image
                src='/logoumkm1.webp'
                alt='Logo Jajanan Mimitha'
                width={40}
                height={40}
                className='h-10 w-10 rounded-2xl object-cover'
              />
              <span>
                <span className='block font-black text-mimitha-text'>Jajanan Mimitha</span>
                <span className='block text-sm font-semibold text-mimitha-muted'>Banyuwangi, Indonesia</span>
              </span>
            </Link>
            <p className='mt-4 max-w-xl leading-7 text-mimitha-muted'>
              Website profil bisnis dan katalog produk digital untuk memperkenalkan pastry lokal Banyuwangi kepada pelanggan yang lebih luas.
            </p>
          </div>
          <div className='flex flex-col gap-4 md:items-end'>
            <nav className='flex flex-wrap gap-3' aria-label='Footer navigation'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='rounded-full px-4 py-2 text-sm font-semibold text-mimitha-text transition hover:bg-mimitha-cream hover:text-mimitha-primary'
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className='flex flex-wrap gap-3'>
              {['Instagram', 'WhatsApp'].map((social) => (
                <a
                  key={social}
                  href='#'
                  className='rounded-full border border-mimitha-primary/15 px-4 py-2 text-sm font-semibold text-mimitha-primary transition hover:bg-mimitha-primary hover:text-white'
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-mimitha-primary/10 pt-6 text-sm font-semibold text-mimitha-muted'>
          © 2026 Jajanan Mimitha Banyuwangi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
