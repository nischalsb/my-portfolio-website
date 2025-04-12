import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: 'Sep 2024 - Present',
      title: 'Research Scholar Under Professor Mayra I. Oyola Merced',
      company: 'University of Wisconsin-Madison',
      location: 'Madison, WI',
      description: [
        'Conducted research on Clear Air Turbulence (CAT) forecasting using AI, analyzing NASA\'s MERRA-2 reanalysis and topographical datasets to address high-altitude turbulence challenges in Nepal.',
        'Developed and optimized ML models, including Random Forest and SVM, improving CAT prediction accuracy through feature engineering and data preprocessing.',
        'Utilized Python (Cartopy, Pandas, Scikit-learn) and Jupyter Notebook to create dynamic visualizations of CAT-prone zones, enabling intuitive interpretation of risk areas and enhancing aviation safety.'
      ],
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Cartopy', 'Pandas', 'Scikit-learn']
    },
    {
      id: 2,
      period: 'June 2024 - Aug 2024',
      title: 'Software Development Intern',
      company: 'Farm 2 Facts',
      location: 'Madison, WI',
      description: [
        'Designed and implemented dynamic front-end components using Vue.js, integrated them with a RESTful API and SQL database, which improved data management efficiency and reduced retrieval times by 30%.',
        'Developed multilingual frontend instruments with i18next framework, introducing dynamic language toggles that significantly advanced internationalization capabilities.'
      ],
      skills: ['Vue.js', 'RESTful API', 'SQL', 'i18next', 'Frontend Development']
    },
    {
      id: 3,
      period: 'May 2024 - September 2024',
      title: 'Engineering Team',
      company: 'IssakaAI Technologies',
      location: 'Remote',
      description: [
        'Developed a full-stack React Native mobile application with multi-language support, leveraging Firebase for robust authentication (OAuth, email/password sign-up, and token-based sign-in).',
        'Developed Python scripts to automate the translation process by integrating with Smartling API, enabling support for over 15 languages, including several African endangered languages.',
        'Diagnosed and debugged critical bugs within the Base mobile app, leading to enhanced functionality and improved user experience.'
      ],
      skills: ['React Native', 'Firebase', 'Python', 'Smartling API', 'Mobile Development']
    },
    {
      id: 4,
      period: 'April 2023 - May 2024',
      title: 'Full Stack Developer',
      company: 'Educate Nepal Initiative',
      location: 'Kathmandu, Nepal',
      description: [
        'Engineered the redesign and optimization of the NGO\'s website, improving UI/UX and ensuring mobile responsiveness, resulting in a 20% increase in user engagement and improved cross-browser compatibility.',
        'Integrated SEO best practices and analytics tracking (Google Analytics, schema markup) to drive data-driven improvements and boost search engine rankings, enhancing visibility by 30%.',
        'Collaborated with the NGO team to update content and align the website with ongoing campaigns, effectively communicating the organization\'s mission and increasing donations.'
      ],
      skills: ['UI/UX Design', 'SEO', 'Google Analytics', 'Web Development', 'Content Management']
    }
  ];

  return (
    <div name='experience' className='w-full min-h-screen py-16 bg-primary text-gray-300'>
      <div className='max-w-[1200px] mx-auto p-4'>
        {/* Section Title */}
        <div className='w-full text-center mb-16'>
          <p className='text-secondary font-bold drop-shadow-[0_0_8px_rgba(100,255,218,0.3)]' style={{ fontSize: '2.5rem', lineHeight: '1.3' }}>
            Experience
          </p>
        </div>

        {/* Experience Timeline */}
        <div className='max-w-[1000px] mx-auto'>
          {experiences.map((exp) => (
            <div key={exp.id} className='mb-16 grid grid-cols-[200px_1fr] gap-6'>
              {/* Left Column - Time Period and Location */}
              <div className='text-left'>
                <p className='text-gray-400 text-lg mb-1'>{exp.period}</p>
                <p className='text-gray-500 text-sm'>{exp.location}</p>
              </div>
              
              {/* Right Column - Experience Details */}
              <div>
                <h3 className='text-xl font-semibold text-white'>{exp.title}</h3>
                <h4 className='text-lg text-secondary mb-4'>{exp.company}</h4>
                
                {/* Description bullets */}
                <ul className='list-disc pl-5 mb-4 space-y-2'>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className='text-gray-300'>{item}</li>
                  ))}
                </ul>
                
                {/* Skills */}
                <div className='flex flex-wrap gap-2 mt-3'>
                  {exp.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className='px-3 py-1 text-sm bg-[#1A2330] text-purple-400 rounded-md'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;