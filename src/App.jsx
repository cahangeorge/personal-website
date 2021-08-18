import { useState, useEffect } from 'react';
import './app.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/navbar/Navbar';
import Menu from './components/navbar/menu/Menu';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

export default function App() {
  const [ menuOpen, setMenuOpen ] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1250
    });
    AOS.refresh();
  }, []);

  return (
    <div className='app shadow-lg'>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}