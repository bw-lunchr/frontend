import {FETCH_SCHOOL_START, FETCH_SCHOOL_SUCCESS} from '../actions';

const initialState = {
  school: [
    {
      id: Math.random(),
      name: '',
      location: '',
      requested_funds: '',
      admin_id: ''
    },
  ],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SCHOOL_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SCHOOL_SUCCESS:
      return {
        ...state,
        breweries: action.payload,
        isFetching: false,
      }; 
    default:
      return state;
  }
}