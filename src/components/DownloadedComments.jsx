import React from "react";
import { connect } from "react-redux";
import { deleteDownloadedComment } from "../redux/actions";
import BackspaceIcon from "@mui/icons-material/Backspace";

function DownloadedComments({ text, id, deleteDownloadedComment }) {
  return (
    <div className="card mystyle mt-3">
      <div className="card-body d-flex justify-content-between">
        <div>
          <strong>{id + 1}</strong>
          &nbsp;
          {text.body}
        </div>
        <button
          onClick={() => {
            deleteDownloadedComment(id);
          }}
          className="btn btn-outline-danger align-self-center"
        >
          <BackspaceIcon />
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  deleteDownloadedComment,
};

export default connect(null, mapDispatchToProps)(DownloadedComments);
