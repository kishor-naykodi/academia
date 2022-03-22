import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
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

export default Login;
