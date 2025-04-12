import React from 'react';
// Import social media icons from react-icons library
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  // Main footer container - full width, dark background, gray text, vertical padding, top border
  // w-full: Takes full width of viewport
  // bg-[#030712]: Very dark background color (nearly black)
  // text-gray-300: Light gray text color for better contrast on dark background
  // py-16: Adds 64px padding on top and bottom for spacing
  // border-t: Adds top border for visual separation
  // border-lightNavy/30: Sets border color with 30% opacity for subtle effect
  return (
    <div className='w-full bg-[#030712] text-gray-300 py-16 border-t border-lightNavy/30'>
      
      {/* Content container - centered with maximum width and padding */}
      {/* max-w-[1100px]: Limits maximum width to match other sections */}
      {/* mx-auto: Centers horizontally by adding equal margins */}
      {/* flex flex-col: Creates vertical column layout */}
      {/* items-center: Centers children horizontally */}
      {/* justify-center: Centers children vertically */}
      {/* px-4: Adds 16px horizontal padding on both sides */}
      <div className='max-w-[1100px] mx-auto flex flex-col items-center justify-center px-4'>
        
        {/* Social media links container - horizontal row with bottom margin */}
        {/* flex: Creates horizontal row layout for icons */}
        {/* mb-10: Adds 40px margin below to separate from copyright text */}
        <div className='flex mb-10'>
          
          {/* GitHub link - gray icon with teal hover effect and scaling animation */}
          {/* text-gray-400: Sets medium gray color for inactive state */}
          {/* hover:text-secondary: Changes to teal color on hover for interactivity */}
          {/* hover:scale-110: Slightly enlarges icon on hover (grows to 110%) */}
          {/* transition-all duration-300: Creates smooth animation taking 300ms */}
          {/* mx-[4px]: Adds 4px margin on left and right sides for minimal spacing */}
          <a href="https://github.com/nischalsb" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-secondary hover:scale-110 transition-all duration-300 mx-[4px]'>
            {/* GitHub icon with glow effect on hover */}
            {/* size={40}: Sets icon size to 40 pixels for better visibility */}
            {/* hover:drop-shadow: Adds teal glow around icon on hover */}
            <FaGithub size={40} className='hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]' />
          </a>
          
          {/* LinkedIn link with matching styling */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-secondary hover:scale-110 transition-all duration-300 mx-[4px]'>
            {/* LinkedIn icon with glow effect on hover */}
            {/* size={40}: Sets icon size to 40 pixels for better visibility */}
            {/* hover:drop-shadow: Adds teal glow around icon on hover */}
            <FaLinkedin size={40} className='hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]' />
          </a>
          
          {/* Twitter link with matching styling */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-secondary hover:scale-110 transition-all duration-300 mx-[4px]'>
            {/* Twitter icon with glow effect on hover */}
            {/* size={40}: Sets icon size to 40 pixels for better visibility */}
            {/* hover:drop-shadow: Adds teal glow around icon on hover */}
            <FaTwitter size={40} className='hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]' />
          </a>
        </div>
        
        {/* Copyright text container - centered with reduced line height */}
        {/* text-center: Horizontally centers the text */}
        {/* leading-[1rem]: Custom line height of exactly 1rem (16px) for tighter spacing */}
        <div className="text-center leading-[1rem]">
          
          {/* First copyright line - designer attribution */}
          {/* text-gray-500: Medium-dark gray for subtle appearance */}
          {/* text-sm: Small font size (14px) */}
          {/* mb-[1px]: Custom 1px bottom margin for minimal spacing */}
          {/* pb-[0px]: Explicit zero padding at bottom to prevent browser defaults */}
          <p className='text-gray-500 text-sm mb-[1px] pb-[0px]'>
            Designed & Built by Nischal S. Bista
          </p>
          
          {/* Second copyright line - year and rights */}
          {/* text-gray-500: Matching color for consistency */}
          {/* text-sm: Matching size for consistency */}
          {/* mt-[1px]: Custom 1px top margin for minimal spacing */}
          {/* pt-[0px]: Explicit zero padding at top to prevent browser defaults */}
          <p className='text-gray-500 text-sm mt-[1px] pt-[0px]'>
            ©2025 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;