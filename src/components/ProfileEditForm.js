import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {NavLink} from 'react-router-dom';
import { Button, Form, Divider } from 'semantic-ui-react'


const initialProfile = {
  name: '',
  email: '',
  password: ''
}

const ProfileForm = ({updateProfiles, profiles, ...props}) => {
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
      .put(`https://bw-luncher.herokuapp.com/api/admin/1`, profileToEdit)
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
      <Button>
      <NavLink to='AdminProfile'>View Profile</NavLink>
      </Button>
      <Form>
      <form onSubmit={saveEdit}>
       <div class="ui hidden divider"></div>
       <div class="ui hidden divider"></div>
        <legend><h2>Edit Profile</h2></legend>
        <br />
        <label>
          Administrator Name: {props.name}
          <input onChange={e => setProfileToEdit({...setProfileToEdit, name: e.target.value})
          } value={props.name} />
        </label>
         <div class="ui hidden divider"></div>
        <label>
          Email: {props.email}
          <input onChange={e => setProfileToEdit({...setProfileToEdit, email: e.target.value})
          } value={props.email} />
        </label>
         <div class="ui hidden divider"></div>
        <label>
          Password: {props.password}
          <input onChange={e => setProfileToEdit({...setProfileToEdit, password: e.target.value})
          } value={props.password} />
        </label>
         <div class="ui hidden divider"></div>
        <div>
        <br />
          <Button type='submit'>Save</Button>
          <Button onClick={() => setEditing(false)}>Cancel</Button>
         <div class="ui hidden divider"></div>
        </div>
      </form>
      <br />
      <Button>Delete Profile</Button>
      </Form>

    </div>
  );
}

export default ProfileForm;