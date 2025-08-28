
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Contacto from '../../../components/Contacto'

export default function Page() {
  return (
    <>
      <Header locale="fr" />
      <section className="relative">
        <img src="https://images.unsplash.com/photo-1521033719794-41049d18b8ab?q=80&w=2000&auto=format&fit=crop" className="w-full h-[40vh] object-cover" alt="Minorque" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-max relative z-10 py-16 text-white">
          <h1 className="text-4xl font-semibold">Queso y Vino — Minorque</h1>
        </div>
      </section>
      <main className="container-max py-10 space-y-6">
        
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Criques secrètes + pique-nique gourmet" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Criques secrètes + pique-nique gourmet</h2>
      <p className="text-gray-600 mt-2">Criques vierges et pique-nique au fromage de Mahón et vins locaux au coucher du soleil.</p>
      <p className="mt-4 font-semibold">Dès 190 € / jour — Solo travelers −20%</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Gastronomie minorquine authentique" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Gastronomie minorquine authentique</h2>
      <p className="text-gray-600 mt-2">Marchés locaux et atelier cuisine chez l’habitant. Dégustation de fromages et vins des Baléares.</p>
      <p className="mt-4 font-semibold">Dès 170 € / jour — Atelier dès 65 €</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1511485977113-f34b09c2acdf?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Cours d’espagnol pour francophones" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Cours d’espagnol pour francophones</h2>
      <p className="text-gray-600 mt-2">Espagnol de survie : commander, réserver, socialiser. Pratique réelle pendant les activités.</p>
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
