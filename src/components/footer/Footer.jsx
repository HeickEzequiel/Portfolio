import { AdvancedImage } from "@cloudinary/react"
import { Link } from 'react-router-dom'
import { github, gmail, linkedin, whatsapp } from "../../config/cloudinary"

function Footer() {
  return (
    <div className='text-white bg-transparent xs:h-min'>
        <hr />
        
        <div>
          <ul className="relative lg:mt-8 lg:left-36 lg:text-lg xs:text-sm">
            <li className="underline"><Link to='/'>Inicio</Link></li>
            <li className="underline"><Link to='/certifications'>Estudios y certificaciones</Link></li>
            {/* <li className="underline"><Link to='/projects'>Proyectos</Link></li> */}
            <li className="underline"><Link to='/contact'>Experiencia Laboral</Link></li>
            <li className="underline"><a href='https://drive.google.com/file/d/1tAeEwu9lHAbY_UqYTKZnTMoO-27jx_iQ/view?usp=drive_link' target="_blank" download="CV Ezequiel Heick.pdf">Descarga mi CV</a></li>
          </ul>
        </div>
        
        <div className="relative lg:left-96 lg:ml-28 lg:bottom-24">
          <AdvancedImage cldImg={gmail} className='lg:size-14 lg:ml-40 xs:size-10 xs:ml-40 xs:-mt-20'/>
          <p className="lg:mt-4 xs:hidden">correo:</p>
          <p className="lg:mt-4 lg:ml-2 xs:-mt-7 xs:ml-48 xs:text-sm">ezequielheick@gmail.com</p>
          <AdvancedImage cldImg={whatsapp} className='lg:p-2 lg:size-14 xs:size-8 xs:ml-41 xs: xs:mt-2'/>
          <p className="lg:mt-4 xs:hidden">whatsapp:</p>
          <p className="lg:mt-4 lg:ml-2 xs:-mt-7 xs:ml-48 xs:text-sm">+54 011 34637208</p>
        </div>
     
          
        <div className="absolute lg:flex lg:w-28 lg:bottom-24 lg:right-20 lg:gap-4">
          <a href="https://www.linkedin.com/in/ezequielheick/" target="_blank"> <AdvancedImage cldImg={linkedin} className='size-10 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' /></a>
          <a href="https://github.com/HeickEzequiel" target="_blank"> <AdvancedImage cldImg={github} className='size-10 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' /></a>
        </div>
    </div>
  )
}

export default Footer