import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initialProfile = {
  name: '',
  email: '',
  password: ''
}

const ProfileForm = ({updateProfiles, profiles}) => {
  console.log(profiles);
  const [editing, setEditing] = useState(false);
  const [profileToEdit, setProfileToEdit] = useState(initialProfile);

  const editProfile = profile => {
    setEditing(true);
    setProfileToEdit(profile);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`https://bw-luncher.herokuapp.com/api/admin/${profileToEdit.id}`, profileToEdit)
      .then(res => {
        // console.log('Put res', res.data);
        updateProfiles(profiles.map(profile => {
          if (profile.id === res.data.id) {
            return res.data;
          } else {
            return profile;
          }
        }));
      })
      .catch(error => console.log(error));
  };


  return (
    <div className='profile-wrap'>
      <form onSubmit={saveEdit}>
        <legend><h2>Edit Profile</h2></legend>
        <br />
        <label>
          Administrator Name: 
          <input onChange={e => setProfileToEdit({...setProfileToEdit, school: e.target.value})
          } value={profileToEdit.name} />
        </label>
        <label>
          email: 
          <input onChange={e => setProfileToEdit({...setProfileToEdit, email: e.target.value})
          } value={profileToEdit.email} />
        </label>
        <label>
          password:
          <input onChange={e => setProfileToEdit({...setProfileToEdit, password: e.target.value})
          } value={profileToEdit.password} />
        </label>
        <div>
          <button type='submit'>save</button>
          <button onClick={() => setEditing(false)}>cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;