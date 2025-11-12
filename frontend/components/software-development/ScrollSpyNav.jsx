'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollSpyNav({ sections = [] }) {
  const [activeSection, setActiveSection] = useState('csd');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar-strip">
      <nav id="nav-scrollspy" className="nav-sec-container position-sticky top-0 bg-white z-3 d-flex justify-content-center gap-4">
        {sections.map((section) => (
          <a 
            key={section.id}
            className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(section.id);
            }}
          >
            {section.title}
          </a>
        ))}
        <span className="nav-indicator"></span>
      </nav>
    </div>
  );
}
