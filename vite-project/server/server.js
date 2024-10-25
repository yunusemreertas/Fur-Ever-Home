import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';  // Import the auth routes

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Register the auth routes
app.use('/api/auth', authRoutes);  // Register the routes under /api/auth

// Sync Sequelize models and start the server
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to sync database:', err);
});
