import React from "react";
import FormikDonorForm from './DonorForm';
import AdminCard from './AdminCard';
import {NavLink} from 'react-router-dom';
import { Button} from 'semantic-ui-react'

function SchoolGrid() {
    return (
      <div className="AdminProf">
            <div class="ui hidden divider"></div>
            <div class="ui hidden divider"></div>
          <Button>
        <NavLink to='EditProfile'>Edit Profile</NavLink>
        </Button>
   
        <FormikDonorForm />
        <div className="AdminProfcard">
        <AdminCard />
        </div>
      </div>
    );
  }


export default SchoolGrid;

