import React from "react";
import Note from "./Note";
import { connect } from "react-redux";

function NoteList({ listArray }) {
  return (
    <div>
      {!listArray.length ? (
        <p>No comments yet...</p>
      ) : (
        <div>
          {listArray.map((item, index) => {
            return <Note text={item} key={index} id={index} />;
          })}
        </div>
      )}
    </div>
  );
}

const setStateToProps = (state) => {
  return { listArray: state.notes.list };
};
export default connect(setStateToProps, null)(NoteList);
