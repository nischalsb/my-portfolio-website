# My Portfolio Website

A modern, responsive personal portfolio website built with React and Tailwind CSS, with a backend server for storing contact form submissions.

## 🌟 Features

- Responsive design that works on all devices
- Clean, modern UI with smooth animations
- Interactive particle background animation
- Typing animation effect on the homepage
- Skills section with attractive hoverable icons
- Projects showcase with preview images
- Contact form with validation and backend storage
- Dark theme optimized for readability

## 🚀 Technologies Used

- **React**: Frontend library for building the user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Icons**: For including various tech stack icons
- **React Scroll**: For smooth scrolling navigation
- **Vite**: Next generation frontend tooling
- **Express**: Backend server framework
- **SQLite**: Lightweight database for storing contact form submissions


## 📋 Project Structure

- `src/components/`: Contains all React components
  - `Navbar.jsx`: Navigation bar component
  - `Hero.jsx`: Landing section with typing animation
  - `About.jsx`: About me section
  - `Skills.jsx`: Skills and technologies section
  - `Projects.jsx`: Project showcase section
  - `Contact.jsx`: Contact form
  - `Footer.jsx`: Website footer
  - `BackgroundAnimation.jsx`: Canvas-based particle animation

- `src/assets/`: Contains images and SVG files
- `public/`: Static files
- `tailwind.config.js`: Tailwind CSS configuration
- `server/`: Backend server for handling contact form
  - `server.js`: Express server setup
  - `db/`: SQLite database for storing submissions

## 🔧 Setup and Installation

### Frontend
1. Install frontend dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

### Backend
1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install backend dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```
   
   For development with auto-reload:
   ```
   npm run dev
   ```

The backend server will automatically find an available port (starting from 5000) and communicate it to the frontend.

## 🎨 Customization

Feel free to customize this portfolio to make it your own:

- Update the color scheme in `tailwind.config.js`
- Add your own projects in the `Projects.jsx` component
- Modify the skills list in `Skills.jsx`
- Update your personal information in `About.jsx` and `Hero.jsx`
- Customize the contact form in `Contact.jsx`

## 📱 Responsive Design

This portfolio is designed to look great on all devices:
- Mobile phones
- Tablets
- Laptops
- Desktop computers

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](/LICENSE.md) file for details.


## 👤 Author

Nischal S. Bista

---

Made with ❤️ and React
