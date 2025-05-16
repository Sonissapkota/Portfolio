import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </StrictMode>,
);