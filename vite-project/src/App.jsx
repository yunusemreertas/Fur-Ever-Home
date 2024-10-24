import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactForm from './Contactform'; // this is the new contact form component

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
  return (
    <Router>
      <div className="app-container">
        <header className="banner">Fur Ever Home</header>

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
                    {/* Link to the contact form with the dog's name in the URL */}
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
