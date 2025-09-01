"use client"

import { useEffect, useState } from 'react'
import './styles/hero.css'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const texts = [
    "3rd Year Undergraduate",
    "Cyber Security Enthusiast"
  ]

  useEffect(() => {
    const typeSpeed = 100
    const deleteSpeed = 50
    const pauseTime = 2000

    const typewriter = () => {
      const currentText = texts[textIndex]
      
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setTimeout(() => {
            setText(currentText.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          }, typeSpeed)
        } else {
          setTimeout(() => {
            setIsDeleting(true)
          }, pauseTime)
        }
      } else {
        if (charIndex > 0) {
          setTimeout(() => {
            setText(currentText.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          }, deleteSpeed)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }

    const timer = setTimeout(typewriter, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [text, isDeleting, textIndex, charIndex, texts])

  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank')
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="profile-image">
            <div className="image-placeholder">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQEkaJXphghWgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699168959569?e=1756944000&v=beta&t=0ibECo1M0xdEQ-jA9fL8Rwu7134miNxc_ZHcgJRMMCs" 
                alt="Thisara Senadeera Profile" 
              />
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="headline-section">
            <h1 className="main-headline">Hi, I am Thisara</h1>
            <div className="headline-info">
              <div className="typewriter-container">
                <span className="typewriter-text">{text}</span>
                <span className="cursor">|</span>
              </div>
            </div>
          </div>
          
          <div className="who-am-i">
            <h2 className="who-am-i-title">WHO AM I?</h2>
            <div className="description">
              <p>
                A third-year undergraduate at the Faculty of Information Technology, 
                University of Moratuwa, with a strong passion for full-stack development, 
                networking, and cybersecurity. Enthusiastic about working in collaborative 
                team environments and always motivated to take on new challenges.
              </p>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="hero-btn primary-btn" onClick={handleResumeClick}>
              <span>View My Resume</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10,9 9,9 8,9"></polyline>
              </svg>
            </button>
            
            <button className="hero-btn secondary-btn" onClick={handleContactClick}>
              <span>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 