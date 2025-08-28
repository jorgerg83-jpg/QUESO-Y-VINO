
export default function Cursos({ locale='es' }) {
  const t = {
    es: { title: 'Cursos', items: [
      { name: 'Francés para viajar (Suiza)', price: '40 €' },
      { name: 'Curso online de esquí', price: '40 €' },
      { name: 'Preparación física para esquí', price: '40 €' },
      { name: 'Español para francófonos (Menorca/Granada)', price: '40 €' }
    ]},
    fr: { title: 'Cours', items: [
      { name: 'Français voyage (Suisse)', price: '45 €' },
      { name: 'Cours de ski en ligne', price: '45 €' },
      { name: 'Préparation physique pour le ski', price: '45 €' },
      { name: 'Espagnol pour francophones (Minorque/Grenade)', price: '45 €' }
    ]}
  }[locale];
  return (
    <section id="cursos" className="container-max py-8">
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
