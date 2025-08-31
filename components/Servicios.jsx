
export default function Servicios({locale='es'}){
  const t = {
    es: {
      title:'Servicios complementarios',
      items:[
        {icon:'🧭',name:'Itinerario a medida',desc:'Ruta personalizada 3–14 días.',price:'desde 90 €'},
        {icon:'🗣',name:'Francés básico para viajar (Suiza)',desc:'Frases clave y práctica real.',price:'desde 45 €'},
        {icon:'🗣',name:'Español para francófonos (ES)',desc:'Supervivencia + práctica.',price:'desde 45 €'},
        {icon:'🏔',name:'Curso online de esquí (Suiza)',desc:'Técnica y preparación.',price:'desde 60 €'},
        {icon:'👤',name:'Asesoría 1h individual',desc:'Videollamada para afinar tu viaje.',price:'40 € / hora'},
        {icon:'👥',name:'Meeting grupal Solo Travelers',desc:'Sesión grupal para conectar viajeros.',price:'15 € / persona'},
        {icon:'🍷',name:'Experiencia “Queso y Vino”',desc:'Degustación privada temática.',price:'desde 35 €'},
        {icon:'📲',name:'Acompañamiento por WhatsApp',desc:'Soporte en destino.',price:'60 € / semana'}
      ]
    },
    fr: {
      title:'Services complémentaires',
      items:[
        {icon:'🧭',name:'Itinéraire sur mesure',desc:'Parcours personnalisé 3–14 jours.',price:'dès 95 €'},
        {icon:'🗣',name:'Français voyage (Suisse)',desc:'Phrases clés et pratique réelle.',price:'dès 50 €'},
        {icon:'🗣',name:'Espagnol pour francophones (ES)',desc:'Survie + pratique.',price:'dès 50 €'},
        {icon:'🏔',name:'Cours de ski en ligne (Suisse)',desc:'Technique et préparation.',price:'dès 65 €'},
        {icon:'👤',name:'Conseil individuel 1h',desc:'Appel vidéo pour affiner votre voyage.',price:'40 € / h'},
        {icon:'👥',name:'Meeting groupe Solo Travelers',desc:'Session pour connecter des voyageurs.',price:'15 € / personne'},
        {icon:'🍷',name:'Expérience “Queso y Vino”',desc:'Dégustation privée thématique.',price:'dès 40 €'},
        {icon:'📲',name:'Accompagnement WhatsApp',desc:'Support sur place.',price:'85 € / sem'}
      ]
    }
  }[locale];
  return (
    <section id='servicios' className='container-max py-12'>
      <h2 className='section-title mb-6'>{t.title}</h2>
      <div className='grid md:grid-cols-3 gap-5'>
        {t.items.map((s,i)=>(
          <div key={i} className='card p-6'>
            <div className='text-3xl'>{s.icon}</div>
            <h3 className='mt-3 font-semibold'>{s.name}</h3>
            <p className='text-sm text-gray-600 mt-1'>{s.desc}</p>
            <div className='mt-4 font-semibold'>{s.price}</div>
          </div>
        ))}
      </div>
      <p className='text-sm text-gray-500 mt-4'>{locale==='es'?'Precios orientativos. Ajustamos según temporada y preferencias.':'Tarifs indicatifs. Nous ajustons selon la saison et vos préférences.'}</p>
    </section>
  );
}
