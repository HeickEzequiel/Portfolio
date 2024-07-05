import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import { AdvancedImage } from '@cloudinary/react'
import {js,html,css,react,redux,express,node,postgre,sequelize,zustand,tanstack,vite,tailwind,json} from '../../config/cloudinary.js'

function Home() {
  return (
    <div className='relative bg-slate-700'>
        <Nav/>
        <div className='relative mt-20 mx-60 font-platypi text-gray-300'> 
          <p className='text-center text-4xl underline'>Fullstack Developer</p><br />

          <p className='texto'>Hola, mi nombre es Ezequiel y soy desarrollador web fullstack. A lo largo de mi carrera y vida, he desarrollado una profunda pasión por los desafíos lógicos y complejos, lo que me ha llevado a especializarme en el backend..</p><br />
          <p className='texto'>Desde que comencé en el mundo del desarrollo web, he trabajado con tecnologías tanto en el frontend como en el backend. En el frontend, he utilizado lenguajes y herramientas como HTML, CSS, Tailwind, JavaScript, React, zustand y tanstackQuery para crear interfaces de usuario atractivas y funcionales. Sin embargo, donde realmente encuentro mi mayor satisfacción es en el backend.</p><br />
          <div className='relative flex mt-16 left-72 ml-12 gap-8 animate-pulse'>
          <AdvancedImage cldImg={js} className='icono'/>
          <AdvancedImage cldImg={html} className='icono'/>
          <AdvancedImage cldImg={css} className='icono'/>
          </div> 
          <br/>
          <div className='relative flex mb-24 left-24 gap-8 animate-pulse'>
          <AdvancedImage cldImg={react} className='icono'/>
          <AdvancedImage cldImg={vite} className='icono'/>
          <AdvancedImage cldImg={tailwind} className='icono'/>
          <AdvancedImage cldImg={tanstack} className='icono'/>
          <AdvancedImage cldImg={zustand} className='icono'/>
          <AdvancedImage cldImg={redux} className='icono'/>
          </div>
          <p className='texto'>Disfruto diseñando y desarrollando arquitecturas robustas, optimizando bases de datos y asegurando que las aplicaciones sean escalables y eficientes. Mi experiencia abarca lenguajes y frameworks como JavaScript, Node.js, Express, y bases de datos como PostgreSQL y Sequelize.</p><br />
          <div className='flex my-16 ml-44 gap-8 animate-pulse'>
          <AdvancedImage cldImg={node} className='border-4 p-2 border-black rounded-2xl bg-white'/>
          <AdvancedImage cldImg={express} className='icono'/>
          <AdvancedImage cldImg={json} className='icono'/>
          <AdvancedImage cldImg={postgre} className='icono'/>
          <AdvancedImage cldImg={sequelize} className='icono'/>
          </div>
          <p className='texto'>Para mí, cada proyecto es una oportunidad de aprender y enfrentar nuevos retos. Me motiva la resolución de problemas complejos y la implementación de soluciones innovadoras. Además, estoy comprometido con las mejores prácticas de desarrollo, como el uso de control de versiones con Git y la implementación de metodologías ágiles para asegurar que los proyectos se entreguen a tiempo y con la más alta calidad.</p><br />
          <p className='texto'>En resumen, soy un desarrollador web full stack apasionado por los desafíos lógicos del backend y dedicado a crear aplicaciones web eficientes y escalables. Siempre estoy buscando nuevas oportunidades para crecer profesionalmente y contribuir con mis habilidades a proyectos innovadores.</p><br />
          <p className='texto'>Gracias por tu tiempo y espero poder colaborar en futuros proyectos.</p><br />
        </div>
      
    </div>
  )
}

export default Home