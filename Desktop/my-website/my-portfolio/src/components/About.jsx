import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen py-24 bg-primary text-gray-300 flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center w-full max-w-[1100px] px-4'>
        {/* About Section Heading */}
        <div className='w-full grid grid-cols-2 gap-12 mb-16'>
          <div className='sm:text-right pb-8 pl-4'>
            {/* Optional: You can add something here later if needed */}
          </div>
          <div></div>
        </div>

        {/* Main Content Section */}
        <div className='w-full grid sm:grid-cols-2 gap-16'>
          {/* Add margin-top here to push the "Hi. I'm Nischal..." text down */}
          <div className='sm:text-right mt-10'>
            <p
              className='text-secondary font-bold animate-fadeIn drop-shadow-[0_0_8px_rgba(100,255,218,0.3)]'
              style={{ fontSize: '1.5rem', lineHeight: '1.3' }}
            >
              Hey, I’m Nischal! I’m a sophomore at the University of Wisconsin–Madison, majoring in Computer Science and geeking out over all things tech.
            </p>
            <p
              className='text-secondary font-bold animate-fadeIn drop-shadow-[0_0_8px_rgba(100,255,218,0.3)] mt-8'
              style={{ fontSize: '1.5rem', lineHeight: '1.3' }}
            >
              From building full-stack apps to experimenting with AI/ML, I love turning random ideas into real, working things (sometimes even useful ones).
              I’m all about clean code, clever design, and solving problems that make you go “wait, that actually works?”
            </p>
          </div>

          {/* RIGHT - Description Box */}
          <div className='bg-lightNavy/20 p-12 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-md'>
            <p
              className='text-slate animate-fadeIn'
              style={{ fontSize: '1.5rem', lineHeight: '1.6', fontWeight: 500 }}
            >
              Outside of coding, you might catch me messing with side projects, browsing tech Reddit, or pretending to understand the latest AI papers.
            </p>

            {/* Resume Button */}
            <div className='mt-12 flex justify-center'>
              <a
                href="https://docs.google.com/document/d/1DyCck9B3-R5QmZcJAvYSMImtEKMYYrNf/edit?usp=sharing&ouid=108546953253371886677&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
                className='button-primary inline-block hover:drop-shadow-[0_4px_12px_rgba(100,255,218,0.3)] transition-all duration-300 text-xl px-8 py-4'
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
