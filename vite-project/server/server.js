// server/server.js
const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Sync Sequelize models and start the server
sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
});
