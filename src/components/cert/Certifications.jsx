import Nav from "../nav/Nav"
import { AdvancedImage } from "@cloudinary/react"
import { henry, efset, cm, lider, redes } from "../../config/cloudinary"
import Footer from "../footer/Footer"

function Certifications() {
  return (
    <div className='relative bg-gradient-to-r from-cyan-950 via-blue-800 to-cyan-950'>
        <Nav/>
        <div className="relative mt-24 ml-44 text-white">
            
            <div className="flex my-8 mr-24 ">
              <AdvancedImage cldImg={henry} className="diploma"/>
              <p className="content-center ml-8">Soy Henry: Desarrollo web fullstack en lenguajes y tecnologías como JavaScript, HTML, CSS, React, Redux, Node, Express, PostgreSQL, Sequelize.</p><br/>
            </div>

            <div className="flex my-8 mr-24 ">
              <AdvancedImage cldImg={efset} className="diploma"/>
              <p className="content-center ml-8">EF SET: Nivel de ingles en lectura, escritura y escucha C2 Abril 2024</p><br/>
            </div>
            
            <div className="flex my-8 mr-24 ">
              <AdvancedImage cldImg={cm} className="diploma"/>
              <p className="content-center ml-8">Community manager Curso de especializacion en manejo de redes sociales Octubre 2022 </p><br/>
            </div>
            
            <div className="flex my-8 mr-24 ">
              <AdvancedImage cldImg={lider} className="diploma"/>
              <p className="content-center ml-8">Programa de especializacion Lideres para una nueva Gobernanza: El programa de especialización se centra en ofrecer una experiencia de aprendizaje integral que prepare a las y los líderes a sortear de manera efectiva y eficaz los desafíos de un entorno cambiante y en constante evolución Los módulos temáticos buscan, en primer lugar, profundizar en la capacidad de liderar en tiempos de cambios, explorando el nuevo paradigma del liderazgo y fomentando el autoliderazgo como base fundamental; en segundo lugar, orientar el enfoque hacia el liderazgo relacional, destacando la importancia de la colaboración y la creación conjunta; y finalmente, concluir con el concepto de liderazgo transformacional fundamental para abordar la gestión constructiva de los conflictos hacia la promoción de la paz, a través de la negociación y el diálogo efectivo.
              El objetivo de esta especialización es que las y los participantes puedan adquirir las habilidades y las herramientas necesarias para desenvolverse como líderes sociales en los nuevos escenarios generados por las recientes transformaciones políticas, sociales y tecnológicas.  Octubre 2022: </p><br/>
            </div>
            
            <div className="flex my-8 mr-24 ">
              <AdvancedImage cldImg={redes}  className="diploma"/>
              <p className="content-center ml-8 ">Redes sociales: ¿Como comunicar gestión?: Este programa tiene como objetivo comprender la teoría y los conceptos de la nueva comunicación política digital. El programa está orientado a desarrollar las herramientas para la adecuada implementación del uso de datos en el diseño y ejecución de políticas públicas.</p><br/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Certifications