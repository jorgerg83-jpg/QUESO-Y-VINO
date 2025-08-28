
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Contacto from '../../../components/Contacto'

export default function Page() {
  return (
    <>
      <Header locale="es" />
      <section className="relative">
        <img src="https://images.unsplash.com/photo-1521033719794-41049d18b8ab?q=80&w=2000&auto=format&fit=crop" className="w-full h-[40vh] object-cover" alt="Menorca" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-max relative z-10 py-16 text-white">
          <h1 className="text-4xl font-semibold">Queso y Vino — Menorca</h1>
        </div>
      </section>
      <main className="container-max py-10 space-y-6">
        
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Calas secretas + picnic gourmet" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Calas secretas + picnic gourmet</h2>
      <p className="text-gray-600 mt-2">Calas vírgenes y picnic con queso de Mahón y vinos locales al atardecer.</p>
      <p className="mt-4 font-semibold">Desde 180 € por día — Solo travelers −20%</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Gastronomía menorquina auténtica" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Gastronomía menorquina auténtica</h2>
      <p className="text-gray-600 mt-2">Mercados locales y taller de cocina con familia menorquina. Degustación de quesos y vinos baleares.</p>
      <p className="mt-4 font-semibold">Desde 160 € por día — Taller desde 60 €</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1511485977113-f34b09c2acdf?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Curso de español para francófonos" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Curso de español para francófonos</h2>
      <p className="text-gray-600 mt-2">Español de supervivencia: pedir, reservar, socializar. Práctica real durante las actividades.</p>
      <p className="mt-4 font-semibold">Curso online: 40 € — Sesión 1:1 opcional 60 €</p>
    </div>
  </div>
</section>

      </main>
      <Contacto locale="es" />
      <Footer locale="es" />
    </>
  )
}
