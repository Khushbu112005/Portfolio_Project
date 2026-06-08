import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Background visual components */}
      <div className="bg-grid-overlay"></div>
      <div className="bg-dot-matrix"></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
