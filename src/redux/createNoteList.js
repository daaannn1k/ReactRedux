import { CREATE_LIST, DELETE_NOTE } from "./types";

const initialState = {
  list: [],
};

export const createNoteList = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        list: state.list.filter((item, index) => {
          return index !== action.payload;
        }),
      };
    default:
      return state;
  }
};
