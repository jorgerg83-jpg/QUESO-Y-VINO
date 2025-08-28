
export default function Servicios({ locale='es' }) {
  const t = {
    es: { title: 'Servicios', items: [
      { name: 'Asesoría personalizada (1h)', price: '60 €' },
      { name: 'Itinerarios exclusivos (3–14 días)', price: 'desde 100 €' },
      { name: 'Acompañamiento remoto (WhatsApp)', price: '80 €/sem' },
      { name: 'Solo Travelers', price: '−20% aplicado' }
    ]},
    fr: { title: 'Services', items: [
      { name: 'Conseil personnalisé (1h)', price: '65 €' },
      { name: 'Itinéraires exclusifs (3–14 jours)', price: 'dès 105 €' },
      { name: 'Accompagnement à distance (WhatsApp)', price: '85 €/sem' },
      { name: 'Solo Travelers', price: '−20% appliqué' }
    ]}
  }[locale];
  return (
    <section id="servicios" className="container-max py-8">
      <h2 className="text-2xl font-semibold mb-6">{t.title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {t.items.map((s, i) => (
          <div key={i} className="card p-5 flex items-center justify-between">
            <span>{s.name}</span><span className="font-semibold">{s.price}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
