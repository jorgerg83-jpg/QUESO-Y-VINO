
export default function Hero({ locale='es' }) {
  const t = {
    es: { title: 'Viajes exclusivos y experiencias auténticas', sub: 'Suiza · Menorca · Granada — lejos del turismo de masas', cta1: 'Descubrir destinos', cta2: 'WhatsApp' },
    fr: { title: 'Voyages exclusifs et expériences authentiques', sub: 'Suisse · Minorque · Grenade — loin du tourisme de masse', cta1: 'Découvrir', cta2: 'WhatsApp' }
  }[locale];
  const heroImg = 'https://images.unsplash.com/photo-1508261303786-0e0b4f4a2e8e?q=80&w=2000&auto=format&fit=crop';
  return (
    <section className="relative">
      <img src={heroImg} className="w-full h-[60vh] object-cover" alt="Alpes" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container-max absolute inset-0 z-10 flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold">{t.title}</h1>
          <p className="mt-3 text-lg opacity-90">{t.sub}</p>
          <div className="mt-8 flex gap-3">
            <a href="#destinos" className="btn btn-primary">{t.cta1}</a>
            <a href="https://wa.me/34649505918" target="_blank" className="btn btn-outline bg-white/10 text-white border-white/60">{t.cta2}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
