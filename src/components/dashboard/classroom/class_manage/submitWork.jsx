import React, { useState } from "react";
import Sidenav from "../../profile/sidenav";
import ClassNav from "../classNav";
import { useLocation } from "react-router-dom";
import { MdOutlineAssignment } from "react-icons/md";
import { getCurrentUser } from "../../../../services/authService";
import axios from "axios";

export default function SubmitWork() {
  const assignment = useLocation().state;
  const [file, setFile] = useState();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  const doSubmit = async () => {
    try {
      const data = new FormData();

      const date = new Date();
      let today = date.toISOString();

      data.append("submission_file", file);
      data.append("username", getCurrentUser().username);
      data.append("user_id", getCurrentUser()._id);
      data.append("classroom_id", assignment.classroom_id);
      data.append("title", assignment.title);
      data.append("date", today);

      const result = await axios.post(
        `http://localhost:3001/api/classroom//submitSubmission/${assignment._id}`,
        data
      );
      if (result.status === 200) {
        alert("Assignment submitted successfully.");
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        alert("You have entered wrong input");
      }
    }
  };

  return (
    <React.Fragment>
      <ClassNav />
      <main style={{ margin: "7rem" }}>
        <div className="fJ1Vac">
          <div className="P47N4e">
            <MdOutlineAssignment className="m1PbN" />
          </div>
          <div className="EE538">
            <div>
              <h1 className="B7SYid">{assignment.title}</h1>
            </div>
            <div className="rec5Nb">
              <span>{assignment.username}</span>
              <b style={{ margin: "1rem" }}>.</b>
              <span>{assignment.due_date.substr(0, 10)}</span>
            </div>
            <div className="rec5Nb">
              <span style={{ fontWeight: "bold" }}>
                {assignment.points} points
              </span>
            </div>
            <div className="hr-ruler skin-blue" />
            <h1 style={{ color: "black" }}>Image</h1>
            <div className="hr-ruler skin-blue" />
            <div className="rec5Nb">class comments</div>
            <div className="rec5Nb">Add a class comment</div>
          </div>
          <aside className="BiaLW">
            <div className="GWZ7yf">
              <div className="Dy8Cxc">
                <span className="z3vRcc">Your work</span>
                <span className="asQXV">Assigned</span>
              </div>
              <div>
                <input type="file" name="file" onChange={saveFile} />
              </div>
              <div>
                <button className="btn btn-primary" onClick={doSubmit}>
                  submit
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Sidenav />
    </React.Fragment>
  );
}
