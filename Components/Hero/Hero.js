"use client";
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    "3rd Year Undergraduate",
    "Cyber Security Enthusiast"
  ];

  useEffect(() => {
    const typeSpeed = 100; // Speed for typing
    const deleteSpeed = 50; // Speed for deleting
    const pauseTime = 2000; // Time to pause when text is complete

    const typewriter = () => {
      const currentText = texts[textIndex];
      
      if (!isDeleting) {
        // Typing phase
        if (charIndex < currentText.length) {
          setTimeout(() => {
            setText(currentText.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          }, typeSpeed);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting phase
        if (charIndex > 0) {
          setTimeout(() => {
            setText(currentText.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          }, deleteSpeed);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typewriter, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, textIndex, charIndex, texts]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="profile-image">
            <div className="image-placeholder"><img src="https://media.licdn.com/dms/image/v2/D4E03AQEkaJXphghWgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699168959569?e=1756944000&v=beta&t=0ibECo1M0xdEQ-jA9fL8Rwu7134miNxc_ZHcgJRMMCs" alt="Profile" /></div>
          </div>
        </div>
        <div className="hero-right">
          <div className="headline-section">
            <h1 className="main-headline">Hi, I'm Thisara</h1>
            <div className="headline-info">
              <div className="typewriter-container">
                <span className="typewriter-text">{text}</span>
                <span className="cursor">|</span>
              </div>
            </div>
          </div>
          
          <div className="who-am-i">
            <h2 className="who-am-i-title">WHO AM I?</h2>
            <p className="who-am-i-subtitle">Currently crafting amazing web experiences :D</p>
          </div>
          
          <div className="description">
            <p>
              I'm a passionate full-stack developer with 5+ years of experience building modern web applications. 
              I specialize in React, Node.js, and cloud technologies. When I'm not coding, you'll find me exploring 
              new design trends or contributing to open-source projects. I believe in creating user-centered solutions 
              that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 