import {
  FETCH_MEETINGS,
  FETCH_INBOX,
  FETCH_FILTERED_MEETINGS,
  FETCH_MAIN_MEETING,
  FETCH_MAIN_VENUE,
  FETCH_MAIN_EXPECTATIONS,
  FETCH_MAIN_FACILITATORS,
  FETCH_MAIN_PARTICIPANTS,
  FETCH_MAIN_SPONSORS,
  FETCH_MAIN_FLOORPLANS,
  FETCH_MAIN_DISCUSSIONS,
  FETCH_MAIN_TALKS,
  MESSAGE_UPDATE,
  MESSAGE_UPDATE_SUCCESS,
  MESSAGE_UPDATE_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  meetings: [],
  hasLoadedMeetings: false,
  venues: [],
  hasLoadedVenues: false,
  expectations: [],
  facilitators: [],
  participants: [],
  sponsors: [],
  floorPlans: [],
  discussions: [],
  talks: [],
  mainmeeting: {},
  hasLoadedMainMeeting: false,
  inbox: [],
  filteredMeetings: [],
  status: "",
  message: ""
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload };
    case FETCH_MEETINGS:
      return {
        ...state,
        meetings: action.payload,
        hasLoadedMeetings: true
      };
    case FETCH_MAIN_MEETING:
      return {
        ...state,
        mainmeeting: action.payload,
        hasLoadedMainMeeting: true
      };
    case FETCH_MAIN_VENUE:
      return {
        ...state,
        venues: action.payload,
        hasLoadedVenues: true
      };
    case FETCH_MAIN_EXPECTATIONS:
      return { ...state, expectations: action.payload };
    case FETCH_MAIN_FACILITATORS:
      return { ...state, facilitators: action.payload };
    case FETCH_MAIN_PARTICIPANTS:
      return { ...state, participants: action.payload };
    case FETCH_MAIN_SPONSORS:
      return { ...state, sponsors: action.payload };
    case FETCH_MAIN_FLOORPLANS:
      return { ...state, floorPlans: action.payload };
    case FETCH_MAIN_DISCUSSIONS:
      return { ...state, discussions: action.payload };
    case FETCH_MAIN_TALKS:
      return { ...state, talks: action.payload };
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
