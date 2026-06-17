import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'Jajanannya Mimitha Banyuwangi',
    template: '%s | Jajanan Mimitha Banyuwangi',
  },
  description:
    'Website UMKM Jajanan Mimitha Banyuwangi untuk katalog pastry premium, proses handmade, testimoni pelanggan, dan pemesanan melalui WhatsApp.',
  keywords: [
    'Jajanan Mimitha',
    'pastry Banyuwangi',
    'croissant Banyuwangi',
    'danish pastry',
    'UMKM Banyuwangi',
    'oleh-oleh Banyuwangi',
  ],
  icons: {
    icon: '/logoumkm1.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Jajanan Mimitha Banyuwangi',
    title: 'Jajanan Mimitha Banyuwangi | Pastry Premium Fresh Daily',
    description:
      'Katalog pastry premium handmade dari UMKM lokal Banyuwangi dengan pemesanan mudah melalui WhatsApp.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-mimitha-background text-mimitha-text">
        {children}
      </body>
    </html>
  );
}
