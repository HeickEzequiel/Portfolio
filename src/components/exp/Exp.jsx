import Footer from "../footer/Footer"
import Nav from "../nav/Nav"

function Exp() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-cyan-950 via-blue-800 to-cyan-950'>
        <Nav/>
        <div className="lg:relative lg:my-40 lg:mx-60 lg:top-0 lg:mb-8 xs:relative xs:top-36 xs:mx-2 xs:mb-40 font-platypi text-gray-300">
          <ol>
            <li className="lg:relative underline underline-offset-4 lg:text-2xl animate-fade-down animate-duration-700">🞛 Desarrollador web freelance (2023-actualidad)</li><br />
              <ul className="lg:text-xl animate-fade-down animate-duration-1000">
                <li>&#10004; Estudio Juridico: Landing Page de serivicios juridicos</li>
                <li>&#10004; UlBakuya: Aplicacion para registro de usuarios, alumnos. Seguimiento de asistencias, calendario de eventos para profesores de artes marciales</li>
                <li>&#10004; EventApp: Aplicacion de eventos, compra de tickets para recitales, peliculas, espectaculos varios. Creacion, modificacion y eliminacion de usuarios y eventos</li>
              </ul><br />
            <li className="underline underline-offset-4 lg:text-2xl animate-fade-down animate-duration-700">🞛 Instructor de Taekwondo (2015-actualidad)</li><br />
              <ul className="lg:text-xl animate-fade-down animate-duration-1000">
                <li>&#10004; Atencion al publico</li>
                <li>&#10004; Coordinacion de eventos</li>
                <li>&#10004; Liderazgo de equipos</li>
              </ul><br />
            <li className="underline underline-offset-4 lg:text-2xl animate-fade-down animate-duration-700">🞛 Auxiliar de mesa de entradas (2016-2017)</li><br />
              <ul className="lg:text-xl animate-fade-down animate-duration-1000">
                <li>&#10004; Atención en mesa de entradas: recepción de escritos, oficios y cedulas</li>
                <li>&#10004; Armado de expedientes</li>
                <li>&#10004; Alta y baja de expedientes</li>
                <li>&#10004; Manejo de sistema Augusta</li>
              </ul><br />
            <li className="underline underline-offset-4 lg:text-2xl animate-fade-down animate-duration-700">🞛 Agente de soporte IT (2012-2014)</li><br />
              <ul className="lg:text-xl animate-fade-down animate-duration-1000">
                <li>&#10004; Atencion y soporte tecnico para los sitemas de estaciones de servicio</li>
                <li>&#10004; Tareas administrativas BackOffice</li>
                <li>&#10004; Soporte de redes y telefonia ip</li>
                <li>&#10004; Analisis de incidentes</li>
                <li>&#10004; Altas, bajas y modificaciones de usuarios</li>
                <li>&#10004; Soporte on-line</li>
              </ul><br />
          </ol>
        </div>
        <Footer/>
    </div>
  )
}

export default Exp