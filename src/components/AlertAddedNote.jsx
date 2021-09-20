import React from "react";
import { connect } from "react-redux";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

function AlertAddedNote({ alertNoteState }) {
  if (!alertNoteState) {
    return null;
  }
  return (
    <div
      className="alert alert-info d-flex justify-content-between"
      role="alert"
    >
      <h5>The note has been added successfully</h5>

      <DoneOutlineIcon />
    </div>
  );
}

const setStateToProps = (state) => {
  return {
    alertNoteState: state.alertNote.visible,
  };
};
export default connect(setStateToProps, null)(AlertAddedNote);
