
import React from 'react';


class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Edit Profile</a></li>
                <li><a href="#">View Schools</a></li>
              </ul>
            </div>
        );
    }
}


export default Navbar;

