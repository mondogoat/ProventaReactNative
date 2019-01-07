import {
  AUTH_UPDATE,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAIL,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  emailAddress: "",
  password: "",
  message: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_UPDATE:
      return { ...state, [action.payload.prop]: action.payload };
    case AUTH_SIGNUP_SUCCESS:
      return { ...state, message: action.payload };
    case AUTH_SIGNUP_FAIL:
      return { ...state, message: action.payload };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, message: action.payload };
    case AUTH_LOGIN_FAIL:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
