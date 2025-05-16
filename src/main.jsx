import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <About />
  </StrictMode>,
);