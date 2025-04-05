import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaJava
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiPython,
  SiNextdotjs 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 size={30} />, delay: '100', name: 'HTML' },
    { icon: <FaReact size={30} />, delay: '200', name: 'React' },
    { icon: <SiJavascript size={30} />, delay: '300', name: 'JavaScript' },
    { icon: <FaCss3Alt size={30} />, delay: '400', name: 'CSS' },
    { icon: <FaGitAlt size={30} />, delay: '500', name: 'Git' },
    { icon: <FaJava size={30} />, delay: '600', name: 'Java' },
    { icon: <SiPython size={30} />, delay: '700', name: 'Python' },
    { icon: <SiNextdotjs size={30} />, delay: '800', name: 'Next.js' },
    { icon: <FaNodeJs size={30} />, delay: '900', name: 'Node.js' }
  ];

  return (
    <div name='skills' className='w-full min-h-screen py-24 bg-primary text-gray-300'>
      {/* Container */}
      <div className='max-w-[1100px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
        <div className='animate-slideIn text-center mb-16'>
          <p className='py-8 text-slate font -bold text-2xl max-w-[800px] text-center mt-4 leading-relaxed'>
            My Tech Stack
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-10 text-center py-8 mt-8'>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className='group mb-8'
            >
              <div 
                className='skill-icon mx-auto animate-float hover:animate-bounce hover:bg-gradient-to-b hover:from-secondary/20 hover:to-secondary/5 shadow-[0_8px_30px_rgba(0,0,0,0.2)] w-[60px] h-[60px]'
                style={{ animationDelay: `${skill.delay}ms` }}
              >
                {skill.icon}
              </div>
              <p className='mt-5 text-xl font-medium text-gray-300 group-hover:text-secondary transition-colors duration-300'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
