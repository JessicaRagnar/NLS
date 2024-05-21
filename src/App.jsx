import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
import About from './pages/About';
import Adventures from './pages/Adventures';
import Community from './pages/Community';
import Guidance from './pages/Guidance';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import Minigames from './pages/Minigames';
import Stories from './pages/Stories';


function App() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';

  return (
    <div>
      {isHome && <Hero />}
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="adventures" element={<Adventures />} />
        <Route path="community" element={<Community />} />
        <Route path="guidance" element={<Guidance />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="minigames" element={<Minigames />} />
        <Route path="stories" element={<Stories />} />
      </Routes>
    </div>
  );
}

export default App;
