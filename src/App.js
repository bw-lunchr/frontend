import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
// import Login from './components/login';
import SchoolProfile from './components/SchoolProfiles';

import './App.css';
import UserForm from './components/AdminLogin';
function App() {
  return (
  <div className="App">
    <h1>Build Week - Luncher App</h1>
    <UserForm />
  </div>

  );
}

export default App;
