
export default function Contacto({ locale='es' }) {
  const t = {
    es: { title: 'Contacto', desc: 'Hablemos de tu viaje ideal. Respondemos en menos de 24h.' },
    fr: { title: 'Contact', desc: 'Parlons de votre voyage idéal. Réponse sous 24h.' }
  }[locale];
  return (
    <section id={locale==='es'?'contacto':'contact'} className="container-max py-14">
      <div className="card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold">{t.title}</h2>
          <p className="text-gray-600 mt-2">{t.desc}</p>
        </div>
        <a className="btn btn-primary" href="https://wa.me/34649505918" target="_blank">WhatsApp</a>
      </div>
    </section>
  )
}
