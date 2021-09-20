import React, { useState } from "react";
import { createList, showAlert } from "../redux/actions";
import { connect } from "react-redux";

function Form({ createList, showAlert }) {
  const [item, setItem] = useState("");

  function handleItem(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function submitNote(event) {
    event.preventDefault();
    if (!item.trim()) {
      return showAlert("Please, write something!");
    }
    createList(item);
    setItem("");
  }
  return (
    <form onSubmit={submitNote}>
      <div className=" mb-3 ">
        <label className="form-label">Write your comment here</label>
        <div className="d-flex">
          <input
            onChange={handleItem}
            value={item}
            type="text"
            className="form-control w-75"
            id="text"
          />
          <button className="btn btn-secondary ms-2">Add comment</button>
        </div>
      </div>
    </form>
  );
}

const setDispatchToProps = {
  createList,
  showAlert,
};

export default connect(null, setDispatchToProps)(Form);
