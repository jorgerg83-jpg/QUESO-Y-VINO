
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
        </div>
      </section>
      <main className="container-max py-10 space-y-6">
        
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Escapada alpina con cata Queso y Vino" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Escapada alpina con cata Queso y Vino</h2>
      <p className="text-gray-600 mt-2">Ruta por los Alpes con guía privado, quesería artesanal y cata maridada con vinos del Valais.</p>
      <p className="mt-4 font-semibold">Desde 220 € por día — Solo travelers −20%</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Pueblos alpinos secretos" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Pueblos alpinos secretos</h2>
      <p className="text-gray-600 mt-2">Itinerario fuera de rutas masivas: hameaux, senderos panorámicos y comida local en refugios.</p>
      <p className="mt-4 font-semibold">Desde 200 € por día — Solo travelers −20%</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Curso de francés para viajar (online)" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Curso de francés para viajar (online)</h2>
      <p className="text-gray-600 mt-2">Expresiones esenciales y situaciones reales (transporte, restaurantes, pistas). Opción intensiva previa.</p>
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
