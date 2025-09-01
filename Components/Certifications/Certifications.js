"use client"
import './styles/certifications.css'

const certifications = [
  {
    id: 1,
    title: "Google Cybersecurity Professional Certificate",
    issuingBody: "Google",
    logoImage: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/PTN34OLVY336",
    logoStyle: "google-logo"
  },
  {
    id: 2,
    title: "Introduction to Cybersecurity",
    issuingBody: "Cisco Networking Academy",
    logoImage: "https://cdn.freelogovectors.net/wp-content/uploads/2022/06/networking-academy-logo-freelogovectors.net_-400x90.png",
    verifyUrl: "https://www.credly.com/badges/35979494-1bb8-426a-9295-129eb9a2f56c/public_url",
    logoStyle: "cisco-logo"
  },
  {
    id: 3,
    title: "Networking Basics",
    issuingBody: "Cisco Networking Academy",
    logoImage: "https://cdn.freelogovectors.net/wp-content/uploads/2022/06/networking-academy-logo-freelogovectors.net_-400x90.png",
    verifyUrl: "https://www.credly.com/badges/507d417e-4ea1-4b40-9681-373a9e8ac414/public_url",
    logoStyle: "cisco-logo"
  },
  {
    id: 4,
    title: "Introduction to Data Science",
    issuingBody: "Cisco Networking Academy",
    logoImage: "https://cdn.freelogovectors.net/wp-content/uploads/2022/06/networking-academy-logo-freelogovectors.net_-400x90.png",
    verifyUrl: "https://www.credly.com/badges/cbcd639b-a95b-4fbb-8de2-353b6c006441/public_url",
    logoStyle: "cisco-logo"
  }
]

export default function Certifications() {
  const handleImageError = (e) => {
    e.target.style.display = 'none'
    e.target.nextSibling.style.display = 'block'
  }

  return (
    <section className="certifications">
      <div className="certifications-container">
        <h2 className="certifications-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-logo">
                <div className={`logo-container ${cert.logoStyle}`}>
                  <img 
                    src={cert.logoImage} 
                    alt={cert.issuingBody}
                    className="logo-icon"
                    onError={handleImageError}
                  />
                  <span className="logo-icon" style={{ display: 'none' }}>
                    🎓
                  </span>
                </div>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuingBody}</p>
              <a 
                href={cert.verifyUrl} 
                className="verify-button" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 