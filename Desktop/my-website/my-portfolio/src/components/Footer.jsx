import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#030712] text-gray-300 py-16 border-t border-lightNavy/30'>
      <div className='max-w-[1100px] mx-auto flex flex-col items-center justify-center px-4'>
        <div className='flex mb-10'>
          <a href="https://github.com/nischalsb" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-secondary hover:scale-110 transition-all duration-300 mx-1'>
            <FaGithub size={42} className='hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]' />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-secondary hover:scale-110 transition-all duration-300 mx-1'>
            <FaLinkedin size={42} className='hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]' />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-secondary hover:scale-110 transition-all duration-300 mx-1'>
            <FaTwitter size={42} className='hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]' />
          </a>
        </div>
        <p className='text-center text-gray-500 text-lg'>
          Designed & Built by Nischal S. Bista
        </p>
        <p className='text-center text-gray-500 text-lg mt-2'>
          ©{new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer; 