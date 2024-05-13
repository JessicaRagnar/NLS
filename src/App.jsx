import UIControlPanel from './components/UIControlPanel/UIControlPanel.jsx';
import Navbar from './components/navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Home from './pages/Home'
import About from './components/About.jsx'
import Adventures from './pages/Adventures.jsx'
import Guidance from './pages/Guidance.jsx'
import Contact from './pages/Contact.jsx'
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div>
      <UIControlPanel />
      <Hero />
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adventures" element={<Adventures />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;

