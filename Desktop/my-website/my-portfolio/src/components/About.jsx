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
          <div className='sm:text-right mt-8'> {/* mt-8 to create space */}
            <p className='text-3xl sm:text-5xl font-bold text-lightestSlate drop-shadow-[0_0_2px_rgba(226,232,240,0.2)] leading-relaxed'>
              Hi. I'm Nischal, nice to meet you. Please take a look around.
            </p>
          </div>

          {/* Description Box */}
          <div className='bg-lightNavy/20 p-10 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm'>
            <p className='text-slate text-xl leading-relaxed mb-8'>
              Fully committed to the philosophy of life-long learning, I'm a full stack developer with a deep passion for JavaScript, React, and all things web development.
            </p>
            <p className='text-slate text-xl leading-relaxed'>
              The unique combination of creativity, logic, technology, and never running out of new things to discover, drives my excitement and passion for web development. When I'm not at my computer I like to spend my time reading, keeping fit, and playing guitar.
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
