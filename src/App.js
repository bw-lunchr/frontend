import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import SchoolProfile from './components/SchoolProfiles';
import UserForm from './components/AdminLogin';
import Navbar from './components/Navbar';
import './App.css';
import ProfileForm from './components/ProfileEditForm';
import DonorHomepage from './components/DonorHomepage';
import {getSchoolData} from './store/actions';
import {connect} from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.getSchoolData();
  }

  render() {
    if(this.props.fetching){
      return <h2>Loading profile...</h2>
    }
  return (
    <Router>
      <Navbar />
      <div className="App">
       <h1>Build Week - Luncher App</h1>
        <PrivateRoute exact path='/protected' component={SchoolProfile} />
        <PrivateRoute exact path='/edit' component={ProfileForm} />
        <Route exact path='/' component={UserForm} />
        <Route path='/DonorHomepage' component={DonorHomepage} />
      </div>
    </Router>
  );
}
}

const mapStateToProps = state => {
  console.log ('mSTP: ', state);
  return {
    school: state.school,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps,{getSchoolData})(App);
