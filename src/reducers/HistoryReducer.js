import {
  FETCH_HISTORY,
  HISTORY_UPDATE_SUCCESS,
  HISTORY_UPDATE_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  histories: [],
  message: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_HISTORY:
      return { ...state, histories: action.payload };
    case HISTORY_UPDATE_SUCCESS:
      return { ...state, message: "" };
    case HISTORY_UPDATE_FAIL:
      return { ...state, message: "" };
    default:
      return state;
  }
}
