import {FETCH_ADMIN_START, FETCH_ADMIN_SUCCESS} from '../actions';
import {ADD_SCHOOL_START, ADD_SCHOOL_SUCCESS} from '../actions';

// Admin
const initialState = {
  school: [
    {
      id: Math.random(),
      name: '',
      location: '',
      requested_funds: '',
    },
  ],
  admin: [
    {
      id: 3,
      fullName: '',
      email: '',
      password: '',
    },
  ],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ADMIN_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_ADMIN_SUCCESS:
      return {
        ...state,
        admin: action.payload,
        isFetching: false,
      };
    case ADD_SCHOOL_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case ADD_SCHOOL_SUCCESS:
      return {
        ...state,
        school: [...state.school, action.payload],
        isFetching: false,
        error: ''
      }
    default:
      return state;
  }
}