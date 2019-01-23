import {
  FETCH_MEETINGS,
  FETCH_INBOX,
  FETCH_FILTERED_MEETINGS,
  MESSAGE_UPDATE_SUCCESS,
  MESSAGE_UPDATE_FAIL,
  SERVER_ADDRESS
} from "./types";
import axios from "axios";

const ROOT_URL = SERVER_ADDRESS;
const HEADERS = {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "4f9c5a1e6a394b4aab8105d2f6a25da6"
  }
};

// //Retrieve available meetings
// export const fetchMeetings = (status, userId) => {
//   try {
//     //Status determines if user is anonymous or signedIn
//     if (status === "anonymous") {
//       const request = await axios.GET(`${ROOT_URL}/meetings`);
//       // const request = await axios.GET(`https://f26a42a0-4b0f-4b15-91cf-90f1774b2f4a.mock.pstmn.io/meetings?x-api-key=aa39a0c36de24f86a285dbd63e1b7ffd`)
//       dispatch({
//         type: FETCH_MEETINGS,
//         payload: {
//           message: "Retrieved Meetings Successfully",
//           data: request.data
//         }
//       });
//     } else if (status === "signedIn") {
//       const request = await axios.GET(
//         `${SERVER_ADDRESS}/meetings?userId=${userId}/`
//       );
//       dispatch({
//         type: FETCH_MEETINGS,
//         payload: {
//           message: "Retrieved Meetings Successfully",
//           data: request.data
//         }
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// //Retrieve fitered meetings
// export const fetchFilteredMeetings = query => {
//   try {
//     const request = await axios.GET(`${ROOT_URL}/meetings/${query}`);
//     if (request.status === "SUCCESS") {
//       dispatch({
//         type: FETCH_FILTERED_MEETINGS,
//         payload: {
//           message: "Retrieved Query Successfully",
//           data: request.data
//         }
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// //Retrieve user inbox
// export const fetchInbox = userId => {
//   try {
//     const request = await axios.GET(`${ROOT_URL}/inbox/?userId=${userId}`);
//     if (request.status === "SUCCESS") {
//       dispatch({
//         type: FETCH_INBOX,
//         payload: {
//           message: "Retrieved Inbox Successfully",
//           data: request.data
//         }
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// //Update message status
// export const updateMessage = (form, callback) => {
//   try {
//     const request = await axios.PATCH(
//       `${ROOT_URL}/message/${form.message.id}`,
//       {
//         status: "read"
//       }
//     );

//     if (request.status === "SUCCESS") {
//       dispatch({
//         type: MESSAGE_UPDATE_SUCCESS,
//         payload: {
//           message: "Message Update Successful",
//           data: request.data
//         }
//       });
//     } else {
//       dispatch({
//         type: MESSAGE_UPDATE_FAIL,
//         payload: {
//           message: "Message Update Failed"
//         }
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

//Testing - Static Data
export const fetchStaticMeetings = (status, userId) => async dispatch => {
  try {
    //Status determines if user is anonymous or signedIn
    if (status === "anonymous") {
      const request = await axios.get(`${ROOT_URL}/mock/meetings`, HEADERS);
      dispatch({
        type: FETCH_MEETINGS,
        payload: request.data.body
      });
    } else if (status === "signedIn") {
      const request = await axios.GET(`${ROOT_URL}/meetings?userId=${userId}/`);
      dispatch({
        type: FETCH_MEETINGS,
        payload: {
          message: "Retrieved Meetings Successfully",
          data: request.data
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};
