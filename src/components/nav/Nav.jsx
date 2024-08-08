import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div className='relative items-center text-white bg-transparent lg:p-6 lg:w-full'>
            <span className='absolute text-lg font-medium xs:ml-24'>Ezequiel Alberto Heick</span>
            <div className='absolute lg:left-96 lg:ml-72 lg:text-lg xs:flex xs:ml-6 xs:mt-8 '>
                <button className='nav-button'><Link to='/'>Inicio</Link></button>
                <button className='nav-button'><Link to='/certifications'>Estudios</Link></button>
                <button className='nav-button'><Link to='/exp'>Experiencia</Link></button>
                {/* <button className='nav-button'><Link to='/projects'>Proyectos</Link></button> */}
                <button className='lg:ml-96 nav-button'><a href='https://drive.google.com/file/d/1DGpa33D-iI-_N-lX28_G0AKFzuOaKdiz/view?usp=sharing' target="_blank" download="CV Ezequiel Heick.pdf">Descarga mi CV</a></button>
            </div>
        </div>
      )
}

export default Nav