import React from "react";

const SchoolProfile = () => {
  
  return(
    <div className='school-profile'>
      <div>
        <h1>School Profile {/* school name */}</h1>
        <h2>Location {/* school location */}</h2>
      </div>
      <div>
        <h3>Current Funds: {/* amount */}</h3>
        <h4>Amount Requested: {/* amount */}</h4>
      </div>
      <div>
        <button>add</button>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default SchoolProfile;