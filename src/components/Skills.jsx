import React, { useEffect } from 'react';
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
    { icon: <FaHtml5 size={50} />, name: 'HTML', color: '#E34F26' },
    { icon: <FaReact size={50} />, name: 'React', color: '#61DAFB' },
    { icon: <SiJavascript size={50} />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaCss3Alt size={50} />, name: 'CSS', color: '#1572B6' },
    { icon: <FaGitAlt size={50} />, name: 'Git', color: '#F05032' },
    { icon: <FaJava size={50} />, name: 'Java', color: '#007396' },
    { icon: <SiPython size={50} />, name: 'Python', color: '#3776AB' },
    { icon: <SiNextdotjs size={50} />, name: 'Next.js', color: '#000000' },
    { icon: <FaNodeJs size={50} />, name: 'Node.js', color: '#339933' }
  ];

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerHTML = `
      @keyframes scrollLogos {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      .tech-icon {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background-color: #0F172A;
        margin: 10px auto;
        padding: 15px;
        transition: all 0.3s ease;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      }
      
      @media (min-width: 768px) {
        .tech-icon {
          width: 100px;
          height: 100px;
          padding: 18px;
        }
      }
      
      .tech-icon:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
      }

      .mobile-skills-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        padding: 0 1rem;
      }

      @media (min-width: 640px) {
        .mobile-skills-grid {
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
      }

      @media (min-width: 768px) {
        .mobile-skills-grid {
          display: none;
        }
      }

      .desktop-skills-scroll {
        display: none;
      }

      @media (min-width: 768px) {
        .desktop-skills-scroll {
          display: block;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div name='skills' className='w-full min-h-screen flex flex-col justify-center items-center bg-primary text-gray-300 py-16 px-4'>
      <div className='w-full max-w-[90%]'>
        <div className='text-center mb-12 md:mb-[100px]'>
          <p className='text-secondary font-bold drop-shadow-[0_0_8px_rgba(100,255,218,0.3)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight'>
            Technologies
          </p>
        </div>
        
        {/* Mobile Grid Layout */}
        <div className='mobile-skills-grid md:hidden'>
          {skills.map((skill, index) => (
            <div 
              key={index}
              className='flex flex-col items-center justify-center'
            >
              <div 
                className='tech-icon'
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className='text-xs sm:text-sm text-gray-300 mt-2 font-medium'>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Desktop Scrolling Animation */}
        <div className='desktop-skills-scroll relative w-full overflow-hidden'>
          <div 
            className='flex w-[200%]' 
            style={{ 
              animation: 'scrollLogos 25s linear infinite',
            }}
          >
            <div className='flex w-1/2 justify-around mx-20 px-10'>
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className='flex flex-col items-center justify-center mx-8'
                  style={{ minWidth: '100px' }}
                >
                  <div 
                    className='tech-icon'
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                </div>
              ))}
            </div>
            <div className='flex w-1/2 justify-around mx-20 px-10'>
              {skills.map((skill, index) => (
                <div 
                  key={`copy-${index}`}
                  className='flex flex-col items-center justify-center mx-8'
                  style={{ minWidth: '100px' }}
                >
                  <div 
                    className='tech-icon'
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
