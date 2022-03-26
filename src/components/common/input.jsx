import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control input-block js-login-field"
      ></input>

      {error && (
        <div className="flash flash-full flash-error ">
          <div className="px-2">{error}</div>
        </div>
      )}
    </div>
  );
};

export default Input;
