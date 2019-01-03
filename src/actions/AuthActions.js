import {
  AUTH_UPDATE,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAIL,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  SERVER_ADDRESS
} from "./types";

//Update emailAddress and password field
export const updateAuth = ({ prop, value }) => {
  return {
    type: AUTH_UPDATE,
    payload: { prop, value }
  };
};

export const signUp = (form, callback) => async dispatch => {
  try {
    const request = await axios.post(`${SERVER_ADDRESS}/signup`, {
      email: form.emailAddress,
      password: form.password
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
    callback();
  } catch (error) {
    console.log(error);
  }
};

export const login = (form, callback) => async dispatch => {
  try {
    await axios.post(`${SERVER_ADDRESS}/login`, {
      email: form.emailAddress,
      password: form.password
    });

    //Login Success
    if (request.result === "SUCCESS") {
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: "Login Success"
      });
    } else {
      dispatch({
        type: AUTH_LOGIN_FAIL,
        payload: "Login Failed"
      });
    }

    //This is called after the POST function is done
    // For UI trigger
    callback();
  } catch (error) {
    console.log(error);
  }
};
