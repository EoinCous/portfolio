import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactModal from './components/ContactModal';
import './css/App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header onContactClick={() => setIsModalOpen(true)} />
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <Footer />
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;