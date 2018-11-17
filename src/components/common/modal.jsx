import React from "react";
// import PropTypes from "prop-types";

const Modal = props => {
  const showHideClassName = props.show ? "modal d-block" : "modal d-none";

  return (
    // <div className={showHideClassName}>
    //   <section className="modal-main">
    //     {props.children}
    //     <button onClick={props.handleClose}>close</button>
    //   </section>

    // </div>

    <div className={showHideClassName} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
          </div>
          <div className="modal-body">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
            {props.children}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.handleClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
