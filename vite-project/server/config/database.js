// Import Sequelize library, which helps to connect and interact with SQL databases
import { Sequelize } from 'sequelize';

// Import dotenv library to load environment variables from the .env file
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Create a new Sequelize instance, which connects to the PostgreSQL database
// We pass in the database name, user, password, and other connection details
const sequelize = new Sequelize(
  process.env.DB_NAME,        // Database name from .env file
  process.env.DB_USER,        // Database username from .env file
  process.env.DB_PASSWORD,    // Database password from .env file
  {
    host: process.env.DB_HOST, // Hostname for the database, usually 'localhost'
    port: process.env.DB_PORT || 5432, // Port for PostgreSQL, default is 5432
    dialect: 'postgres',       // Database type
    logging: false,            // Disable SQL logging in the console
  }
);

// Test the database connection to ensure everything is working correctly
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Export the sequelize instance so it can be used in other parts of the application
export default sequelize;
