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
    <nav className={`fixed top-0 w-full flex justify-between items-center p-4 transition-colors duration-300 z-50 ${scrolled ? 'bg-gray-100' : 'bg-transparent'}`}>
      <div className="text-lg font-bold text-gray-800">John Doe</div>
      <div className="flex gap-6">
        <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
        <a href="#" className="text-gray-800 hover:text-blue-500">About</a>
        <a href="#" className="text-gray-800 hover:text-blue-500">Projects</a>
        <a href="#" className="text-gray-800 hover:text-blue-500">Contact</a>
      </div>
    </nav>
  );
};

export default Header;