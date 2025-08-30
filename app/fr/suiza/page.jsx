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
          <p className="mt-2 opacity-90">Exemples réels pour vous inspirer : tous les voyages sont 100% sur mesure.</p>
        </div>
      </section>
      <main className="container-max py-10 space-y-6">
        <div className="gallery">
<img src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
<img src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
<img src="https://images.unsplash.com/photo-1500043357865-c6b8827edf23?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
<img src="https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
        </div>
        <section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Escapade alpine avec dégustation Queso y Vino" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Escapade alpine avec dégustation Queso y Vino</h2>
      <p className="text-gray-600 mt-2">Alpes avec guide privé, fromagerie artisanale et dégustation (Valais).</p>
      <p className="mt-4 font-semibold">Dès 205 € / jour — Solo travelers −20%</p>
    </div>
  </div>
</section>
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Villages alpins secrets" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Villages alpins secrets</h2>
      <p className="text-gray-600 mt-2">Hameaux, belvédères et refuges locaux, loin des foules.</p>
      <p className="mt-4 font-semibold">Dès 190 € / jour — Solo travelers −20%</p>
    </div>
  </div>
</section>
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Français pour voyager (en ligne)" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Français pour voyager (en ligne)</h2>
      <p className="text-gray-600 mt-2">Expressions essentielles et pratique en situation. Option intensive avant le voyage.</p>
      <p className="mt-4 font-semibold">Cours en ligne : dès 120 €</p>
    </div>
  </div>
</section>

        <p className="text-sm text-gray-500">Tarifs indicatifs avec remise Solo Travelers (−20%) lorsque applicable.</p>
      </main>
      <Contacto locale="fr" />
      <Footer locale="fr" />
    </>
  )
}
