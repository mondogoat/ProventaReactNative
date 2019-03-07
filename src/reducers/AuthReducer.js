import {
  AUTH_UPDATE,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAIL,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  emailAddress: "carlocandoy@gmail.com",
  password: "password",
  position: "",
  company: "",
  contactNumber: "",
  linkedIn: "",
  message: "",
  status: "loggedout",
  token: ""
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_UPDATE:
      return { ...state, [action.payload.prop]: action.payload };
    case AUTH_SIGNUP_SUCCESS:
      return { ...state, message: action.payload };
    case AUTH_SIGNUP_FAIL:
      return { ...state, message: action.payload };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        message: "login successful",
        status: "loggedin",
        token: action.payload
      };
    case AUTH_LOGIN_FAIL:
      return { ...state, message: "login failed", status: "failed attempt" };
    default:
      return state;
  }
}
