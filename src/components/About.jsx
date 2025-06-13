import React from 'react';
// Import the profile image from assets folder
import profileImg from '../assets/profile.jpg'; 

const About = () => {
  return (
    <section name="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative">
              <img
                src={profileImg}
                alt="Nischal S. Bista"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-64 h-64 sm:w-80 sm:h-80 bg-blue-600 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hey, I'm Nischal! I'm a sophomore at the University of Wisconsin–Madison, 
                majoring in Computer Science and passionate about all things tech.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                From building full-stack applications to experimenting with AI/ML, I love 
                turning random ideas into real, working solutions. I'm all about clean code, 
                clever design, and solving complex problems.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Outside of coding, you might catch me working on side projects, browsing 
                tech communities, or diving deep into the latest AI research papers.
              </p>

              <div className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-blue-600">2+</h3>
                    <p className="text-gray-600">Years Coding</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-blue-600">10+</h3>
                    <p className="text-gray-600">Projects Built</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://docs.google.com/document/d/1DyCck9B3-R5QmZcJAvYSMImtEKMYYrNf/edit?usp=sharing&ouid=108546953253371886677&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Download Resume
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
