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
    <nav className={`fixed top-0 w-full transition-colors duration-300 z-50 ${scrolled ? 'bg-gray-100' : 'bg-transparent'}`}>
      <div className='max-w-[1200px] mx-auto px-10 py-4 flex justify-between items-center'>
        <div className="text-xl font-semibold">Sonis Sapkota</div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline decoration-gray-400 underline-offset-4 transition-all">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline decoration-gray-400 underline-offset-4 transition-all">About</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline decoration-gray-400 underline-offset-4 transition-all">Projects</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline decoration-gray-400 underline-offset-4 transition-all">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;