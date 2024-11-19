// src/components/Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any user data (if applicable)
    // localStorage.removeItem('token');  // Example if you're using a token-based system

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={titleStyle}>HostelHub</h2>
      <ul style={menuStyle}>
        <li style={menuItemStyle}>
          <Link to="/profile" style={linkStyle}>Complete Profile</Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/payment-plans" style={linkStyle}>Payment Plans</Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/manage-properties" style={linkStyle}>Manage Properties</Link>
        </li>
      </ul>

      {/* Logout Button Positioned at the Bottom */}
      <div style={logoutContainerStyle}>
        <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
      </div>
    </div>
  );
};

// Sidebar Styles
const sidebarStyle = {
  width: '250px',
  backgroundColor: '#333',
  padding: '30px',
  height: '100vh',
  position: 'fixed',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Ensures space between menu and logout button
  boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
};

const titleStyle = {
  fontSize: '24px',
  textAlign: 'center',
  marginBottom: '40px',
  color: '#fff',
};

const menuStyle = {
  listStyleType: 'none',
  padding: 0,
};

const menuItemStyle = {
  marginBottom: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontSize: '18px',
  transition: 'color 0.3s',
  padding: '10px',
  display: 'block',
  borderRadius: '6px',
};

linkStyle[':hover'] = {
  color: '#ffa726',
  backgroundColor: '#444',
};

// Logout Container to position the button at the bottom
const logoutContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '20px',
  borderTop: '1px solid #444',
  marginTop: 'auto',
};

// Logout Button Styles
const logoutButtonStyle = {
  backgroundColor: '#e74c3c',
  border: 'none',
  color: '#fff',
  fontSize: '18px',
  padding: '10px 20px',
  borderRadius: '6px',
  cursor: 'pointer',
  width: '100%',
  transition: 'background-color 0.3s ease',
};

logoutButtonStyle[':hover'] = {
  backgroundColor: '#c0392b',
};

export default Sidebar;
