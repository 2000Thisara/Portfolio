"use client"
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'
import './styles/projects.css'

const projectsData = [
  {
    title: "E-commerce Website Builder (Sellaro)",
    description: "A full-featured web application that enables small and medium-sized businesses to create customizable and secure e-commerce websites.",
    fullDescription: "A full-featured web application that enables small and medium-sized businesses to create customizable and secure e-commerce websites. Developed using the MERN stack with Next.js, Nest.js and MongoDB, it includes features like plugin-based customization, employee permission control, dynamic banner editing with Fabric.js, and payment methods. Led the development and project management.",
    image: "sellaro img.jpg",
    video: "https://www.youtube.com/embed/YlMMz94yDKE",
    technologies: ["Next.js", "Nest.js", "MongoDB", "React"],
    githubUrl: "https://github.com/2000Thisara/server",
    linkedinUrl: "https://www.linkedin.com/posts/thisara-senadeera-404b43299_teamwork-ecommerce-softwaredevelopment-activity-7370869305237950464-w3H1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEg_7oQB2Ht_OOmM1qndDQsRNJ8I9Thcb0U"
  },
  {
    title: "Smart Food Vending Machine (Bun & Run)",
    description: "An innovative vending machine project powered by ESP32 and MicroPython with touchscreen interface and QR-based payments.",
    fullDescription: "An innovative vending machine project powered by ESP32 and MicroPython. Features include a touchscreen interface, QR-based payments, automated inventory management, and real-time updates via Firebase. Developed with a user-friendly focus, integrating hardware control with a Node.js backend and admin panel.",
    image: "bun&run.png",
    video: "https://www.youtube.com/embed/v2uJJjcb4LI",
    technologies: ["ESP32", "Node.js", "Firebase", "MicroPython"],
    linkedinUrl: "https://www.linkedin.com/posts/thisara-senadeera-404b43299_bunandrun-foodtechinnovation-smartvending-activity-7251649671188684801-Tu8w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEg_7oQB2Ht_OOmM1qndDQsRNJ8I9Thcb0U"
  },
  {
    title: "E-commerce Platform for Bathware (Bathlux)",
    description: "A web development project that build the frontend with HTML, CSS, JavaScript and PHP backend.",
    fullDescription: "A web development project that build with HTML, CSS, and JavaScript on the frontend and PHP with SQL on the backend, this e-commerce site allowed browsing, ordering, and inventory tracking of bathware products.",
    image: "/bathluxImage.jpg",
    video: "/bathluxe.mp4",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    linkedinUrl: "https://www.linkedin.com/in/thisara-senadeera-404b43299/details/projects/"
  },
    {
    title: "DNS Performance Analysis Using Wireshark",
    description: "This project uses Wireshark to analyze DNS traffic and identify performance bottlenecks. By capturing and filtering queries and responses, it demonstrates practical skills in network analysis, troubleshooting, and data interpretation to improve system reliability and efficiency.",
    fullDescription: "This project focused on a comprehensive network analysis of the DNS protocol to understand its operational behavior and identify potential performance issues. Using Wireshark, a powerful network protocol analyzer, I captured live DNS traffic in a real-world network environment. The methodology included applying specific display filters to isolate and examine key aspects of the traffic, such as the distribution of DNS query types (A and AAAA records) and measuring the time between a DNS query and its corresponding response.The analysis revealed that while average response times were fast, occasional spikes indicated that the local DNS server could be a minor bottleneck, particularly when browsing new websites. The findings demonstrate proficiency in network analysis, packet inspection, and data interpretation, and highlight a practical application of these skills to improve network performance. ",
    image: "DNS Response Time.png",
    technologies: ["Wireshark", "Network Analysis", "DNS"],
    githubUrl: "https://github.com/2000Thisara/DNS-Performance-and-Analysis",
    linkedinUrl: "https://www.linkedin.com/posts/thisara-senadeera-404b43299_networkanalysis-dns-wireshark-activity-7375476613775405056-cXfV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEg_7oQB2Ht_OOmM1qndDQsRNJ8I9Thcb0U"
  },
      {
    title: "HTTP Packet Analysis and Security Audit",
    description: "This project uses Wireshark to capture unencrypted HTTP traffic, showing how login data can be intercepted from a Python-based web app. It highlights the importance of HTTPS and secure configurations to prevent data exposure and enhance cybersecurity.",
    fullDescription: "Captured and analyzed HTTP network traffic using Wireshark to demonstrate cybersecurity vulnerabilities, including the transmission of unencrypted data and information leakage. Set up a local Python server to simulate a web application and performed a security audit. The analysis confirmed that sensitive data is vulnerable to interception, reinforcing the importance of HTTPS encryption and secure server configurations.",
    image: "http.jpg",
    technologies: ["Wireshark", "Python", "HTTP"],
    githubUrl: "https://github.com/2000Thisara/HTTP-Vulnerability-Analysis",
    linkedinUrl: "https://www.linkedin.com/in/thisara-senadeera-404b43299/details/projects/"
  },
   {
    title: "Advanced Company Network Design",
    description: "Engineered a secure, high-availability network using a Cisco ASA Firewall (DMZ, NAT) and redundancy protocols like HSRP and LACP. Implemented OSPF and SVI for Inter-VLAN Routing. Deployed Cisco WLC for segmented WIFI SSIDs and a full VoIP Telephony Service.",
    fullDescription: "Designed and implemented an advanced, highly available enterprise network using a Hierarchical Design model. The project centered on securing the perimeter with a Cisco ASA Firewall, configuring Inside, Outside, and DMZ zones, NAT, and ACLs. Network resilience was ensured by deploying HSRP for gateway redundancy and LACP EtherChannel for link aggregation. Internal traffic management utilized OSPF dynamic routing and SVI for Inter-VLAN Routing, segmenting traffic into multiple VLANs (VoIP, WLAN, Data). Essential services included the deployment of a Cisco Wireless LAN Controller (WLC) managing segmented WIFI SSIDs and a full VoIP Telephony Service with Voice Gateways, demonstrating comprehensive skills in security, redundancy, and service delivery.",
    image: "Network Diagram.png",
    technologies: ["Cisco ASA", "HSRP", "LACP", "OSPF", "Cisco WLC", "VLANs", "NAT"],
    githubUrl: "https://github.com/2000Thisara/Advanced-Company-Network-Design",
    linkedinUrl: "https://www.linkedin.com/posts/thisara-senadeera-404b43299_cisco-networking-cybersecurity-activity-7377659545894117376-_-NV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEg_7oQB2Ht_OOmM1qndDQsRNJ8I9Thcb0U"
  },
  
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      className="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="projects-container">
        <motion.h2 
          className="projects-title"
          variants={itemVariants}
        >
          Projects
        </motion.h2>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                fullDescription={project.fullDescription}
                image={project.image}
                video={project.video}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                linkedinUrl={project.linkedinUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}