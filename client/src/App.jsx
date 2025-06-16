import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './components/profile/ProfilePage';
// Public Pages
import Login from './components/auth/login';
import Register from './components/auth/register';
import HomePage from './components/home/HomePage';

// Dashboard Layouts
import ClientDashboard from './components/client/ClientDashboard';
import FreelancerDashboard from './components/freelancer/FreelancerDashboard';
import AdminDashboard from './components/admin/AdminDashboard';

// Dashboard Content
import PostProject from './components/client/PostProject';
import ProjectList from './components/client/ProjectList';
import UserProfile from './components/client/UserProfile'; // For Client
import FreelancerProfile from './components/freelancer/FreelancerProfile'; // For Freelancer

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Client Dashboard */}
        <Route path="/client/dashboard" element={<ClientDashboard />}>
          <Route index element={<PostProject />} />
          <Route path="post-project" element={<PostProject />} />
          <Route path="projects" element={<ProjectList />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>

        {/* Freelancer Dashboard */}
        <Route path="/freelancer/dashboard" element={<FreelancerDashboard />}>
          <Route index element={<div>Browse Projects</div>} />
          <Route path="browse-projects" element={<div>Browse Projects</div>} />
          <Route path="my-bids" element={<div>My Bids</div>} />
          <Route path="profile" element={<FreelancerProfile />} /> {/* Add FreelancerProfile */}
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />}>
          <Route index element={<div>User Management</div>} />
          <Route path="users" element={<div>User Management</div>} />
          <Route path="projects" element={<div>Project Oversight</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;