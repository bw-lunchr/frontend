import React from 'react';
import './App.css';
import UserForm from './components/AdminLogin';
import Navbar from './components/Navbar'

function App() {
  return (
  <div className="App">
    <h1>Build Week - Luncher App</h1>
    <UserForm />
  </div>
  );
}

export default App;
