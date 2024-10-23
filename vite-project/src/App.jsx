import './App.css';

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
    <div className="app-container">
      <header className="banner">Fur Ever Home</header>

      <div className="cards-container">
        {dogs.map((dog, index) => (
          <div key={index} className="card">
            <div className="image-placeholder">150 x 150</div>
            <h3>{dog.name}</h3>
            <p><strong>Breed:</strong> {dog.breed}</p>
            <p><strong>Location:</strong> {dog.location}</p>
            <button className="adopt-button">Adopt Me</button>
          </div>
        ))}
      </div>

      <footer className="footer">
        © 2024 Fur Ever Home. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
