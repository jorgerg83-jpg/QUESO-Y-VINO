import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Contacto from '../../../components/Contacto'

export default function Page() {
  return (
    <>
      <Header locale="es" />
      <section className="relative">
        <img src="https://images.unsplash.com/photo-1508261303786-0e0b4f4a2e8e?q=80&w=2000&auto=format&fit=crop" className="w-full h-[40vh] object-cover" alt="Suiza" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-max relative z-10 py-16 text-white">
          <h1 className="text-4xl font-semibold">Queso y Vino — Suiza</h1>
          <p className="mt-2 opacity-90">Ejemplos reales para inspirarte: todos los viajes son 100% a medida.</p>
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
    <img src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Escapada alpina con cata Queso y Vino" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Escapada alpina con cata Queso y Vino</h2>
      <p className="text-gray-600 mt-2">Alpes con guía privado, quesería artesanal y cata maridada (Valais).</p>
      <p className="mt-4 font-semibold">Desde 195 € / día — Solo travelers −20%</p>
    </div>
  </div>
</section>
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Pueblos alpinos secretos" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Pueblos alpinos secretos</h2>
      <p className="text-gray-600 mt-2">Hameaux, miradores y refugios locales fuera de las multitudes.</p>
      <p className="mt-4 font-semibold">Desde 180 € / día — Solo travelers −20%</p>
    </div>
  </div>
</section>
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Francés para viajar (online)" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Francés para viajar (online)</h2>
      <p className="text-gray-600 mt-2">Expresiones esenciales y práctica situacional. Opción intensiva previa.</p>
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
