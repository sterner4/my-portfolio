import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">Jackson Moturi.</h1>
          <h2 className="title">Applied Computer Science Student.</h2>
          <p className="description">
            I'm a 2nd-year student at Egerton University with a passion for software engineering, 
            web development, and networking. Let's build amazing digital experiences.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Get in Touch</a>
            <div className="social-links">
              <a href="https://github.com/sterner4" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/jackson-moturi/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="hero-image animate-float">
          <div className="image-wrapper">
            <img 
              src="/profile.jpg" 
              alt="Jackson Moturi" 
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = 'https://via.placeholder.com/400x400?text=Profile+Picture';
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
