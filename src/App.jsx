import { Routes, Route } from "react-router-dom"
import Certifications from "./components/cert/Certifications"
import Home from "./components/home/Home"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/certifications" element={<Certifications/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      
      </Routes>
    </div>
  )
}

export default App
