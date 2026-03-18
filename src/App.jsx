import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ContactPage from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />

      {/* Route Switcher */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App