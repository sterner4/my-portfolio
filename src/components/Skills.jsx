import React from 'react';
import './Skills.css';
import { FaCode, FaServer, FaNetworkWired } from 'react-icons/fa';
import { DiReact, DiJava, DiJavascript1, DiHtml5, DiCss3, DiMysql } from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';

const SkillIcon = ({ name }) => {
  switch (name) {
    case 'React JS': return <DiReact size="3rem" color="#61DAFB" />;
    case 'Java': return <DiJava size="3rem" color="#007396" />;
    case 'JavaScript': return <DiJavascript1 size="3rem" color="#F7DF1E" />;
    case 'HTML': return <DiHtml5 size="3rem" color="#E34F26" />;
    case 'CSS': return <DiCss3 size="3rem" color="#1572B6" />;
    case 'MySQL': return <DiMysql size="3rem" color="#4479A1" />;
    case 'C/C++': return <SiCplusplus size="3rem" color="#00599C" />;
    case 'Networking': return <FaNetworkWired size="3rem" color="#38B2AC" />;
    case 'Software Eng.': return <FaServer size="3rem" color="#805AD5" />;
    default: return <FaCode size="3rem" />;
  }
};

const Skills = () => {
  const skillsList = [
    { name: 'C/C++', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'JavaScript', category: 'Web' },
    { name: 'HTML', category: 'Web' },
    { name: 'CSS', category: 'Web' },
    { name: 'React JS', category: 'Frameworks' },
    { name: 'MySQL', category: 'Databases' },
    { name: 'Software Eng.', category: 'Core' },
    { name: 'Networking', category: 'Core' }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div className="skill-card glass-panel" key={index}>
              <div className="skill-icon">
                <SkillIcon name={skill.name} />
              </div>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
