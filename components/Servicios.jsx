export default function Servicios({ locale='es' }) {
  const t = {
    es: {
      title: 'Servicios complementarios',
      items: [
        { icon: '🏔', name: 'Curso online de esquí', desc: 'Técnica, seguridad y preparación antes de la nieve.', price: 'desde 85 €' },
        { icon: '🗣', name: 'Francés básico para viajar (Suiza)', desc: 'Frases clave para transporte, restaurantes y pistas.', price: 'desde 110 €' },
        { icon: '🗣', name: 'Español para francófonos (Menorca/Granada)', desc: 'Supervivencia + práctica real en actividades.', price: 'desde 110 €' },
        { icon: '🍷', name: 'Experiencia “Queso y Vino”', desc: 'Degustación privada maridada con productores locales.', price: 'desde 140 €' },
        { icon: '🧭', name: 'Itinerario a medida', desc: 'Ruta personalizada 3–14 días, con reservas opcionales.', price: 'desde 95 €' },
        { icon: '📲', name: 'Acompañamiento por WhatsApp', desc: 'Soporte en destino (horarios, cambios, tips).', price: '75 €/semana' }
      ]},
    fr: {
      title: 'Services complémentaires',
      items: [
        { icon: '🏔', name: 'Cours de ski en ligne', desc: 'Technique, sécurité et préparation avant la neige.', price: 'dès 90 €' },
        { icon: '🗣', name: 'Français voyage (Suisse)', desc: 'Phrases clés pour transport, restos et pistes.', price: 'dès 120 €' },
        { icon: '🗣', name: 'Espagnol pour francophones (Minorque/Grenade)', desc: 'Survie + pratique réelle pendant les activités.', price: 'dès 120 €' },
        { icon: '🍷', name: 'Expérience “Queso y Vino”', desc: 'Dégustation privée avec producteurs locaux.', price: 'dès 150 €' },
        { icon: '🧭', name: 'Itinéraire sur mesure', desc: 'Parcours personnalisé 3–14 jours, réservations en option.', price: 'dès 100 €' },
        { icon: '📲', name: 'Accompagnement WhatsApp', desc: 'Assistance sur place (horaires, changements, tips).', price: '85 €/semaine' }
      ]}
  }[locale];
  return (
    <section id="servicios" className="container-max py-12">
      <h2 className="section-title mb-6">{t.title}</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {t.items.map((s, i) => (
          <div key={i} className="card p-6">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-3 font-semibold">{s.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            <div className="mt-4 font-semibold">{s.price}</div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-4">{locale==='es' ? 'Precios orientativos. Ajustamos según temporada y preferencias.' : 'Tarifs indicatifs. Ajustés selon la saison et vos préférences.'}</p>
    </section>
  )
}
