import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Update the document title
  useEffect(() => {
    document.title = "3Z & Co. | AI Automation Agency";
    
    // Find and update the favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300FFFF"><path d="M13 3L2 14L13 21V3Z M16 3L19 3A2 2 0 0 1 21 5L21 19A2 2 0 0 1 19 21L16 21V3Z"/></svg>';
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050A30] text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;