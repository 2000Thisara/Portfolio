"use client";

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issuingBody: "Amazon Web Services",
      logo: "☁️",
      verifyUrl: "#",
      logoStyle: "aws-logo"
    },
    {
      id: 2,
      title: "Security, Compliance, and Identity Fundamentals (SC-900)",
      issuingBody: "Microsoft",
      logo: "🛡️",
      verifyUrl: "#",
      logoStyle: "microsoft-logo"
    },
    {
      id: 3,
      title: "Azure Fundamentals (AZ-900)",
      issuingBody: "Microsoft",
      logo: "☁️",
      verifyUrl: "#",
      logoStyle: "microsoft-logo"
    },
    {
      id: 4,
      title: "CS50's Introduction to Computer Science",
      issuingBody: "Harvard University",
      logo: "🎓",
      verifyUrl: "#",
      logoStyle: "harvard-logo"
    }
  ];

  return (
    <section className="certifications">
      <div className="certifications-container">
        <h2 className="certifications-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-logo">
                <div className={`logo-container ${cert.logoStyle}`}>
                  <span className="logo-icon">{cert.logo}</span>
                </div>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuingBody}</p>
              <a href={cert.verifyUrl} className="verify-button">
                Verify Credential
              </a>
            </div>
          ))}
        </div>
        <div className="certifications-actions">
          <a href="#" className="action-button">
            Visit All My Certifications
            <span className="arrow-icon">↗</span>
          </a>
          <a href="#" className="action-button">
            Visit My HackerRank Profile
            <span className="arrow-icon">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
} 