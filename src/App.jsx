import UIControlPanel from './components/UIControlPanel.jsx';
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import About from './pages/About'


function App() {
  return (
    <div>
      <UIControlPanel />
      <Hero />
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;

