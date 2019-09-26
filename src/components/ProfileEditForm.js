import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {NavLink} from 'react-router-dom';
import {Button, Form} from 'semantic-ui-react'
import AdminProfileForm from './AdminProfileForm';


const initialProfile = {
  fullName: 'Batman',
  email: 'test3@gmail.com',
  password: 'password3',
}

const ProfileForm = ({updateProfiles, profile, id}) => {
  //console.log('UpdateForm:', profile);
  const [editing, setEditing] = useState(false);
  const [profileToEdit, setProfileToEdit] = useState({ 
    fullName: profile.fullName,
  email: profile.email,
  password: profile.password});
  //console.log(profileToEdit);

  const editProfile = profile => {
    if (!editing) {
      setEditing(true);
      //setProfileToEdit({profile});
    }
  };

  const saveEdit = (e) => {
    e.preventDefault();
    console.log(profileToEdit);
    axiosWithAuth()
      .put(`/admin/${profile.id}`, profileToEdit)
      .then(res => {
        console.log('Put res', res.data);
        // updateProfiles(profile.map(profile => {
        //   if (profile.id === id) {
        //     return {...profile, profileToEdit};
        //   } else {
        //     return profile;
        //   }
        // }));
      })
      .catch(error => console.log(error));
  };

  const deleteProfile = profile => {
    axiosWithAuth()
      .delete(`/schools/${id}`)
      .then(res => {
        updateProfiles(profile.filter(profile => profile.id !== id))
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='profile-wrap'>
      <Button>
        <NavLink to='AdminProfile'>View Profile</NavLink>
      </Button>
      <Form onSubmit={saveEdit}>
        <div class="ui hidden divider"></div>
        <div class="ui hidden divider"></div>
        <legend><h2>Edit Profile</h2></legend>
        <br />
        <label>
          Administrator Name: 
          <input onChange={e => setProfileToEdit({...profileToEdit, fullName: e.target.value})
          } value={profileToEdit.fullName} />
        </label>
         <div class="ui hidden divider"></div>
        <label>
          Email: {profileToEdit.email}
          <input onChange={e => setProfileToEdit({...profileToEdit, email: e.target.value})
          } value={profileToEdit.email} />
        </label>
         <div class="ui hidden divider"></div>
        <label>
          Password: 
          <input onChange={e => setProfileToEdit({...profileToEdit, password: e.target.value})
          } value={profileToEdit.password} />
        </label>
         <div class="ui hidden divider"></div>
        <div>
        <br />
          <Button onClick={() => editProfile(profile)}>Save</Button>
          <Button onClick={() => setEditing(false)}>Cancel</Button>
          <div class="ui hidden divider"></div>
        </div>
        <br />
        <Button onClick={() => deleteProfile(profile)}>Delete Profile</Button>
      </Form>
    </div>
  );
}

export default ProfileForm;