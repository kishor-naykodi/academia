import React from "react";
import Joi from "joi-browser";
import Form from "../../common/form";
import Header from "../profile/header";
import ClassNav from "./classNav";
import Sidenav from "../profile/sidenav";
import * as classService from "../../../services/classService";

class CreateClass extends Form {
  state = {
    data: {
      classname: "",
      section: "",
      subject: "",
    },
    errors: {},
  };

  schema = {
    classname: Joi.string().required().min(1).max(255).label("Class name"),
    section: Joi.string().min(1).max(255).label("Class section"),
    subject: Joi.string().min(1).max(255).label("Subject"),
  };

  doSubmit = async () => {
    try {
      await classService.createClass(this.state.data);
      window.location = "/classroom";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        let errors = { ...this.state.errors };
        errors.classname = ex.response.data;
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
              <form id="create-class" onSubmit={this.handleSubmit}>
                <div className="create_class-body">
                  {this.renderInput("classname", "Enter classname")}
                  {this.renderInput("section", "Enter section")}
                  {this.renderInput("subject", "Enter subject name")}
                  {this.renderButton("Create Class")}
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

export default CreateClass;
