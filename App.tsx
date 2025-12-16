import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PartsMarquee from './components/PartsMarquee';
import PartsCatalog from './components/PartsCatalog';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <PartsMarquee />
        <PartsCatalog />
        <About />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;