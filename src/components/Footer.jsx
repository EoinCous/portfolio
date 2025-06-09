import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© Eoin Cousins Portfolio {new Date().getFullYear()}</p>
      <p>GitHub | LinkedIn</p>
    </footer>
  );
};

export default Footer;
