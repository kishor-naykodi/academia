import React from "react";
import Joi from "joi-browser";
import Form from "../../../common/form";
import * as classService from "../../../../services/classService";

class CreateClass extends Form {
  state = {
    data: {
      email: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().min(1).max(255).label("email"),
  };

  doSubmit = async () => {
    const { classroom, people } = this.props;
    const { email } = this.state.data;
    try {
      if (people === "teacher") {
        await classService.addTeacher(classroom._id, email);
        window.location = `/classroom/people/${classroom.code}`;
      } else if (people === "student") {
        await classService.addStudent(classroom._id, email);
        window.location = `/classroom/people/${classroom.code}`;
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        let errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  handleDisplay() {}

  render() {
    return (
      <React.Fragment>
        <div className="form-display" onClick={this.handleDisplay}>
          <form id="add-people" onSubmit={this.handleSubmit}>
            <div className="add-people">
              {this.renderInput("email", "Enter email")}
              {this.renderButton("Add")}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateClass;
