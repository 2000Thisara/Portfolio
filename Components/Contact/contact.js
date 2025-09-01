"use client"
import './styles/contact.css'

const contactData = [
  {
    id: "email",
    title: "Email",
    value: "thisarasenadeera2000@gmail.com",
    icon: "https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-email-mail-application-vector-png-image_12256702.png"
  },
  {
    id: "phone", 
    title: "Phone",
    value: "+94 77 964 2375",
    icon: "https://freepngimg.com/thumb/telephone/75359-mobile-phones-button-telephone-call-logo-now.png"
  },
  {
    id: "location",
    title: "Location", 
    value: "Moratuwa, Sri Lanka",
    icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
  }
]

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thisara-senadeera-404b43299",
    icon: "https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png",
    className: "linkedin"
  },
  {
    name: "GitHub", 
    url: "https://github.com/2000Thisara",
    icon: "https://zcoregroup.com/assets/images/blog/GitHub-Apps.png",
    className: "github"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/94779642375",
    icon: "https://static.vecteezy.com/system/resources/previews/018/930/564/original/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png",
    className: "whatsapp"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/thisara_senadeera",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733614.png", 
    className: "instagram"
  }
]

export default function Contact() {
  const handleImageError = (e) => {
    e.target.style.display = 'none'
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-cards">
          {contactData.map((contact) => (
            <div key={contact.id} className="contact-card">
              <div className={`card-icon ${contact.id}-icon`}>
                <img 
                  src={contact.icon} 
                  alt={contact.title} 
                  onError={handleImageError}
                />
              </div>
              <h3 className="card-title">{contact.title}</h3>
              <p className="card-value">{contact.value}</p>
            </div>
          ))}
        </div>
        
        <div className="social-section">
          <h3 className="social-title">
            Connect with me on <span className="highlight">Social Media</span>
          </h3>
          <div className="social-icons">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`social-icon ${social.className}`}
                aria-label={`Connect on ${social.name}`}
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  onError={handleImageError}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}