// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth';  // Ensure this matches your server URL

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);  // Store the JWT token in localStorage
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const register = async (username, password) => {
  return await axios.post(`${API_URL}/register`, { username, password });
};
