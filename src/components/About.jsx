import React from 'react';
// Import the profile image from assets folder
import profileImg from '../assets/profile.jpg'; 

const About = () => {
  return (
    // Main container - full width, min height of screen, dark background color, light gray text
    <div name='about' className='w-full min-h-screen bg-primary text-gray-300'>
      {/* Flex container to create responsive layout */}
      <div className='w-full h-full flex flex-col lg:flex-row'>
        {/* Text content - full width on mobile, half width on large screens */}
        <div className='w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 lg:pl-[150px] flex items-center order-2 lg:order-1'>
          {/* Text content container with responsive spacing */}
          <div className='max-w-[600px] lg:mr-[10px] mx-auto lg:mx-0'>
            {/* First paragraph with responsive text size */}
            <p className="text-gray-300 text-justify mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl leading-relaxed">
              Hey, I'm Nischal! I'm a sophomore at the University of Wisconsin–Madison, majoring in Computer Science and geeking out over all things tech.
            </p>
            {/* Second paragraph */}
            <p className="text-gray-300 text-justify mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl leading-relaxed">
              From building full-stack applications to experimenting with AI/ML, I love turning random ideas into real, working things.
              I'm all about clean code, clever design, and solving problems.
            </p>
            {/* Third paragraph */}
            <p className="text-gray-300 text-justify mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl leading-relaxed">
              Outside of coding, you might catch me messing with side projects, browsing tech Reddit, or pretending to understand the latest AI papers.
            </p>
            
            {/* Resume Button container with responsive spacing */}
            <div className='mt-6 sm:mt-8 text-center lg:text-left'>
              <a
                href="https://docs.google.com/document/d/1DyCck9B3-R5QmZcJAvYSMImtEKMYYrNf/edit?usp=sharing&ouid=108546953253371886677&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
                className='button-primary inline-block hover:drop-shadow-[0_4px_12px_rgba(100,255,218,0.3)] transition-all duration-300 text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3'
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        
        {/* Image container - full width on mobile, half width on large screens */}
        <div className='w-full lg:w-1/2 h-64 sm:h-80 lg:h-full flex items-center justify-center p-6 sm:p-8 lg:pl-8 order-1 lg:order-2'>
          {/* Inner container for image with responsive sizing */}
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={profileImg} 
              alt="Profile" 
              className="max-h-full max-w-full object-contain rounded-lg"
              style={{ transform: 'scale(0.85)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
