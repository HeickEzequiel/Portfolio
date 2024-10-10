import React, { useRef } from 'react'
import { AdvancedImage } from '@cloudinary/react'
import {js,html,css,react,redux,express,node,postgre,sequelize,zustand,tanstack,vite,tailwind,json, ezequiel, henry, efset, cm, lider, redes, github, gmail, linkedin, whatsapp} from '../../config/cloudinary.js'

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
    <div className='relative bg-gradient-to-r from-cyan-950 to-cyan-950 '>
      <div className='sticky lg:top-0 lg:z-50 items-center text-white border-b-2 border-white bg-gradient-to-r from-cyan-950 via-blue-800 to-cyan-950 lg:p-6 lg:w-full'>
        <div className='lg:relative  lg:text-lg lg:flex lg:mt-0 lg:mx-72 xs:flex xs:ml-6 xs:mt-8 '>
          <button onClick={scrollToini} className='nav-button'>Inicio</button>
          <button onClick={scrollToexp} className='nav-button'>Experiencia</button>
          <button onClick={scrollTocert}className='nav-button'>Certificaciones</button>
          <button onClick={scrollTocont}className='nav-button'>Contacto</button>
          <button className='lg:absolute lg:left-96 lg:ml-96 lg:w-44 border-2 border-white  nav-button'><a href='https://docs.google.com/document/d/1Y2xDv2bYYKT7CjVTD-qQl9D75NhBtewW/edit?usp=sharing&ouid=116375284601497785226&rtpof=true&sd=true' target="_blank" download="CV Ezequiel Heick.pdf">Descarga mi CV</a></button>
        </div>
      </div>
      
      <div ref={iniRef} className='relative lg:mt-20 lg:mx-60 xs:mt-32 xs:mx-6 font-platypi text-gray-300'> 
        
        <div className='lg:bg-slate-400 lg:relative lg:rounded-full lg:left-0 animate-fade-right animate-duration-1500 border-2 border-black'>
          <AdvancedImage cldImg={ezequiel} className="lg:relative lg:rounded-full lg:size-96 lg:left-96 lg:ml-96 lg:mt-6"/>
          <p className='lg:absolute lg:text-5xl lg:top-36 lg:ml-10 lg:text-black'>Hola, mi nombre es Ezequiel Heick </p><br />
          <p className='lg:absolute lg:text-5xl lg:top-52 lg:ml-10 lg:text-black'>Soy desarrollador web fullstack.</p>
        </div>

        <div className='lg:relative w-auto h-auto lg:my-20'>
          <p className='lg:relative lg:text-2xl'>Desde que comencé en desarrollo web, he trabajado con tecnologías tanto en el frontend como en el backend.</p> 
          <p className='lg:relative lg:text-2xl'>En el frontend, he utilizado lenguajes y herramientas como HTML, CSS, Tailwind, JavaScript, React, zustand y tanstackQuery para crear interfaces de usuario atractivas y funcionales. </p><br />
        </div>
        <div className='lg:relative lg:mt-16 lg:gap-8   xs:flex xs:gap-2 animate-pulse'>
          <AdvancedImage cldImg={js} className='icono'/>
          <AdvancedImage cldImg={html} className='icono'/>
          <AdvancedImage cldImg={css} className='icono'/>
          <AdvancedImage cldImg={react} className='icono'/>
          <AdvancedImage cldImg={vite} className='icono'/>
          <AdvancedImage cldImg={tailwind} className='icono'/>
          <AdvancedImage cldImg={tanstack} className='icono'/>
          <AdvancedImage cldImg={zustand} className='icono'/>
          <AdvancedImage cldImg={redux} className='icono'/>
        </div>
        <p className='lg:text-2xl lg:top-14 lg:mt-10 '>Disfruto diseñando y desarrollando arquitecturas robustas, optimizando bases de datos y asegurando que las aplicaciones sean escalables y eficientes. Mi experiencia abarca lenguajes y frameworks como JavaScript, Node.js, Express, y bases de datos como PostgreSQL y Sequelize.</p><br />
        <div className='xs:flex xs:gap-2 xs:ml-6 lg:flex lg:my-16 lg:ml-64 lg:gap-8 animate-pulse'>
          <AdvancedImage cldImg={node} className='lg:border-4 xs:border-2 lg:p-2 border-black rounded-2xl bg-white xs:size-12 lg:size-24'/>
          <AdvancedImage cldImg={express} className='icono'/>
          <AdvancedImage cldImg={json} className='icono'/>
          <AdvancedImage cldImg={postgre} className='icono'/>
          <AdvancedImage cldImg={sequelize} className='icono'/>
        </div>
        <p className='lg:text-2xl lg:top-14 lg:mt-10'>Cada proyecto es una oportunidad de aprender y enfrentar nuevos retos. Me motiva la resolución de problemas complejos y la implementación de soluciones innovadoras. Además, estoy comprometido con las mejores prácticas de desarrollo, como el uso de control de versiones con Git y la implementación de metodologías ágiles para asegurar que los proyectos se entreguen a tiempo y con la más alta calidad.</p><br />
      </div>

      
      <div ref={expRef} className='lg:relative lg:text-4xl lg:w-96 lg:mt-44 lg:mx-60 lg:underline lg:underline-offset-4 text-gray-300'>Experiencia Laboral</div>
        <div className="lg:relative lg:my-20 lg:mx-60 lg:top-0 lg:mb-8 xs:relative xs:top-36 xs:mx-2 xs:mb-40 font-platypi text-gray-300">
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
       
      <div>
        
        <div ref={certRef} className='lg:relative lg:text-4xl lg:w-96 lg:mt-44 lg:mx-60 lg:underline lg:underline-offset-4 text-gray-300'>Certificaciones</div>
          <p className='lg:absolute lg:ml-64 lg:mt-16 text-white text-xs'>Hover me</p>
          <div className="lg:relative lg:my-20 lg:mx-60 lg:text-xl font-platypi text-gray-300 animate-fade-right animate-delay-300 xs:mt-32 xs:min-h-full">
            
            <div className="lg:flex lg:my-8 lg:mr-24 xs:grid ">
              <AdvancedImage cldImg={henry} className="diploma lg:ml-0 xs:ml-36"/>
              <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:mr-4 xs:-top-18">Soy Henry: Desarrollo web fullstack en lenguajes y tecnologías como JavaScript, HTML, CSS, React, Redux, Node, Express, PostgreSQL, Sequelize.</p><br/>
            </div>
            
            <div className="lg:flex lg:my-8 lg:mr-24 xs:mt-10 xs:grid">
              <AdvancedImage cldImg={efset} className="diploma lg:ml-0 xs:ml-36"/>
              <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:-top-18">EF SET: Nivel de ingles en lectura, escritura y escucha C2 Abril 2024</p><br/>
            </div>
            
            <div className="lg:flex lg:my-8 lg:mr-24 xs:mt-10 xs:grid">
              <AdvancedImage cldImg={cm} className="diploma lg:ml-0 xs:ml-36"/>
              <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:-top-18">Community manager: Curso de especializacion en manejo de redes sociales Octubre 2022 </p><br/>
            </div>
            
            <div className="lg:flex lg:my-8 lg:mr-24 xs:mt-10 xs:grid">
              <AdvancedImage cldImg={lider} className="diploma lg:ml-0 xs:ml-36"/>
              <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:-top-18">Programa de especializacion Lideres para una nueva Gobernanza: El programa de especialización se centra en ofrecer una experiencia de aprendizaje integral que prepare a las y los líderes a sortear de manera efectiva y eficaz los desafíos de un entorno cambiante y en constante evolución Los módulos temáticos buscan, en primer lugar, profundizar en la capacidad de liderar en tiempos de cambios, explorando el nuevo paradigma del liderazgo y fomentando el autoliderazgo como base fundamental; en segundo lugar, orientar el enfoque hacia el liderazgo relacional, destacando la importancia de la colaboración y la creación conjunta; y finalmente, concluir con el concepto de liderazgo transformacional fundamental para abordar la gestión constructiva de los conflictos hacia la promoción de la paz, a través de la negociación y el diálogo efectivo.
              El objetivo de esta especialización es que las y los participantes puedan adquirir las habilidades y las herramientas necesarias para desenvolverse como líderes sociales en los nuevos escenarios generados por las recientes transformaciones políticas, sociales y tecnológicas. </p><br/>
            </div>
            
            <div className="lg:flex lg:my-8 lg:mr-24 xs:mt-10 xs:grid">
              <AdvancedImage cldImg={redes}  className="diploma lg:ml-0 xs:ml-36"/>
              <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-0 xs:-top-18">Redes sociales: ¿Como comunicar gestión?: Este programa tiene como objetivo comprender la teoría y los conceptos de la nueva comunicación política digital. El programa está orientado a desarrollar las herramientas para la adecuada implementación del uso de datos en el diseño y ejecución de políticas públicas.</p><br/>
            </div>

          </div>

        </div>
        
        
      <div className='overflow-hidden'>
        <p ref={contRef} className='lg:relative lg:text-4xl lg:w-96 lg:mt-20 lg:mx-60 lg:underline lg:underline-offset-4 text-gray-300'>Contacto</p>
        
        <div className='lg:relative lg:my-20 lg:mx-60 lg:mb-20  text-white'>
          <div className="lg:flex">
            <AdvancedImage cldImg={gmail} className='lg:relative lg:size-20 '/>
            <p className="lg:relative lg:text-xl lg:mt-5 ">ezequielheick@gmail.com</p>
            <AdvancedImage cldImg={whatsapp} className='lg:relative lg:size-20 lg:ml-20'/>
            <p className="lg:relative lg:text-xl lg:mt-5 ">+54 011 34637208</p> <br />
            
            <a href="https://www.linkedin.com/in/ezequielheick/" target="_blank"><AdvancedImage cldImg={linkedin} className='lg:relative lg:size-20 lg:ml-20 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-1000' /></a>
            <p className='lg:relative lg:text-xl lg:mt-5 lg:mx-5'>Click us</p>
            <a href="https://github.com/HeickEzequiel" target="_blank"> <AdvancedImage cldImg={github} className='lg:relative  lg:mb-20 lg:size-20 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-1000' /></a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home