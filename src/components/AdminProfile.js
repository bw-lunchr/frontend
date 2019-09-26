import React, {useState, useEffect} from "react";
import FormikDonorForm from './DonorForm';
import AdminCard from './AdminCard';
import {NavLink} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import {Button} from 'semantic-ui-react';

function SchoolGrid(props) {
  console.log('school props', props);
  const [schools, setSchools] = useState([]);

  const getSchools = () => {
    axiosWithAuth()
      .get(`/admin/3/schools`)
      .then(res => {
        setSchools(res.data);
      })
      .catch(error => console.log(error.response));
  }

  useEffect(() => {
    getSchools();
  }, [])

  const addSchool = school => {
    axiosWithAuth()
      .post(`/admin/3/schools`, school)
      .then(res => {
        setSchools(res.data);
      })
      .catch(error => console.log(error.response));
  }
    return (
      <div className="AdminProf">
            <div class="ui hidden divider"></div>
            <div class="ui hidden divider"></div>
          <Button>
        <NavLink to='EditProfile'>Edit Profile</NavLink>
        </Button>
   
        <FormikDonorForm addSchool={addSchool} />
        <div className="AdminProfcard">
        <AdminCard />
        </div>
      </div>
    );
  }


export default SchoolGrid;