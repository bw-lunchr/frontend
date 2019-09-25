import React from 'react';
import {NavLink} from 'react-router-dom';


class Navbar extends React.Component{
  render() {
    return (
      <div>
        <ul id="nav">
          <li><a href="https://luncher-adam.netlify.com/index.html">Home</a></li>
          <li><NavLink to='EditProfile'>Edit Profile</NavLink></li>
          <li><NavLink to='DonorHomepage'>View Schools</NavLink></li>
        </ul>
      </div>
    );
  };
}

export default Navbar;