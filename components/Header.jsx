
export default function Header({locale='es'}){
  const nav = {
    es: { ejemplos:'Ejemplos', servicios:'Servicios', cursos:'Cursos', contacto:'Contacto', disena:'Diseña tu viaje' },
    fr: { ejemplos:'Exemples', servicios:'Services', cursos:'Cours', contacto:'Contact', disena:'Concevez votre voyage' }
  }[locale];
  return (
    <header className='border-b border-gray-200'>
      <div className='container-max py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <span className='text-2xl'>🍷🧀</span>
          <a href={locale==='es'?'/es':'/fr'} className='text-xl font-semibold'>Queso y Vino</a>
        </div>
        <nav className='hidden md:flex items-center gap-6 text-sm'>
          <a href={locale==='es'?'/es#ejemplos':'/fr#ejemplos'} className='hover:text-brandWine'>{nav.ejemplos}</a>
          <a href={locale==='es'?'/es#servicios':'/fr#servicios'} className='hover:text-brandWine'>{nav.servicios}</a>
          <a href={locale==='es'?'/es#cursos':'/fr#cursos'} className='hover:text-brandWine'>{nav.cursos}</a>
          <a href={locale==='es'?'/es#contacto':'/fr#contact'} className='hover:text-brandWine'>{nav.contacto}</a>
        </nav>
        <div className='flex items-center gap-2'>
          <a className='btn btn-outline' href='/es'>ES</a>
          <a className='btn btn-outline' href='/fr'>FR</a>
          <a className='btn btn-primary' target='_blank' href='https://wa.me/34649505918'>{nav.disena}</a>
        </div>
      </div>
    </header>
  );
}
