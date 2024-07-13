import { AdvancedImage } from "@cloudinary/react"
import { github, gmail, linkedin, whatsapp } from "../../config/cloudinary"

function Footer() {
  return (
    <div className='items-center text-white bg-transparent p-6 w-full'>
        <hr />
        
        <div>
          <ul className="relative left-36">
            <li className="underline">inicio</li>
            <li className="underline">Certificados</li>
            <li className="underline">Proyectos</li>
            <li className="underline">Contacto</li>
          </ul>
        </div>
        
        <div className="relative flex left-96 ml-20 bottom-14">
          <AdvancedImage cldImg={gmail} className='border-2 border-white size-14'/>
          <p className="">correo:</p>
          <p className="">ezequielheick@gmail.com</p>
          <AdvancedImage cldImg={whatsapp} className='border-2 border-white p-2 size-14'/>
          <p className="">whatsapp:</p>
          <p className="">+54 011 34637208</p>
        </div>
     
          
        <div className="flex absolute right-44 gap-4">
          <a href="https://www.linkedin.com/in/ezequielheick/" target="_blank"> <AdvancedImage cldImg={linkedin} className='size-8 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' /></a>
          <a href="https://github.com/HeickEzequiel" target="_blank"> <AdvancedImage cldImg={github} className='size-8 rounded-lg ml-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' /></a>
        </div>
    </div>
  )
}

export default Footer