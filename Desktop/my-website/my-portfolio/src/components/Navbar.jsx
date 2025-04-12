import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[90px] flex justify-center items-center px-8 bg-primary text-gray-300 z-50'>
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
            <h1 className='text-3xl font-bold text-secondary drop-shadow-[0_0_8px_rgba(100,255,218,0.3)] cursor-pointer'>
              NISCHAL S. BISTA
            </h1>
          </Link>
        </div>

        {/* Navigation menu - horizontal list with spacing */}
        {/* space-x-10: Adds horizontal spacing between list items */}
        <ul className='flex space-x-10 list-none'>
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
      </div>
    </div>
  );
};

export default Navbar;
