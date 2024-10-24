// server/routes/authRoutes.js
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';  // Add .js extension for ES module
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'User registration failed.' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed.' });
  }
});

export default router;
