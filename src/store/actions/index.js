import {axiosWithAuth} from '../../utils/axiosWithAuth';

// action types: admin
export const FETCH_ADMIN_START = 'FETCH_ADMIN_START';
export const FETCH_ADMIN_SUCCESS = 'FETCH_ADMIN_SUCCESS';
export const FETCH_ADMIN_FAIL = 'FETCH_ADMIN_FAIL';

// action creators: admin
export const getAdminData = () => dispatch => {
  
  dispatch({type: FETCH_ADMIN_START});
  axiosWithAuth()
    .get(`/admin/3`)
    .then(res => {
      console.log('actions admin:', res.data)
      dispatch({type: FETCH_ADMIN_SUCCESS, payload: res.data});
    })
    .catch(error => {
      dispatch({type: FETCH_ADMIN_FAIL, payload: `${error}`});
      console.log(error);
    });
};

// action types: school
export const ADD_SCHOOL_START = 'ADD_SCHOOL_START';
export const ADD_SCHOOL_SUCCESS = 'ADD_SCHOOL_SUCCESS';
export const ADD_SCHOOL_FAIL = 'ADD_SCHOOL_FAIL';

// action creators: school
export const addSchool = () => dispatch => {
  dispatch({type: ADD_SCHOOL_START});
  axiosWithAuth()
    .post(`/admin/3/schools`)
    .then(res => {
      dispatch({type: ADD_SCHOOL_SUCCESS, payload: res.data})
    })
    .catch(error => {
      if(error) {
        dispatch({type: ADD_SCHOOL_FAIL, payload: 'This school does not exist'})
      }
    });
};