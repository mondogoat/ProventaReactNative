import {
  AUTH_UPDATE,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAIL,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  SERVER_ADDRESS
} from "./types";

import axios from "axios";

// Update emailAddress and password field
export const updateAuth = ({ prop, value }) => {
  return {
    type: AUTH_UPDATE,
    payload: { prop, value }
  };
};

export const signUp = (data) => async dispatch => {
  try {

    var headers = {
      headers: { "Content-Type": "application/json" }
    };

    const request = await axios.post(`https://proventa-meetings.herokuapp.com/users`, {
      email: data.email,
      password: data.password,
      firstName: "GUEST",
      lastName: "GUEST",
      // position: "",
      // company: "",
      // contactNumber: "",
      // linkedIn: ""
    }, headers);

    dispatch({
      type: AUTH_SIGNUP_SUCCESS,
      payload: "Sign Up Successful"
    });
    //Sign Up Success
    if (request.result === "SUCCESS") {
      dispatch({
        type: AUTH_SIGNUP_SUCCESS,
        payload: "Sign Up Successful"
      });
    } else {
      dispatch({
        type: AUTH_SIGNUP_FAIL,
        payload: "Sign Up Failed"
      });
    }

    //This is called after the POST function is done
    // For UI trigger
    // callback();
  } catch (error) {
    (error);
  }
};

// export const login = (form, callback) => async dispatch => {
//   try {
//     const request = await axios.post(`${SERVER_ADDRESS}/login`, {
//       emailAddress: form.emailAddress,
//       password: form.password
//     });

//     //Login Success
//     if (request.result === "SUCCESS") {
//       dispatch({
//         type: AUTH_LOGIN_SUCCESS,
//         payload: "Login Success"
//       });
//     } else {
//       dispatch({
//         type: AUTH_LOGIN_FAIL,
//         payload: "Login Failed"
//       });
//     }

//     //This is called after the POST function is done
//     // For UI trigger
//     callback();
//   } catch (error) {
//     (error);
//   }
// };
