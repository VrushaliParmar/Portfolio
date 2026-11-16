import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Journey from '../sections/Journey';
import Experience from '../sections/Experience';
import Beyond from '../sections/Beyond';
import PoetryCard from '../sections/PoetryCard';
import Contact from '../sections/Contact';
import './PortfolioPage.css';

export default function PortfolioPage() {
  const location = useLocation();

  // Handle hash navigation when arriving from another page (e.g. /poetry → /#projects)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Small timeout ensures the page has painted before scrolling
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="portfolio-page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Experience />
        <Beyond />
        <PoetryCard />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
