import {
  SETTINGS_UPDATE,
  FETCH_SETTINGS,
  SETTINGS_CONFIG_SUCCESS,
  SETTINGS_CONFIG_FAIL
} from "./types";

//Update syncGoogle and syncCalendar field
export const updateSettings = ({ prop, value }) => {
  return {
    type: SSETTINGS_UPDATE,
    payload: { prop, value }
  };
};

//Retrieve settings
export const fetchSettings = () => {
  try {
    const request = await axios.GET(`${SERVER_ADDRESS}/settings`);

    if (request.status === "SUCCESS") {
      dispatch({
        type: FETCH_SETTINGS,
        payload: request.data
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//Update Settings
export const updateProfile = (form, callback) => {
  try {
    const request = await axios.PATCH(`${SERVER_ADDRESS}/settings`, {
      syncGoogle: form.syncGoogle,
      syncCalendar: form.syncCalendar
    });

    if (request.status === "SUCCESS") {
      dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        payload: "Settings Update Successful"
      });
    } else {
      dispatch({
        type: PROFILE_UPDATE_FAIL,
        payload: "Settings Update Failed"
      });
    }
  } catch (error) {
    console.log(error);
  }
};
