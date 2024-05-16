import React from 'react';
import Hero from '../components/community/community_hero';
import About from '../components/community/community_about';
import Register from '../components/community/community_register';
import Footer from '../components/Footer.jsx';


const Community = () => {
  return (
    <div>
      <Hero />
      <About />
      <Register />
      <Footer />
    </div>
  );
}

export default Community;
