import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../redux/actions";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Note({ text, id, deleteNote }) {
  return (
    <div className="card mystyle mt-3 ">
      <div className="card-body d-flex justify-content-between">
        <div className="w-75">
          <strong>{id + 1}</strong>
          &nbsp;
          {text}
        </div>
        <button
          onClick={() => {
            deleteNote(id);
          }}
          className="btn btn-outline-danger align-self-center"
        >
          <DeleteForeverIcon />
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  deleteNote,
};

export default connect(null, mapDispatchToProps)(Note);
