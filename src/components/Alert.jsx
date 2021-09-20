import React from "react";
import { connect } from "react-redux";
import { hideAlert } from "../redux/actions";

function Alert({ alertText, alertVisible, hideAlert }) {
  if (!alertVisible) {
    return null;
  }

  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Welcome, my friend! </strong>
      {alertText}
      <button
        onClick={() => {
          hideAlert();
        }}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

const mapDispatchToProps = {
  hideAlert,
};
const mapStateToProps = (state) => {
  return {
    alertText: state.alert.warningText,
    alertVisible: state.alert.visible,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
