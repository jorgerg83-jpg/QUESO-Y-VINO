
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Contacto from '../../../components/Contacto'

export default function Page() {
  return (
    <>
      <Header locale="es" />
      <section className="relative">
        <img src="https://images.unsplash.com/photo-1606767585188-fd3f1b6353b1?q=80&w=2000&auto=format&fit=crop" className="w-full h-[40vh] object-cover" alt="Granada" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-max relative z-10 py-16 text-white">
          <h1 className="text-4xl font-semibold">Queso y Vino — Granada</h1>
        </div>
      </section>
      <main className="container-max py-10 space-y-6">
        
<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1629447025316-b9a8c3c38274?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Alhambra íntima + cata Queso y Vino" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Alhambra íntima + cata Queso y Vino</h2>
      <p className="text-gray-600 mt-2">Visita con guía oficial evitando multitudes, cata de quesos andaluces y vinos de la Alpujarra.</p>
      <p className="mt-4 font-semibold">Desde 170 € por día — Entradas no incluidas</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1542305985-2e91c8370b88?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Sierra Nevada para todos los niveles" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Sierra Nevada para todos los niveles</h2>
      <p className="text-gray-600 mt-2">Invierno: esquí; verano: senderismo panorámico. Rutas según tu perfil.</p>
      <p className="mt-4 font-semibold">Desde 150 € por día — Solo travelers −20%</p>
    </div>
  </div>
</section>


<section className="card overflow-hidden">
  <div className="grid md:grid-cols-2">
    <img src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=1600&auto=format&fit=crop" className="w-full h-56 md:h-full object-cover" alt="Curso de español para francófonos" />
    <div className="p-6">
      <h2 className="text-xl font-semibold">Curso de español para francófonos</h2>
      <p className="text-gray-600 mt-2">Práctica real en mercados y bares de tapas del Albaicín.</p>
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
