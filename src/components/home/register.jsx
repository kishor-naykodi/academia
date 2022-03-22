import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="block-login">
        <div className="login-container">
          <div className="aside-pic">
            <img src="images/img-01.webp" alt="IMG" />
          </div>
          <form onSubmit={this.handleSubmit} className="login-form">
            <h3 className="legend">Student Login</h3>
            {this.renderInput("name")}
            {this.renderInput("username")}
            {this.renderInput("password")}
            {this.renderButton("Login")}
            {this.renderLinks("/register")}
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
