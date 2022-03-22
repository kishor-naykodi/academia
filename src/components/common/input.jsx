import React from "react";

const Input = ({ name, error, ...rest }) => {
  return (
    <div className="wrap-input">
      <input {...rest} name={name} className="form-input" placeholder={name} />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
