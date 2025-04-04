import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Social Media App',
      image: 'https://via.placeholder.com/500x300',
      demo: '/',
      code: '/',
      delay: '100'
    },
    {
      name: 'Messaging App',
      image: 'https://via.placeholder.com/500x300',
      demo: '/',
      code: '/',
      delay: '300'
    },
    {
      name: 'Pixel Sketch App',
      image: 'https://via.placeholder.com/500x300',
      demo: '/',
      code: '/',
      delay: '500'
    },
    {
      name: 'Task Management App',
      image: 'https://via.placeholder.com/500x300',
      demo: '/',
      code: '/',
      delay: '700'
    }
  ];

  return (
    <div name='projects' className='w-full min-h-screen py-28 text-gray-300 bg-primary'>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
        <div className='pb-12 animate-slideIn text-center'>
          
          <p className='py-8 text-2xl text-slate max-w-[800px] mx-auto mt-4 leading-relaxed'>
            Check out some of my recent projects
          </p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-14 pt-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url('${project.image}')` }}
              className='shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] group container rounded-lg flex justify-center items-center mx-auto content-div transition-all duration-500 transform hover:scale-105 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.4)] animate-fadeIn h-[320px]'
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[rgba(5,10,21,0.8)] to-[rgba(5,10,21,0.9)] w-full h-full flex flex-col justify-center items-center rounded-lg'>
                <span className='text-4xl font-bold text-white tracking-wider mb-6 px-4 text-center'>
                  {project.name}
                </span>
                <div className='pt-8 text-center space-x-6'>
                  <a href={project.demo} target='_blank' rel="noreferrer">
                    <button className='text-center rounded-lg px-8 py-4 m-2 bg-[#0F172A] text-secondary font-bold text-xl border border-secondary hover:bg-secondary hover:text-[#0F172A] transition-all duration-300'>
                      Demo
                    </button>
                  </a>
                  <a href={project.code} target='_blank' rel="noreferrer">
                    <button className='text-center rounded-lg px-8 py-4 m-2 bg-[#0F172A] text-secondary font-bold text-xl border border-secondary hover:bg-secondary hover:text-[#0F172A] transition-all duration-300'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 