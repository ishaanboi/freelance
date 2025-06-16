import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Register
export const register = async (name, email, password, role) => {
  const response = await axios.post(`${API_URL}/register`, { name, email, password, role });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Login
export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem('user');
};

// Get Current User
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};