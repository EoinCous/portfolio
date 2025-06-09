const Navbar = ({ onContactClick }) => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Eoin</h1>
      <ul className="nav-links">
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={onContactClick}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
