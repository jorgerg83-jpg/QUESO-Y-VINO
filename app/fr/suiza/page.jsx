
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Contacto from '../../../components/Contacto'

export default function Page() {
  return (
    <>
      <Header locale="fr" />
      <section className="relative">
        <img src="https://images.unsplash.com/photo-1508261303786-0e0b4f4a2e8e?q=80&w=2000&auto=format&fit=crop" className="w-full h-[40vh] object-cover" alt="Suisse" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-max relative z-10 py-16 text-white">
          <h1 className="text-4xl font-semibold">Queso y Vino — Suisse</h1>
        </div>
      </section>
      <main className="container-max py-10 space-y-6">
        
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Escapade alpine avec dégustation Queso y Vino" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Escapade alpine avec dégustation Queso y Vino</h2>
      <p className="text-gray-600 mt-2">Parcours dans les Alpes avec guide privé, fromagerie artisanale et dégustation de vins du Valais.</p>
      <p className="mt-4 font-semibold">Dès 230 € / jour — Solo travelers −20%</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Villages alpins secrets" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Villages alpins secrets</h2>
      <p className="text-gray-600 mt-2">Itinéraire hors des foules : hameaux, sentiers panoramiques et cuisine locale en refuge.</p>
      <p className="mt-4 font-semibold">Dès 210 € / jour — Solo travelers −20%</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Cours de français pour voyager (en ligne)" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Cours de français pour voyager (en ligne)</h2>
      <p className="text-gray-600 mt-2">Expressions essentielles et situations réelles (transport, restaurants, pistes). Option intensive avant le voyage.</p>
      <p className="mt-4 font-semibold">Cours en ligne : 45 € — Session 1:1 option 65 €</p>
    </div>
  </div>
</section>

      </main>
      <Contacto locale="fr" />
      <Footer locale="fr" />
    </>
  )
}
