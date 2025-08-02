"use client";
import Project from './Project.jsx';

export default function Projects() {
  console.log('Projects component rendering with projects');
  
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      
      <Project 
        subtitle="Spotify Data Visualizer"
        description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        isReversed={false}
      />
      
      <Project 
        subtitle="E-Commerce Platform"
        description="A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart functionality, and payment integration with Stripe."
        isReversed={true}
      />
      
      <Project 
        subtitle="Task Management App"
        description="A comprehensive task management application with real-time collaboration, drag-and-drop functionality, progress tracking, and team communication features."
        isReversed={false}
      />

      <Project 
        subtitle="Portfolio Website"
        description="A modern, responsive portfolio website built with Next.js and React. Features dark theme, glassmorphism effects, and smooth animations. Includes sections for projects, skills, and contact information."
        isReversed={true}
      />

      <Project 
        subtitle="Weather Dashboard"
        description="A real-time weather dashboard with interactive maps, 7-day forecasts, and location-based weather alerts. Built with React, OpenWeather API, and Chart.js for data visualization."
        isReversed={false}
      />

      <Project 
        subtitle="Social Media Analytics"
        description="A comprehensive analytics platform for social media management. Tracks engagement metrics, audience growth, and content performance across multiple platforms with detailed reporting and insights."
        isReversed={true}
      />

      <Project 
        subtitle="Recipe Finder App"
        description="A recipe discovery app with AI-powered recommendations, dietary filters, and meal planning features. Users can search by ingredients, save favorites, and create shopping lists."
        isReversed={false}
      />

      <Project 
        subtitle="Fitness Tracker"
        description="A mobile-first fitness tracking application with workout logging, progress visualization, and social features. Includes personalized workout plans and nutrition tracking."
        isReversed={true}
      />
    </section>
  );
}