import { combineReducers } from "redux";
import { createNoteList } from "./createNoteList";
import { getComments } from "./getComments";
import { alert } from "./alert";
import { loader } from "./loader";
import { alertAddedNote } from "./alertAddedNote";

export const rootReducer = combineReducers({
  notes: createNoteList,
  alert: alert,
  getcomments: getComments,
  loader: loader,
  alertNote: alertAddedNote,
});
