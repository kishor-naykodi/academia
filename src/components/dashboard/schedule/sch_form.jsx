import React from "react";
import Joi from "joi-browser";
import Form from "../../common/form";
import { createSchedule } from "../../../services/instituteService";

class SchForm extends Form {
  state = {
    data: {
      classname: "",
      subject: "",
      teacher: "",
      start_time: "",
      day: "",
      class_link: "",
    },
    errors: {},
  };

  schema = {
    classname: Joi.string().required().min(1).max(255).label("classname"),
    subject: Joi.string().required().min(1).max(255).label("subject"),
    teacher: Joi.string().required().min(1).max(255).label("teacher"),
    start_time: Joi.string()
      .regex(/^([0-9]{2}):([0-9]{2})$/)
      .label("start_time"),
    day: Joi.string().required().min(1).max(255).label("day"),
    class_link: Joi.string().required().min(1).max(255).label("class_link"),
  };

  doSubmit = async () => {
    try {
      await createSchedule(this.state.data);
      window.location("/schedule");
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
      <div className="schedule-form">
        <div className="center-form">
          <form id="add-subject" onSubmit={this.handleSubmit}>
            <div className="add-people">
              {this.renderInput("classname", "Enter classname")}
              {this.renderInput("subject", "Enter subject")}
              {this.renderInput("teacher", "Enter teacher's name")}
              {this.renderInput("start_time", "Enter class start time", "time")}
              {this.renderInput("day", "Enter class day")}
              {this.renderInput("class_link", "Enter class link")}
              {this.renderButton("Submit")}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SchForm;
