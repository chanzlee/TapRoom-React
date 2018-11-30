import React from "react";

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

export default Input;
