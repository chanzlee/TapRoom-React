import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id="id"
        name="id"
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default Input;
