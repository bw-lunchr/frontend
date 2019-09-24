import React from 'react';
import {NavLink} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import ProfileForm from './components/ProfileEditForm';


class Navbar extends React.Component{
  render() {
    return (
      <div>
        <ul id="nav">
          <li><a href="#">Home</a></li>
          <li><PrivateRoute exact path='/EditProfile' component={ProfileForm}>Edit Profile</PrivateRoute></li>
          <li><NavLink to='DonorHomepage'>View Schools</NavLink></li>
        </ul>
      </div>
    );
  };
}

export default Navbar;