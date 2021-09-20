import {
  CREATE_LIST,
  DELETE_NOTE,
  SHOW_ALERT,
  HIDE_ALERT,
  GET_COMMENTS,
  DELETE_DOWNLOADED_COMMENT,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT_NOTE,
  HIDE_ALERT_NOTE,
} from "./types";

export function createList(text) {
  return async (dispatch) => {
    dispatch(showNoteAlert());
    dispatch({
      type: CREATE_LIST,
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideNoteAlert());
    }, 1500);
  };
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}

export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text,
  };
}
export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function getComments() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10"
      );
      const json = await response.json();
      setTimeout(() => {
        dispatch({
          type: GET_COMMENTS,
          payload: json,
        });
        dispatch(hideLoader());
      }, 3000);
    } catch (e) {
      dispatch(showAlert("Something get wrong"));
    }
  };
}

export function deleteDownloadedComment(id) {
  return {
    type: DELETE_DOWNLOADED_COMMENT,
    payload: id,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
export function showNoteAlert() {
  return {
    type: SHOW_ALERT_NOTE,
  };
}
export function hideNoteAlert() {
  return {
    type: HIDE_ALERT_NOTE,
  };
}
