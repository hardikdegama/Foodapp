import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PersonalDetails from './pages/PersonalDetails';
import FoodItems from './pages/FoodItems';
import TrackOrder from './pages/TrackOrder';
import Payment from './pages/Payment';
import ContactUs from './pages/ContactUs';
import Support from './pages/Support';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="personal-details" element={<PersonalDetails />} />
          <Route path="food-items" element={<FoodItems />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="payment" element={<Payment />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="support" element={<Support />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
