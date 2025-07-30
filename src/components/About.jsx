import '../css/About.css';

const About = () => {
  return (
    <div className="about-section">
      <img src="/images/portrait.jpeg" alt="Eoin" className="profile-pic" />
      <div className='introduction'>
        <p>
          Hey, I'm <span className='name'>Eoin Cousins</span>. 
          I’m a full stack software engineer with professional backend experience and a strong focus on building clean, user-friendly frontends with React. 
          Here you can find out about some projects I have worked on.</p>
      </div>
    </div>
  );
};

export default About;
