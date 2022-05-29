import React, { useState } from "react";
import {
  MdOutlineAssignment,
  MdArrowDropDown,
  MdOutlineFileUpload,
} from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import axios from "axios";
import { getCurrentUser } from "../../../../services/authService";

function AssignWork({ _class }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("");

  const handleChange = ({ currentTarget: input }, e) => {
    if (input.name === "title") {
      setTitle(input.value);
    } else if (input.name === "description") {
      setDescription(input.value);
    } else if (input.name === "points") {
      setPoints(input.value);
    } else if (input.name === "dueDate") {
      setDueDate(input.value);
    }
  };

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  const doSubmit = async () => {
    try {
      const data = new FormData();

      data.append("assignment_file", file);
      data.append("username", getCurrentUser().username);
      data.append("user_id", getCurrentUser()._id);
      data.append("classroom_id", _class._id);
      data.append("title", title);
      data.append("description", description);
      data.append("due_date", dueDate);
      data.append("points", points);

      console.log(_class);
      await axios.post(
        `http://localhost:3001/api/classroom/createAssignment/${_class._id}`,
        data
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        alert("You have entered wrong input");
      }
    }
  };

  return (
    <div className="assign-work">
      <div className="assign-work__main">
        <div className="assign-work__title">
          <MdOutlineAssignment className="assign-work__icon" />
          <textarea
            className="textarea-modify"
            name="title"
            rows="1"
            value={title}
            onChange={handleChange}
            placeholder="Title"
          ></textarea>
        </div>
        <div className="assign-work__description">
          <BiMenuAltLeft className="assign-work__icon" />
          <textarea
            className="textarea-modify"
            name="description"
            id=""
            rows="7"
            value={description}
            onChange={handleChange}
            placeholder="Description (optional)"
          ></textarea>
        </div>
        <div className="assign-work__title">
          <MdOutlineFileUpload className="assign-work__icon" />
          <input
            className="textarea-modify upload-file"
            type="file"
            name="file"
            onChange={saveFile}
          />
        </div>

        <div className="btn-container">
          <button
            className="btn btn-primary create-work__btn"
            onClick={doSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="assign-work__right">
        <div>
          <p className="tLDEHd-Wvd9Cc">For</p>
          <div className="form-info">
            <div className="YioO4d">
              <input
                className="input-block inp-outline"
                type="text"
                readOnly={true}
                value={_class.classname}
              />
              <MdArrowDropDown />
            </div>
            <div className="YioO4d">
              <input
                className="input-block inp-outline"
                type="text"
                readOnly={true}
                value="All Students"
              />
              <MdArrowDropDown />
            </div>
          </div>
        </div>
        <div>
          <p className="tLDEHd-Wvd9Cc">Points</p>
          <div className="form-info">
            <div className="YioO4d">
              <input
                className="input-block inp-outline"
                type="number"
                name="points"
                onChange={handleChange}
                value={points}
              />
              <MdArrowDropDown />
            </div>
          </div>
        </div>
        <div>
          <p className="tLDEHd-Wvd9Cc">Due</p>
          <div className="form-info">
            <div className="YioO4d UQuaGc">
              <input
                className="input-block inp-outline"
                type="date"
                name="dueDate"
                onChange={handleChange}
                value={dueDate}
              />
              <MdArrowDropDown />
            </div>
          </div>
        </div>
        <div>
          <p className="tLDEHd-Wvd9Cc">Topic</p>
          <div className="form-info">
            <div className="YioO4d UQuaGc">
              <input
                className="input-block inp-outline"
                type="text"
                value="No topic"
                readOnly={true}
              />
              <MdArrowDropDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignWork;
