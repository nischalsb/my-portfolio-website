import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "I do AI / ML / Full Stack.";
  const typingSpeed = 150; // milliseconds per character

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div name='home' className='w-full h-screen bg-primary flex items-center justify-center'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col items-center text-center'>
        <p
          className='text-secondary font-bold animate-fadeIn drop-shadow-[0_0_8px_rgba(100,255,218,0.3)] font-bold'
          style={{ fontSize: '3.5rem', lineHeight: '0.3' }}
        >
          Hello, I'm Nischal.
        </p>


        <h2 className='text-5xl sm:text-8xl font-bold text-slate h-24 mt-02'>
          {text}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-secondary drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]`}>|</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero; 