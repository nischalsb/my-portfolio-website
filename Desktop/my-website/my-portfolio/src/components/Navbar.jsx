import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[90px] flex justify-center items-center px-8 bg-primary text-gray-300 z-50'>
      {/* Container for the logo and nav links */}
      <div className='w-full max-w-[1200px] flex justify-between items-center'>
        {/* Logo or title */}
        <div>
          <h1 className='text-3xl font-bold text-secondary drop-shadow-[0_0_8px_rgba(100,255,218,0.3)]'>
            MY PORTFOLIO
          </h1>
        </div>

        {/* Menu for Desktop */}
        <ul className='flex space-x-10 list-none'>
          <li className='nav-link hover:text-secondary transition-colors duration-300 text-lg'>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='nav-link hover:text-secondary transition-colors duration-300 text-lg'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='nav-link hover:text-secondary transition-colors duration-300 text-lg'>
          <Link to='skills' smooth={true} duration={500}>  {/* Scroll to Skills */}
            Skills
          </Link>
        </li>
          <li className='nav-link hover:text-secondary transition-colors duration-300 text-lg'>
            <Link to='projects' smooth={true} duration={500}>  {/* Scroll to Projects */}
              Projects
            </Link>
          </li>
          <li className='nav-link hover:text-secondary transition-colors duration-300 text-lg'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
