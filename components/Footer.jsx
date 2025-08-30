export default function Footer({ locale='es' }) {
  return (
    <footer className="border-t border-gray-200 mt-10">
      <div className="container-max py-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-2">
        <div>© {new Date().getFullYear()} Queso y Vino</div>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/34649505918" target="_blank" className="hover:text-brandWine">WhatsApp</a>
          <a href={locale==='es'?'/es':'/fr'} className="hover:text-brandWine">{locale==='es'?'Inicio':'Accueil'}</a>
        </div>
      </div>
    </footer>
  )
}
