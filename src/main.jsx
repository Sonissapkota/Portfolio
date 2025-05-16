import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Header from './components/Header'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className="h-[200vh] p-4">
    </div>
  </StrictMode>,
);