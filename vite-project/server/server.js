// server/server.js
import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';  // Add .js extension for ES module
import dotenv from 'dotenv';  // ES module import

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import authRoutes from './routes/authRoutes.js';  // Add .js extension for ES module
app.use('/api/auth', authRoutes);

// Sync Sequelize models and start the server
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to sync database:', err);
});
