import './App.css';

const dogs = [
  { name: 'Buddy', breed: 'Golden Retriever', location: 'New York, NY', image: 'https://via.placeholder.com/150' },
  { name: 'Max', breed: 'German Shepherd', location: 'Los Angeles, CA', image: 'https://via.placeholder.com/150' },
  { name: 'Charlie', breed: 'Labrador Retriever', location: 'Chicago, IL', image: 'https://via.placeholder.com/150' },
  { name: 'Luna', breed: 'Beagle', location: 'Houston, TX', image: 'https://via.placeholder.com/150' },
  { name: 'Daisy', breed: 'Standard Poodle', location: 'Miami, FL', image: 'https://via.placeholder.com/150' },
  { name: 'Rocky', breed: 'Siberian Husky', location: 'Denver, CO', image: 'https://via.placeholder.com/150' },
  { name: 'Bella', breed: 'Boxer', location: 'Seattle, WA', image: 'https://via.placeholder.com/150' },
  { name: 'Oscar', breed: 'Dachshund', location: 'Boston, MA', image: 'https://via.placeholder.com/150' },
];

function App() {
  return (
    <div className="app-container">
      <h1>Adopt a Pet</h1>
      <div className="dogs-container">
        {dogs.map((dog, index) => (
          <div key={index} className="dog-card">
            <img src={dog.image} alt={`${dog.name}`} className="dog-image" />
            <h3>{dog.name}</h3>
            <p><strong>Breed:</strong> {dog.breed}</p>
            <p><strong>Location:</strong> {dog.location}</p>
            <button className="adopt-btn">Adopt Me</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
