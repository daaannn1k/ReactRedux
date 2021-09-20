import { DELETE_DOWNLOADED_COMMENT, GET_COMMENTS } from "./types";
const initialState = {
  commentsList: [],
};

export const getComments = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        commentsList: action.payload,
      };
    case DELETE_DOWNLOADED_COMMENT:
      return {
        ...state,
        commentsList: state.commentsList.filter((el, index) => {
          return index !== action.payload;
        }),
      };
    default:
      return state;
  }
};
