import {
  USER_UPDATE,
  FETCH_PROFILE,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
  SERVER_ADDRESS
} from "./types";
import axios from "axios";

//Update emailAddress and password field
export const updateUser = ({ prop, value }) => {
  return {
    type: USER_UPDATE,
    payload: { prop, value }
  };
};

//Retrieve user profile
export const fetchProfile = token => {
  try {
    const request = await axios.GET(`${SERVER_ADDRESS}/user`);

    if (request.status === "SUCCESS") {
      dispatch({
        type: FETCH_PROFILE,
        payload: request.data
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//TODO Create POST User Profile

//Update User Profile
export const createProfile = (form, callback) => {
  try {
    const request = await axios.POST(`${SERVER_ADDRESS}/user`, {
      firstName: form.firstName,
      lastName: form.lastName,
      emailAddress: form.emailAddress,
      position: form.position,
      company: form.company,
      contactNumber: form.contactNumber,
      linkedIn: form.linkedIn
    });

    if (request.status === "SUCCESS") {
      dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        payload: {
          message: "Profile Creation Successful",
          data: request.data
        }
      });
    } else {
      dispatch({
        type: PROFILE_UPDATE_FAIL,
        payload: "Profile Creation Failed"
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//Update User Profile
export const updateProfile = (form, callback) => {
  try {
    const request = await axios.PATCH(`${SERVER_ADDRESS}/user/?id=${form.id}`, {
      firstName: form.firstName,
      lastName: form.lastName,
      emailAddress: form.emailAddress,
      position: form.position,
      company: form.company,
      contactNumber: form.contactNumber,
      linkedIn: form.linkedIn
    });

    if (request.status === "SUCCESS") {
      dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        payload: {
          message: "Profile Update Successful",
          data: request.data
        }
      });
    } else {
      dispatch({
        type: PROFILE_UPDATE_FAIL,
        payload: "Profile Update Failed"
      });
    }
  } catch (error) {
    console.log(error);
  }
};
