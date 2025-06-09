import '../css/About.css';

const About = () => {
  return (
    <div className="about-section">
      <img src="/images/portrait.jpeg" alt="Eoin" className="profile-pic" />
      <div className='introduction'>
        <p>
          Hey, I'm <span className='name'>Eoin Cousins</span>. 
          I'm a backend software engineer currently learning React to become a full-stack developer. 
          Here you can find out about some projects I have worked on.</p>
      </div>
    </div>
  );
};

export default About;
