import { SHOW_ALERT_NOTE, HIDE_ALERT_NOTE } from "./types";

const initialState = {
  visible: false,
};

export const alertAddedNote = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT_NOTE:
      return {
        ...state,
        visible: true,
      };
    case HIDE_ALERT_NOTE:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
