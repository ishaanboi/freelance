import React from 'react';
import { Outlet } from 'react-router-dom';
import FreelancerSidebar from './SideBar'; // Import the freelancer-specific sidebar

const FreelancerDashboard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <FreelancerSidebar />
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* Renders child routes here */}
      </main>
    </div>
  );
};

export default FreelancerDashboard;