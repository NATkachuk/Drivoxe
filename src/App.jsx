import Layout from './pages/layout/Layout'
import About from './pages/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter basename="/Drivoxe">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="About" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
