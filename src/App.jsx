import Layout from './pages/layout/Layout'
import About from './pages/About/About'
import { HashRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <HashRouter basename="/Drivoxe">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="About" element={<About />} />
      </Routes>
    </HashRouter>
  )
}
export default App
