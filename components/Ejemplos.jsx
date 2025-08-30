const data = {
  es: [
    { slug: 'suiza', title: 'Suiza', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop', desc: 'Ejemplos inspiradores: Alpes, pueblos, catas Queso y Vino.' },
    { slug: 'menorca', title: 'Menorca', img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop', desc: 'Cales secretas, gastronomía local, rutas en barco.' },
    { slug: 'granada', title: 'Granada', img: 'https://images.unsplash.com/photo-1629447025316-b9a8c3c38274?q=80&w=1600&auto=format&fit=crop', desc: 'Alhambra íntima, Sierra Nevada y tapeo auténtico.' }
  ],
  fr: [
    { slug: 'suiza', title: 'Suisse', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop', desc: 'Exemples: Alpes, villages, dégustations Queso y Vino.' },
    { slug: 'menorca', title: 'Minorque', img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop', desc: 'Criques secrètes, gastronomie locale, sorties en bateau.' },
    { slug: 'granada', title: 'Grenade', img: 'https://images.unsplash.com/photo-1629447025316-b9a8c3c38274?q=80&w=1600&auto=format&fit=crop', desc: 'Alhambra intime, Sierra Nevada et tapas authentiques.' }
  ]
}
export default function Ejemplos({ locale='es' }) {
  const t = { es: { title: 'Ejemplos para inspirarte (100% personalizables)', explorar: 'Ver ejemplos' }, fr: { title: 'Exemples pour vous inspirer (100% personnalisables)', explorar: 'Voir les exemples' } }[locale];
  const list = data[locale];
  const base = locale==='es'?'/es':'/fr';
  return (
    <section id="ejemplos" className="container-max py-12">
      <h2 className="section-title mb-2">{t.title}</h2>
      <p className="lead mb-6">{locale==='es' ? 'Estos no son paquetes cerrados. Ajustamos todo a tus preferencias y presupuesto.' : 'Ce ne sont pas des forfaits fixes. Nous adaptons tout à vos préférences et à votre budget.'}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {list.map((d) => (
          <a key={d.slug} href={`${base}/${d.slug}`} className="card overflow-hidden group">
            <img src={d.img} className="w-full h-48 object-cover group-hover:scale-[1.02] transition" alt={d.title} />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{d.title}</h3>
                <span className="badge">{t.explorar}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{d.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
