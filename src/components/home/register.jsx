import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import * as userService from "./../../services/userService";
import auth from "../../services/authService";
import { Link, Navigate } from "react-router-dom";
class Register extends Form {
  state = {
    data: { email: "", password: "", username: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    username: Joi.string().required().label("Username"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Navigate to="/" />;

    return (
      <div className="session-authentication">
        <div id="login" className="auth-form">
          <div className="auth-form-header">
            <h1>Sign up to Academia</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="auth-form-body">
              {this.renderInput("email", "Enter your email")}
              {this.renderInput("password", "Create a password", "password")}
              {this.renderInput("username", "Enter a username")}

              {this.renderButton("Sign Up")}
            </div>
          </form>

          <p className="login-callout">
            Already have an account?{" "}
            <Link to="/login" className="register-link">
              Sign in.
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Register;
