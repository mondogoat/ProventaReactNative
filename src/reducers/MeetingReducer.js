import {
  FETCH_MEETINGS,
  FETCH_INBOX,
  FETCH_FILTERED_MEETINGS,
  MESSAGE_UPDATE,
  MESSAGE_UPDATE_SUCCESS,
  MESSAGE_UPDATE_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  meetings: [],
  inbox: [],
  filteredMeetings: [],
  status: "",
  message: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload };
    case FETCH_MEETINGS:
      return { ...state, meetings: action.payload };
    case FETCH_INBOX:
      return { ...state, emails: action.payload };
    case FETCH_FILTERED_MEETINGS:
      return { ...state, meetings: action.payload };
    case MESSAGE_UPDATE_SUCCESS:
      return { ...state, message: action.payload };
    case MESSAGE_UPDATE_FAIL:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
