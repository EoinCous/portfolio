// Skills.js
import '../css/Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>

      <div className="skills-category">
        <h3>Languages</h3>
        <div className="skills-grid">
          <span className="skill-badge">Java</span>
          <span className="skill-badge">Kotlin</span>
          <span className="skill-badge">Python</span>
          <span className="skill-badge">C#</span>
          <span className="skill-badge">Scala</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Backend & DevOps</h3>
        <div className="skills-grid">
          <span className="skill-badge">Kafka</span>
          <span className="skill-badge">REST APIs</span>
          <span className="skill-badge">Docker</span>
          <span className="skill-badge">Kubernetes</span>
          <span className="skill-badge">Jenkins</span>
          <span className="skill-badge">Gradle</span>
          <span className="skill-badge">Maven</span>
          <span className="skill-badge">Avro</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Frontend</h3>
        <div className="skills-grid">
          <span className="skill-badge">JavaScript</span>
          <span className="skill-badge">HTML</span>
          <span className="skill-badge">CSS</span>
          <span className="skill-badge">React (Basic)</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Cloud & Monitoring</h3>
        <div className="skills-grid">
          <span className="skill-badge">AWS</span>
          <span className="skill-badge">Splunk</span>
          <span className="skill-badge">DataDog</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Version Control</h3>
        <div className="skills-grid">
          <span className="skill-badge">Git</span>
          <span className="skill-badge">GitHub</span>
        </div>
      </div>

      <div className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>AWS Solutions Architect Associate</li>
          <img src='./images/aws-certificate.jpeg' alt='AWS Certificate'/>
        </ul>
      </div>
    </div>
  );
};

export default Skills;