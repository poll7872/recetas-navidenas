import React, { useState } from 'react';
import apiClient from '../utils/api';


const RegisterUser: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiClient.post('http://localhost:5000/api/users/register', formData);
      alert('User registered successfully');
    } catch (error) {
      alert('Error registering user');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={e => setFormData({ ...formData, username: e.target.value })} />
      <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Register User</button>
    </form>
  );
};


export default RegisterUser;



