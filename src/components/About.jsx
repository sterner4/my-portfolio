import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-content glass-panel">
          <div className="about-text">
            <p>
              Hello! I'm Jackson Moturi, an enthusiastic tech student currently pursuing my Bachelor's degree in Applied Computer Science at Egerton University.
            </p>
            <p>
              Being in my second year, I've immersed myself in various programming paradigms and technologies. My journey in tech is driven by a deep curiosity about how software and networks function at their core.
            </p>
            <p>
              Beyond coding, I'm highly interested in networking and software engineering. I enjoy solving complex problems, building scalable web applications, and learning about system architectures.
            </p>
          </div>
          <div className="education-cards">
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <h3>Egerton University</h3>
              <p className="degree">BSc. Applied Computer Science</p>
              <p className="year">2nd Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
