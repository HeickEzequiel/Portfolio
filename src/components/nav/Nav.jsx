import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div className='items-center text-white bg-transparent p-6 w-full'>
            <span className='absolute text-lg font-medium'>Ezequiel Alberto Heick</span>
            <div className='absolute left-80 ml-72 text-lg'>
                <button className='nav-button'><Link to='/'>Inicio</Link></button>
                <button className='nav-button'><Link to='/certifications'>Certificaciones</Link></button>
                <button className='nav-button'><Link to='/projects'>Proyectos</Link></button>
                <button className='nav-button'><Link to='/contact'>Contacto</Link></button>
                <button className='ml-96 nav-button'><Link to='/contact'>Descarga mi CV</Link></button>
            </div>
        </div>
      )
}

export default Nav