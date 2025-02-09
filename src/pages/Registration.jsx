import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  // Convert image to Base64 string before storing
  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm(prevForm => ({
        ...prevForm,
        photo: reader.result // This is the base64 string of the image
      }));
    };
    if (file) {
      reader.readAsDataURL(file); // This converts the file to base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(form));
    navigate('/login');
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={form.name} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={form.email} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="mobile" 
          placeholder="Mobile Number" 
          value={form.mobile} 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={form.password} 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          value={form.confirmPassword} 
          onChange={handleChange} 
        />
        <input 
          type="file" 
          name="photo" 
          onChange={(e) => handleImageUpload(e.target.files[0])} 
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
