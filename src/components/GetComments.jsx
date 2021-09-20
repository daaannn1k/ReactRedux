import React from "react";
import { connect } from "react-redux";
import DownloadedComments from "./DownloadedComments";
import { getComments } from "../redux/actions";
import Loader from "./Loader";

function GetComments({ getComments, commentsArray, loading }) {
  return (
    <div>
      <div className="mb-2">Download another comments</div>
      <button
        onClick={() => {
          getComments();
        }}
        className="btn btn-outline-secondary"
      >
        Download
      </button>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            {commentsArray.map((item, index) => {
              return <DownloadedComments text={item} key={index} id={index} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = {
  getComments,
};

const setStateToProps = (state) => {
  return {
    commentsArray: state.getcomments.commentsList,
    loading: state.loader.visible,
  };
};

export default connect(setStateToProps, mapDispatchToProps)(GetComments);
