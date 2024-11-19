import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!name || !email || !phone || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Invalid email format');
      return;
    }

    if (!validatePhone(phone)) {
      toast.error('Phone number must be 10 digits');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show a personalized toast notification
        toast.success(`${name}, Account created Successfully.`, {
          position: "top-center", // Notification will appear at the top center
        });
        
        // Redirect the user after a short delay
        setTimeout(() => {
          navigate('/login');
        }, 4000); // 4 seconds delay before redirect
      } else {
        toast.error(data.error || 'An error occurred during signup.');
      }
    } catch (error) {
      toast.error('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="wrapper" style={{ maxWidth: '430px', width: '100%', background: '#fff', padding: '34px', borderRadius: '6px', boxShadow: '0 5px 10px rgba(0,0,0,0.2)' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#333' }}>Signup for HostelHub</h2>
        <ToastContainer />
        <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
          <div className="input-box" style={{ height: '52px', margin: '18px 0' }}>
            <input
              type="text"
              placeholder="Enter your name"
              required
              style={{ height: '100%', width: '100%', outline: 'none', padding: '0 15px', fontSize: '17px', border: '1.5px solid #C7BEBE', borderBottomWidth: '2.5px', borderRadius: '6px' }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-box" style={{ height: '52px', margin: '18px 0' }}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{ height: '100%', width: '100%', outline: 'none', padding: '0 15px', fontSize: '17px', border: '1.5px solid #C7BEBE', borderBottomWidth: '2.5px', borderRadius: '6px' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box" style={{ height: '52px', margin: '18px 0' }}>
            <input
              type="tel"
              placeholder="Enter your phone"
              required
              style={{ height: '100%', width: '100%', outline: 'none', padding: '0 15px', fontSize: '17px', border: '1.5px solid #C7BEBE', borderBottomWidth: '2.5px', borderRadius: '6px' }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input-box" style={{ height: '52px', margin: '18px 0' }}>
            <input
              type="password"
              placeholder="Create password"
              required
              style={{ height: '100%', width: '100%', outline: 'none', padding: '0 15px', fontSize: '17px', border: '1.5px solid #C7BEBE', borderBottomWidth: '2.5px', borderRadius: '6px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-box button" style={{ margin: '18px 0', display: 'flex', justifyContent: 'center' }}> {/* Centered the button */}
            <input type="submit" value="Register Now" style={{ color: '#fff', background: '#4070f4', border: 'none', padding: '10px 15px', cursor: 'pointer' }} />
          </div>
          <div className="text" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#333' }}>Already have an account? <a href="/login" style={{ color: '#4070f4', textDecoration: 'none' }}>Login now</a></h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
