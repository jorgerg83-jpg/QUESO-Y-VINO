import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Contacto from '../../../components/Contacto';
export default function Page(){
  return (
    <>
      <Header locale='es' />
      <section className='relative'>
        <img src='/images/granada-hero.svg' className='w-full h-[40vh] object-cover' alt='granada' />
        <div className='absolute inset-0 bg-black/30' />
        <div className='container-max relative z-10 py-16 text-white'>
          <h1 className='text-4xl font-semibold'>Queso y Vino — Alhambra íntima + cata</h1>
        </div>
      </section>
      <main className='container-max py-10 space-y-6'>
        <section className='card overflow-hidden'><div className='grid md:grid-cols-2'><img src='/images/granada-1.svg' className='w-full h-56 md:h-full object-cover' alt='Alhambra íntima + cata' /><div className='p-6'><h2 className='text-xl font-semibold'>Alhambra íntima + cata</h2><p className='text-gray-600 mt-2'>Visita con guía oficial y cata andaluza.</p><p className='mt-4 font-semibold'>Desde 160 € / día</p></div></div></section>
        <p className='text-sm text-gray-500'>Precios orientativos con descuento Solo Travelers (−20%) cuando aplique.</p>
      </main>
      <Contacto locale='es' />
      <Footer locale='es' />
    </>
  )
}
