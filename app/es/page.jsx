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
      <Header locale="es" />
      <Hero locale="es" />
      <main>
        <Ejemplos locale="es" />
        <Servicios locale="es" />
        <Cursos locale="es" />
        <Contacto locale="es" />
      </main>
      <Footer locale="es" />
    </>
  )
}
