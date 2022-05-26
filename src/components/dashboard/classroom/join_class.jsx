import React from "react";
import Joi from "joi-browser";
import Form from "../../common/form";
import * as classService from "../../../services/classService";
import Header from "../profile/header";
import ClassNav from "./classNav";
import Sidenav from "../profile/sidenav";

class JoinClass extends Form {
  state = {
    data: {
      classcode: "",
    },
    errors: {},
  };

  schema = {
    classcode: Joi.string().required().min(5).max(11).label("Class code"),
  };

  doSubmit = async () => {
    try {
      await classService.joinClass(this.state.data);
      window.location = "/classroom";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.classcode = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="grid-container">
          <Header />
          <div>
            <ClassNav />
            <div className="container create_class">
              <form id="join-class" onSubmit={this.handleSubmit}>
                <div className="create_class-body">
                  {this.renderInput("classcode", "Enter classcode")}
                  {this.renderButton("Join Class")}
                </div>
              </form>
            </div>
          </div>
        </div>
        <Sidenav />
      </React.Fragment>
    );
  }
}

export default JoinClass;
