
export default function Contacto({locale='es'}){
  const t = {
    es:{ title:'¿Listo para empezar?', subtitle:'Cuéntanos tu idea y diseñamos tu viaje a medida.', whatsapp:'Hablar por WhatsApp', note:'Atención personalizada. Los ejemplos son solo inspiración.' },
    fr:{ title:'Prêt à commencer ?', subtitle:'Dites-nous votre idée et nous concevons votre voyage sur mesure.', whatsapp:'Parler sur WhatsApp', note:'Service personnalisé. Nos exemples sont une inspiration.' }
  }[locale];
  return (
    <section id={locale==='es'?'contacto':'contact'} className='container-max py-12'>
      <div className='card p-8 text-center'>
        <h2 className='section-title'>{t.title}</h2>
        <p className='lead mt-2'>{t.subtitle}</p>
        <div className='mt-6'>
          <a className='btn btn-primary' href='https://wa.me/34649505918' target='_blank'>{t.whatsapp}</a>
        </div>
        <p className='text-sm text-gray-500 mt-4'>{t.note}</p>
      </div>
    </section>
  );
}
