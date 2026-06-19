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
<section className='mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20'>
           <div className='overflow-hidden rounded-[2.5rem] bg-mimitha-primary text-white shadow-2xl shadow-mimitha-primary/20'>
             <div className='grid lg:grid-cols-2 lg:items-center'>
               {/* Left Column - Contact Info */}
               <div className='flex flex-col justify-center p-6 sm:p-10 lg:p-14'>
                 <p className='text-sm font-black uppercase tracking-[0.24em] text-amber-200'>LOKASI & KONTAK</p>
                 <h1 className='mt-4 text-4xl font-black tracking-tight sm:text-5xl'>
                   Kunjungi atau hubungi Jajanannya Mimitha.
                 </h1>
                 <p className='mt-6 max-w-2xl text-lg leading-8 text-white/78'>
                   Kami melayani pemesanan pastry premium handmade di Banyuwangi. Hubungi kami melalui WhatsApp atau kunjungi lokasi kami untuk mendapatkan informasi dan layanan terbaik.
                 </p>

                 <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                   {/* Lokasi Card */}
                   <div className='group rounded-[1.5rem] bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl hover:shadow-black/10'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-300">
                       <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                       <circle cx="12" cy="10" r="3"/>
                     </svg>
                     <p className='mt-3 text-sm font-semibold text-white/60'>Lokasi</p>
                     <a href={mapsUrl} target='_blank' rel='noopener noreferrer' className='mt-1 block font-bold text-amber-100 underline-offset-4'>Banyuwangi, Jawa Timur</a>
                     <p className='mt-1 text-xs text-white/50'>Melayani pelanggan di seluruh Banyuwangi.</p>
                   </div>

                   {/* WhatsApp Card */}
                   <div className='group rounded-[1.5rem] bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl hover:shadow-black/10'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-300">
                       <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                     </svg>
                     <p className='mt-3 text-sm font-semibold text-white/60'>WhatsApp</p>
                     <p className='mt-1 font-bold'>+62 838-4892-2906</p>
                     <p className='mt-1 text-xs text-white/50'>Respon cepat setiap hari.</p>
                   </div>

                   {/* Jam Operasional Card */}
                   <div className='group rounded-[1.5rem] bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl hover:shadow-black/10'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-300">
                       <circle cx="12" cy="12" r="10"/>
                       <polyline points="12 6 12 12 16 14"/>
                     </svg>
                     <p className='mt-3 text-sm font-semibold text-white/60'>Jam Operasional</p>
                     <p className='mt-1 font-bold'>07:00 — 21:00 WIB</p>
                     <p className='mt-1 text-xs text-white/50'>Buka setiap hari untuk pemesanan.</p>
                   </div>

                   {/* Pemesanan Card */}
                   <div className='group rounded-[1.5rem] bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl hover:shadow-black/10'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-300">
                       <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                       <line x1="3" y1="6" x2="21" y2="6"/>
                       <path d="M16 10a4 4 0 0 1-8 0"/>
                     </svg>
                     <p className='mt-3 text-sm font-semibold text-white/60'>Pemesanan</p>
                     <p className='mt-1 font-bold'>Via WhatsApp</p>
                     <p className='mt-1 text-xs text-white/50'>Pesan langsung tanpa aplikasi tambahan.</p>
                   </div>
                 </div>

                 <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                   <a 
                     href={whatsappUrl} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-mimitha-primary shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-xl"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                     </svg>
                     Hubungi WhatsApp
                   </a>
                   <a
                     href={mapsUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10 hover:shadow-xl"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                       <circle cx="12" cy="10" r="3"/>
                     </svg>
                     Buka Google Maps
                   </a>
                 </div>
               </div>

{/* Right Column - Map */}
                <div className='relative min-h-[500px]'>
                  <div className='flex h-full flex-col justify-between p-6'>
                    <div>
                      <p className='text-sm font-bold uppercase tracking-[0.2em] text-amber-200'>GOOGLE MAPS</p>
                      <h3 className='mt-2 text-2xl font-black text-white'>Peta Lokasi</h3>
                      <p className='mt-2 text-sm leading-6 text-white/70'>
                        Temukan lokasi Jajanan Mimitha dengan mudah melalui Google Maps.
                      </p>
                    </div>
                    <div className='relative mt-4 h-[400px] overflow-hidden rounded-[1.5rem] bg-mimitha-cream shadow-inner'>
                      <InteractiveMap />
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
