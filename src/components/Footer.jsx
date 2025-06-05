import React from 'react';
// Import social media icons from react-icons library
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  // Main footer container - full width, dark background, gray text, vertical padding, top border
  // w-full: Takes full width of viewport
  // bg-[#030712]: Very dark background color (nearly black)
  // text-gray-300: Light gray text color for better contrast on dark background
  // py-8: Adds 32px padding on top and bottom for spacing
  // border-t: Adds top border for visual separation
  // border-lightNavy/30: Sets border color with 30% opacity for subtle effect
  return (
    <div className='w-full bg-[#030712] text-gray-300 py-8 sm:py-12 lg:py-16 border-t border-lightNavy/30'>
      
      {/* Content container with responsive width and padding */}
      {/* max-w-[1100px]: Limits maximum width to match other sections */}
      {/* mx-auto: Centers horizontally by adding equal margins */}
      {/* flex flex-col: Creates vertical column layout */}
      {/* items-center: Centers children horizontally */}
      {/* justify-center: Centers children vertically */}
      {/* px-4: Adds 16px horizontal padding on both sides */}
      <div className='max-w-[1100px] mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
        
        {/* Social media links container with responsive spacing */}
        {/* flex: Creates horizontal row layout for icons */}
        {/* mb-6: Adds 24px margin below to separate from copyright text */}
        <div className='flex mb-6 sm:mb-8 lg:mb-10'>
          
          {/* GitHub link with responsive icon sizing */}
          {/* text-gray-400: Sets medium gray color for inactive state */}
          {/* hover:text-secondary: Changes to teal color on hover for interactivity */}
          {/* hover:scale-110: Slightly enlarges icon on hover (grows to 110%) */}
          {/* transition-all duration-300: Creates smooth animation taking 300ms */}
          {/* mx-2: Adds 8px margin on left and right sides for minimal spacing */}
          <a href="https://github.com/nischalsb" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-secondary hover:scale-110 transition-all duration-300 mx-2 sm:mx-3 lg:mx-4'>
            {/* GitHub icon with glow effect on hover */}
            {/* size={32}: Sets icon size to 32 pixels for better visibility */}
            {/* hover:drop-shadow: Adds teal glow around icon on hover */}
            <FaGithub size={32} className='sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]' />
          </a>
          
          {/* LinkedIn link with responsive icon sizing */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-secondary hover:scale-110 transition-all duration-300 mx-2 sm:mx-3 lg:mx-4'>
            {/* LinkedIn icon with glow effect on hover */}
            {/* size={32}: Sets icon size to 32 pixels for better visibility */}
            {/* hover:drop-shadow: Adds teal glow around icon on hover */}
            <FaLinkedin size={32} className='sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]' />
          </a>
          
          {/* Twitter link with responsive icon sizing */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-secondary hover:scale-110 transition-all duration-300 mx-2 sm:mx-3 lg:mx-4'>
            {/* Twitter icon with glow effect on hover */}
            {/* size={32}: Sets icon size to 32 pixels for better visibility */}
            {/* hover:drop-shadow: Adds teal glow around icon on hover */}
            <FaTwitter size={32} className='sm:w-8 sm:h-8 lg:w-10 lg:h-10 hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]' />
          </a>
        </div>
        
        {/* Copyright text container with responsive text sizing */}
        {/* text-center: Horizontally centers the text */}
        {/* leading-tight: Custom line height of exactly 1rem (16px) for tighter spacing */}
        <div className="text-center leading-tight">
          
          {/* First copyright line with responsive font size */}
          {/* text-gray-500: Medium-dark gray for subtle appearance */}
          {/* text-xs: Small font size (14px) */}
          {/* mb-1: Custom 1px bottom margin for minimal spacing */}
          {/* pb-[0px]: Explicit zero padding at bottom to prevent browser defaults */}
          <p className='text-gray-500 text-xs sm:text-sm mb-1'>
            Designed & Built by Nischal S. Bista
          </p>
          
          {/* Second copyright line with responsive font size */}
          {/* text-gray-500: Matching color for consistency */}
          {/* text-xs: Matching size for consistency */}
          {/* mt-1: Custom 1px top margin for minimal spacing */}
          {/* pt-[0px]: Explicit zero padding at top to prevent browser defaults */}
          <p className='text-gray-500 text-xs sm:text-sm mt-1'>
            ©2025 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;