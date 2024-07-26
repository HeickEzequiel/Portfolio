import { AdvancedImage } from "@cloudinary/react"
import { Link } from 'react-router-dom'
import { github, gmail, linkedin, whatsapp } from "../../config/cloudinary"

function Footer() {
  return (
    <div className='text-white bg-transparent'><hr />
        <div>
          <ul className="lg:h-28 lg:mt-8 lg:left-36 lg:text-lg   xs:h-36 xs:text-sm xs:ml-4">
            <li className="underline xs:mt-1"><Link to='/'>Inicio</Link></li>
            <li className="underline xs:mt-1"><Link to='/certifications'>Estudios y certificaciones</Link></li>
            {/* <li className="underline"><Link to='/projects'>Proyectos</Link></li> */}
            <li className="underline xs:mt-1"><Link to='/exp'>Experiencia Laboral</Link></li>
            <li className="underline xs:mt-1"><a href='https://drive.google.com/file/d/1tAeEwu9lHAbY_UqYTKZnTMoO-27jx_iQ/view?usp=drive_link' target="_blank" download="CV Ezequiel Heick.pdf">Descarga mi CV</a></li>
          </ul>
        </div>
        
        <div className="lg:left-96 lg:ml-28 lg:bottom-2   xs:relative xs:bottom-16 xs:ml-4">
          <AdvancedImage cldImg={gmail} className='lg:relative lg:size-14 lg:ml-28 lg:-top-4 xs:size-10 xs:ml-40 xs:-mt-20'/>
          <p className="lg:relative lg:ml-44 lg:text-lg lg:-top-7 xs:-mt-7 xs:ml-48 xs:text-xs">ezequielheick@gmail.com</p>
          <AdvancedImage cldImg={whatsapp} className='lg:relative lg:p-2 lg:size-14 lg:ml-28 lg:-top-8 xs:size-8 xs:ml-41 xs: xs:mt-2'/>
          <p className="lg:relative lg:ml-44 lg:text-lg lg:-top-12 xs:-mt-6 xs:ml-48 xs:text-xs">+54 011 34637208</p>
        </div>
     
          
        <div className="lg:relative lg:max-w-7xl lg:grid lg:gap-4 xs:absolute xs:flex xs:bottom-3 xs:left-52">
          <a href="https://www.linkedin.com/in/ezequielheick/" target="_blank"> <AdvancedImage cldImg={linkedin} 
          
          className='lg:absolute lg:right-20 lg:bottom-24 lg:size-10  size-10 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300' /></a>
          
          <a href="https://github.com/HeickEzequiel" target="_blank"> <AdvancedImage cldImg={github} 
          
          className='lg:absolute lg:right-20 lg:bottom-12 lg:size-10 size-10 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300' /></a>
        </div>
    </div>
  )
}

export default Footer