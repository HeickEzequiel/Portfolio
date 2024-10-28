import React, { useRef } from 'react'
import { AdvancedImage } from '@cloudinary/react'
import {js,html,css,react,redux,express,node,postgre,sequelize,zustand,tanstack,vite,tailwind,json, ezequiel, henry, efset, cm, lider, redes, github, gmail, linkedin, whatsapp, fondo} from '../../config/cloudinary.js'
import { Link } from 'react-router-dom'

function HomeEnglish() {
 
  const expRef = useRef(null)
  const scrollToexp = ()=>{
    expRef.current?.scrollIntoView({behavior: "smooth"})
  } 
  const certRef = useRef(null)
  const scrollTocert = ()=>{
    certRef.current?.scrollIntoView({behavior: "smooth"})
  } 
  const iniRef = useRef(null)
  const scrollToini = ()=>{
    iniRef.current?.scrollIntoView({behavior: "smooth"})
  } 
  const contRef = useRef(null)
  const scrollTocont = ()=>{
    contRef.current?.scrollIntoView({behavior: "smooth"})
  } 

  return (
    <div className='lg:relative xs:relative bg-gray-900 '>
      
      <div className='lg:sticky lg:top-0 lg:z-50 lg:items-center lg:p-6 lg:w-full text-white border-b-2 border-white bg-gradient-to-r from-cyan-950 via-blue-800 to-cyan-950   
                      xs:sticky xs:top-0 xs:z-50 xs:items-center xs:P-2 xs:w-full'>
        <div className='lg:relative lg:text-lg lg:flex lg:mt-0 lg:mx-72
                        xs:relative xs:text-xs xs:flex xs:mt-0 xs:mx-2'>
          <button onClick={scrollToini} className='nav-button'>Home</button>
          <button onClick={scrollToexp} className='nav-button'>Experience</button>
          <button onClick={scrollTocert} className='nav-button'>Certifications</button>
          <button onClick={scrollTocont} className='nav-button'>Contact</button>
          <button className='lg:absolute lg:left-96 lg:ml-96 lg:w-44 border-2 border-white nav-button'><a href='https://docs.google.com/document/d/1Y2xDv2bYYKT7CjVTD-qQl9D75NhBtewW/edit?usp=sharing&ouid=116375284601497785226&rtpof=true&sd=true' target="_blank" download="CV Ezequiel Heick.pdf">Download my CV</a></button>
        </div>
      </div>
      <Link to='/'><button className='nav-button'>Español</button></Link>
      <div ref={iniRef} className='lg:relative lg:mt-20 lg:mx-60 font-platypi text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-2xl
                                   xs:relative xs:mt-12 xs:mx-6'> 
        <div className=''> 
          <AdvancedImage cldImg={fondo} className="lg:relative rounded-2xl
                                                   xs:relative "/>
          <AdvancedImage cldImg={ezequiel} className="lg:absolute lg:rounded-full lg:size-44 lg:top-44 lg:-left-2 border-2 border-black
                                                      xs:absolute xs:rounded-full xs:size-24 xs:top-10 xs:left-0"/>
          <p className='lg:relative lg:text-2xl lg:ml-52 lg:text-white
                        xs:relative xs:text-xl xs:ml-28'>Ezequiel Heick</p><br />
          <p className='lg:relative lg:text-2xl lg:-top-4 lg:ml-52 lg:text-white
                        xs:relative xs:text-xl xs:-top-6 xs:ml-28 '>Fullstack Developer.</p>
        </div>
        <div className='lg:relative lg:my-16 lg:mt-4 w-auto h-auto 
                        xs:relative xs:my-0 xs:mt-2'>
          <p className='lg:relative lg:text-xl lg:px-10
                        xs:relative xs:text-base xs:px-2'>Full Stack Web Developer passionate about technology and solving complex problems. I specialize in creating efficient, scalable web applications tailored to client needs. I'm committed to contributing my skills to drive innovative projects and help the team grow with creative and effective solutions.</p> 
          <p className='lg:relative lg:text-xl lg:px-10
                        xs:relative xs:text-base xs:px-2'>I have experience in projects using technologies such as HTML, CSS, Javascript, ReactJs, Redux, Zustand, TanstackQuery, Tailwind, NodeJs, Express, Sequelize, PostgreSQL, among others, which I am constantly acquiring to create attractive and functional user interfaces.</p> 
          <br />
        </div>
        <div className='lg:relative lg:flex lg:my-16 lg:gap-6 lg:px-4 lg:ml-0 animate-pulse
                        xs:relative xs:flex xs:my-2 xs:gap-2 xs:px-1 xs:ml-4'>
          <AdvancedImage cldImg={js} className='icono'/>
          <AdvancedImage cldImg={html} className='icono'/>
          <AdvancedImage cldImg={css} className='icono'/>
          <AdvancedImage cldImg={react} className='icono'/>
          <AdvancedImage cldImg={vite} className='icono'/>
          <AdvancedImage cldImg={tailwind} className='icono xs:relative lg:top-0 xs:top-14 lg:ml-0 xs:-ml-64'/>
          <AdvancedImage cldImg={tanstack} className='icono xs:relative lg:top-0 xs:top-14 '/>
          <AdvancedImage cldImg={zustand} className='icono xs:relative lg:top-0 xs:top-14 '/>
          <AdvancedImage cldImg={redux} className='icono xs:relative lg:top-0 xs:top-14 '/>
          
        </div>
        <p className='lg:text-xl lg:mt-24 lg:px-10
                      xs:text-base xs:mt-20 xs:px-2'>I enjoy designing and developing robust architectures, optimizing databases, and ensuring that applications are scalable and efficient. I am someone who loves challenges and is constantly learning to contribute my knowledge to the different teams I may work with.</p><br />
        <div className='xs:flex xs:gap-2 xs:ml-6 lg:flex lg:my-16 lg:ml-64 lg:gap-8 animate-pulse'>
          <AdvancedImage cldImg={node} className='lg:border-4 xs:border-2 lg:p-2 border-black rounded-2xl bg-white xs:size-12 lg:size-24'/>
          <AdvancedImage cldImg={express} className='icono'/>
          <AdvancedImage cldImg={json} className='icono'/>
          <AdvancedImage cldImg={postgre} className='icono'/>
          <AdvancedImage cldImg={sequelize} className='icono'/>
        </div>
        <p className='lg:text-xl lg:mt-16 lg:px-10
                      xs:text-base xs:mt-10 xs:px-2'>Each project is an opportunity to learn and face new challenges. I am motivated by solving complex problems and implementing innovative solutions. I am also committed to best development practices, such as version control with Git and implementing agile methodologies to ensure projects are delivered on time and with the highest quality.</p><br />
      </div>

      <div className='lg:relative lg:mt-10 lg:mx-60 font-platypi text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-2xl
                      xs:relative xs:mt-10 xs:mx-6 '>
        <div ref={expRef} className='lg:relative lg:text-2xl lg:mt-10 lg:ml-10 lg:underline lg:underline-offset-4 text-gray-300
                                     xs:relative xs:text-base xs:mt-2 xs:ml-2 xs:underline xs:underline-offset-4'>Work Experience</div>
        <div className="lg:relative lg:my-16 lg:px-10 lg:top-0 lg:mb-8 font-platypi text-gray-300
                        xs:relative xs:top-4 xs:mx-2 xs:mb-2 ">
          <ol>
            <li className="lg:relative underline underline-offset-4 lg:text-xl animate-fade-down animate-duration-700">🞛 Freelance Web Developer (2023-present)</li><br />
            <ul className="lg:text-xl animate-fade-down animate-duration-1000">
              <li>&#10004; Legal Studio: Legal services landing page</li>
              <li>&#10004; UlBakuya: Application for user and student registration. Attendance tracking and event calendar for martial arts teachers</li>
              <li>&#10004; EventApp: Event application, ticket purchasing for concerts, movies, various shows. Creation, modification, and deletion of users and events</li>
            </ul><br />
            <li className="underline underline-offset-4 lg:text-xl animate-fade-down animate-duration-700">🞛 Taekwondo Instructor (2015-present)</li><br />
            <ul className="lg:text-xl animate-fade-down animate-duration-1000">
              <li>&#10004; Customer service</li>
              <li>&#10004; Event coordination</li>
              <li>&#10004; Team leadership</li>
            </ul><br />
            <li className="underline underline-offset-4 lg:text-xl animate-fade-down animate-duration-700">🞛 YPF: IT Support Agent (2012-2014)</li><br />
            <ul className="lg:text-xl animate-fade-down animate-duration-1000">
              <li>&#10004; Customer and technical support for gas station systems</li>
              <li>&#10004; BackOffice administrative tasks</li>
              <li>&#10004; Network and IP telephony support</li>
              <li>&#10004; Incident analysis</li>
              <li>&#10004; User account management (creation, deletion, modification)</li>
              <li>&#10004; Online support</li>
            </ul>
          </ol>
          </div>
        </div>
          <div className='relative lg:mt-5 lg:mx-60 xs:mt-10 xs:mx-6 font-platypi text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-2xl'>
            <p className='lg:text-xl lg:mt-6 lg:px-10
                          xs:text-base xs:mt-2 xs:px-2'>With nearly a decade of experience leading and motivating in the field of martial arts, my career is defined by commitment and a passion for teaching. In my current role as a Martial Arts Instructor, I have developed key skills in team management and in motivating individuals and groups alike, ensuring that each student reaches their full potential. </p> <br />
            <p className='lg:text-xl lg:px-10
                          xs:text-base xs:mt-2 xs:px-2'>
                          My previous experience in technical support at YPF SA has given me a comprehensive view of incident resolution and critical systems management. These skills, combined with my recent technical training, enhance my professional profile, allowing me to bring a unique perspective by blending technical precision with martial discipline.</p> <br />
          </div>
      


      
      <div className='lg:relative lg:mt-10 lg:mx-60 font-platypi text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-2xl
                      xs:relative xs:mt-10 xs:mx-6 '>
        <div ref={certRef} className='lg:relative lg:text-2xl lg:mt-10 lg:ml-10 lg:underline lg:underline-offset-4 text-gray-300
                                      xs:relative xs:text-base xs:mt-2 xs:ml-2 xs:underline xs:underline-offset-4'>Certifications</div>
        <p className='lg:absolute lg:ml-12 lg:mt-16 text-white text-xs
                      xs:absolute xs:ml-6 xs:mt-4'>Hover me</p>
        <div className="lg:relative lg:my-20 lg:mx-10 lg:text-xl font-platypi text-gray-300 animate-fade-right animate-delay-300 
                        xs:relative xs:my-0 xs:mx-2 xs:text-base ">
          
          <div className="lg:flex lg:my-8 lg:mr-24 
                          xs:grid xs:my-10 xs:mr-0">
            <AdvancedImage cldImg={henry} className="diploma lg:ml-0 xs:ml-2"/>
            <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:mr-0 xs:-top-18">Soy Henry: Full-stack web development using languages and technologies such as JavaScript, HTML, CSS, React, Redux, Node, Express, PostgreSQL, Sequelize.</p><br/>
          </div>
          
          <div className="lg:flex lg:my-8 lg:mr-24 
                          xs:grid xs:-mt-10 xs:mr-0">
            <AdvancedImage cldImg={efset} className="diploma lg:ml-0 xs:ml-2"/>
            <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:mr-0 xs:-top-18">EF SET: English proficiency in reading, writing, and listening - C2 Level, April 2024</p><br/>
          </div>
          
          <div className="lg:flex lg:my-8 lg:mr-24 
                          xs:grid xs:-mt-2 xs:mr-0">
            <AdvancedImage cldImg={cm} className="diploma lg:ml-0 xs:ml-2"/>
            <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:mr-0 xs:-top-18">Community Manager: Specialization course in social media management, October 2022 </p><br/>
          </div>
          
          <div className="lg:flex lg:my-8 lg:mr-24
                          xs:grid xs:-mt-2 xs:mr-0">
            <AdvancedImage cldImg={lider} className="diploma lg:ml-0 xs:ml-2"/>
            <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-18 xs:mr-0 xs:-top-18">The Leaders for a New Governance specialization program focuses on providing a comprehensive learning experience that prepares leaders to effectively and efficiently navigate the challenges of a constantly evolving environment. The objective of this specialization is for participants to acquire the skills and tools necessary to perform as social leaders in the new scenarios created by recent political, social, and technological transformations. </p><br/>
          </div>
          
          <div className="lg:flex lg:my-8 lg:mr-24 
                          xs:grid xs:-mt-2 xs:mr-0 ">
            <AdvancedImage cldImg={redes}  className="diploma lg:ml-0 xs:ml-2"/>
            <p className="lg:relative lg:content-center lg:ml-8 lg:top-0 xs:relative xs:ml-0 xs:mr-0 xs:-top-18">Social Media: How to Communicate Management? This program aims to provide an understanding of the theory and concepts behind new digital political communication. The program is designed to develop tools for the effective use of data in the design and implementation of public policies..</p><br/>
          </div>
        </div>
      </div>
        
        
      <div className='lg:relative lg:mt-10 lg:mx-60 font-platypi text-gray-300 border-2 border-gray-600 bg-gray-700 rounded-2xl
                      xs:relative xs:mt-10 xs:mx-6 '>
        <p ref={contRef} className='lg:relative lg:text-2xl lg:mt-10 lg:ml-10 lg:underline lg:underline-offset-4 text-gray-300
                                    xs:relative xs:text-base xs:mt-2 xs:ml-2 xs:underline xs:underline-offset-4'>
                                    Contact</p>
        <div className='lg:relative xs:relative text-gray-300'>
          <div className="lg:flex xs:grid">
            <AdvancedImage cldImg={gmail} className='lg:relative lg:mt-4 lg:size-20
                                                     xs:relative xs:mt-2 xs:size-16 '/>
            <p className="lg:relative lg:text-xl lg:ml-0 lg:mt-10
                          xs:relative xs:text-base xs:ml-20 xs:-mt-10">ezequielheick@gmail.com</p>
            <AdvancedImage cldImg={whatsapp} className='lg:relative lg:mt-6 lg:size-16 lg:ml-20
                                                        xs:relative xs:mt-4 xs:size-14 xs:ml-1'/>
            <p className="lg:relative lg:text-xl lg:ml-0 lg:mt-10 
                          xs:relative xs:text-base xs:ml-20 xs:-mt-10">+54 011 34637208</p> <br />
            <a href="https://www.linkedin.com/in/ezequielheick/" target="_blank">
              <AdvancedImage cldImg={linkedin} className='lg:relative lg:mt-6 lg:size-16 lg:ml-20 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-1000
                                                          xs:relative xs:mt-1 xs:size-14 xs:ml-2' /></a>
            <p className='lg:relative lg:text-xl lg:mt-6 lg:mx-5 lg:ml-6
                          xs:relative xs:text-base xs:-mt-9 xs:mx-0 xs:ml-32'>Click us</p>
            <a href="https://github.com/HeickEzequiel" target="_blank"> 
              <AdvancedImage cldImg={github} className='lg:relative lg:mb-10 lg:mt-5 lg:size-20 lg:ml-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-1000
                                                        xs:relative xs:mb-10 xs:-mt-16 xs:size-16 xs:ml-60 ' /></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeEnglish