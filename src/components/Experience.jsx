import React from 'react';

const Experience = () => {
  // Experience data array with details for each position
  const experiences = [
    {
      id: 1,
      period: 'Academic Year 2024 - 2025', // Timeframe of the experience
      title: 'Undergraduate Research Scholar Under Professor Mayra I. Oyola Merced', // Job title
      company: 'University of Wisconsin-Madison', // Company/organization name
      description: [
        'Conducted research on Clear Air Turbulence (CAT) forecasting using AI, analyzing NASA\'s MERRA-2 reanalysis and topographical datasets to address high-altitude turbulence challenges in Nepal.',
        'Developed and optimized ML models, including Random Forest and SVM, improving CAT prediction accuracy through feature engineering and data preprocessing.',
        'Utilized Python (Cartopy, Pandas, Scikit-learn) and Jupyter Notebook to create dynamic visualizations of CAT-prone zones, enabling intuitive interpretation of risk areas and enhancing aviation safety.'
      ],
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Cartopy', 'Pandas', 'Scikit-learn'] // Skills used in this position
    },
    {
      id: 2,
      period: 'Summer 2024',
      title: 'Software Development Intern',
      company: 'Farm 2 Facts',
      description: [
        'Designed and implemented dynamic front-end components using Vue.js, integrated them with a RESTful API and SQL database, which improved data management efficiency and reduced retrieval times by 30%.',
        'Developed multilingual frontend instruments with i18next framework, introducing dynamic language toggles that significantly advanced internationalization capabilities.'
      ],
      skills: ['Vue.js', 'RESTful API', 'SQL', 'i18next', 'Frontend Development']
    },
    {
      id: 3,
      period: 'Summer 2024',
      title: 'Engineering Team',
      company: 'IssakaAI Technologies',
      description: [
        'Developed a full-stack React Native mobile application with multi-language support, leveraging Firebase for robust authentication (OAuth, email/password sign-up, and token-based sign-in).',
        'Developed Python scripts to automate the translation process by integrating with Smartling API, enabling support for over 15 languages, including several African endangered languages.',
        'Diagnosed and debugged critical bugs within the Base mobile app, leading to enhanced functionality and improved user experience.'
      ],
      skills: ['React Native', 'Firebase', 'Python', 'Smartling API', 'Mobile Development']
    },
    {
      id: 4,
      period: '2022- Present',
      title: 'Full Stack Developer',
      company: 'Educate Nepal Initiative',
      description: [
        'Engineered the redesign and optimization of the NGO\'s website, improving UI/UX and ensuring mobile responsiveness, resulting in a 20% increase in user engagement and improved cross-browser compatibility.',
        'Integrated SEO best practices and analytics tracking (Google Analytics, schema markup) to drive data-driven improvements and boost search engine rankings, enhancing visibility by 30%.',
        'Collaborated with the NGO team to update content and align the website with ongoing campaigns, effectively communicating the organization\'s mission and increasing donations.'
      ],
      skills: ['UI/UX Design', 'SEO', 'Google Analytics', 'Web Development', 'Content Management']
    }
  ];

  return (
    // Main container with responsive padding
    <div name='experience' className='w-full min-h-screen py-8 sm:py-12 lg:py-16 bg-primary text-gray-300'>
      {/* Content container with responsive margins and padding */}
      <div className='max-w-[1200px] mx-auto p-4 sm:p-6 lg:p-8 pt-16 sm:pt-20 lg:pt-[120px]'>
        {/* Section Title Container with responsive spacing */}
        <div className='w-full text-center mb-8 sm:mb-12 lg:mb-[50px]'>
          {/* Section title with responsive font sizing */}
          <p className='text-secondary font-bold drop-shadow-[0_0_8px_rgba(100,255,218,0.3)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight'>
            Experience
          </p>
        </div>

        {/* Experience Timeline Container */}
        <div className='max-w-[1000px] mx-auto'>
          {/* Map through each experience to create entries */}
          {experiences.map((exp, index) => (
            <div key={exp.id}>
              {/* Single experience container with responsive spacing */}
              <div className='mb-6 sm:mb-8'>
                {/* Responsive grid layout - stacked on mobile, side-by-side on larger screens */}
                <div className='grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8 lg:gap-16'>
                  {/* Period/timeframe - full width on mobile */}
                  <p className='text-gray-400 text-base sm:text-lg lg:text-xl mb-2 md:mb-0'>{exp.period}</p>
                  
                  {/* Content section */}
                  <div>
                    {/* Title and company container */}
                    <div className="space-y-1 mb-3 sm:mb-4">
                      {/* Job title with responsive sizing */}
                      <p className='text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight'>{exp.title}</p>
                      {/* Company name */}
                      <p className='text-base sm:text-lg lg:text-xl text-secondary font-normal italic'>{exp.company}</p>
                    </div>
                    
                    {/* Description with responsive text size */}
                    <p className='text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed'>{exp.description[0]}</p>
                    
                    {/* Skills container with responsive spacing */}
                    <div className='mt-4 sm:mt-6 lg:mt-8'>
                      {/* Skills with responsive spacing and layout */}
                      {exp.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className='inline-block px-3 sm:px-4 py-2 text-xs sm:text-sm text-purple-400 rounded-md mr-2 sm:mr-4 lg:mr-8 mb-2 sm:mb-3 lg:mb-5 font-medium'
                          style={{ 
                            textShadow: '0 0 8px rgba(192, 132, 252, 0.7)'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Responsive divider line between experiences */}
              {index < experiences.length - 1 && (
                <>
                  <div className="h-[10px]"></div>
                  <hr className='border-gray-700 border-t-[1px] mx-4 sm:mx-8 lg:mx-16' />
                  <div className="h-[10px]"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;