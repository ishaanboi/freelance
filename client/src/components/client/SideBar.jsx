import React from 'react';
import { Link } from 'react-router-dom';

const ClientSidebar = ({ activePath }) => {
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
        {/* My Projects */}
        <Link to="/client/dashboard/projects" style={activePath.includes('/projects') ? activeLinkStyle : linkStyle}>
          <i className="fas fa-folder-open"></i> My Projects
        </Link>

        {/* Post a Project */}
        <Link to="/client/dashboard/post-project" style={activePath.includes('/post-project') ? activeLinkStyle : linkStyle}>
          <i className="fas fa-plus-circle"></i> Post a Project
        </Link>

        {/* Profile */}
        <Link to="/client/dashboard/profile" style={activePath.includes('/profile') ? activeLinkStyle : linkStyle}>
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

export default ClientSidebar;