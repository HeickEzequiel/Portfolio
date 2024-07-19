import { Routes, Route } from "react-router-dom"
import Certifications from "./components/cert/Certifications"
import Home from "./components/home/Home"
import Projects from "./components/projects/Projects"
import Exp from "./components/exp/Exp"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/certifications" element={<Certifications/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/exp' element={<Exp/>}/>
      
      </Routes>
    </div>
  )
}

export default App
