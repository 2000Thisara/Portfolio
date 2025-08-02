"use client";

import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/projects';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/footer';
import BackgroundAnimation from '../Components/BackgroundAnimation/BackgroundAnimation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}