import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import SchoolProfile from './components/SchoolProfiles';
import UserForm from './components/AdminLogin';
import Navbar from './components/Navbar';
import './App.css';
import ProfileForm from './components/ProfileEditForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
       <h1>Build Week - Luncher App</h1>
        <PrivateRoute exact path='/protected' component={SchoolProfile} />
        <PrivateRoute exact path='/edit' component={ProfileForm} />
        <Route exact path='/' component={UserForm} />
      </div>
    </Router>
  );
}

export default App;
