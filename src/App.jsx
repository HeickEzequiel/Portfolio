import { Routes, Route } from "react-router-dom"
import Certifications from "./components/cert/Certifications"
import Home from "./components/home/Home"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/certifications" element={<Certifications/>}/>
      
      </Routes>
    </div>
  )
}

export default App
