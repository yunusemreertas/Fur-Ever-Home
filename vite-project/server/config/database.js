// server/config/database.js
const { Sequelize } = require('sequelize');

// Load environment variables from the .env file
require('dotenv').config(); 

// Connecting to PostgreSQL using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,         // The database name
  process.env.DB_USER,         // The database username
  process.env.DB_PASSWORD,     // The database password
  {
    host: process.env.DB_HOST, // The host (usually localhost for local dev)
    port: process.env.DB_PORT, // The port (5432 by default)
    dialect: 'postgres',       // We are using PostgreSQL
    logging: false,            // Disable logging SQL queries in the console
    define: {
      freezeTableName: true,   // Disable pluralization of table names
    },
  }
);

// Test the connection to the database
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
