import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "./../../services/authService";
import { Link, Navigate } from "react-router-dom";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
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
            <h1>Sign in to Academia</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="auth-form-body">
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Sign In")}
            </div>
          </form>

          <div className="login-callout">
            <div>
              New to Academia?{" "}
              <Link className="register-link" to="/register">
                Create an account.
              </Link>
            </div>
            <div>
              <Link to="/login" className="register-link">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
