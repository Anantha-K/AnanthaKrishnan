
import React, { useState, useEffect } from 'react';
import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {
  const [headerClass, setHeaderClass] = useState('bg-transparent text-white');
  const [activeLink, setActiveLink] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setHeaderClass('bg-black text-white py-2');
      } else {
        setHeaderClass('bg-transparent text-white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerClass]);

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 z-10 w-full shadow ${headerClass} flex lg:justify-center transition ease-in-out duration-200 sm:justify-start`}>
      <div className="flex items-center justify-between px-6 py-3 sm:flex-row sm:justify-start sm:px-10">
        <div className="flex items-center">
          <button
            className="text-white font-medium text-3xl hover:text-red-600 transition duration-700 sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <BiMenuAltLeft/>
          </button>
          <nav
            className={`sm:flex sm:items-center sm:ml-auto ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            <a href="#Home" className={`text-white font-medium lg:text-xl hover:text-red-600 sm:text-sm transition duration-700 ${activeLink === 'Home' ? 'text-red-600' : ''}`} onClick={() => handleClick('Home')}>Home</a>
            <a href="#About" className={`ml-10 text-white font-medium lg:text-xl hover:text-red-600  sm:text-sm transition duration-700 ${activeLink === 'About' ? 'text-red-600' : ''}`} onClick={() => handleClick('About')}>About</a>
            <a href="#Skills" className={`ml-10 text-white font-medium lg:text-xl hover:text-red-600 sm:text-sm  transition duration-700 ${activeLink === 'Skills' ? 'text-red-600' : ''}`} onClick={() => handleClick('Skills')}>Skills</a>
            <a href="#Blog" className={`ml-10 text-white font-medium lg:text-xl hover:text-red-600  sm:text-sm transition duration-700 ${activeLink === 'Blog' ? 'text-red-600' : ''}`} onClick={() => handleClick('Blog')}>Blog</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;