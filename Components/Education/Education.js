"use client";

export default function Education() {
  const educationData = [
    {
      id: 1,
      title: "University Of Moratuwa",
      degree: "BSc Hons in Information Technology",
      period: "2023 - 2027",
      description: "Pursuing a comprehensive degree in Information Technology with focus on software development, data structures, and modern web technologies.",
      location: "Moratuwa, Sri Lanka",
      icon: "🎓",
      achievements: ["First Year", "Core IT Foundation"],
      position: "right"
    },
    {
      id: 2,
      title: "Calcey Springboard",
      degree: "Graduated from the one year degree program",
      period: "2023 - 2024",
      description: "Completed an intensive one-year program focused on practical software development skills and industry best practices.",
      location: "Colombo, Sri Lanka",
      icon: "🚀",
      achievements: ["Full Stack Development", "Industry Ready"],
      position: "left"
    },
    {
      id: 3,
      title: "Visakha Vidyalaya",
      degree: "GCE Advanced Level (A/L)",
      period: "2019 - 2021",
      description: "Completed Advanced Level examination with focus on Mathematics, Physics, and Information Technology as main subjects.",
      location: "Colombo, Sri Lanka",
      icon: "🏫",
      achievements: ["A/L Completed", "Science Stream"],
      position: "right"
    },
    {
      id: 4,
      title: "St Mary's College",
      degree: "GCE Ordinary Level (O/L)",
      period: "2018",
      description: "GCE Ordinary Level examination completed with Information and Communication technology, Tamil and English literature as basket subjects. Developed the basement for advanced studies in technology.",
      location: "Kegalle, Sri Lanka",
      icon: "📚",
      achievements: ["A7 B2", "O/L Completed"],
      position: "left"
    }
  ];

  return (
    <section className="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {educationData.map((item, index) => (
            <div key={item.id} className={`timeline-item ${item.position}`}>
              <div className="timeline-node">
                <div className="node-icon">{item.icon}</div>
              </div>
              <div className="timeline-content">
                <div className="education-card">
                  <div className="card-header">
                    <div className="date-tag">{item.period}</div>
                    <div className="institution-icon">{item.icon}</div>
                  </div>
                  <h3 className="education-title-card">{item.title}</h3>
                  <div className="institution-info">
                    <span className="institution-name">
                      <i className="icon-building">🏢</i>
                      {item.degree}
                    </span>
                    <span className="location">
                      <i className="icon-location">📍</i>
                      {item.location}
                    </span>
                  </div>
                  <p className="education-description">{item.description}</p>
                  <div className="achievements">
                    {item.achievements.map((achievement, idx) => (
                      <span key={idx} className="achievement-tag">
                        <i className="icon-check">✓</i>
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 