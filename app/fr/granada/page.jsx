
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
        </div>
      </section>
      <main className="container-max py-10 space-y-6">
        
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1629447025316-b9a8c3c38274?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Alhambra intime + dégustation Queso y Vino" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Alhambra intime + dégustation Queso y Vino</h2>
      <p className="text-gray-600 mt-2">Visite avec guide officiel en évitant la foule, dégustation de fromages andalous et vins de l’Alpujarra.</p>
      <p className="mt-4 font-semibold">Dès 180 € / jour — Billets non inclus</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1542305985-2e91c8370b88?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Sierra Nevada pour tous niveaux" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Sierra Nevada pour tous niveaux</h2>
      <p className="text-gray-600 mt-2">Hiver : ski ; été : randonnée panoramique. Parcours adaptés à votre profil.</p>
      <p className="mt-4 font-semibold">Dès 160 € / jour — Solo travelers −20%</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Cours d’espagnol pour francophones" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Cours d’espagnol pour francophones</h2>
      <p className="text-gray-600 mt-2">Pratique réelle dans les marchés et bars à tapas de l’Albaicín.</p>
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
