
const data = {
  es: [
    { slug: 'suiza', title: 'Suiza', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop', desc: 'Alpes, pueblos alpinos, cata de quesos y vinos. Curso básico de francés.' },
    { slug: 'menorca', title: 'Menorca', img: 'https://images.unsplash.com/photo-1521033719794-41049d18b8ab?q=80&w=1600&auto=format&fit=crop', desc: 'Calas secretas, gastronomía local, experiencias auténticas. Curso de español.' },
    { slug: 'granada', title: 'Granada', img: 'https://images.unsplash.com/photo-1606767585188-fd3f1b6353b1?q=80&w=1600&auto=format&fit=crop', desc: 'Alhambra íntima, Sierra Nevada, flamenco y tapas. Curso de español.' }
  ],
  fr: [
    { slug: 'suiza', title: 'Suisse', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop', desc: 'Alpes, villages alpins, fromages et vins. Cours de français voyage.' },
    { slug: 'menorca', title: 'Minorque', img: 'https://images.unsplash.com/photo-1521033719794-41049d18b8ab?q=80&w=1600&auto=format&fit=crop', desc: 'Criques secrètes, gastronomie locale, expériences authentiques. Cours d’espagnol.' },
    { slug: 'granada', title: 'Grenade', img: 'https://images.unsplash.com/photo-1606767585188-fd3f1b6353b1?q=80&w=1600&auto=format&fit=crop', desc: 'Alhambra intime, Sierra Nevada, flamenco et tapas. Cours d’espagnol.' }
  ]
}
export default function Destinos({ locale='es' }) {
  const t = { es: { title: 'Destinos', explorar: 'Explorar' }, fr: { title: 'Destinations', explorar: 'Explorer' } }[locale];
  const list = data[locale];
  const base = locale==='es'?'/es':'/fr';
  return (
    <section id="destinos" className="container-max py-12">
      <h2 className="text-2xl font-semibold mb-6">{t.title}</h2>
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
