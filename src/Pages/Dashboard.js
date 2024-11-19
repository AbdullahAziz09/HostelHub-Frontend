// src/pages/Dashboard.js
import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function Dashboard() {
  const location = useLocation();
  const { name } = location.state || { name: 'User' };
  const navigate = useNavigate();

  // Check session expiration
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const expirationTime = 1200 * 1000; // 120 seconds
      const timer = setTimeout(() => {
        toast.error('Session expired. Logging out...'); // Show toast notification
        localStorage.removeItem('token'); // Clear token
        setTimeout(() => {
          navigate('/login'); // Redirect to login after notification
        }, 5000); // Wait for 5 seconds before redirecting
      }, expirationTime);

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gray-100">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} /> {/* Toast Container */}
      <Sidebar />
      <div className="ml-64 p-10 flex-1">
        <h2 className="text-gray-800 text-2xl mb-5">Hello, {name}!</h2>
        <p className="text-lg text-gray-600">Welcome to your dashboard.</p>
        <div className="flex gap-5 flex-wrap mt-7">
          <Link to="/profile" className={cardClasses}>
            <h3>Complete Profile</h3>
          </Link>
          <Link to="/payment-plans" className={cardClasses}>
            <h3>Payment Plans</h3>
          </Link>
          <Link to="/manage-properties" className={cardClasses}>
            <h3>Manage Properties</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Tailwind CSS classes for the cards
const cardClasses = "bg-white rounded-lg p-8 text-center w-56 text-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer text-lg no-underline";

export default Dashboard;
