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
          <p className="mt-2 opacity-90">Ejemplos reales para inspirarte: todos los viajes son 100% a medida.</p>
        </div>
      </section>
      <main className="container-max py-10 space-y-6">
        <div className="gallery">
<img src="https://images.unsplash.com/photo-1526481280698-8fcc13fd9d24?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
<img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
<img src="https://images.unsplash.com/photo-1526485555032-cf94c7f1d69b?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
<img src="https://images.unsplash.com/photo-1529694157877-93f66f9bf5a8?q=80&w=800&auto=format&fit=crop" className="w-full h-28 md:h-32 object-cover rounded-xl" alt="galería" />
        </div>
        <section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Calas secretas + picnic gourmet" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Calas secretas + picnic gourmet</h2>
      <p className="text-gray-600 mt-2">Cales vírgenes y picnic con queso de Mahón y vinos locales al atardecer.</p>
      <p className="mt-4 font-semibold">Desde 150 € / día — Solo travelers −20%</p>
    </div>
  </div>
</section>
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Gastronomía menorquina auténtica" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Gastronomía menorquina auténtica</h2>
      <p className="text-gray-600 mt-2">Mercados locales y taller de cocina con familia menorquina.</p>
      <p className="mt-4 font-semibold">Desde 140 € / día — Taller desde 55 €</p>
    </div>
  </div>
</section>
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1511485977113-f34b09c2acdf?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Español para francófonos (online)" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Español para francófonos (online)</h2>
      <p className="text-gray-600 mt-2">Español de supervivencia con práctica real durante las actividades.</p>
      <p className="mt-4 font-semibold">Curso online: desde 110 €</p>
    </div>
  </div>
</section>

        <p className="text-sm text-gray-500">Precios orientativos con descuento Solo Travelers (−20%) cuando aplique.</p>
      </main>
      <Contacto locale="es" />
      <Footer locale="es" />
    </>
  )
}
