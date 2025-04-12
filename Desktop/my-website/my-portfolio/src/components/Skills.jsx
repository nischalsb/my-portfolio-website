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
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background-color: #0F172A;
        margin: 10px auto;
        padding: 18px;
        transition: all 0.3s ease;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      }
      
      .tech-icon:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div name='skills' className='w-full h-[50vh] flex flex-col justify-center items-center bg-primary text-gray-300'>
      <div className='w-full max-w-[80%]'>
        <div className='text-center mb-[100px]'>
          <p className='text-secondary font-bold drop-shadow-[0_0_8px_rgba(100,255,218,0.3)]' style={{ fontSize: '2.5rem', lineHeight: '1.3' }}>
            Technologies
          </p>
        </div>
        
        <div className='relative w-full overflow-hidden'>
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
