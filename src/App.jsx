import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Projects from "./components/projects/Projects"


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>

      </Routes>
    </div>
  )
}

export default App
