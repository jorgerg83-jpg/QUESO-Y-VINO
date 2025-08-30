export default function Cursos({ locale='es' }) {
  const t = {
    es: { title: 'Cursos (online)', items: [
      { name: 'Francés para viajar (Suiza)', price: 'desde 110 €' },
      { name: 'Curso online de esquí', price: 'desde 85 €' },
      { name: 'Preparación física para esquí', price: 'desde 85 €' },
      { name: 'Español para francófonos (Menorca/Granada)', price: 'desde 110 €' }
    ]},
    fr: { title: 'Cours (en ligne)', items: [
      { name: 'Français voyage (Suisse)', price: 'dès 120 €' },
      { name: 'Cours de ski en ligne', price: 'dès 90 €' },
      { name: 'Préparation physique pour le ski', price: 'dès 90 €' },
      { name: 'Espagnol pour francophones (Minorque/Grenade)', price: 'dès 120 €' }
    ]}
  }[locale];
  return (
    <section id="cursos" className="container-max py-8">
      <h2 className="section-title mb-6">{t.title}</h2>
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
