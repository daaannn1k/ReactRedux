import { HIDE_LOADER, SHOW_LOADER } from "./types";

const initialState = {
  visible: false,
};
export const loader = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, visible: true };
    case HIDE_LOADER:
      return { ...state, visible: false };
    default:
      return state;
  }
};
