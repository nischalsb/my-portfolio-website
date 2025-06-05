import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center px-4 bg-primary text-gray-300 z-50'>
      {/* Content container - limits width and creates space between logo and navigation */}
      {/* max-w-[1200px]: Sets maximum width constraint */}
      {/* justify-between: Pushes logo and nav links to opposite sides */}
      <div className='w-full max-w-[1200px] flex justify-between items-center'>
        {/* Logo/name container */}
        <div>
          {/* Site title/logo - large bold text with teal color and subtle glow effect */}
          {/* text-3xl: Large text size */}
          {/* font-bold: Heavy font weight */}
          {/* text-secondary: Teal/cyan color */}
          {/* drop-shadow: Creates subtle glow around text */}
          {/* Added Link component and cursor-pointer for navigation to home */}
          <Link to='home' smooth={true} duration={500}>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-secondary drop-shadow-[0_0_8px_rgba(100,255,218,0.3)] cursor-pointer'>
              NISCHAL S. BISTA
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation menu */}
        <ul className='hidden md:flex space-x-8 list-none'>
          {/* Navigation link - text with hover effect */}
          {/* hover:text-secondary: Changes to teal on hover */}
          {/* transition-colors: Smooth color transition on hover */}
          {/* duration-300: Sets transition speed to 300ms */}
          <li className='nav-link hover:text-secondary transition-colors duration-300 text-lg'>
            {/* react-scroll Link for smooth scrolling to the Home section */}
            {/* smooth={true}: Enables smooth scrolling animation */}
            {/* duration={500}: Sets scroll animation duration to 500ms */}
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
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='nav-link hover:text-secondary transition-colors duration-300 text-lg'>
            <Link to='experience' smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className='nav-link hover:text-secondary transition-colors duration-300 text-lg'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
          {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center text-xl'}>
          <li className='py-6 text-2xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-6 text-2xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='py-6 text-2xl'>
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-2xl'>
            <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className='py-6 text-2xl'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
