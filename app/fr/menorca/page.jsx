import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Contacto from '../../../components/Contacto';
export default function Page(){
  return (
    <>
      <Header locale='fr' />
      <section className='relative'>
        <img src='/images/menorca-hero.jpg' className='w-full h-[40vh] object-cover' alt='Minorque' />
        <div className='absolute inset-0 bg-black/30' />
        <div className='container-max relative z-10 py-16 text-white'>
          <h1 className='text-4xl font-semibold'>Queso y Vino — Minorque</h1>
        </div>
      </section>
      <main className='container-max py-10 space-y-6'>
        <section className='card overflow-hidden'><div className='grid md:grid-cols-2'><img src='/images/menorca-1.svg' className='w-full h-56 md:h-full object-cover' alt='Criques secrètes + pique-nique Queso y Vino' /><div className='p-6'><h2 className='text-xl font-semibold'>Criques secrètes + pique-nique Queso y Vino</h2><p className='text-gray-600 mt-2'>Criques vierges, barque traditionnelle et pique-nique au fromage de Mahón.</p><p className='mt-4 font-semibold'>Dès 160 € / jour — Solo travelers −20%</p></div></div></section>
        <div className='grid-photos'><img src='/images/menorca-2.svg' className='photo' alt='extra'/><img src='/images/menorca-3.svg' className='photo' alt='extra'/></div>
        <p className='text-sm text-gray-500'>Cours disponible ici : Espagnol pour francophones (pas de cours de ski).</p>
      </main>
      <Contacto locale='fr' />
      <Footer locale='fr' />
    </>
  )
}
