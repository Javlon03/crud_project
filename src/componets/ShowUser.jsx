import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ShowUser() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);

  const saveToLocalStorage = (users) => {

    localStorage.setItem('users', JSON.stringify(users));
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers); 
    saveToLocalStorage(updatedUsers); 
  };

  const handleView = (user) => {
    navigate('/create-user', { state: { user } });
  };

  const handleEdit = (user) => {
    navigate('/create-user', { state: { user } });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User List</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Phone</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="border-b border-gray-300">
              <td className="py-2 px-4 text-gray-800">{index + 1}</td>
              <td className="py-2 px-4 text-gray-800">{user.name}</td>
              <td className="py-2 px-4 text-gray-800">{user.email}</td>
              <td className="py-2 px-4 text-gray-800">{user.phone}</td>
              <td className="py-2 px-4 flex justify-between space-x-4">
                <button onClick={() => handleView(user)} className="text-blue-500 hover:text-blue-700">
                  <FaEye />
                </button>
                <button onClick={() => handleEdit(user)} className="text-yellow-500 hover:text-yellow-700">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowUser;
