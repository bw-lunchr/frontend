import React from 'react';
import {NavLink} from 'react-router-dom';


class Navbar extends React.Component{
  render() {
    return (
      <div>
        <ul id="nav">
          <li><a href="https://luncher-adam.netlify.com/index.html">Home1</a></li>
          <li><a href="https://lunchr-kevin.netlify.com/index.html">Home2</a></li>
          <li><NavLink to='DonorHomepage'>View Schools</NavLink></li>
        </ul>
      </div>
    );
  };
}

export default Navbar;