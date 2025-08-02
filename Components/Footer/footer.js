"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "🐙",
      color: "hover:text-purple-400"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "💼",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "🐦",
      color: "hover:text-sky-400"
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "📸",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Section */}
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">AM</div>
              <div className="logo-text">
                <h3>Thisara Senadeera</h3>
                <p>Full-Stack Developer & UI/UX Designer</p>
              </div>
            </div>
            <p className="footer-description">
              Passionate about creating meaningful digital experiences that bridge the gap between user needs and business goals.
            </p>
          </div>


          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${social.color}`}
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
            <div className="contact-info">
              <p>📧 thisarasenadeera2000@gmail.com</p>
              <p>📱 +94 779642375</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}