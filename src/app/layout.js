import { Montserrat } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
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
    title: 'Jajanan Mimitha Banyuwangi | Pastry Premium Segar Setiap Hari',
    description:
      'Katalog pastry premium handmade dari UMKM lokal Banyuwangi dengan pemesanan mudah melalui WhatsApp.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${montserrat.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-mimitha-background text-mimitha-text">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
