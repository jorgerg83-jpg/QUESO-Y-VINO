
export default function Hero({locale='es'}){
  const t = {
    es: { title:'Viajes exclusivos y 100% a medida', sub:'Diseñamos experiencias únicas en Suiza, Menorca y Granada — lejos del turismo de masas.', cta1:'Diseña tu viaje', cta2:'Ver ejemplos', note:'Nuestros ejemplos son solo inspiración: cada viaje se crea desde cero para ti.' },
    fr: { title:'Voyages exclusifs et 100% sur mesure', sub:'Nous créons des expériences uniques en Suisse, Minorque et Grenade — loin du tourisme de masse.', cta1:'Concevoir votre voyage', cta2:'Voir des exemples', note:'Nos exemples sont une inspiration : chaque voyage est créé sur mesure pour vous.' }
  }[locale];
  const heroImg='/images/hero-generic.svg';
  return (
    <section className='relative'>
      <img src={heroImg} className='w-full h-[60vh] object-cover' alt='Hero' />
      <div className='absolute inset-0 bg-black/40' />
      <div className='container-max absolute inset-0 z-10 flex items-center'>
        <div className='text-white max-w-2xl'>
          <h1 className='text-4xl md:text-5xl font-semibold'>{t.title}</h1>
          <p className='mt-3 text-lg opacity-90'>{t.sub}</p>
          <div className='mt-8 flex gap-3'>
            <a href='https://wa.me/34649505918' target='_blank' className='btn btn-primary'>{t.cta1}</a>
            <a href='#ejemplos' className='btn btn-outline bg-white/10 text-white border-white/60'>{t.cta2}</a>
          </div>
          <p className='mt-4 text-sm opacity-90'>{t.note}</p>
        </div>
      </div>
    </section>
  );
}
