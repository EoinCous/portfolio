import { FaJava, FaPython, FaJs, FaDocker, FaAws, FaGit, FaGithub } from 'react-icons/fa';
import { SiKotlin, SiReact, SiSplunk, SiJenkins, SiKubernetes, SiDatadog, SiHtml5, SiCss3, SiApachekafka, SiGradle, SiApachemaven, SiScala } from 'react-icons/si';
import '../css/Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>

      <div className="skills-category">
        <h3>Languages</h3>
        <div className="skills-grid">
          <span className="skill-badge"><FaJava /> Java</span>
          <span className="skill-badge"><SiKotlin /> Kotlin</span>
          <span className="skill-badge"><FaPython /> Python</span>
          <span className="skill-badge">C#</span>
          <span className="skill-badge"><SiScala /> Scala</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Backend & DevOps</h3>
        <div className="skills-grid">
          <span className="skill-badge"><SiApachekafka /> Kafka</span>
          <span className="skill-badge">REST APIs</span>
          <span className="skill-badge"><FaDocker /> Docker</span>
          <span className="skill-badge"><SiKubernetes /> Kubernetes</span>
          <span className="skill-badge"><SiJenkins /> Jenkins</span>
          <span className="skill-badge"><SiGradle /> Gradle</span>
          <span className="skill-badge"><SiApachemaven /> Maven</span>
          <span className="skill-badge">Avro</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Frontend</h3>
        <div className="skills-grid">
          <span className="skill-badge"><FaJs /> JavaScript</span>
          <span className="skill-badge"><SiHtml5 /> HTML</span>
          <span className="skill-badge"><SiCss3 /> CSS</span>
          <span className="skill-badge"><SiReact /> React (Basic)</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Cloud & Monitoring</h3>
        <div className="skills-grid">
          <span className="skill-badge"><FaAws /> AWS</span>
          <span className="skill-badge"><SiSplunk /> Splunk</span>
          <span className="skill-badge"><SiDatadog /> DataDog</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Version Control</h3>
        <div className="skills-grid">
          <span className="skill-badge"><FaGit /> Git</span>
          <span className="skill-badge"><FaGithub /> GitHub</span>
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