import {
  USER_UPDATE,
  FETCH_PROFILE,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
  SERVER_ADDRESS
} from "./types";

//Update emailAddress and password field
export const updateUser = ({ prop, value }) => {
  return {
    type: USER_UPDATE,
    payload: { prop, value }
  };
};

//Retrieve user profile
export const fetchProfile = () => {
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

//Update User Profile
export const updateProfile = (form, callback) => {
  try {
    const request = await axios.PATCH(`${SERVER_ADDRESS}/user`, {
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
        payload: "Profile Update Success"
      });
    } else {
      dispatch({
        type: PROFILE_UPDATE_FAIL,
        payload: "Profile Update Fail"
      });
    }
  } catch (error) {
    console.log(error);
  }
};