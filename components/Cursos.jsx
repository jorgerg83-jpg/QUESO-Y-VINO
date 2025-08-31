
export default function Cursos({locale='es'}){
  const t = {
    es:{ title:'Cursos (online)',
      items:[
        {name:'Francés para viajar (Suiza)',price:'desde 45 €'},
        {name:'Curso online de esquí (Suiza)',price:'desde 60 €'},
        {name:'Preparación física para esquí',price:'desde 60 €'},
        {name:'Español para francófonos (ES)',price:'desde 45 €'}
      ]
    },
    fr:{ title:'Cours (en ligne)',
      items:[
        {name:'Français voyage (Suisse)',price:'dès 50 €'},
        {name:'Cours de ski en ligne (Suisse)',price:'dès 65 €'},
        {name:'Préparation physique pour le ski',price:'dès 65 €'},
        {name:'Espagnol pour francophones (ES)',price:'dès 50 €'}
      ]
    }
  }[locale];
  return (
    <section id='cursos' className='container-max py-8'>
      <h2 className='section-title mb-6'>{t.title}</h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {t.items.map((s,i)=>(
          <div key={i} className='card p-5 flex items-center justify-between'>
            <span>{s.name}</span><span className='font-semibold'>{s.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
