import {
  SETTINGS_UPDATE,
  FETCH_CALENDAR_SETTINGS,
  FETCH_NOTIFICATION_SETTINGS,
  SETTINGS_CONFIG_SUCCESS,
  SETTINGS_CONFIG_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  calendar: {},
  notification: {},
  syncGoogle: "",
  syncCalendar: "",
  push: "",
  sms: "",
  email: "",
  message: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SETTINGS_UPDATE:
      return { ...state, [action.payload.prop]: action.payload };
    case FETCH_CALENDAR_SETTINGS:
      return { ...state, calendar: action.payload };
    case FETCH_NOTIFICATION_SETTINGS:
      return { ...state, notification: action.payload };
    case SETTINGS_CONFIG_SUCCESS:
      return { ...state, message: action.payload };
    case SETTINGS_CONFIG_FAIL:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
