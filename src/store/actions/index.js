import axios from 'axios';

// action types
export const FETCH_SCHOOL_START = 'FETCH_SCHOOL_START';
export const FETCH_SCHOOL_SUCCESS = 'FETCH_SCHOOL_SUCCESS';
export const FETCH_SCHOOL_FAIL = 'FETCH_SCHOOL_FAIL';

// action creators
export const getSchool = () => dispatch => {
 
    // dispatch and axios request
    dispatch({type: FETCH_SCHOOL_START});
    axios
      .get(``)
      .then(res => {
        console.log('axios request: ', res.data)
        dispatch({type: FETCH_SCHOOL_SUCCESS, payload: res.data});
      })
      .catch(error => {
        console.log('catch error: ', error.res.message);
        dispatch({
          type: FETCH_SCHOOL_FAIL,
          payload: error.res.message});
      });

};