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

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
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
                <h3>Ahmed Memon</h3>
                <p>Full-Stack Developer & UI/UX Designer</p>
              </div>
            </div>
            <p className="footer-description">
              Passionate about creating meaningful digital experiences that bridge the gap between user needs and business goals.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
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
              <p>📧 ahmed.memon@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Ahmed Memon. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms" className="footer-bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}