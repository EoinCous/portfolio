import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© Eoin Cousins Portfolio {new Date().getFullYear()}</p>
      <p>
        <a href="https://github.com/EoinCous" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/eoin-cousins/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer;
