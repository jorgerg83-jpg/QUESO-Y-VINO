import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Contacto from '../../../components/Contacto';
export default function Page(){
  return (
    <>
      <Header locale='fr' />
      <section className='relative'>
        <img src='/images/granada-hero.svg' className='w-full h-[40vh] object-cover' alt='granada' />
        <div className='absolute inset-0 bg-black/30' />
        <div className='container-max relative z-10 py-16 text-white'>
          <h1 className='text-4xl font-semibold'>Queso y Vino — Alhambra intime</h1>
        </div>
      </section>
      <main className='container-max py-10 space-y-6'>
        <section className='card overflow-hidden'><div className='grid md:grid-cols-2'><img src='/images/granada-1.svg' className='w-full h-56 md:h-full object-cover' alt='Alhambra intime' /><div className='p-6'><h2 className='text-xl font-semibold'>Alhambra intime</h2><p className='text-gray-600 mt-2'>Visite avec guide officiel et dégustation.</p><p className='mt-4 font-semibold'>Dès 170 € / jour</p></div></div></section>
        <p className='text-sm text-gray-500'>Tarifs indicatifs avec remise Solo Travelers (−20%) lorsque applicable.</p>
      </main>
      <Contacto locale='fr' />
      <Footer locale='fr' />
    </>
  )
}
