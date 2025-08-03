"use client";
import Project from './Project.jsx';

export default function Projects() {
  console.log('Projects component rendering with projects');
  
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      
      <Project 
        subtitle="E-commerce Website Builder (Sellaro)"
        description="A full-featured web application that enables small and medium-sized businesses to create customizable and secure e-commerce websites. Developed using the MERN stack with Next.js,Nest.js and MongoDB, it includes features like plugin-based customization, employee permission control, dynamic banner editing with Fabric.js, and payment methods. Led the development and project management.."
        isReversed={false}
      />
      
      <Project 
        subtitle="Smart Food Vending Machine (Bun & Run)"
        description="An innovative vending machine project powered by ESP32 and MicroPython. Features include a touchscreen interface, QR-based payments, automated inventory management, and real-time updates via Firebase. Developed with a user-friendly focus, integrating hardware control with a Node.js backend and admin panel."
        isReversed={true}
      />
      
      <Project 
        subtitle="E-commerce Platform for Bathware (Bathlux)"
        description="A web development group project where you led the frontend. Built with HTML, CSS, and JavaScript on the frontend and PHP with SQL on the backend, this e-commerce site allowed browsing, ordering, and inventory tracking of bathware products."
        isReversed={false}
      />

      <Project 
        subtitle="Portfolio Website"
        description="A modern, responsive portfolio website built with Next.js and React. Features dark theme, glassmorphism effects, and smooth animations. Includes sections for projects, skills, and contact information."
        isReversed={true}
      />
    </section>
  );
}