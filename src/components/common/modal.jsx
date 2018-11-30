import React from "react";
import PropTypes from "prop-types";

const Modal = props => {
  const showHideClassName = props.show
    ? "modal custom-fade d-block"
    : "modal d-none";

  return (
    <div>
      <style jsx>
        {`
          .custom-fade {
            background: rgba(0, 0, 0, 0.45);
          }
        `}
      </style>
      <div className={showHideClassName} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
            </div>
            <div className="modal-body">{props.modalTarget}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={props.handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  modalTarget: PropTypes.element,
  handleClose: PropTypes.func.isRequired
};

export default Modal;
