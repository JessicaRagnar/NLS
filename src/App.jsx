import UIControlPanel from './components/UIControlPanel/UIControlPanel.jsx';
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import About from './pages/About'
import Home from './pages/Home'


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
      </Routes>
      

    </div>
  );
}

export default App;

