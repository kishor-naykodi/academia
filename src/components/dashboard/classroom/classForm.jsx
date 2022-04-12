import React from "react";
import Joi from "joi-browser";
import Form from "../../common/form";
import * as classService from "../../../services/classService";

class ClassForm extends Form {
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
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="container create_class">
        <form onSubmit={this.handleSubmit}>
          <div className="create_class-body">
            {this.renderInput("classname", "Enter classname")}
            {this.renderInput("section", "Enter section")}
            {this.renderInput("subject", "Enter subject name")}

            {this.renderButton("Create Class")}
          </div>
        </form>
      </div>
    );
  }
}

export default ClassForm;
