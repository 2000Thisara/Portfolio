"use client";

export default function Skills() {
  const skills = [
    {
      name: "React",
      icon: "⚛️",
      image: "/icons/react.svg", // You can add actual image paths here
      description: "Frontend Development"
    },
    {
      name: "Node.js",
      icon: "🟢",
      image: "/icons/nodejs.svg",
      description: "Backend Development"
    },
    {
      name: "TypeScript",
      icon: "🔷",
      image: "/icons/typescript.svg",
      description: "Type Safety"
    },
    {
      name: "Python",
      icon: "🐍",
      image: "/icons/python.svg",
      description: "Data Science"
    },
    {
      name: "AWS",
      icon: "☁️",
      image: "/icons/aws.svg",
      description: "Cloud Services"
    },
    {
      name: "Docker",
      icon: "🐳",
      image: "/icons/docker.svg",
      description: "Containerization"
    },
    {
      name: "Figma",
      icon: "🎨",
      image: "/icons/figma.svg",
      description: "UI/UX Design"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      image: "/icons/mongodb.svg",
      description: "Database"
    }
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {/* You can use either emoji or image */}
                {skill.image ? (
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="skill-image"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <span className="skill-emoji" style={{ display: skill.image ? 'none' : 'block' }}>
                  {skill.icon}
                </span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 