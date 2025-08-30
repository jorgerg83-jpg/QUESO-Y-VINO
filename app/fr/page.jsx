import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Ejemplos from '../../components/Ejemplos'
import Servicios from '../../components/Servicios'
import Cursos from '../../components/Cursos'
import Contacto from '../../components/Contacto'

export default function Page() {
  return (
    <>
      <Header locale="fr" />
      <Hero locale="fr" />
      <main>
        <Ejemplos locale="fr" />
        <Servicios locale="fr" />
        <Cursos locale="fr" />
        <Contacto locale="fr" />
      </main>
      <Footer locale="fr" />
    </>
  )
}
