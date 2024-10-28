import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Projects from "./components/projects/Projects"
import HomeEnglish from "./components/home/HomeEnglish"




function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/eng" element={<HomeEnglish/>}/>
        <Route path='/projects' element={<Projects/>}/>

      </Routes>
    </div>
  )
}

export default App
