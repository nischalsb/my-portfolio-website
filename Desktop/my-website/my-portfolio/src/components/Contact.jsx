import React, { useState } from 'react'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showThanks, setShowThanks] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    // Here you would typically send the form data to your backend
    setShowThanks(true);
    setTimeout(() => setShowThanks(false), 3000);
    setFormState({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div name='contact' className='w-full min-h-screen py-28 bg-primary flex justify-center items-center p-4'>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col max-w-[800px] w-full animate-fadeIn mx-auto space-y-6'  // Added space-y-6 for vertical space
      >
        <div className='pb-12 text-center mb-12'>
          <p className='text-5xl sm:text-6xl font-bold inline border-b-4 border-secondary text-gray-300 drop-shadow-[0_0_2px_rgba(226,232,240,0.2)]'>Contact</p>
          <p className='text-gray-300 py-8 text-2xl max-w-[700px] mx-auto mt-10 leading-relaxed'>
            Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <input 
          className='bg-lightNavy/60 p-5 text-xl text-gray-100 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.2)]' 
          type="text" 
          placeholder='Name' 
          name='name' 
          value={formState.name}
          onChange={handleChange}
          required 
        />
        
        <input 
          className='bg-lightNavy/60 p-5 text-xl text-gray-100 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.2)]' 
          type="email" 
          placeholder='Email' 
          name='email' 
          value={formState.email}
          onChange={handleChange}
          required 
        />
        
        <textarea 
          className='bg-lightNavy/60 p-5 text-xl text-gray-100 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.2)]' 
          name="message" 
          rows="10" 
          placeholder='Message' 
          value={formState.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <div className="relative mt-16 flex justify-center">
          <button 
            type="submit"
            className='button-primary flex items-center px-10 py-5 text-xl hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-[0,4px,12px,rgba(100,255,218,0.4)]'
          >
            Submit
          </button>
          
          {showThanks && (
            <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
              <p className="text-secondary text-2xl font-bold drop-shadow-[0_0_8px,rgba(100,255,218,0.5)]">Thanks for your message!</p>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Contact;
