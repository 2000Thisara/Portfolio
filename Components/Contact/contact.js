"use client";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-cards">
          <div className="contact-card">
            <div className="card-icon email-icon">📧</div>
            <h3 className="card-title">Email</h3>
            <p className="card-value">dewminkasmitha30@gmail.com</p>
          </div>
          
          <div className="contact-card">
            <div className="card-icon phone-icon">📞</div>
            <h3 className="card-title">Phone</h3>
            <p className="card-value">+94 76 901 4603</p>
          </div>
          
          <div className="contact-card">
            <div className="card-icon location-icon">📍</div>
            <h3 className="card-title">Location</h3>
            <p className="card-value">Moratuwa, Sri Lanka</p>
          </div>
        </div>
        
        <div className="social-section">
          <h3 className="social-title">
            Connect with me on <span className="highlight">Social Media</span>
          </h3>
          <div className="social-icons">
            <a href="#" className="social-icon linkedin">
              <span>in</span>
            </a>
            <a href="#" className="social-icon github">
              <span>🐙</span>
            </a>
            <a href="#" className="social-icon whatsapp">
              <span>💬</span>
            </a>
            <a href="#" className="social-icon instagram">
              <span>📷</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}