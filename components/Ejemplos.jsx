
export default function Ejemplos({locale='es'}){
  const data = {
    es: [
      { slug:'suiza', title:'Suiza', img:'/images/suiza-1.svg', desc:'Alpes, pueblos con encanto y catas “Queso y Vino”.' },
      { slug:'menorca', title:'Menorca', img:'/images/menorca-1.svg', desc:'Cales secretas, gastronomía local y rutas en barco.' },
      { slug:'granada', title:'Granada', img:'/images/granada-1.svg', desc:'Alhambra íntima, Sierra Nevada y tapeo auténtico.' }
    ],
    fr: [
      { slug:'suiza', title:'Suisse', img:'/images/suiza-1.svg', desc:'Alpes, villages pittoresques et dégustations.' },
      { slug:'menorca', title:'Minorque', img:'/images/menorca-1.svg', desc:'Criques secrètes, gastronomie locale et sorties en bateau.' },
      { slug:'granada', title:'Grenade', img:'/images/granada-1.svg', desc:'Alhambra intime, Sierra Nevada et tapas authentiques.' }
    ]
  }[locale];
  const t = { es:{title:'Ejemplos para inspirarte (100% personalizables)', explorar:'Ver ejemplos'}, fr:{title:'Exemples pour vous inspirer (100% personnalisables)', explorar:'Voir les exemples'} }[locale];
  const base = locale==='es'?'/es':'/fr';
  return (
    <section id='ejemplos' className='container-max py-12'>
      <h2 className='section-title mb-2'>{t.title}</h2>
      <p className='lead mb-6'>{locale==='es' ? 'Estos no son paquetes cerrados. Ajustamos todo a tus preferencias y presupuesto.' : 'Ce ne sont pas des forfaits fixes. Nous adaptons tout à vos préférences et budget.'}</p>
      <div className='grid md:grid-cols-3 gap-6'>
        {data.map(d => (
          <a key={d.slug} href={`${base}/${d.slug}`} className='card overflow-hidden group'>
            <img src={d.img} className='w-full h-48 object-cover' alt={d.title} />
            <div className='p-5'>
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold'>{d.title}</h3>
                <span className='badge'>{t.explorar}</span>
              </div>
              <p className='text-sm text-gray-600 mt-2'>{d.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
