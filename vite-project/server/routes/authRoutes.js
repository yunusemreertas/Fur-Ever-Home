import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// Middleware to verify the JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;  // Save user info in request
    next();
  });
};

// Define the protected route
router.get('/protected-route', authenticateToken, (req, res) => {
  res.json({
    message: 'This is a protected route',
    user: req.user  // Send user info back as part of response
  });
});

export default router;
