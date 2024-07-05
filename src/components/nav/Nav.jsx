import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div className='items-center text-white bg-transparent p-6 w-full'>
            <span className='absolute text-lg font-medium'>Ezequiel Alberto Heick</span>
            <div className='absolute left-72 ml-72 text-lg'>
                <button className='nav-button'><Link to='/'>Inicio</Link></button>
                <button className='nav-button'><Link to='/tech'>Tecnologias</Link></button>
                <button className='nav-button'><Link to='/certification'>Certificaciones</Link></button>
                <button className='nav-button'><Link to='/proyects'>Proyectos</Link></button>
                <button className='nav-button'><Link to='/contact'>Contacto</Link></button>
                <button className='ml-72 nav-button'><Link to='/contact'>Descarga mi CV</Link></button>
            </div>
        </div>
      )
}

export default Nav