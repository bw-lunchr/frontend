import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
// import Login from './components/login';
import SchoolProfile from './components/SchoolProfiles';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Build Week - Luncher App</h1>
        <PrivateRoute exact path='/protected' component={SchoolProfile} />
        {/* <Route exact path='/' component={Login} /> */}
      </div>
    </Router>
  );
}

export default App;
