import React, { useState } from 'react';

const ContactForm = () => {
  // State to manage form input values
  // Initialize with empty fields that match input field names
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State to control the visibility of the thank you message
  // Initially set to false (hidden)
  const [showThanks, setShowThanks] = useState(false);

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
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault();

    // Form validation logic
    // Check if required fields (name, email, message) are filled
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill the required fields.');
      return; // Exit the function if validation fails
    }
    
    // Log form data to console (would be replaced with actual submission logic)
    console.log('Form submitted:', formData);
    
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show the thank you message
    setShowThanks(true);
    
    // Hide the thank you message after 5 seconds (5000ms)
    setTimeout(() => setShowThanks(false), 5000);
  };

  return (
    // Main container - full width, min screen height, gradient background
    // w-full: Takes full width of viewport
    // min-h-screen: Minimum height equal to viewport height
    // bg-gradient-to-r: Right-directed gradient 
    // from-blue-500 to-blue-300: Blue gradient color scheme
    // flex justify-center items-center: Centers content both horizontally and vertically
    // p-4: Adds padding (16px) on all sides
    <div name="contact" className="w-full min-h-screen bg-gradient-to-r from-blue-500 to-blue-300 flex justify-center items-center p-4" style={{ minHeight: '89vh' }}>
      {/* Form container - white background with rounded corners and shadow */}
      {/* bg-white: White background color */}
      {/* rounded-lg: Rounds the corners (large radius) */}
      {/* shadow-md: Adds medium drop shadow for depth */}
      {/* max-w-md: Sets maximum width */}
      {/* w-full: Takes full width up to the max-width */}
      {/* p-8: Adds padding (32px) on all sides */}
      <div className='w-full text-center mb-[50px]'>
        {/* Form title with teal glow effect and custom sizing */}
        {/* text-secondary: Applies the teal/aqua brand color */}
        {/* drop-shadow-[0_0_8px_rgba(100,255,218,0.3)]: Creates subtle teal glow around text */}
        {/* fontSize: 2.5rem: Custom large font size (40px) for prominence */}
        {/* lineHeight: 1.3: Slightly increased line height for better readability */}
        <p className='text-secondary drop-shadow-[0_0_8px_rgba(100,255,218,0.3)]' style={{ fontSize: '2.5rem', lineHeight: '1.3' }}>
          Let's get in touch!
        </p>
        
        {/* Conditional thank you message - shows only when showThanks is true */}
        {/* text-green-600: Green text color for success */}
        {/* text-center: Centers text horizontally */}
        {/* font-medium: Medium font weight for emphasis */}
        {showThanks && <p className="text-green-600 text-center font-medium">Thanks for your message. Will get back to you shortly!</p>}
        
        {/* Form element with submit handler */}
        {/* centered-form: Custom class for styling */}
        <form onSubmit={handleSubmit} className="centered-form">
          {/* Name input field */}
          {/* custom-textarea: Custom class for consistent styling */}
          {/* value and onChange: For controlled component functionality */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="custom-textarea"
          />
          <br></br>
          
          {/* Email input field */}
          {/* type="email": Enables email validation */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="custom-textarea"
          />
          <br></br>
          
          {/* Message textarea - scrollable multiline text input */}
          {/* custom-textarea: Consistent styling with other form fields */}
          {/* rows="5": Sets initial height to 5 lines of text */}
          {/* resize-y: Allows vertical resizing only */}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="custom-textarea resize-y"
            rows="5"
          />
          <br></br>
          
          {/* Button container with spacing and center alignment */}
          {/* relative: Sets positioning context */}
          {/* mt-10: Top margin (40px) */}
          {/* flex justify-center: Centers the button horizontally */}
          <div className="relative mt-10 flex justify-center">
            {/* Submit button with hover effects - matches resume button styling */}
            {/* button-primary: Custom primary button styling */}
            {/* inline-block: Displays as inline-block for proper spacing */}
            {/* hover:drop-shadow: Adds teal glow effect on hover (4px vertical offset, 12px blur) */}
            {/* transition-all duration-300: Smooth transition for hover effects taking 300ms */}
            {/* text-lg: Large text size (18px) */}
            {/* px-6 py-3: Padding of 24px horizontal, 12px vertical */}
            <button 
              type="submit"
              className="button-primary inline-block hover:drop-shadow-[0_4px_12px_rgba(100,255,218,0.3)] transition-all duration-300 text-lg px-6 py-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;