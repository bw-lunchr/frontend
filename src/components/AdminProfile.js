import React, {useState, useEffect} from "react";
import FormikDonorForm from './DonorForm';
import AdminCard from './AdminCard';
import {NavLink} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';


function SchoolGrid(props) {
  console.log('school props', props);
  const [schools, setSchools] = useState([]);

  const getSchools = () => {
    axiosWithAuth()
      .get(`/admin/1/schools`)
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
      .post(`/admin/1/schools`, school)
      .then(res => {
        setSchools(res.data);
      })
      .catch(error => console.log(error.response));
  }
    return (
      <div className="AdminProf">
        <div className="Prof-Nav">
        <NavLink to='EditProfile'>Edit Profile</NavLink>
        </div>
        <FormikDonorForm addSchool={addSchool} />
        <AdminCard />
      </div>
    );
  }


export default SchoolGrid;