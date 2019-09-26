import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getAdminData} from '../store/actions';
import ProfileForm from './ProfileEditForm';

const AdminEditForm = ({getAdminData, admin, isFetching}) => {
//   console.log('admin:', admin);
//   const [data, setData] = useState([]);
//   console.log(`data`, data, setData);
  useEffect(() => {
    getAdminData();
  }, [getAdminData]);

  if(isFetching) {
    return <h2>Fetching Profile!</h2>
  }

  return (
    <div>
      <ProfileForm key={admin.id}  profile={admin} id={admin.id} />
      {/* updateProfiles={setData} */}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mSTP:', state);
  return {
    admin: state.admin,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps,{getAdminData}) (AdminEditForm);