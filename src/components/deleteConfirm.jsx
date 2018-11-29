import React from "react";
import PropTypes from "prop-types";

const DeleteConfirm = props => {
  return (
    <div className="text-center mb-3">
      <h5>Confirm to continue delete "{props.name}"</h5>
      <div className="d-flex justify-content-center mt-3">
        <button onClick={props.onDelete} className="btn-danger btn">
          Confirm Delete
        </button>
        <button onClick={props.handleClose} className="btn-secondary btn ml-3">
          Cancel
        </button>
      </div>
    </div>
  );
};

DeleteConfirm.propTypes = {
  name: PropTypes.string,
  onDelete: PropTypes.func,
  handleClose: PropTypes.func
};

export default DeleteConfirm;
