import SiteHeader, { whatsappUrl } from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import InteractiveMap from '@/components/InteractiveMap';

export const metadata = {
  title: 'Kontak | Jajanan Mimitha Banyuwangi',
  description: 'Kontak Jajanan Mimitha Banyuwangi untuk pemesanan pastry melalui WhatsApp dan informasi lokasi.',
};

const mapsUrl = 'https://www.google.com/maps/place/Playwithmii+X+Jajannyamimitha/@-8.2243917,114.3573971,17z/data=!4m15!1m8!3m7!1s0x2dd145000d227e0f:0x43670086506b6d1e!2sPlaywithmii+X+Jajannyamimitha!8m2!3d-8.224397!4d114.3622627!10e1!16s%2Fg%2F11mm6lzmgp!3m5!1s0x2dd145000d227e0f:0x43670086506b6d1e!8m2!3d-8.224397!4d114.3622627!16s%2Fg%2F11mm6lzmgp?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D';

export default function KontakPage() {
  return (
    <>
      <SiteHeader />
      <main id='main' className='flex-1'>
        <section className='mx-auto max-w-7xl px-5 py-20 lg:px-8'>
          <div className='overflow-hidden rounded-[2.5rem] bg-mimitha-primary text-white shadow-2xl shadow-mimitha-primary/20'>
            <div className='grid lg:grid-cols-[1fr_1fr]'>
              <div className='p-8 sm:p-10 lg:p-14'>
                <p className='text-sm font-black uppercase tracking-[0.24em] text-amber-200'>Location & Contact</p>
                <h1 className='mt-4 text-4xl font-black tracking-tight sm:text-5xl'>Kunjungi atau hubungi Jajanan Mimitha.</h1>
                <p className='mt-6 text-lg leading-8 text-white/78'>
                  Untuk alamat lengkap, jam operasional terbaru, dan ketersediaan produk, hubungi admin melalui WhatsApp.
                </p>
                <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                  <div className='rounded-[1.5rem] bg-white/10 p-5'>
                    <p className='text-sm text-white/60'>Lokasi</p>
                    <a href={mapsUrl} target='_blank' rel='noopener noreferrer' className='mt-2 block font-bold text-amber-100 underline-offset-4 hover:underline'>Banyuwangi, Jawa Timur</a>
                  </div>
                  <div className='rounded-[1.5rem] bg-white/10 p-5'>
                    <p className='text-sm text-white/60'>WhatsApp</p>
                    <p className='mt-2 font-bold'>+62 082140730031</p>
                  </div>
                  <div className='rounded-[1.5rem] bg-white/10 p-5'>
                    <p className='text-sm text-white/60'>Jam Operasional</p>
                    <p className='mt-2 font-bold'>jam 07:00 - 21:00 WIB</p>
                    <p className='mt-2 font-bold'>Setiap Hari</p>

                  </div>
                  <div className='rounded-[1.5rem] bg-white/10 p-5'>
                    <p className='text-sm text-white/60'>Pemesanan</p>
                    <p className='mt-2 font-bold'>Via WhatsApp</p>
                  </div>
                </div>
                <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                  <a href={whatsappUrl} target='_blank' rel='noopener noreferrer' className='inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-brown hover:text-mimitha-primary'>Hubungi Kami</a>
                  <a href={mapsUrl} target='_blank' rel='noopener noreferrer' className='inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-brown hover:text-mimitha-primary'>Buka Google Maps</a>
                </div>
              </div>
              <div className='relative min-h-[24rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]'>
                <div className='absolute inset-6 rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur'>
                  <div className='flex h-full flex-col justify-between'>
                    <div>
                      <p className='text-sm font-bold uppercase tracking-[0.2em] text-amber-200'>Google Maps</p>
                      <h2 className='mt-3 text-2xl font-black'>Peta Lokasi</h2>
                      <p className='mt-3 leading-7 text-white/70'>Gunakan tombol Google Maps untuk melihat lokasi dan petunjuk arah.</p>
                    </div>
                    <div className='relative h-100 overflow-hidden rounded-[1.5rem] bg-mimitha-cream'>
                      <InteractiveMap />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
