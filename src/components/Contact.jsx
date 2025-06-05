import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  // State to manage form input values
  // Initialize with empty fields that match input field names
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for form submission status and messages
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  // State to store the server port
  const [serverPort, setServerPort] = useState(5000);
  const [portChecked, setPortChecked] = useState(false);

  // Effect to fetch the server port when component mounts
  useEffect(() => {
    const checkServerPort = async () => {
      try {
        // Try to fetch port.txt from the server directory
        const response = await fetch('/server/port.txt');
        if (response.ok) {
          const port = await response.text();
          setServerPort(parseInt(port.trim(), 10));
          console.log(`Using server port from file: ${port}`);
        } else {
          console.log('Port file not found, trying known ports...');
          // Try some common ports in sequence
          const portsToTry = [5000, 5001, 5002, 5003, 5004, 5005];
          
          for (const port of portsToTry) {
            try {
              // Try to ping the server on this port
              const testResponse = await fetch(`http://localhost:${port}/api/messages`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
              });
              
              if (testResponse.ok) {
                setServerPort(port);
                console.log(`Found working server on port ${port}`);
                break;
              }
            } catch (err) {
              // This port didn't work, continue to the next one
              console.log(`Port ${port} not responding`);
            }
          }
        }
      } catch (error) {
        console.error('Error finding server port:', error);
      } finally {
        setPortChecked(true);
      }
    };

    checkServerPort();
  }, []);

  // Handler for input field changes
  // Updates the corresponding property in formData state
  const handleChange = (e) => {
    // Destructure name and value from the input field that triggered the event
    const { name, value } = e.target;
    // Update state using functional form to safely reference previous state
    setFormData(prevState => ({
      ...prevState,  // Keep all existing values
      [name]: value  // Update only the changed field (using computed property name)
    }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault();

    // Form validation logic
    // Check if required fields (name, email, message) are filled
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please fill all required fields.'
      });
      return; // Exit the function if validation fails
    }
    
    // Set loading state
    setSubmitStatus({
      loading: true,
      success: false,
      error: false,
      message: 'Sending message...'
    });
    
    try {
      // Send data to the backend API using the detected port
      const response = await fetch(`http://localhost:${serverPort}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      // Success state
      setSubmitStatus({
        loading: false,
        success: true,
        error: false,
        message: data.message
      });
      
      // Reset form fields after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide the success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prevState => ({
          ...prevState,
          success: false,
          message: ''
        }));
      }, 5000);
      
    } catch (error) {
      // Error state
      setSubmitStatus({
        loading: false,
        success: false,
        error: true,
        message: error.message || 'Something went wrong. Please try again.'
      });
      
      // Hide the error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(prevState => ({
          ...prevState,
          error: false,
          message: ''
        }));
      }, 5000);
    }
  };

  return (
    // Main container with responsive styling
    <div name="contact" className="w-full min-h-screen bg-gradient-to-r from-blue-500 to-blue-300 flex justify-center items-center p-4 sm:p-6 lg:p-8">
      {/* Form container with responsive width and spacing */}
      <div className='w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] text-center mb-8 sm:mb-12 lg:mb-[50px]'>
        {/* Form title with responsive font sizing */}
        <p className='text-secondary drop-shadow-[0_0_8px_rgba(100,255,218,0.3)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-8'>
          Let's get in touch!
        </p>
        
        {/* Status messages with responsive text sizing */}
        {submitStatus.success && (
          <p className="text-green-600 text-center font-medium mt-2 mb-4 text-sm sm:text-base">
            {submitStatus.message}
          </p>
        )}
        
        {submitStatus.error && (
          <p className="text-red-600 text-center font-medium mt-2 mb-4 text-sm sm:text-base">
            {submitStatus.message}
          </p>
        )}
        
        {submitStatus.loading && (
          <p className="text-blue-600 text-center font-medium mt-2 mb-4 text-sm sm:text-base">
            {submitStatus.message}
          </p>
        )}
        
        {/* Form with responsive styling */}
        <form onSubmit={handleSubmit} className="centered-form space-y-4 sm:space-y-6">
          {/* Name input field with responsive styling */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="custom-textarea w-full text-sm sm:text-base"
            disabled={submitStatus.loading || !portChecked}
          />
          
          {/* Email input field */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="custom-textarea w-full text-sm sm:text-base"
            disabled={submitStatus.loading || !portChecked}
          />
          
          {/* Message textarea with responsive sizing */}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="custom-textarea resize-y w-full text-sm sm:text-base"
            rows="4"
            disabled={submitStatus.loading || !portChecked}
          />
          
          {/* Button container with responsive spacing */}
          <div className="relative mt-6 sm:mt-8 lg:mt-10 flex justify-center">
            {/* Submit button with responsive sizing */}
            <button 
              type="submit"
              className="button-primary inline-block hover:drop-shadow-[0_4px_12px_rgba(100,255,218,0.3)] transition-all duration-300 text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3"
              disabled={submitStatus.loading || !portChecked}
            >
              {submitStatus.loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;