import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import UserForm from './components/AdminLogin';
import Navbar from './components/Navbar';
import './App.css';
import ProfileForm from './components/ProfileEditForm';
import DonorHomepage from './components/DonorHomepage';
import SchoolGrid from './components/AdminProfile'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
      <h1>Build Week - Luncher App</h1>
        <PrivateRoute exact path='/AdminProfile' component={SchoolGrid} />
        <PrivateRoute exact path='/edit' component={ProfileForm} />
        <Route exact path='/' component={UserForm} />
        <Route path='/DonorHomepage' component={DonorHomepage} />
        {/* <Route path='/AdminProfile' component={SchoolGrid} /> */}
      </div>
    </Router>
  );
}

export default App;
