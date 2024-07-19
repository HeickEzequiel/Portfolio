import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div className='items-center text-white bg-transparent p-6 w-full'>
            <span className='absolute text-lg font-medium'>Ezequiel Alberto Heick</span>
            <div className='absolute left-96 ml-72 text-lg'>
                <button className='nav-button'><Link to='/'>Inicio</Link></button>
                <button className='nav-button'><Link to='/certifications'>Estudios</Link></button>
                <button className='nav-button'><Link to='/exp'>Experiencia</Link></button>
                {/* <button className='nav-button'><Link to='/projects'>Proyectos</Link></button> */}
                <button className='ml-96 nav-button'><a href='https://drive.google.com/file/d/1tAeEwu9lHAbY_UqYTKZnTMoO-27jx_iQ/view?usp=drive_link' target="_blank" download="CV Ezequiel Heick.pdf">Descarga mi CV</a></button>
            </div>
        </div>
      )
}

export default Nav