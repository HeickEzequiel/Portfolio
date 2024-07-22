import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import { AdvancedImage } from '@cloudinary/react'
import {js,html,css,react,redux,express,node,postgre,sequelize,zustand,tanstack,vite,tailwind,json} from '../../config/cloudinary.js'

function Home() {
  return (
    <div className='overflow-hidden relative bg-gradient-to-r from-cyan-950 via-blue-800 to-cyan-950 '>
        <Nav/>
        <div className='relative lg:mt-20 lg:mx-60 xs:mt-32 xs:mx-6 font-platypi text-gray-300'> 
          <p className='text-center text-4xl underline'>Fullstack Developer</p><br />

          <p className='texto'>Hola, mi nombre es Ezequiel y soy desarrollador web fullstack. A lo largo de mi carrera y vida, he desarrollado una profunda pasión por los desafíos lógicos y complejos, lo que me ha llevado a especializarme en el backend..</p><br />
          <p className='texto'>Desde que comencé en el mundo del desarrollo web, he trabajado con tecnologías tanto en el frontend como en el backend. En el frontend, he utilizado lenguajes y herramientas como HTML, CSS, Tailwind, JavaScript, React, zustand y tanstackQuery para crear interfaces de usuario atractivas y funcionales. Sin embargo, donde realmente encuentro mi mayor satisfacción es en el backend.</p><br />
          <div className='relative xs:flex xs:gap-2 xs:ml-20 lg:flex lg:mt-16 lg:left-72 lg:ml-12 lg:gap-8 animate-pulse'>
          <AdvancedImage cldImg={js} className='icono'/>
          <AdvancedImage cldImg={html} className='icono'/>
          <AdvancedImage cldImg={css} className='icono'/>
          </div> 
          <br/>
          <div className='relative xs:flex xs:gap-2 xs:-ml-2 lg:flex lg:mb-24 lg:left-24 lg:gap-8 animate-pulse'>
          <AdvancedImage cldImg={react} className='icono'/>
          <AdvancedImage cldImg={vite} className='icono'/>
          <AdvancedImage cldImg={tailwind} className='icono'/>
          <AdvancedImage cldImg={tanstack} className='icono'/>
          <AdvancedImage cldImg={zustand} className='icono'/>
          <AdvancedImage cldImg={redux} className='icono'/>
          </div>
          <p className='texto xs:mt-8'>Disfruto diseñando y desarrollando arquitecturas robustas, optimizando bases de datos y asegurando que las aplicaciones sean escalables y eficientes. Mi experiencia abarca lenguajes y frameworks como JavaScript, Node.js, Express, y bases de datos como PostgreSQL y Sequelize.</p><br />
          <div className='xs:flex xs:gap-2 xs:ml-6 lg:flex lg:my-16 lg:ml-44 lg:gap-8 animate-pulse'>
          <AdvancedImage cldImg={node} className='lg:border-4 xs:border-2 lg:p-2 border-black rounded-2xl bg-white xs:size-12 lg:size-32'/>
          <AdvancedImage cldImg={express} className='icono'/>
          <AdvancedImage cldImg={json} className='icono'/>
          <AdvancedImage cldImg={postgre} className='icono'/>
          <AdvancedImage cldImg={sequelize} className='icono'/>
          </div>
          <p className='texto xs:mt-8'>Para mí, cada proyecto es una oportunidad de aprender y enfrentar nuevos retos. Me motiva la resolución de problemas complejos y la implementación de soluciones innovadoras. Además, estoy comprometido con las mejores prácticas de desarrollo, como el uso de control de versiones con Git y la implementación de metodologías ágiles para asegurar que los proyectos se entreguen a tiempo y con la más alta calidad.</p><br />
          <p className='texto'>En resumen, soy un desarrollador web full stack apasionado por los desafíos lógicos del backend y dedicado a crear aplicaciones web eficientes y escalables. Siempre estoy buscando nuevas oportunidades para crecer profesionalmente y contribuir con mis habilidades a proyectos innovadores.</p><br />
          <p className='texto'>Gracias por tu tiempo y espero poder colaborar en futuros proyectos.</p><br />
        </div>
      <Footer/>
    </div>
  )
}

export default Home