import Navbar from "./Navbar"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact" 
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Particles from "./pages/Particles.js"
import "./css/popup.css"
import Footer from "./pages/Footer"



function App() {
  return (
    <>
    <Navbar /> 
    <div className="com-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Particles />
    <Footer />
    </>
  )
}

export default App;
