import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const initialState = {
  token: null,
  user: {},
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, authenticating: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}
