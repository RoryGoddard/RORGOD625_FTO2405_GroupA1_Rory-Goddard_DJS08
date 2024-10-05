import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Vans from "./components/Vans.jsx"
import VanDetail from "./components/VanDetail.jsx"
import Layout from "./components/Layout.jsx"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/vans" element={ <Vans /> } />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </>

  )
}

export default App
