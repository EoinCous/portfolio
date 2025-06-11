import { useState } from 'react';
import '../css/Header.css';

const Header = ({onContactClick}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    console.log("Downloading CV")
  }

  return (
    <header className='header'>
      <nav className="navbar">
        <h1 
          className='logo' 
          onClick={() => scrollToSection('about')}
        >EC</h1>

        <button className="burger" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li onClick={() => {  
            setMenuOpen(false)
            scrollToSection('about')
            }}>About</li>
          <li onClick={() => {
            setMenuOpen(false)
            scrollToSection('projects')
            }}>Projects</li>
          <li onClick={() => {
            setMenuOpen(false)
            scrollToSection('skills')
            }}>Skills</li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="/CV_EoinCousins.pdf" download>Download CV</a>
          </li>
          <li onClick={() => {
            setMenuOpen(false)
            onContactClick()
          }}>Contact Me</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;