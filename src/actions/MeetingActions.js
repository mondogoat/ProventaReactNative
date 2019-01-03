import {
  FETCH_MEETINGS,
  FETCH_INBOX,
  FETCH_FILTERED_MEETINGS,
  MESSAGE_UPDATE,
  MESSAGE_UPDATE_SUCCESS,
  MESSAGE_UPDATE_FAIL
} from "./types";

//Retrieve available meetings
export const fetchMeetings = (status, userId) => {
  try {
    //Status determines if user is anonymous or signedIn
    if (status === "anonymous") {
      const request = await axios.GET(`${SERVER_ADDRESS}/meetings`);
      dispatch({
        type: FETCH_MEETINGS,
        payload: request.data
      });
    } else if (status === "signedIn") {
      const request = await axios.GET(`${SERVER_ADDRESS}/${userId}/meetings`);
      dispatch({
        type: FETCH_MEETINGS,
        payload: request.data
      });
    }
  } catch (error) {
    console.log(error);
  }
};


//Retrieve fitered meetings
export const fetchMeetings = (query) => {
    try {
    const request = await axios.GET(`${SERVER_ADDRESS}/meetings/${query}`);
      if (request.status === "SUCCESS") {
        dispatch({
            type: FETCH_FILTERED_MEETINGS,
            payload: request.data
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

//Retrieve user inbox
export const fetchInbox = userId => {
  try {
    const request = await axios.GET(`${SERVER_ADDRESS}/${userId}/inbox`);
    if (request.status === "SUCCESS") {
      dispatch({
        type: FETCH_INBOX,
        payload: request.data
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//Update message status for view
export const updateMessage = ({ prop, value }) => {
  return {
    type: MESSAGE_UPDATE,
    payload: { prop, value }
  };
};

//Update message status
export const updateMessage= (form, callback) => {
  try {
    const request = await axios.PATCH(
      `${SERVER_ADDRESS}/message/${form.message.id}`,
      {
        status: "read"
      }
    );

    if (request.status === "SUCCESS") {
      dispatch({
        type: MESSAGE_UPDATE_SUCCESS,
        payload: "Message Update Successful"
      });
    } else {
      dispatch({
        type: MESSAGE_UPDATE_FAIL,
        payload: "Message Update Failed"
      });
    }
  } catch (error) {
    console.log(error);
  }
};