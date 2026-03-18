import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/404Page';

function App() {
  return (
    <>
      <Navbar />

      {/* Route Switcher */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App