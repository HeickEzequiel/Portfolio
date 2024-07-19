import { AdvancedImage } from "@cloudinary/react"
import { Link } from 'react-router-dom'
import { github, gmail, linkedin, whatsapp } from "../../config/cloudinary"

function Footer() {
  return (
    <div className='text-white bg-transparent'>
        <hr />
        
        <div>
          <ul className="relative mt-8 left-36">
            <li className="underline"><Link to='/'>Inicio</Link></li>
            <li className="underline"><Link to='/certifications'>Estudios y certificaciones</Link></li>
            {/* <li className="underline"><Link to='/projects'>Proyectos</Link></li> */}
            <li className="underline"><Link to='/contact'>Experiencia Laboral</Link></li>
            <li className="underline"><a href='https://drive.google.com/file/d/1tAeEwu9lHAbY_UqYTKZnTMoO-27jx_iQ/view?usp=drive_link' target="_blank" download="CV Ezequiel Heick.pdf">Descarga mi CV</a></li>
          </ul>
        </div>
        
        <div className="relative flex left-96 ml-28 bottom-24">
          <AdvancedImage cldImg={gmail} className='size-14'/>
          <p className="mt-4">correo:</p>
          <p className="mt-4 ml-2">ezequielheick@gmail.com</p>
          <AdvancedImage cldImg={whatsapp} className='p-2 size-14'/>
          <p className="mt-4">whatsapp:</p>
          <p className="mt-4 ml-2">+54 011 34637208</p>
        </div>
     
          
        <div className="absolute flex w-28 bottom-24 right-20 gap-4">
          <a href="https://www.linkedin.com/in/ezequielheick/" target="_blank"> <AdvancedImage cldImg={linkedin} className='size-10 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' /></a>
          <a href="https://github.com/HeickEzequiel" target="_blank"> <AdvancedImage cldImg={github} className='size-10 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' /></a>
        </div>
    </div>
  )
}

export default Footer