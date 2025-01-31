import Layout from './pages/layout/Layout'
import About from './pages/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cars from './pages/Cars/Cars'
import Faqs from './pages/FAQS/Faqs'



function App() {

  return (
    <BrowserRouter basename="/Drivoxe/">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="About" element={<About />} />
        <Route path= "Cars"  element={<Cars/>} />
        <Route path="Faqs"   element={<Faqs/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
