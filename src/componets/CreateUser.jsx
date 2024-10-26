import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userToEdit = location.state?.user;
    if (userToEdit) {
      setUserId(userToEdit.id);
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setPhone(userToEdit.phone);
    }
  }, [location.state]);

  const saveToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = { 
      id: userId || Date.now(),
      name, 
      email, 
      phone 
    };

    if (name && email && phone) {
      try {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (userId) {
          users = users.map((user) => (user.id === userId ? updatedUser : user));
        } else {
          users.push(updatedUser);
        }

        saveToLocalStorage(users);
        navigate('/show-user');
      } catch (error) {
        console.error('Error submitting user:', error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{userId ? 'Edit User' : 'Submit User'}</h2>
        <label className="block mb-2 text-gray-700">Name:</label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-gray-800"
        />
        <label className="block mb-2 text-gray-700">Email:</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-gray-800"
        />
        <label className="block mb-2 text-gray-700">Phone:</label>
        <input 
          type="tel" 
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/[^0-9+]/g, ''))}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-gray-800"
          placeholder="Enter phone number"
        />
        <button type="submit" className="bg-blue-600 w-full text-white p-2 rounded hover:bg-blue-700">
          {userId ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
