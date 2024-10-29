import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ContactForm from './Contactform';
import searchDogs from './API';
import logo from './assets/logo.png';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [results, setResults] = useState([]); // State to store API data
  const [zipCode, setZipCode] = useState(''); // State to store user input for zip code
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Function to fetch dogs from the API
  const getDogsFromAdoptionApi = async (zip) => {
    try {
      setIsLoading(true); // Show loading state
      const { data } = await searchDogs(zip);
      setResults(data.pets);
    } catch (error) {
      console.error('Error fetching dogs:', error);
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  // Handle the form submission to search by zip code
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form refresh
    if (zipCode) {
      getDogsFromAdoptionApi(zipCode); // Call API with user input zip code
    }
  };

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  const handleRegister = () => alert('Register functionality coming soon!');

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
                  <button onClick={handleLogin} className="auth-button login-button">Login</button>
                  <button onClick={handleRegister} className="auth-button login-button">Register</button>
                </>
              ) : (
                <button onClick={handleLogout} className="auth-button logout-button">Logout</button>
              )}
            </div>
          </div>
        </header>

        <div className="search-bar-container">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>

        <Routes>
          {/* Home route: Dynamically display dogs from API */}
          <Route
            path="/"
            element={
              <div className="cards-container">
                {isLoading ? (
                  <p>Loading dogs...</p>
                ) : results.length > 0 ? (
                  results.map((dog) => (
                    <div key={dog.pet_id} className="card">
                      <img
                        src={dog.large_results_photo_url}
                        alt={dog.pet_name}
                        className="dog-image"
                      />
                      <h3>{dog.pet_name}</h3>
                      <p><strong>Breed:</strong> {dog.primary_breed}</p>
                      <p><strong>Location:</strong> {dog.addr_city}, {dog.addr_state_code}</p>
                      <Link to={`/contact/${dog.pet_name}`} className="adopt-button">
                        <button>Adopt Me</button>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>No dogs found. Try another zip code!</p>
                )}
              </div>
            }
          />

          {/* Contact form route */}
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
