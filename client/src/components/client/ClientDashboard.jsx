import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ClientSidebar from './SideBar'; // Role-based sidebar for client

const ClientDashboard = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ClientSidebar activePath={location.pathname} />
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* Renders nested routes here */}
      </main>
    </div>
  );
};

export default ClientDashboard;