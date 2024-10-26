import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import CreateUser from './componets/CreateUser';
import ShowUser from './componets/ShowUser';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/show-user" element={<ShowUser />} />
      </Routes>
    </div>
  );
}

export default App;
