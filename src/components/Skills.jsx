import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaJava,
  FaPython
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-800" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-600" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500" }
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
        { name: "Python", icon: <FaPython />, color: "text-blue-500" },
        { name: "Java", icon: <FaJava />, color: "text-red-600" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700" },
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" }
      ]
    }
  ];

  return (
    <section name="skills" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200 border border-gray-100"
                  >
                    <div className={`text-3xl mb-2 ${skill.color} flex justify-center`}>
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
