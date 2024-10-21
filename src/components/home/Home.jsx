import React, { useRef } from 'react'
import { AdvancedImage } from '@cloudinary/react'
import {js,html,css,react,redux,express,node,postgre,sequelize,zustand,tanstack,vite,tailwind,json, ezequiel, henry, efset, cm, lider, redes, github, gmail, linkedin, whatsapp, fondo} from '../../config/cloudinary.js'

function Home() {

  const expRef = useRef(null)
  const scrollToexp = ()=>{
    expRef.current?.scrollIntoView({behavior: "smooth"})
  } 
  const certRef = useRef(null)
  const scrollTocert = ()=>{
    certRef.current?.scrollIntoView({behavior: "smooth"})
  } 
  const iniRef = useRef(null)
  const scrollToini = ()=>{
    iniRef.current?.scrollIntoView({behavior: "smooth"})
  } 
  const contRef = useRef(null)
  const scrollTocont = ()=>{
    contRef.current?.scrollIntoView({behavior: "smooth"})
  } 

  return (
    <div className='lg:relative xs:relative bg-gray-900 '>
      
      <div className='lg:sticky lg:top-0 lg:z-50 lg:items-center lg:p-6 lg:w-full text-white border-b-2 border-white bg-gradient-to-r from-cyan-950 via-blue-800 to-cyan-950   
                      xs:sticky xs:top-0 xs:z-50 xs:items-center xs:P-2 xs:w-full'>
        <div className='lg:relative lg:text-lg lg:flex lg:mt-0 lg:mx-72
                        xs:relative xs:text-xs xs:flex xs:mt-0 xs:mx-2'>
          <button onClick={scrollToini}className='nav-button'>Inicio</button>
          <button onClick={scrollToexp}className='nav-button'>Experiencia</button>
          <button onClick={scrollTocert}className='nav-button'>Certificaciones</button>
          <button onClick={scrollTocont}className='nav-button'>Contacto</button>
          <button className='lg:absolute lg:left-96 lg:ml-96 lg:w-44 border-2 border-white  nav-button'><a href='https://docs.google.com/document/d/1Y2xDv2bYYKT7CjVTD-qQl9D75NhBtewW/edit?usp=sharing&ouid=116375284601497785226&rtpof=true&sd=true' target="_blank" download="CV Ezequiel Heick.pdf">Descarga mi CV</a></button>
        </div>
      </div>
      
      <div ref={iniRef} className='lg:relative lg:mt-20 lg:mx-60 font-platypi text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-2xl
                                   xs:relative xs:mt-12 xs:mx-6'> 
        <div className=''> 
          <AdvancedImage cldImg={fondo} className="lg:relative rounded-2xl
                                                   xs:relative "/>
          <AdvancedImage cldImg={ezequiel} className="lg:absolute lg:rounded-full lg:size-44 lg:top-44 lg:-left-2 border-2 border-black
                                                      xs:absolute xs:rounded-full xs:size-24 xs:top-10 xs:left-0"/>
          <p className='lg:relative lg:text-2xl lg:ml-52 lg:text-white
                        xs:relative xs:text-xl xs:ml-28'>Ezequiel Heick </p><br />
          <p className='lg:relative lg:text-2xl lg:-top-4 lg:ml-52 lg:text-white
                        xs:relative xs:text-xl xs:-top-6 xs:ml-28 '>Fullstack Developer.</p>
        </div>
        <div className='lg:relative lg:my-16 lg:mt-4 w-auto h-auto 
                        xs:relative xs:my-0 xs:mt-2'>
          <p className='lg:relative lg:text-xl lg:px-10
                        xs:relative xs:text-base xs:px-2'>Desarrollador Web Full Stack apasionado por la tecnología y la resolución de problemas complejos. Me especializo en crear aplicaciones web eficientes, escalables y adaptadas a las necesidades del cliente. Estoy comprometido en aportar mis habilidades para impulsar proyectos innovadores y contribuir al crecimiento del equipo con soluciones creativas y efectivas.</p> 
          <p className='lg:relative lg:text-xl lg:px-10
                        xs:relative xs:text-base xs:px-2'>Tengo experiencia en proyectos utilizando tecnologías como HTML, CSS, Javascript, ReactJs, Redux, Zustand, TanstackQuery, Tailwind, NodeJs, Express, Sequelize, PostgreSQL, entre otras tecnologías que voy adquiriendo permanentemente para crear interfaces de usuario atractivas y funcionales.</p> 
          <br />
        </div>
        <div className='lg:relative lg:flex lg:my-16 lg:gap-6 lg:px-4 lg:ml-0 animate-pulse
                        xs:relative xs:flex xs:my-2 xs:gap-2 xs:px-1 xs:ml-4'>
          <AdvancedImage cldImg={js} className='icono'/>
          <AdvancedImage cldImg={html} className='icono'/>
          <AdvancedImage cldImg={css} className='icono'/>
          <AdvancedImage cldImg={react} className='icono'/>
          <AdvancedImage cldImg={vite} className='icono'/>
          <AdvancedImage cldImg={tailwind} className='icono xs:relative lg:top-0 xs:top-14 lg:ml-0 xs:-ml-64'/>
          <AdvancedImage cldImg={tanstack} className='icono xs:relative lg:top-0 xs:top-14 '/>
          <AdvancedImage cldImg={zustand} className='icono xs:relative lg:top-0 xs:top-14 '/>
          <AdvancedImage cldImg={redux} className='icono xs:relative lg:top-0 xs:top-14 '/>
          
        </div>
        <p className='lg:text-xl lg:mt-24 lg:px-10
                      xs:text-base xs:mt-20 xs:px-2'>Disfruto diseñando y desarrollando arquitecturas robustas, optimizando bases de datos y asegurando que las aplicaciones sean escalables y eficientes. Soy una persona amante de los desafíos que le gusta estar en constante aprendizaje para poder aportar mis conocimientos a los diferentes equipos con los que pueda estar trabajando.</p><br />
        <div className='xs:flex xs:gap-2 xs:ml-6 lg:flex lg:my-16 lg:ml-64 lg:gap-8 animate-pulse'>
          <AdvancedImage cldImg={node} className='lg:border-4 xs:border-2 lg:p-2 border-black rounded-2xl bg-white xs:size-12 lg:size-24'/>
          <AdvancedImage cldImg={express} className='icono'/>
          <AdvancedImage cldImg={json} className='icono'/>
          <AdvancedImage cldImg={postgre} className='icono'/>
          <AdvancedImage cldImg={sequelize} className='icono'/>
        </div>
        <p className='lg:text-xl lg:mt-16 lg:px-10
                      xs:text-base xs:mt-10 xs:px-2'>Cada proyecto es una oportunidad de aprender y enfrentar nuevos retos. Me motiva la resolución de problemas complejos y la implementación de soluciones innovadoras. Además, estoy comprometido con las mejores prácticas de desarrollo, como el uso de control de versiones con Git y la implementación de metodologías ágiles para asegurar que los proyectos se entreguen a tiempo y con la más alta calidad. </p><br />
      </div>

      <div className='lg:relative lg:mt-10 lg:mx-60 font-platypi text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-2xl
                      xs:relative xs:mt-10 xs:mx-6 '>
        <div ref={expRef} className='lg:relative lg:text-2xl lg:mt-10 lg:ml-10 lg:underline lg:underline-offset-4 text-gray-300
                                     xs:relative xs:text-base xs:mt-2 xs:ml-2 xs:underline xs:underline-offset-4'>Experiencia Laboral</div>
        <div className="lg:relative lg:my-16 lg:px-10 lg:top-0 lg:mb-8 font-platypi text-gray-300
                        xs:relative xs:top-4 xs:mx-2 xs:mb-2 ">
          <ol>
            <li className="lg:relative underline underline-offset-4 lg:text-xl animate-fade-down animate-duration-700">🞛 Desarrollador web freelance (2023-actualidad)</li><br />
            <ul className="lg:text-xl animate-fade-down animate-duration-1000">
              <li>&#10004; Estudio Juridico: Landing Page de serivicios juridicos</li>
              <li>&#10004; UlBakuya: Aplicacion para registro de usuarios, alumnos. Seguimiento de asistencias, calendario de eventos para profesores de artes marciales</li>
              <li>&#10004; EventApp: Aplicacion de eventos, compra de tickets para recitales, peliculas, espectaculos varios. Creacion, modificacion y eliminacion de usuarios y eventos</li>
            </ul><br />
            <li className="underline underline-offset-4 lg:text-xl animate-fade-down animate-duration-700">🞛 Instructor de Taekwondo (2015-actualidad)</li><br />
            <ul className="lg:text-xl animate-fade-down animate-duration-1000">
              <li>&#10004; Atencion al publico</li>
              <li>&#10004; Coordinacion de eventos</li>
              <li>&#10004; Liderazgo de equipos</li>
            </ul><br />
            <li className="underline underline-offset-4 lg:text-xl animate-fade-down animate-duration-700">🞛 YPF: Agente de soporte IT (2012-2014)</li><br />
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
        </div>
          <div className='relative lg:mt-5 lg:mx-60 xs:mt-10 xs:mx-6 font-platypi text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-2xl'>
            <p className='lg:text-xl lg:mt-6 lg:px-10
                          xs:text-base xs:mt-2 xs:px-2'>Con casi una década liderando y motivando en el ámbito de las artes marciales, mi trayectoria se define por el compromiso y la pasión por la enseñanza. En mi rol actual como Instructor de Artes Marciales, he desarrollado habilidades clave en la gestión de equipos y la motivación tanto individual como grupal, asegurando que cada alumno alcance su máximo potencial. </p> <br />
            <p className='lg:text-xl lg:px-10
                          xs:text-base xs:mt-2 xs:px-2'>Mi experiencia previa en soporte técnico en YPF SA me ha dotado de una visión integral sobre la resolución de incidentes y la administración de sistemas críticos. Estas competencias, combinadas con mi formación técnica reciente, enriquecen mi perfil profesional, permitiéndome aportar una perspectiva única al entrelazar la precisión técnica con la disciplina marcial.</p> <br />
          </div>
      


      
      <div className='lg:relative lg:mt-10 lg:mx-60 font-platypi text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-2xl
                      xs:relative xs:mt-10 xs:mx-6 '>
        <div ref={certRef} className='lg:relative lg:text-2xl lg:mt-10 lg:ml-10 lg:underline lg:underline-offset-4 text-gray-300
                                      xs:relative xs:text-base xs:mt-2 xs:ml-2 xs:underline xs:underline-offset-4'>Certificaciones</div>
        <p className='lg:absolute lg:ml-12 lg:mt-16 text-white text-xs
                      xs:absolute xs:ml-6 xs:mt-4'>Hover me</p>
        <div className="lg:relative lg:my-20 lg:mx-10 lg:text-xl font-platypi text-gray-300 animate-fade-right animate-delay-300 
                        xs:relative xs:my-0 xs:mx-2 xs:text-base ">
          
          <div className="lg:flex lg:my-8 lg:mr-24 
                          xs:grid xs:my-10 xs:mr-0">
            <AdvancedImage cldImg={henry} className="diploma lg:ml-0 xs:ml-2"/>
            <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:mr-0 xs:-top-18">Soy Henry: Desarrollo web fullstack en lenguajes y tecnologías como JavaScript, HTML, CSS, React, Redux, Node, Express, PostgreSQL, Sequelize.</p><br/>
          </div>
          
          <div className="lg:flex lg:my-8 lg:mr-24 
                          xs:grid xs:-mt-10 xs:mr-0">
            <AdvancedImage cldImg={efset} className="diploma lg:ml-0 xs:ml-2"/>
            <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:mr-0 xs:-top-18">EF SET: Nivel de ingles en lectura, escritura y escucha C2 Abril 2024</p><br/>
          </div>
          
          <div className="lg:flex lg:my-8 lg:mr-24 
                          xs:grid xs:-mt-2 xs:mr-0">
            <AdvancedImage cldImg={cm} className="diploma lg:ml-0 xs:ml-2"/>
            <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:mr-0 xs:-top-18">Community manager: Curso de especializacion en manejo de redes sociales Octubre 2022 </p><br/>
          </div>
          
          <div className="lg:flex lg:my-8 lg:mr-24
                          xs:grid xs:-mt-2 xs:mr-0">
            <AdvancedImage cldImg={lider} className="diploma lg:ml-0 xs:ml-2"/>
            <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:mr-0 xs:-top-18">Programa de especializacion Lideres para una nueva Gobernanza se centra en ofrecer una experiencia de aprendizaje integral que prepare a los líderes a sortear de manera efectiva y eficaz los desafíos de un entorno cambiante y en constante evolución. El objetivo de esta especialización es que los participantes puedan adquirir las habilidades y las herramientas necesarias para desenvolverse como líderes sociales en los nuevos escenarios generados por las recientes transformaciones políticas, sociales y tecnológicas. </p><br/>
          </div>
          
          <div className="lg:flex lg:my-8 lg:mr-24 
                          xs:grid xs:-mt-2 xs:mr-0 ">
            <AdvancedImage cldImg={redes}  className="diploma lg:ml-0 xs:ml-2"/>
            <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-0 xs:mr-0 xs:-top-18">Redes sociales: ¿Como comunicar gestión?: Este programa tiene como objetivo comprender la teoría y los conceptos de la nueva comunicación política digital. El programa está orientado a desarrollar las herramientas para la adecuada implementación del uso de datos en el diseño y ejecución de políticas públicas.</p><br/>
          </div>
        </div>
      </div>
        
        
      <div className='lg:relative lg:mt-10 lg:mx-60 font-platypi text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-2xl
                      xs:relative xs:mt-10 xs:mx-6 '>
        <p ref={contRef} className='lg:relative lg:text-2xl lg:mt-10 lg:ml-10 lg:underline lg:underline-offset-4 text-gray-300
                                    xs:relative xs:text-base xs:mt-2 xs:ml-2 xs:underline xs:underline-offset-4'>Contacto</p>
        <div className='lg:relative xs:relative text-gray-300'>
          <div className="lg:flex xs:grid">
            <AdvancedImage cldImg={gmail} className='lg:relative lg:mt-4 lg:size-20
                                                     xs:relative xs:mt-2 xs:size-16 '/>
            <p className="lg:relative lg:text-xl lg:ml-0 lg:mt-10
                          xs:relative xs:text-base xs:ml-20 xs:-mt-10">ezequielheick@gmail.com</p>
            <AdvancedImage cldImg={whatsapp} className='lg:relative lg:mt-6 lg:size-16 lg:ml-20
                                                        xs:relative xs:mt-4 xs:size-14 xs:ml-1'/>
            <p className="lg:relative lg:text-xl lg:ml-0 lg:mt-10 
                          xs:relative xs:text-base xs:ml-20 xs:-mt-10">+54 011 34637208</p> <br />
            <a href="https://www.linkedin.com/in/ezequielheick/" target="_blank">
              <AdvancedImage cldImg={linkedin} className='lg:relative lg:mt-6 lg:size-16 lg:ml-20 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-1000
                                                          xs:relative xs:mt-1 xs:size-14 xs:ml-2' /></a>
            <p className='lg:relative lg:text-xl lg:mt-6 lg:mx-5 lg:ml-6
                          xs:relative xs:text-base xs:-mt-9 xs:mx-0 xs:ml-32'>Click us</p>
            <a href="https://github.com/HeickEzequiel" target="_blank"> 
              <AdvancedImage cldImg={github} className='lg:relative lg:mb-10 lg:mt-5 lg:size-20 lg:ml-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-1000
                                                        xs:relative xs:mb-10 xs:-mt-16 xs:size-16 xs:ml-60 ' /></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home