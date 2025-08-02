"use client";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="profile-image">
            <div className="image-placeholder">👨‍💻</div>
            <div className="image-label">Profile Photo</div>
          </div>
        </div>
        <div className="hero-right">
          <div className="headline-section">
            <div className="headline-start">WELCOME TO MY PORTFOLIO</div>
            <h1 className="main-headline">Full-Stack Developer & UI/UX Designer</h1>
            <div className="headline-end">Creating digital experiences that matter</div>
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