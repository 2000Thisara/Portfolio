"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-placeholder">AM</div>
          <div className="logo-text">
            <div>Portfolio</div>
            <div className="logo-subtitle">Clean and Minimal</div>
          </div>
        </div>
        <div className="personal-name">Thisara Senadeera</div>
      </div>
      <nav className="nav">
        <Link href="#home" className="nav-link">Home</Link>
        <Link href="#about" className="nav-link">About</Link>
        <Link href="#education" className="nav-link">Education</Link>
        <Link href="#skills" className="nav-link">Skills</Link>
        <Link href="#certifications" className="nav-link">Certifications</Link>
        <Link href="#projects" className="nav-link">Projects</Link>
        <Link href="#contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}