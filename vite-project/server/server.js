// server/server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();  // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Sync Sequelize models and start the server
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3001;  // Optionally use the PORT from .env
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to sync database:', err);
});
