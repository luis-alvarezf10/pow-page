import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import { useState, useEffect } from 'react';

function NavBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
  <nav className={`
    fixed top-0 left-0 right-0 z-50 p-6 flex items-center justify-between
    backdrop-blur-md transition-colors duration-500
    text-white
    ${scrolled ? 'bg-gray-900/30' : 'bg-gray-900/0'}
  `}
>
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold">Pow Fitness</span>
    </div>
    <div className="flex gap-6">
      <Link to="/" className={`hover:text-[#9addff] transition-colors ${
        location.pathname === '/' ? 'text-[#9addff] font-semibold' : ''
      }`} style={{cursor: 'pointer'}}>Inicio</Link>
      <Link to="/about" className={`hover:text-[#9addff] transition-colors ${
        location.pathname === '/about' ? 'text-[#9addff] font-semibold' : ''
      }`} style={{cursor: 'pointer'}}>Acerca</Link>
    </div>
  </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
