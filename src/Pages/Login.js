import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      toast.success('Login successful!');
      localStorage.setItem('token', data.token); // Store the token here
      navigate('/dashboard', { state: { name: data.user.name } });
    } else {
      toast.error(data.error || 'Invalid credentials.');
    }
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="wrapper" style={{ maxWidth: '430px', width: '100%', background: '#fff', padding: '34px', borderRadius: '6px', boxShadow: '0 5px 10px rgba(0,0,0,0.2)' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#333' }}>Login to HostelHub</h2>
        <ToastContainer />
        <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
          <div className="input-box" style={{ height: '52px', margin: '18px 0' }}>
            <input type="email" placeholder="Enter your email" required style={{ height: '100%', width: '100%', outline: 'none', padding: '0 15px', fontSize: '17px', border: '1.5px solid #C7BEBE', borderBottomWidth: '2.5px', borderRadius: '6px' }} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-box" style={{ height: '52px', margin: '18px 0' }}>
            <input type="password" placeholder="Enter your password" required style={{ height: '100%', width: '100%', outline: 'none', padding: '0 15px', fontSize: '17px', border: '1.5px solid #C7BEBE', borderBottomWidth: '2.5px', borderRadius: '6px' }} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-box button" style={{ margin: '18px 0', display: 'flex', justifyContent: 'center' }}>
            <input type="submit" value="Login" style={{ color: '#fff', background: '#4070f4', border: 'none', padding: '10px 15px', cursor: 'pointer' }} />
          </div>
          <div className="text" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#333' }}>Don't have an account? <a href="/signup" style={{ color: '#4070f4', textDecoration: 'none' }}>Signup now</a></h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
