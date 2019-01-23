import {
  FETCH_HISTORY,
  HISTORY_UPDATE_SUCCESS,
  HISTORY_UPDATE_FAIL
} from "./types";
import axios from "axios";

//Retrieve list of history
export const fetchHistory = userId => {
  try {
    const request = await axios.GET(`${SERVER_ADDRESS}/${userId}/history`);

    if (request.status === "SUCCESS") {
      dispatch({
        type: FETCH_HISTORY,
        payload: request.data
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//Create History
export const createHistory = (form, callback) => {
  try {
    const request = await axios.POST(`${SERVER_ADDRESS}/history`, {
      userId: form.userId,
      meetingId: form.meetingId,
      date: form.date
    });

    if (request.status === "SUCCESS") {
      dispatch({
        type: HISTORY_UPDATE_SUCCESS,
        payload: "History Log Successful"
      });
    } else {
      dispatch({
        type: HISTORY_UPDATE_FAIL,
        payload: "History Log Failed"
      });
    }
  } catch (error) {
    console.log(error);
  }
};
