// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import ManageProperties from './Pages/ManageProperties';
import Profile from './Pages/Profile';
import PaymentPlans from './Pages/PaymentPlans';
import Home from './Pages/Home';
import HostelDetail from './Pages/HostelDetail';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-properties" element={<ManageProperties />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment-plans" element={<PaymentPlans />} />
        <Route path="/hostel-detail/:id" element={<HostelDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
