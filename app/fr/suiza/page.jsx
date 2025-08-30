import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Contacto from '../../../components/Contacto';
export default function Page(){
  return (
    <>
      <Header locale='fr' />
      <section className='relative'>
        <img src='/images/suiza-hero.svg' className='w-full h-[40vh] object-cover' alt='suiza' />
        <div className='absolute inset-0 bg-black/30' />
        <div className='container-max relative z-10 py-16 text-white'>
          <h1 className='text-4xl font-semibold'>Queso y Vino — Escapade alpine</h1>
        </div>
      </section>
      <main className='container-max py-10 space-y-6'>
        <section className='card overflow-hidden'><div className='grid md:grid-cols-2'><img src='/images/suiza-1.svg' className='w-full h-56 md:h-full object-cover' alt='Escapade alpine' /><div className='p-6'><h2 className='text-xl font-semibold'>Escapade alpine</h2><p className='text-gray-600 mt-2'>Alpes avec guide et dégustation.</p><p className='mt-4 font-semibold'>Dès 205 € / jour — Solo travelers −20%</p></div></div></section>
        <p className='text-sm text-gray-500'>Tarifs indicatifs avec remise Solo Travelers (−20%) lorsque applicable.</p>
      </main>
      <Contacto locale='fr' />
      <Footer locale='fr' />
    </>
  )
}
