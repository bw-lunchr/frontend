import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { Button, Form, Divider } from 'semantic-ui-react'


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

  const saveEdit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`https://bw-luncher.herokuapp.com/api/admin/3`, profileToEdit)
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
      <Form>
      <form onSubmit={saveEdit}>
        <legend><h2>Edit Profile</h2></legend>
        <br />
    
        <label>
          Administrator Name: {profileToEdit.name}
          <input onChange={e => setProfileToEdit({...setProfileToEdit, name: e.target.value})
          } value={profileToEdit.name} />
        </label>
        <div class="ui hidden divider"></div>
        <label>
          Email: {profileToEdit.email}
          <input onChange={e => setProfileToEdit({...setProfileToEdit, email: e.target.value})
          } value={profileToEdit.email} />
        </label>
        <div class="ui hidden divider"></div>
        <label>
          Password: {profileToEdit.password}
          <input onChange={e => setProfileToEdit({...setProfileToEdit, password: e.target.value})
          } value={profileToEdit.password} />
        </label>
        <div class="ui hidden divider"></div>
        <div>
          
          <Button type='submit'>Save</Button>
          
          <Button onClick={() => setEditing(false)}>Cancel</Button>
        </div>
      </form>
      </Form>
    </div>
  );
}

export default ProfileForm;