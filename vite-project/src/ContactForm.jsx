import { useParams, Link } from 'react-router-dom';
import './App.css'; // Optional: Reuse styles if needed

function ContactForm() {
  const { name } = useParams(); // Get the dog's name from the route parameters

  return (
    <div className="contact-form-container">
      <h2>Adopt {name}</h2>

      <form>
        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        {/* Tell Me About Yourself */}
        <div className="form-group">
          <label htmlFor="about">Tell me about yourself:</label>
          <textarea
            id="about"
            name="about"
            rows="5"
            placeholder="Tell us why you'd be a great fit for adopting this dog..."
            required
          ></textarea>
        </div>

        {/* Checkboxes */}
        <div className="form-group">
          <label>Additional Questions:</label>

          <div className="checkbox-group">
            <input type="checkbox" id="fencedYard" name="fencedYard" />
            <label htmlFor="fencedYard">Do you have a fenced-in yard?</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="children" name="children" />
            <label htmlFor="children">Do you have any children?</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="otherPets" name="otherPets" />
            <label htmlFor="otherPets">Do you have any other pets?</label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      {/* Back to Home Button */}
      <Link to="/">
        <button className="back-button">Back to Home</button>
      </Link>
    </div>
  );
}

export default ContactForm;

