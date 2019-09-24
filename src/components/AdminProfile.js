import React from "react";
import FormikDonorForm from './DonorForm';
import AdminCard from './AdminCard';



function SchoolGrid() {
    return (
      <div className="AdminProf">
        <FormikDonorForm />
        <AdminCard />
      </div>
    );
  }


export default SchoolGrid;

