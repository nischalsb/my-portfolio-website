import React from 'react';

const Hero = () => {
  return (
    <section name="home" className="min-h-screen bg-white flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            Hi, I'm{' '}
            <span className="text-blue-600">Nischal</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-light">
            I build AI/ML solutions & Full Stack applications
          </p>
          
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Computer Science student at UW-Madison passionate about turning ideas into reality through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto text-center"
            >
              Get In Touch
            </a>
            <a
              href="https://docs.google.com/document/d/1DyCck9B3-R5QmZcJAvYSMImtEKMYYrNf/edit?usp=sharing&ouid=108546953253371886677&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200 w-full sm:w-auto text-center"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 