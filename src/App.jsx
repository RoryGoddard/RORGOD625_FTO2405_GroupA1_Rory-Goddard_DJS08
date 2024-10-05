import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Navbar from "./components/Navbar.jsx"
import Vans from "./components/Vans.jsx"
import VanDetail from "./components/VanDetail.jsx"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/vans" element={ <Vans /> } />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </>

  )
}

export default App
