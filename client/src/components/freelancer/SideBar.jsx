import React from 'react';
import { Link } from 'react-router-dom';

const FreelancerSidebar = () => {
  const sidebarStyle = {
    width: '250px',
    backgroundColor: '#1a1a1a',
    color: 'white',
    height: '100vh',
    padding: '20px'
  };

  const linkStyle = {
    display: 'block',
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    fontWeight: '500',
    padding: '10px 15px',
    borderBottom: '1px solid #333'
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#28a745', // Green highlight for active link
    borderRadius: '5px'
  };

  return (
    <div style={sidebarStyle}>
      <h3 style={{ color: '#28a745' }}>MyFreelancer</h3>
      <nav>
        {/* Browse Projects */}
        <Link to="/freelancer/dashboard/browse-projects" style={activeLinkStyle}>
          <i className="fas fa-folder-open"></i> Browse Projects
        </Link>

        {/* My Bids */}
        <Link to="/freelancer/dashboard/my-bids" style={linkStyle}>
          <i className="fas fa-trophy"></i> My Bids
        </Link>

        {/* Profile */}
        <Link to="/freelancer/dashboard/profile" style={linkStyle}>
          <i className="fas fa-user"></i> Profile
        </Link>

        {/* Logout */}
        <Link to="/logout" style={{ ...linkStyle, marginTop: 'auto', color: '#dc3545' }}>
          <i className="fas fa-lock"></i> Logout
        </Link>
      </nav>
    </div>
  );
};

export default FreelancerSidebar;