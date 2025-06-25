import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const API_URL = 'http://localhost:5000/api/auth';

// Register
export const register = async (name, email, password, role) => {
  const response = await axios.post(`${API_URL}/register`, { name, email, password, role });

  const token = response.data.token;
  if (token) {
    const decoded = jwtDecode(token);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(decoded.user));
  }

  return response.data;
};

// Login
export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });

  const token = response.data.token;
  if (token) {
    const decoded = jwtDecode(token);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(decoded.user));
  }

  return response.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Get Current User
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// Save Profile Data
export const saveProfileData = async (data) => {
  const response = await axios.post(`${API_URL}/update-profile`, data);
  return response.data;
};
