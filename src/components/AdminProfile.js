import React, {useState, useEffect} from "react";
import FormikDonorForm from './DonorForm';
import AdminCard from './AdminCard';
import {NavLink} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {connect} from 'react-redux';
import {addSchool} from '../store/actions';

import {Button} from 'semantic-ui-react';

function SchoolGrid({addSchool, school}) {
  const [schools, setSchools] = useState({});

  useEffect(() => {
    addSchool();
  }, [addSchool]);

  useEffect(() => {
    getSchools();
  }, [])

  const getSchools = () => {
    axiosWithAuth()
      .get(`/admin/3/schools`)
      .then(res => {
        setSchools(res.data);
      })
      .catch(error => console.log(error.response));
  }

  return (
    <div className="AdminProf">
      <div class="ui hidden divider"></div>
      <div class="ui hidden divider"></div>
      <Button>
        <NavLink to='EditProfile'>Edit Profile</NavLink>
      </Button>
   
      <FormikDonorForm key={school.id} addSchool={addSchool} id={school.id} />

      <div className="AdminProfcard">
        <AdminCard />
      </div>
    </div>
    );
  }


  const mapStateToProps = state => {
    console.log('mSTP:', state);
    return {
      school: state.school,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(mapStateToProps,{addSchool}) (SchoolGrid);