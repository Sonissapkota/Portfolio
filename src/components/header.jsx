import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false); // Fixed typo here
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed py-4 w-full transition-colors duration-300 z-50 ${scrolled ? 'bg-gray-100 shadow-sm' : 'bg-transparent'}`}>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between'>
        <div className="text-2xl font-bold">Sonis Sapkota</div>
        <div className="flex space-x-6">
          <a href="#home" className="text-gray-800 hover:text-gray-600 hover:underline decoration-gray-400 underline-offset-4 transition-all">Home</a>
          <a href="#about" className="text-gray-800 hover:text-gray-600 hover:underline decoration-gray-400 underline-offset-4 transition-all">About</a>
          <a href="#skills" className="text-gray-800 hover:text-gray-600 hover:underline decoration-gray-400 underline-offset-4 transition-all">Skills</a>
          <a href="#projects" className="text-gray-800 hover:text-gray-600 hover:underline decoration-gray-400 underline-offset-4 transition-all">Projects</a>
          <a href="#contact" className="text-gray-800 hover:text-gray-600 hover:underline decoration-gray-400 underline-offset-4 transition-all">Contact</a>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Header;