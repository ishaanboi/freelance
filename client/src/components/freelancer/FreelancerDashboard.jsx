import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FreelancerSidebar from './SideBar'; // Import the freelancer-specific sidebar

const FreelancerDashboard = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <FreelancerSidebar activePath={location.pathname} />
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* Renders nested routes here */}
      </main>
    </div>
  );
};

export default FreelancerDashboard;