import React from 'react';



const SchoolProfile = (props) => {
  console.log(props);
  return(
    <div className='school-profile'>
      <div>
        <h1>School Profile {props.name}</h1>
        <h2>Location {props.location}</h2>
      </div>
      <div>
        <h3>Current Funds: {props.current_funds}</h3>
        <h4>Amount Requested: {props.requested_funds}</h4>
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