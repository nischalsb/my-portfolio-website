import React from 'react';
// Import the profile image from assets folder
import profileImg from '../assets/profile.jpg'; 

const About = () => {
  return (
    // Main container - full width, min height of screen, dark background color, light gray text
    <div name='about' className='w-full min-h-screen bg-primary text-gray-300'>
      {/* Flex container to create the two-column layout */}
      <div className='w-full h-full flex'>
        {/* Left column for text - takes up 50% of width */}
        <div className='w-1/2 p-12 pl-[150px] flex items-center'>
          {/* Text content container with width limit and right margin for spacing from image */}
          {/* max-w-[600px]: Limits text width for readability */}
          {/* mr-[80px]: Adds 80px space between text and image */}
          <div className='max-w-[600px] mr-[10px]'>
            {/* First paragraph - justified text, 6px bottom margin, 1.1rem font size, 1.8 line height */}
            <p className="text-gray-300 text-justify mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Hey, I'm Nischal! I'm a sophomore at the University of Wisconsin–Madison, majoring in Computer Science and geeking out over all things tech.
            </p>
            {/* Second paragraph - same styling as first paragraph */}
            <p className="text-gray-300 text-justify mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              From building full-stack applications to experimenting with AI/ML, I love turning random ideas into real, working things.
              I'm all about clean code, clever design, and solving problems.
            </p>
            {/* Third paragraph - same styling as first two paragraphs */}
            <p className="text-gray-300 text-justify mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Outside of coding, you might catch me messing with side projects, browsing tech Reddit, or pretending to understand the latest AI papers.
            </p>
            
            {/* Resume Button container - 32px top margin (mt-8) */}
            <div className='mt-8'>
              {/* Resume link styling */}
              {/* button-primary: Custom button style defined in your CSS */}
              {/* hover:drop-shadow: Adds glow effect on hover */}
              {/* transition-all duration-300: Smooth transition for hover effects */}
              {/* text-lg: Larger text size */}
              {/* px-6 py-3: Horizontal (24px) and vertical (12px) padding */}
              <a
                href="https://docs.google.com/document/d/1DyCck9B3-R5QmZcJAvYSMImtEKMYYrNf/edit?usp=sharing&ouid=108546953253371886677&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
                className='button-primary inline-block hover:drop-shadow-[0_4px_12px_rgba(100,255,218,0.3)] transition-all duration-300 text-lg px-6 py-3'
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        
        {/* Right column for image - takes up 50% of width */}
        {/* pl-8: Adds 32px padding on the left side of the image container */}
        {/* flex items-center justify-start: Positions the image vertically centered */}
        <div className='w-1/2 h-full flex items-center justify-start pl-8'>
          {/* Inner container for image - allows for centering and sizing control */}
          {/* w-full h-full: Takes full width and height of parent container */}
          {/* flex items-center justify-center: Centers the image both horizontally and vertically */}
          <div className="w-full h-full flex items-center justify-center">
            {/* Image element */}
            {/* max-h-[75%]/max-w-[75%]: Limits the image size to 75% of container */}
            {/* object-contain: Ensures the image maintains its aspect ratio */}
            {/* transform: scale(0.85): Zooms out the image to 85% of its size */}
            <img 
              src={profileImg} 
              alt="Profile" 
              className="max-h-[75%] max-w-[75%] object-contain"
              style={{ transform: 'scale(0.70)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
