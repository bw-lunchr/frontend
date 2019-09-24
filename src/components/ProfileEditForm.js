import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initialProfile = {
  school: '',
  location: '',
  email: '',
  password: ''
}

const ProfileForm = () => {
  const [editing, setEditing] = useState(false);
  const [ProfilToEdit, setProfileToEdit] = useState(initialProfile);

  const editProfile = profile => {
    setEditing(true);
    setProfileToEdit(profile);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`https://bw-luncher.herokuapp.com/api/schools/${ProfilToEdit.id}`, ProfilToEdit)
      .then(res => {
        // console.log('Put: res', res.data);
        updateColors(profiles.map(profile => {
          if (profile.id === res.data.id) {
            return res.data;
          } else {
            return profile;
          }
        }));
      })
      .catch(error => console.log(error));
  };

  const deleteProfile = profile => {
    // make a delete request to delete this profile
    axiosWithAuth()
      .delete(`http://localhost:5000/api/profiles/${profile.id}`)
      .then(res => {
        // console.log('Delete: res', res);
        updateProfiles(profiles.filter(profile => profile.id !== res.data))
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='profile-wrap'>
      <form onSubmit={saveEdit}>
        <legend>edit profile</legend>
        <label>
          School:
          <input onChange={e => setProfileToEdit({...setProfileToEdit, school: e.target.value})
          } value={ProfilToEdit.profile} />
        </label>
        <label onChange={e => setProfileToEdit({...setProfileToEdit, location: e.target.value})
          } value={ProfilToEdit.profile}>
          Location: 
          <input />
        </label>
        <label onChange={e => setProfileToEdit({...setProfileToEdit, email: e.target.value})
          } value={ProfilToEdit.profile}>
          email: 
          <input />
        </label>
        <label onChange={e => setProfileToEdit({...setProfileToEdit, password: e.target.value})
          } value={ProfilToEdit.profile}>
          password: 
          <input />
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