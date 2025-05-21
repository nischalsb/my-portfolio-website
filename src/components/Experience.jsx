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
    // Main container - full width, min screen height, vertical padding, dark background, light gray text
    <div name='experience' className='w-full min-h-screen py-16 bg-primary text-gray-300'>
      {/* Content container - max width with auto margins and padding */}
      {/* max-w-[1200px]: Sets maximum width of content area */}
      {/* mx-auto: Centers the container horizontally */}
      {/* p-4: Adds 16px padding on all sides */}
      {/* pt-[120px]: Adds 120px padding at the top to push content down */}
      <div className='max-w-[1200px] mx-auto p-4 pt-[120px]'>
        {/* Section Title Container */}
        {/* mb-[50px]: Adds 50px space below the title */}
        <div className='w-full text-center mb-[50px]'>
          {/* Section title with teal color, bold weight, and subtle glow effect */}
          {/* text-secondary: Sets teal/cyan text color */}
          {/* font-bold: Makes text bold */}
          {/* drop-shadow: Adds subtle glow effect around text */}
          <p className='text-secondary font-bold drop-shadow-[0_0_8px_rgba(100,255,218,0.3)]' style={{ fontSize: '2.5rem', lineHeight: '1.3' }}>
            Experience
          </p>
        </div>

        {/* Experience Timeline Container - slightly narrower than the section container */}
        <div className='max-w-[1000px] mx-auto'>
          {/* Map through each experience to create entries */}
          {experiences.map((exp, index) => (
            <div key={exp.id}>
              {/* Single experience container - 32px bottom margin */}
              <div className='mb-8'>
                {/* Two-column grid layout for period and content */}
                {/* grid-cols-[150px_1fr]: First column fixed at 150px, second takes remaining space */}
                {/* gap-16: Adds 64px space between columns */}
                <div className='grid grid-cols-[150px_1fr] gap-16'>
                  {/* Left column - Period/timeframe */}
                  {/* text-gray-400: Light gray color */}
                  {/* text-xl: Larger text size */}
                  <p className='text-gray-400 text-xl'>{exp.period}</p>
                  
                  {/* Right column - All content (title, company, description, skills) */}
                  <div>
                    {/* Title and company container with no space between them */}
                    {/* space-y-0: Removes vertical space between children */}
                    {/* mb-[4px]: Adds 4px space below this group */}
                    <div className="space-y-0 mb-[4px]">
                      {/* Job title - large, bold, white text */}
                      <p className='text-2xl font-bold text-white'>{exp.title}</p>
                      {/* Company name - teal color, italic style */}
                      <p className='text-xl text-secondary font-normal italic'>{exp.company}</p>
                    </div>
                    
                    {/* Description paragraph - gray text with bottom margin */}
                    <p className='text-gray-300 mb-4'>{exp.description[0]}</p>
                    
                    {/* Skills container - 32px top margin */}
                    <div className='mt-8'>
                      {/* Map through skills to create pill-like tags */}
                      {exp.skills.map((skill, index) => (
                        <span 
                          key={index}
                          // Skill tag styling
                          // inline-block: Allows tags to flow in lines
                          // px-4 py-2: Horizontal and vertical padding
                          // text-sm: Smaller text size
                          // text-purple-400: Purple text color
                          // mr-8 mb-5: Spacing between skill tags
                          // font-medium: Slightly bolder than normal text
                          className='inline-block px-4 py-2 text-sm text-purple-400 rounded-md mr-8 mb-5 font-medium'
                          // Additional custom styling
                          // marginRight: Explicit right margin between skills
                          // textShadow: Creates a purple glow effect
                          style={{ 
                            marginRight: '32px',
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
              
              {/* Divider line between experiences (except after the last one) */}
              {index < experiences.length - 1 && (
                <>
                  {/* Space above divider - 10px height */}
                  <div className="h-[10px]"></div>
                  {/* Horizontal divider line */}
                  {/* border-gray-700: Dark gray color */}
                  {/* border-t-[1px]: 1px thick top border */}
                  {/* mx-16: 64px horizontal margin to make line shorter than content */}
                  <hr className='border-gray-700 border-t-[1px] mx-16' />
                  {/* Space below divider - 10px height */}
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