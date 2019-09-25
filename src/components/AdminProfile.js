import React from "react";
import FormikDonorForm from './DonorForm';
import AdminCard from './AdminCard';
import {NavLink} from 'react-router-dom';


function SchoolGrid() {
    return (
      <div className="AdminProf">
        <div className="Prof-Nav">
        <NavLink to='EditProfile'>Edit Profile</NavLink>
        </div>
        <FormikDonorForm />
        <AdminCard />
      </div>
    );
  }


export default SchoolGrid;

