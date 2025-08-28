
export default function Header({ locale='es' }) {
  const nav = {
    es: { destinos: 'Destinos', servicios: 'Servicios', cursos: 'Cursos', contacto: 'Contacto' },
    fr: { destinos: 'Destinations', servicios: 'Services', cursos: 'Cours', contacto: 'Contact' }
  }[locale];
  return (
    <header className="border-b border-gray-200">
      <div className="container-max py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🍷🧀</span>
          <span className="text-xl font-semibold">Queso y Vino</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-brandWine" href={locale==='es'?'/es#destinos':'/fr#destinos'}>{nav.destinos}</a>
          <a className="hover:text-brandWine" href={locale==='es'?'/es#servicios':'/fr#servicios'}>{nav.servicios}</a>
          <a className="hover:text-brandWine" href={locale==='es'?'/es#cursos':'/fr#cursos'}>{nav.cursos}</a>
          <a className="hover:text-brandWine" href={locale==='es'?'/es#contacto':'/fr#contact'}>{nav.contacto}</a>
        </nav>
        <div className="flex items-center gap-2">
          <a className="btn btn-outline" href="/es">ES</a>
          <a className="btn btn-outline" href="/fr">FR</a>
          <a className="btn btn-primary" target="_blank" href="https://wa.me/34649505918">WhatsApp</a>
        </div>
      </div>
    </header>
  )
}
