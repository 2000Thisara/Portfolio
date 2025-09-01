"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop - 80; // Account for header height
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second duration
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // Easing function for smooth animation
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }

      requestAnimationFrame(animation);
    }
    
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-placeholder">TS</div>
          <div className="personal-name">Thisara Senadeera</div>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="nav desktop-nav">
        <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
        <button onClick={() => scrollToSection('home')} className="nav-link">About</button>
        <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
        <button onClick={() => scrollToSection('certifications')} className="nav-link">Certifications</button>
        <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
        <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
        <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
      </nav>

      {/* Mobile Hamburger Button */}
      <button 
        className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
        <button onClick={() => scrollToSection('home')} className="mobile-nav-link">About</button>
        <button onClick={() => scrollToSection('education')} className="mobile-nav-link">Education</button>
        <button onClick={() => scrollToSection('certifications')} className="mobile-nav-link">Certifications</button>
        <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">Skills</button>
        <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">Projects</button>
        <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>}
    </header>
  );
}