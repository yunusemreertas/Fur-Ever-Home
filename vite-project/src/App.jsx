import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import ContactForm from './Contactform';
import logo from './assets/logo.png';

const dogs = [
  { name: 'Buddy', breed: 'Golden Retriever', location: 'New York, NY' },
  { name: 'Max', breed: 'German Shepherd', location: 'Los Angeles, CA' },
  { name: 'Charlie', breed: 'Labrador Retriever', location: 'Chicago, IL' },
  { name: 'Luna', breed: 'Beagle', location: 'Houston, TX' },
  { name: 'Daisy', breed: 'Standard Poodle', location: 'Miami, FL' },
  { name: 'Rocky', breed: 'Siberian Husky', location: 'Denver, CO' },
  { name: 'Bella', breed: 'Boxer', location: 'Seattle, WA' },
  { name: 'Oscar', breed: 'Dachshund', location: 'Boston, MA' },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Add your login logic here
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add your logout logic here
  };

  const handleRegister = () => {
    // Add your registration logic here
  };

  return (
    <Router>
      <div className="app-container">
        <header className="banner">
          <div className="banner-content">
            <div className="left-section">
              <Link to="/" className="logo-link">
                <img src={logo} alt="Fur Ever Home Logo" className="logo" />
              </Link>
              <h1 className="banner-title">Fur Ever Home</h1>
            </div>
            <div className="auth-buttons">
              {!isLoggedIn ? (
                <>
                  <button
                    onClick={handleLogin}
                    className="auth-button login-button"
                  >
                    Login
                  </button>
                  <button
                    onClick={handleRegister}
                    className="auth-button login-button"
                  >
                    Register
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="auth-button logout-button"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </header>

        <Routes>
          {/* Route for the home page displaying dogs */} 
          <Route
            path="/"
            element={
              <div className="cards-container">
                {dogs.map((dog, index) => (
                  <div key={index} className="card">
                    <div className="image-placeholder">150 x 150</div>
                    <h3>{dog.name}</h3>
                    <p><strong>Breed:</strong> {dog.breed}</p>
                    <p><strong>Location:</strong> {dog.location}</p>
                    <Link to={`/contact/${dog.name}`} className="adopt-button">
                      <button>Adopt Me</button>
                    </Link>
                  </div>
                ))}
              </div>
            }
          />

          {/* Route for the contact form */}
          <Route path="/contact/:name" element={<ContactForm />} />
        </Routes>

        <footer className="footer">
          © 2024 Fur Ever Home. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;