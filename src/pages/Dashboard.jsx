import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', borderRight: '1px solid #ccc', padding: '10px' }}>
          <h3>Sidebar</h3>
          <ul>
            <li><Link to="personal-details">Personal Details</Link></li>
            <li><Link to="food-items">Food Items</Link></li>
            <li><Link to="track-order">Track Order</Link></li>
            <li><Link to="payment">Payment</Link></li>
            <li><Link to="contact-us">Contact Us</Link></li>
            <li><Link to="support">Support</Link></li>
            <li><Link to="feedback">Feedback</Link></li>
          </ul>
        </div>
        <div style={{ marginLeft: '20px', flexGrow: 1 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
