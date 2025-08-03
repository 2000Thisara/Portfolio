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
      iconImage: "https://seekicon.com/free-icon-download/book_4.png",
      achievements: ["Third Year", "Core IT Foundation"],
      position: "left"
    },
    {
      id: 2,
      title: "Poramadulla Central Collage",
      degree: "GCE Advanced Level (A/L)",
      period: "2021",
      description: "Completed Advanced Level examination with focus on Chemistry, Biology and Physics as main subjects.",
      location: "Nuwara Eliya, Sri Lanka",
      icon: "🏫",
      iconImage: "https://seekicon.com/free-icon-download/book_4.png",
      achievements: ["A/L Completed", "Science Stream", " A B C"],
      position: "right"
    },
    {
      id: 3,
      title: "Poramadulla Central Collage",
      degree: "GCE Ordinary Level (O/L)",
      period: "2016",
      description: "GCE Ordinary Level examination completed with Information and Communication technology and English literature as basket subjects.",
      location: "Nuwara Eliya, Sri Lanka",
      icon: "📚",
      iconImage: "https://seekicon.com/free-icon-download/book_4.png",
      achievements: ["O/L Completed", "A7 B2"],
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
                <div className="node-icon">
                  <img src={item.iconImage} alt="Education" />
                </div>
              </div>
              <div className="timeline-content">
                <div className="education-card">
                  <div className="card-header">
                    <div className="date-tag">{item.period}</div>
                    <div className="institution-icon">
 
                    </div>
                  </div>
                  <h3 className="education-title-card">{item.title}</h3>
                  <div className="institution-info">
                    <span className="institution-name">
                      <img src="https://cdn-icons-png.flaticon.com/512/2436/2436636.png" alt="Building" className="icon-building" />
                      {item.degree}
                    </span>
                    <span className="location">
                      <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" className="icon-location" />
                      {item.location}
                    </span>
                  </div>
                  <p className="education-description">{item.description}</p>
                  <div className="achievements">
                    {item.achievements.map((achievement, idx) => (
                      <span key={idx} className="achievement-tag">
                        <img src="https://static.vecteezy.com/system/resources/previews/012/909/445/large_2x/green-tick-icon-3d-render-free-png.png" alt="Check" className="icon-check" />
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