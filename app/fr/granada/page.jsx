import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Contacto from '../../../components/Contacto'

export default function Page() {
  return (
    <>
      <Header locale="fr" />
      <section className="relative">
        <img src="https://images.unsplash.com/photo-1606767585188-fd3f1b6353b1?q=80&w=2000&auto=format&fit=crop" className="w-full h-[40vh] object-cover" alt="Grenade" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-max relative z-10 py-16 text-white">
          <h1 className="text-4xl font-semibold">Queso y Vino — Grenade</h1>
          <p className="mt-2 opacity-90">Exemples réels pour vous inspirer : tous les voyages sont 100% sur mesure.</p>
        </div>
      </section>
      <main className="container-max py-10 space-y-6">
        <div className="gallery">
<img src="https://images.unsplash.com/photo-1601134467661-3d775b9998e9?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
<img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
<img src="https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
<img src="https://images.unsplash.com/photo-1519680772-8b1b0b6a1f56?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
        </div>
        <section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1606767585188-fd3f1b6353b1?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Alhambra intime + dégustation Queso y Vino" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Alhambra intime + dégustation Queso y Vino</h2>
      <p className="text-gray-600 mt-2">Visite avec guide officiel en évitant la foule + dégustation andalouse privée.</p>
      <p className="mt-4 font-semibold">Dès 170 € / jour — Billets non inclus</p>
    </div>
  </div>
</section>
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1542305985-2e91c8370b88?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Sierra Nevada pour tous niveaux" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Sierra Nevada pour tous niveaux</h2>
      <p className="text-gray-600 mt-2">Hiver : ski. Été : randonnée panoramique. Parcours selon votre niveau.</p>
      <p className="mt-4 font-semibold">Dès 150 € / jour — Solo travelers −20%</p>
    </div>
  </div>
</section>
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Espagnol pour francophones (en ligne)" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Espagnol pour francophones (en ligne)</h2>
      <p className="text-gray-600 mt-2">Pratique réelle dans les marchés et bars de l’Albaicín (option sur place).</p>
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
