import React from 'react';
import './Contact.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <div className="contact-content glass-panel text-center">
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interested in collaborating?</h3>
          <p className="contact-text" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
            I'm currently looking for new opportunities, internships, and collaborations. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:jacksonmoturi95@gmail.com" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Say Hello
            </a>
            <a href="https://instagram.com/ster.ner4" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderColor: '#E1306C', color: 'var(--text-primary)' }} onMouseOver={(e) => { e.currentTarget.style.background = '#E1306C'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
              <FaInstagram size="1.2rem" /> Instagram
            </a>
            <a href="https://wa.me/254759812914" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderColor: '#25D366', color: 'var(--text-primary)' }} onMouseOver={(e) => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
              <FaWhatsapp size="1.2rem" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
