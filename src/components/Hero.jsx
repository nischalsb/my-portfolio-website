import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "I do AI / ML / Full Stack.";
  const typingSpeed = 100; // milliseconds per character
  const resetDelay = 2000; // delay before restarting the typing effect

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setText('');
      }, resetDelay);
      return () => clearTimeout(resetTimeout);
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
    <div name='home' className='w-full h-screen bg-primary flex items-center justify-center pt-20 md:pt-0'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center'>
        <p
          className='text-secondary font-bold animate-fadeIn drop-shadow-[0_0_8px_rgba(100,255,218,0.3)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4'
        >
          Hello, I'm Nischal.
        </p>

        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-slate h-16 sm:h-20 md:h-24 mt-2 px-2'>
          {text}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-secondary drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]`}>|</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero; 