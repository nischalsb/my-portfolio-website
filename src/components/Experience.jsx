import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: '2024 - 2025',
      title: 'Undergraduate Research Scholar',
      company: 'University of Wisconsin-Madison',
      description: 'Conducting research on Clear Air Turbulence (CAT) forecasting using AI, analyzing NASA\'s MERRA-2 reanalysis and topographical datasets. Developed ML models including Random Forest and SVM, improving CAT prediction accuracy through feature engineering.',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Cartopy', 'Pandas', 'Scikit-learn']
    },
    {
      id: 2,
      period: 'Summer 2024',
      title: 'Software Development Intern',
      company: 'Farm 2 Facts',
      description: 'Designed and implemented dynamic front-end components using Vue.js, integrated with RESTful API and SQL database, improving data management efficiency by 30%. Developed multilingual frontend with i18next framework.',
      skills: ['Vue.js', 'RESTful API', 'SQL', 'i18next', 'Frontend Development']
    },
    {
      id: 3,
      period: 'Summer 2024',
      title: 'Engineering Team Member',
      company: 'IssakaAI Technologies',
      description: 'Developed full-stack React Native mobile application with multi-language support, leveraging Firebase for authentication. Created Python scripts for translation automation using Smartling API, supporting 15+ languages.',
      skills: ['React Native', 'Firebase', 'Python', 'Smartling API', 'Mobile Development']
    },
    {
      id: 4,
      period: '2022 - Present',
      title: 'Full Stack Developer',
      company: 'Educate Nepal Initiative',
      description: 'Engineered website redesign improving UI/UX and mobile responsiveness, resulting in 20% increase in user engagement. Integrated SEO best practices and analytics tracking, enhancing visibility by 30%.',
      skills: ['UI/UX Design', 'SEO', 'Google Analytics', 'Web Development', 'Content Management']
    }
  ];

  return (
    <section name="experience" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            My journey in tech through internships, research, and real-world projects.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Period */}
                <div className="md:col-span-1">
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.period}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">
                        {exp.company}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;